import { LoadingSpinner, Spacer, ErrorState, Flex, EmptyState, Heading, TextArea, Link, Text } from '@hubspot/ui-extensions';
import { hubspot } from '@hubspot/ui-extensions';
import { useCrmProperties, useAssociations } from '@hubspot/ui-extensions/crm';

hubspot.extend<'crm.record.tab'>(({ context }) => (
  <Extension context={context} />
));

const Extension = ({ context }) => {

  let { properties: contactProperties, isLoading: contactsLoading, error: contactsError } = useCrmProperties([
    'firstname',
    'lastname',
    'email',
    'hs_object_id',
  ]);

  // if (contactsLoading) return <LoadingSpinner label="Loading..." />;
  if (contactsError) return <ErrorState title="Error"><Text>{contactsError.message}</Text></ErrorState>;


  const { results: clinicResults, isLoading: clinicsLoading, error: clinicsError } = useAssociations({
    toObjectType: '2-60073609',
    pageLength: 100,
    properties: [
      'hs_object_id',
      'r_clinic_id',
      'name',
      'hubspot_owner_id',
    ],
  });
  if (clinicsLoading) return <LoadingSpinner label="Loading messages..." />;
  if (clinicsError) return <ErrorState title="Error"><Text>{clinicsError.message}</Text></ErrorState>;
  const clinics = (clinicResults?.map(r => r.properties) ?? []);

  const appCardDocsLink =
    'https://developers.hubspot.com/docs/apps/developer-platform/add-features/ui-extensibility/app-cards/overview';

  return (
    <>
    <Heading>{contactProperties.firstname} {contactProperties.lastname} ({contactProperties.email})</Heading>
    <Spacer size="medium"/>
    <Flex>
      {clinics.map(c => {
        return (
          <TextArea cols={50} rows={3} label="" name=""
            value={"Clinic Name: " + (c.name ?? "") + "\nr_clinic_id: " + (c.r_clinic_id ?? "")}
          />
        )
      })}
    </Flex>
      <Text>
        Add a layer of UI customization to your app by including app cards
        that can display data, allow users to perform actions, and more. Check
        out the <Link href={appCardDocsLink}>app card documentation</Link> for
        more info.
      </Text>
    </>
  );
};
