import pyperclip

# operators: https://developers.hubspot.com/docs/cms/hubl/operators-and-expression-tests
# HS https://developers.hubspot.com/docs/api-reference/latest/crm/search-the-crm
# associations: https://developers.hubspot.com/docs/api/crm/associations#:~:text=279-,Contact%20to%20company,-1
# 0-279 associations:  'https://app.hubspot.com/contacts/39410384/objects/0-1/views/all/list?filters=[{"operator":"EQ","value":19470788657,"property":"associations.0-279"}]'
# property is known:   'https://app.hubspot.com/contacts/39410384/objects/0-1/views/all/list?filters=[{"operator":"HAS_PROPERTY","property":"riipen_user_id"}]'
# property is unknown: 'https://app.hubspot.com/contacts/39410384/objects/0-1/views/all/list?filters=[{"operator":"NOT_HAS_PROPERTY","property":"riipen_user_id"}]'
# string property EQ:  'https://app.hubspot.com/contacts/39410384/objects/0-1/views/all/list?filters=[{"operator":"EQ","value":"eLkxkBxV","property":"riipen_user_id"}]'
# list property IN:    'https://app.hubspot.com/contacts/39410384/objects/0-1/views/all/list?filters=[{"operator":"IN","property":"ap__engagement_source","values":["AE SDR"]}]'
# list property NOT IN:    'https://app.hubspot.com/contacts/39410384/objects/0-1/views/all/list?filters=[{"operator":"NOT_IN","property":"ap__engagement_source","values":["AE SDR"]}]'
# date property GT:    'https://app.hubspot.com/contacts/39410384/objects/0-1/views/all/list?filters=[{"operator":"GT","value":1719217352000,"property":"createdate"}]'
# sequence property EQ:    'https://app.hubspot.com/contacts/39410384/objects/0-1/views/all/list?filters=[{"operator":"EQ","value":103828652,"property":"hs_latest_sequence_enrolled"}]'
# contact import:      'https://app.hubspot.com/contacts/39410384/objects/0-1/views/all/list/?filters=[{"operator":"IN","property":"_inbounddbio.importid_","values":[51665613]}]'
# property is known:   'https://app.hubspot.com/contacts/39410384/objects/0-1/views/all/list?filters=[{"operator":"HAS_PROPERTY","property":"riipen_user_id"}]'
# how to do multiple groups?

# pasting for templates & workflows
# {{contact.hubspot_owner_id}}
# {{contact.hubspot_owner_id.firstname}}
# {{contact.hubspot_owner_id.fullname}}
# {{company.hubspot_owner_id.email}}
# https://app.hubspot.com/contacts/hub_id/record/0-1/record_id

link = 'https://app-na2.hubspot.com/contacts/4185119/objects/0-3/views/all/list?filters=%5B%7B%22operator%22%3A%22IN%22%2C%22property%22%3A%22hubspot_owner_id%22%2C%22values%22%3A%5B%2281141069%22%5D%7D%2C%7B%22operator%22%3A%22IN%22%2C%22property%22%3A%22dealstage%22%2C%22values%22%3A%5B%22193894055%22%2C%22decisionmakerboughtin%22%2C%22183907198%22%2C%22contractsent%22%2C%22193894056%22%2C%2216d4f095-7328-461e-a5f8-b182e376224c%22%2C%2252778542%22%2C%22183907199%22%5D%7D%2C%7B%22operator%22%3A%22EQ%22%2C%22value%22%3A%22default%22%2C%22property%22%3A%22pipeline%22%7D%5D'

# https://www.w3schools.com/tags/ref_urlencode.ASP
link_proper = link.replace('https:','')
link_proper = link_proper.replace(' ','%20')
link_proper = link_proper.replace('"','%22')
link_proper = link_proper.replace(',','%2C')
link_proper = link_proper.replace(':','%3A')
link_proper = link_proper.replace('@','%40')
link_proper = link_proper.replace('[','%5B')
link_proper = link_proper.replace(']','%5D')
link_proper = link_proper.replace('{','%7B')
link_proper = link_proper.replace('}','%7D')
link_proper = link_proper.replace(':','%3A')
# link_proper = link_proper.replace('%','%25')
# link_proper = link_proper.replace('/','%2F')


link_readable = link.replace('https:','')
link_readable = link_readable.replace('%25','%')
link_readable = link_readable.replace('%20',' ')
link_readable = link_readable.replace('%22','"')
link_readable = link_readable.replace('%2C',',')
link_readable = link_readable.replace('%3A',':')
link_readable = link_readable.replace('%40','@')
link_readable = link_readable.replace('%5B','[')
link_readable = link_readable.replace('%5D',']')
link_readable = link_readable.replace('%7B','{')
link_readable = link_readable.replace('%7D','}')

print(f"https:{link_readable}\n")
print(f"https:{link_proper}\n")
pyperclip.copy(f"https:{link_proper}")
print('proper (2nd) link copied to clipboard')

