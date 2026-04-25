(function(React2, react) {
  "use strict";
  const isRunningInWorker = () => typeof self !== "undefined" && self.__HUBSPOT_EXTENSION_WORKER__ === true;
  const fakeWorkerGlobals = {
    logger: {
      debug: (data) => {
        console.log(data);
      },
      info: (data) => {
        console.info(data);
      },
      warn: (data) => {
        console.warn(data);
      },
      error: (data) => {
        console.error(data);
      }
    },
    extend_V2: () => {
    },
    // @ts-expect-error we are not using the worker endpoint in tests env.
    __useExtensionContext: () => {
    }
  };
  const getWorkerGlobals = () => {
    return isRunningInWorker() ? self : fakeWorkerGlobals;
  };
  const extend_V2 = getWorkerGlobals().extend_V2;
  function serverless(name, options) {
    return self.serverless(name, options);
  }
  function fetch(url2, options) {
    return self.hsFetch(url2, options);
  }
  const hubspot = {
    extend: extend_V2,
    serverless,
    fetch
  };
  var ServerlessExecutionStatus;
  (function(ServerlessExecutionStatus2) {
    ServerlessExecutionStatus2["Success"] = "SUCCESS";
    ServerlessExecutionStatus2["Error"] = "ERROR";
  })(ServerlessExecutionStatus || (ServerlessExecutionStatus = {}));
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_development = {};
  var hasRequiredReactJsxRuntime_development;
  function requireReactJsxRuntime_development() {
    if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
    hasRequiredReactJsxRuntime_development = 1;
    /**
     * @license React
     * react-jsx-runtime.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    {
      (function() {
        var React$1 = React2;
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self2) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self2) ;
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self2, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self2
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self2) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self2);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        var didWarnAboutKeySpread = {};
        function jsxWithValidation(type, props, key, isStaticChildren, source, self2) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum();
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self2);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            {
              if (hasOwnProperty.call(props, "key")) {
                var componentName = getComponentNameFromType(type);
                var keys = Object.keys(props).filter(function(k) {
                  return k !== "key";
                });
                var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
                if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                  var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                  error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                  didWarnAboutKeySpread[componentName + beforeExample] = true;
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
        reactJsxRuntime_development.jsx = jsx;
        reactJsxRuntime_development.jsxs = jsxs;
      })();
    }
    return reactJsxRuntime_development;
  }
  var hasRequiredJsxRuntime;
  function requireJsxRuntime() {
    if (hasRequiredJsxRuntime) return jsxRuntime.exports;
    hasRequiredJsxRuntime = 1;
    {
      jsxRuntime.exports = requireReactJsxRuntime_development();
    }
    return jsxRuntime.exports;
  }
  var jsxRuntimeExports = requireJsxRuntime();
  const createRemoteComponentRegistry = () => {
    const componentMetadataLookup = /* @__PURE__ */ new Map();
    const componentNameByComponentMap = /* @__PURE__ */ new Map();
    const registerComponent = (component, componentName, fragmentProps) => {
      componentNameByComponentMap.set(component, componentName);
      componentMetadataLookup.set(componentName, {
        fragmentPropsSet: new Set(fragmentProps),
        fragmentPropsArray: fragmentProps
      });
      return component;
    };
    return {
      getComponentName: (component) => {
        const componentName = componentNameByComponentMap.get(component);
        if (!componentName) {
          return null;
        }
        return componentName;
      },
      isAllowedComponentName: (componentName) => {
        return componentMetadataLookup.has(componentName);
      },
      isComponentFragmentProp: (componentName, propName) => {
        const componentMetadata = componentMetadataLookup.get(componentName);
        if (!componentMetadata) {
          return false;
        }
        return componentMetadata.fragmentPropsSet.has(propName);
      },
      getComponentFragmentPropNames: (componentName) => {
        const componentMetadata = componentMetadataLookup.get(componentName);
        if (!componentMetadata) {
          return [];
        }
        const { fragmentPropsArray } = componentMetadata;
        return fragmentPropsArray;
      },
      createAndRegisterRemoteReactComponent: (componentName, options = {}) => {
        const { fragmentProps = [] } = options;
        const remoteReactComponent = react.createRemoteReactComponent(componentName, {
          fragmentProps
        });
        return registerComponent(remoteReactComponent, componentName, fragmentProps);
      },
      createAndRegisterRemoteCompoundReactComponent: (componentName, options) => {
        const { fragmentProps = [] } = options;
        const RemoteComponentType = react.createRemoteReactComponent(componentName, {
          fragmentProps
        });
        const CompoundFunctionComponentType = typeof RemoteComponentType === "function" ? RemoteComponentType : (props) => jsxRuntimeExports.jsx(RemoteComponentType, { ...props });
        Object.assign(CompoundFunctionComponentType, options.compoundComponentProperties);
        return registerComponent(CompoundFunctionComponentType, componentName, fragmentProps);
      }
    };
  };
  const __hubSpotComponentRegistry = createRemoteComponentRegistry();
  const { createAndRegisterRemoteReactComponent, createAndRegisterRemoteCompoundReactComponent } = __hubSpotComponentRegistry;
  createAndRegisterRemoteReactComponent("Alert");
  const Button = createAndRegisterRemoteReactComponent("Button", {
    fragmentProps: ["overlay"]
  });
  createAndRegisterRemoteReactComponent("ButtonRow");
  createAndRegisterRemoteReactComponent("Card");
  createAndRegisterRemoteReactComponent("DescriptionList");
  createAndRegisterRemoteReactComponent("DescriptionListItem");
  createAndRegisterRemoteReactComponent("Divider");
  const Spacer = createAndRegisterRemoteReactComponent("Spacer");
  createAndRegisterRemoteReactComponent("EmptyState");
  const ErrorState = createAndRegisterRemoteReactComponent("ErrorState");
  createAndRegisterRemoteReactComponent("Form");
  const Heading = createAndRegisterRemoteReactComponent("Heading");
  createAndRegisterRemoteReactComponent("Image", {
    fragmentProps: ["overlay"]
  });
  createAndRegisterRemoteReactComponent("Input");
  createAndRegisterRemoteReactComponent("Link", {
    fragmentProps: ["overlay"]
  });
  const TextArea = createAndRegisterRemoteReactComponent("TextArea");
  createAndRegisterRemoteReactComponent("Textarea");
  const LoadingSpinner = createAndRegisterRemoteReactComponent("LoadingSpinner");
  createAndRegisterRemoteReactComponent("ProgressBar");
  createAndRegisterRemoteReactComponent("Select");
  createAndRegisterRemoteReactComponent("Tag", {
    fragmentProps: ["overlay"]
  });
  const Text = createAndRegisterRemoteReactComponent("Text");
  const Tile = createAndRegisterRemoteReactComponent("Tile");
  createAndRegisterRemoteReactComponent("Stack");
  createAndRegisterRemoteReactComponent("ToggleGroup");
  createAndRegisterRemoteReactComponent("StatisticsItem");
  createAndRegisterRemoteReactComponent("Statistics");
  createAndRegisterRemoteReactComponent("StatisticsTrend");
  createAndRegisterRemoteReactComponent("Table");
  createAndRegisterRemoteReactComponent("TableFooter");
  createAndRegisterRemoteReactComponent("TableCell");
  createAndRegisterRemoteReactComponent("TableRow");
  createAndRegisterRemoteReactComponent("TableBody");
  createAndRegisterRemoteReactComponent("TableHeader");
  createAndRegisterRemoteReactComponent("TableHead");
  createAndRegisterRemoteReactComponent("NumberInput");
  createAndRegisterRemoteReactComponent("Box");
  createAndRegisterRemoteReactComponent("StepIndicator");
  createAndRegisterRemoteReactComponent("Accordion");
  createAndRegisterRemoteReactComponent("MultiSelect");
  const Flex = createAndRegisterRemoteReactComponent("Flex");
  createAndRegisterRemoteReactComponent("DateInput");
  createAndRegisterRemoteReactComponent("Checkbox");
  createAndRegisterRemoteReactComponent("RadioButton");
  createAndRegisterRemoteReactComponent("List");
  createAndRegisterRemoteReactComponent("Toggle");
  createAndRegisterRemoteCompoundReactComponent("Dropdown", {
    compoundComponentProperties: {
      /**
       * The `Dropdown.ButtonItem` component represents a single option within a `Dropdown` menu. Use this component as a child of the `Dropdown` component.
       *
       * **Links:**
       *
       * - {@link https://developers.hubspot.com/docs/reference/ui-components/standard-components/dropdown Docs}
       */
      ButtonItem: createAndRegisterRemoteReactComponent("DropdownButtonItem", {
        fragmentProps: ["overlay"]
      })
    }
  });
  createAndRegisterRemoteReactComponent("Panel");
  createAndRegisterRemoteReactComponent("PanelFooter");
  createAndRegisterRemoteReactComponent("PanelBody");
  createAndRegisterRemoteReactComponent("PanelSection");
  createAndRegisterRemoteReactComponent("StepperInput");
  createAndRegisterRemoteReactComponent("Modal");
  createAndRegisterRemoteReactComponent("ModalBody");
  createAndRegisterRemoteReactComponent("ModalFooter");
  createAndRegisterRemoteReactComponent("Icon");
  createAndRegisterRemoteReactComponent("StatusTag");
  createAndRegisterRemoteReactComponent("LoadingButton", {
    fragmentProps: ["overlay"]
  });
  createAndRegisterRemoteReactComponent("BarChart");
  createAndRegisterRemoteReactComponent("LineChart");
  createAndRegisterRemoteReactComponent("ScoreCircle");
  createAndRegisterRemoteReactComponent("Tabs");
  createAndRegisterRemoteReactComponent("Tab");
  createAndRegisterRemoteReactComponent("Illustration");
  createAndRegisterRemoteReactComponent("Tooltip");
  createAndRegisterRemoteReactComponent("SearchInput");
  createAndRegisterRemoteReactComponent("TimeInput");
  createAndRegisterRemoteReactComponent("CurrencyInput");
  const Inline = createAndRegisterRemoteReactComponent("Inline");
  createAndRegisterRemoteReactComponent("AutoGrid");
  createAndRegisterRemoteReactComponent("CrmPropertyList");
  createAndRegisterRemoteReactComponent("CrmAssociationTable");
  createAndRegisterRemoteReactComponent("CrmDataHighlight");
  createAndRegisterRemoteReactComponent("CrmReport");
  createAndRegisterRemoteReactComponent("CrmAssociationPivot");
  createAndRegisterRemoteReactComponent("CrmAssociationPropertyList");
  createAndRegisterRemoteReactComponent("CrmAssociationStageTracker");
  createAndRegisterRemoteReactComponent("CrmSimpleDeadline");
  createAndRegisterRemoteReactComponent("CrmStageTracker");
  createAndRegisterRemoteReactComponent("CrmStatistics");
  createAndRegisterRemoteReactComponent("CrmActionButton");
  createAndRegisterRemoteReactComponent("CrmActionLink");
  createAndRegisterRemoteReactComponent("CrmCardActions");
  createAndRegisterRemoteReactComponent("HeaderActions");
  createAndRegisterRemoteReactComponent("PrimaryHeaderActionButton", {
    fragmentProps: ["overlay"]
  });
  createAndRegisterRemoteReactComponent("SecondaryHeaderActionButton", {
    fragmentProps: ["overlay"]
  });
  createAndRegisterRemoteCompoundReactComponent("PageHeader", {
    compoundComponentProperties: {
      PrimaryAction: createAndRegisterRemoteReactComponent("PageHeaderPrimaryAction"),
      SecondaryActions: createAndRegisterRemoteReactComponent("PageHeaderSecondaryActions"),
      Link: createAndRegisterRemoteReactComponent("PageHeaderLink"),
      PageLink: createAndRegisterRemoteReactComponent("PageHeaderPageLink")
    }
  });
  createAndRegisterRemoteCompoundReactComponent("PageBreadcrumbs", {
    compoundComponentProperties: {
      PageLink: createAndRegisterRemoteReactComponent("PageBreadcrumbsPageLink"),
      Current: createAndRegisterRemoteReactComponent("PageBreadcrumbsCurrent")
    }
  });
  createAndRegisterRemoteReactComponent("PageLink");
  createAndRegisterRemoteReactComponent("PageTitle");
  createAndRegisterRemoteReactComponent("Iframe");
  createAndRegisterRemoteReactComponent("MediaObject", {
    fragmentProps: ["itemRight", "itemLeft"]
  });
  createAndRegisterRemoteReactComponent("Stack2");
  createAndRegisterRemoteReactComponent("Center");
  createAndRegisterRemoteReactComponent("Grid");
  createAndRegisterRemoteReactComponent("GridItem");
  createAndRegisterRemoteReactComponent("SettingsView");
  createAndRegisterRemoteReactComponent("ExpandableText");
  createAndRegisterRemoteReactComponent("Popover");
  createAndRegisterRemoteReactComponent("FileInput");
  const ReactRenderMocksContext = React2.createContext(null);
  const createMockAwareHook = (hookName, originalHookFunction) => {
    const useWrapper = (...args) => {
      const mocksContext = useMocksContext();
      if (!mocksContext) {
        return originalHookFunction(...args);
      }
      const { mocks } = mocksContext;
      const mockHook = mocks[hookName];
      if (!mockHook) {
        throw new Error(`Illegal State: Mock for hook ${hookName} not found.`);
      }
      return mockHook(...args);
    };
    return useWrapper;
  };
  function useMocksContext() {
    return React2.useContext(ReactRenderMocksContext);
  }
  ReactRenderMocksContext.Provider;
  function useStableValue(value) {
    const stableRef = React2.useRef({
      key: JSON.stringify(value),
      value
    });
    const key = JSON.stringify(value);
    if (key !== stableRef.current.key) {
      stableRef.current = { key, value };
    }
    return stableRef.current.value;
  }
  function normalizeError(err, defaultMessage) {
    return err instanceof Error ? err : new Error(defaultMessage);
  }
  function useFetchLifecycle({ fetchFn, callbacks, deps, defaultErrorMessage = "An error occurred" }) {
    const fetchFnRef = React2.useRef(fetchFn);
    fetchFnRef.current = fetchFn;
    const callbacksRef = React2.useRef(callbacks);
    callbacksRef.current = callbacks;
    const defaultErrorMessageRef = React2.useRef(defaultErrorMessage);
    defaultErrorMessageRef.current = defaultErrorMessage;
    const refetchAbortRef = React2.useRef(null);
    const refetchCleanupRef = React2.useRef(null);
    React2.useEffect(() => {
      let cancelled = false;
      let cleanup = null;
      const signal = { cancelled: false, isRefetch: false };
      const fetchData = async () => {
        const context = { isRefetch: false };
        try {
          callbacksRef.current.onStart(context);
          const result = await fetchFnRef.current(signal);
          if (!cancelled) {
            callbacksRef.current.onSuccess(result.data, context);
            cleanup = result.cleanup ?? null;
          }
        } catch (err) {
          if (!cancelled) {
            callbacksRef.current.onError(normalizeError(err, defaultErrorMessageRef.current), context);
          }
        }
      };
      fetchData();
      return () => {
        cancelled = true;
        signal.cancelled = true;
        if (cleanup) {
          cleanup();
        }
        if (refetchCleanupRef.current) {
          refetchCleanupRef.current();
          refetchCleanupRef.current = null;
        }
      };
    }, deps);
    const refetch = React2.useCallback(async () => {
      if (refetchAbortRef.current) {
        refetchAbortRef.current.cancelled = true;
      }
      if (refetchCleanupRef.current) {
        refetchCleanupRef.current();
        refetchCleanupRef.current = null;
      }
      const abortSignal = { cancelled: false, isRefetch: true };
      refetchAbortRef.current = abortSignal;
      const context = { isRefetch: true };
      try {
        callbacksRef.current.onStart(context);
        const result = await fetchFnRef.current(abortSignal);
        if (!abortSignal.cancelled) {
          callbacksRef.current.onSuccess(result.data, context);
          refetchCleanupRef.current = result.cleanup ?? null;
        } else {
          if (result.cleanup) {
            result.cleanup();
          }
        }
      } catch (err) {
        if (!abortSignal.cancelled) {
          callbacksRef.current.onError(normalizeError(err, defaultErrorMessageRef.current), context);
        }
      } finally {
        if (refetchAbortRef.current === abortSignal) {
          refetchAbortRef.current = null;
        }
      }
    }, []);
    return { refetch };
  }
  function isCrmPropertiesResponse(data) {
    if (
      // Confirm the data is a defined object
      data === null || typeof data !== "object" || // Confirm all keys and values are strings, or null
      !Object.keys(data).every((key) => typeof key === "string" && (typeof data[key] === "string" || data[key] === null))
    ) {
      return false;
    }
    return true;
  }
  const fetchCrmProperties = async (propertyNames, propertiesUpdatedCallback, options) => {
    let response;
    let result;
    try {
      response = await self.fetchCrmProperties(propertyNames, propertiesUpdatedCallback, options);
      result = await response.json();
    } catch (error) {
      throw error instanceof Error ? error : new Error("Failed to fetch CRM properties: Unknown error");
    }
    if (result.error) {
      throw new Error(result.error);
    }
    if (!response.ok) {
      throw new Error(`Failed to fetch CRM properties: ${response.statusText}`);
    }
    if (!isCrmPropertiesResponse(result.data)) {
      throw new Error("Invalid response format");
    }
    return result;
  };
  const initialState = {
    properties: {},
    error: null,
    isLoading: true,
    isRefetching: false
  };
  function crmPropertiesReducer(state, action) {
    switch (action.type) {
      case "FETCH_START":
        return {
          ...state,
          isLoading: true,
          error: null
        };
      case "FETCH_SUCCESS":
        return {
          ...state,
          isLoading: false,
          properties: action.payload,
          error: null
        };
      case "FETCH_ERROR":
        return {
          ...state,
          isLoading: false,
          error: action.payload,
          properties: {}
        };
      case "REFETCH_START":
        return {
          ...state,
          isRefetching: true,
          error: null
        };
      case "REFETCH_SUCCESS":
        return {
          ...state,
          isRefetching: false,
          properties: action.payload,
          error: null
        };
      case "REFETCH_ERROR":
        return {
          ...state,
          isRefetching: false,
          error: action.payload
        };
      default:
        return state;
    }
  }
  const DEFAULT_OPTIONS$1 = {};
  function useCrmPropertiesInternal(propertyNames, options = DEFAULT_OPTIONS$1) {
    const [state, dispatch] = React2.useReducer(crmPropertiesReducer, initialState);
    const sortedPropertyNames = React2.useMemo(() => Array.isArray(propertyNames) ? [...propertyNames].sort() : propertyNames, [propertyNames]);
    const stablePropertyNames = useStableValue(sortedPropertyNames);
    const stableOptions = useStableValue(options);
    const { refetch } = useFetchLifecycle({
      fetchFn: (signal) => fetchCrmProperties(stablePropertyNames, (data) => {
        if (!signal.cancelled) {
          dispatch({
            type: signal.isRefetch ? "REFETCH_SUCCESS" : "FETCH_SUCCESS",
            payload: data
          });
        }
      }, stableOptions),
      callbacks: {
        onStart: ({ isRefetch }) => dispatch({ type: isRefetch ? "REFETCH_START" : "FETCH_START" }),
        onSuccess: (data, { isRefetch }) => dispatch({
          type: isRefetch ? "REFETCH_SUCCESS" : "FETCH_SUCCESS",
          payload: data
        }),
        onError: (error, { isRefetch }) => dispatch({
          type: isRefetch ? "REFETCH_ERROR" : "FETCH_ERROR",
          payload: error
        })
      },
      deps: [stablePropertyNames, stableOptions],
      defaultErrorMessage: "Failed to fetch CRM properties"
    });
    return {
      ...state,
      refetch
    };
  }
  const useCrmProperties = createMockAwareHook("useCrmProperties", useCrmPropertiesInternal);
  const DEFAULT_PAGE_SIZE = 10;
  function calculatePaginationFlags(currentPage, hasMore) {
    return {
      hasNextPage: hasMore,
      hasPreviousPage: currentPage > 1
    };
  }
  function isAssociationsResponse(data) {
    if (data === null || typeof data !== "object" || !Array.isArray(data.results) || typeof data.hasMore !== "boolean" || typeof data.nextOffset !== "number") {
      return false;
    }
    return data.results.every((result) => result !== null && typeof result === "object" && typeof result.toObjectId === "number" && Array.isArray(result.associationTypes) && result.properties !== null && typeof result.properties === "object");
  }
  const fetchAssociations = async (request, options) => {
    let response;
    let result;
    try {
      response = await self.fetchAssociations(request, options);
      result = await response.json();
    } catch (error) {
      throw error instanceof Error ? error : new Error("Failed to fetch associations: Unknown error");
    }
    if (result.error) {
      throw new Error(result.error);
    }
    if (!response.ok) {
      throw new Error(`Failed to fetch associations: ${response.statusText}`);
    }
    if (!isAssociationsResponse(result.data)) {
      throw new Error("Invalid response format");
    }
    return {
      data: result.data,
      cleanup: result.cleanup || (() => {
      })
    };
  };
  function createInitialState(pageSize) {
    return {
      results: [],
      error: null,
      isLoading: true,
      isRefetching: false,
      currentPage: 1,
      pageSize,
      hasMore: false,
      currentOffset: void 0,
      nextOffset: void 0,
      offsetHistory: []
    };
  }
  function associationsReducer(state, action) {
    switch (action.type) {
      case "FETCH_START":
        return {
          ...state,
          isLoading: true,
          error: null
        };
      case "FETCH_SUCCESS":
        return {
          ...state,
          isLoading: false,
          results: action.payload.results,
          hasMore: action.payload.hasMore,
          currentOffset: action.payload.currentOffset,
          nextOffset: action.payload.nextOffset,
          error: null
        };
      case "FETCH_ERROR":
        return {
          ...state,
          isLoading: false,
          error: action.payload,
          results: [],
          hasMore: false,
          currentOffset: void 0,
          nextOffset: void 0
        };
      case "NEXT_PAGE":
        return {
          ...state,
          currentPage: state.currentPage + 1,
          offsetHistory: state.currentOffset !== void 0 ? [...state.offsetHistory, state.currentOffset] : state.offsetHistory,
          currentOffset: state.nextOffset,
          nextOffset: void 0
        };
      case "PREVIOUS_PAGE": {
        const newPage = Math.max(1, state.currentPage - 1);
        const newHistory = [...state.offsetHistory];
        const previousOffset = newHistory.pop();
        return {
          ...state,
          currentPage: newPage,
          offsetHistory: newHistory,
          currentOffset: previousOffset,
          nextOffset: void 0
        };
      }
      case "RESET":
        return {
          ...state,
          currentPage: 1,
          results: [],
          hasMore: false,
          error: null,
          currentOffset: void 0,
          nextOffset: void 0,
          offsetHistory: []
        };
      case "REFETCH_START":
        return {
          ...state,
          isRefetching: true,
          error: null
        };
      case "REFETCH_SUCCESS":
        return {
          ...state,
          isRefetching: false,
          results: action.payload.results,
          hasMore: action.payload.hasMore,
          nextOffset: action.payload.nextOffset,
          error: null
        };
      case "REFETCH_ERROR":
        return {
          ...state,
          isRefetching: false,
          error: action.payload
        };
      default:
        return state;
    }
  }
  const DEFAULT_OPTIONS = {};
  function useAssociationsInternal(config, options = DEFAULT_OPTIONS) {
    const pageSize = (config == null ? void 0 : config.pageLength) ?? DEFAULT_PAGE_SIZE;
    const [state, dispatch] = React2.useReducer(associationsReducer, React2.useMemo(() => createInitialState(pageSize), [pageSize]));
    const stableConfig = useStableValue(config);
    const stableOptions = useStableValue(options);
    const nextPage = React2.useCallback(() => {
      const paginationFlags2 = calculatePaginationFlags(state.currentPage, state.hasMore);
      if (paginationFlags2.hasNextPage) {
        dispatch({ type: "NEXT_PAGE" });
      }
    }, [state.currentPage, state.hasMore]);
    const previousPage = React2.useCallback(() => {
      const paginationFlags2 = calculatePaginationFlags(state.currentPage, state.hasMore);
      if (paginationFlags2.hasPreviousPage) {
        dispatch({ type: "PREVIOUS_PAGE" });
      }
    }, [state.currentPage, state.hasMore]);
    const reset = React2.useCallback(() => {
      const paginationFlags2 = calculatePaginationFlags(state.currentPage, state.hasMore);
      if (paginationFlags2.hasPreviousPage) {
        dispatch({ type: "RESET" });
      }
    }, [state.currentPage, state.hasMore]);
    const { refetch } = useFetchLifecycle({
      fetchFn: () => {
        const request = {
          toObjectType: stableConfig == null ? void 0 : stableConfig.toObjectType,
          properties: stableConfig == null ? void 0 : stableConfig.properties,
          pageLength: pageSize,
          offset: state.currentOffset
        };
        return fetchAssociations(request, {
          propertiesToFormat: stableOptions.propertiesToFormat,
          formattingOptions: stableOptions.formattingOptions
        });
      },
      callbacks: {
        onStart: ({ isRefetch }) => dispatch({ type: isRefetch ? "REFETCH_START" : "FETCH_START" }),
        onSuccess: (data, { isRefetch }) => dispatch(isRefetch ? {
          type: "REFETCH_SUCCESS",
          payload: {
            results: data.results,
            hasMore: data.hasMore,
            nextOffset: data.nextOffset
          }
        } : {
          type: "FETCH_SUCCESS",
          payload: {
            results: data.results,
            hasMore: data.hasMore,
            nextOffset: data.nextOffset,
            currentOffset: state.currentOffset
          }
        }),
        onError: (error, { isRefetch }) => dispatch({
          type: isRefetch ? "REFETCH_ERROR" : "FETCH_ERROR",
          payload: error
        })
      },
      deps: [
        stableConfig,
        stableOptions,
        state.currentPage,
        state.currentOffset,
        pageSize
      ],
      defaultErrorMessage: "Failed to fetch associations"
    });
    const paginationFlags = calculatePaginationFlags(state.currentPage, state.hasMore);
    return {
      results: state.results,
      error: state.error,
      isLoading: state.isLoading,
      isRefetching: state.isRefetching,
      refetch,
      pagination: {
        hasNextPage: paginationFlags.hasNextPage,
        hasPreviousPage: paginationFlags.hasPreviousPage,
        currentPage: state.currentPage,
        pageSize: state.pageSize,
        nextPage,
        previousPage,
        reset
      }
    };
  }
  const useAssociations = createMockAwareHook("useAssociations", useAssociationsInternal);
  hubspot.extend(({ context }) => /* @__PURE__ */ React2.createElement(Extension, { context }));
  const url = "https://34.130.96.44.nip.io/webhook";
  const Extension = ({ context }) => {
    const [responseJson, setResponseJson] = React2.useState("");
    const { properties: contact, isLoading: contactsLoading, error: contactsError } = useCrmProperties([
      "firstname",
      "lastname",
      "email",
      "hs_object_id"
    ]);
    const { results: dealResults, isLoading: dealsLoading, error: dealsError } = useAssociations({
      toObjectType: "0-3",
      pageLength: 100,
      properties: [
        "hs_object_id",
        "dealname",
        "hubspot_owner_id"
      ]
    });
    if (contactsLoading) return /* @__PURE__ */ React2.createElement(LoadingSpinner, { label: "Loading..." });
    if (contactsError) return /* @__PURE__ */ React2.createElement(ErrorState, { title: "Error" }, /* @__PURE__ */ React2.createElement(Text, null, contactsError.message));
    if (dealsLoading) return /* @__PURE__ */ React2.createElement(LoadingSpinner, { label: "Loading messages..." });
    if (dealsError) return /* @__PURE__ */ React2.createElement(ErrorState, { title: "Error" }, /* @__PURE__ */ React2.createElement(Text, null, dealsError.message));
    const deals = (dealResults == null ? void 0 : dealResults.map((r) => r.properties)) ?? [];
    async function buttonClick(contact2, deals2, setResponseJson2) {
      console.log("Button clicked!");
      setResponseJson2("Loading...");
      try {
        const response = await hubspot.fetch(url, {
          timeout: 2e3,
          method: "POST",
          body: { contact: contact2, deals: deals2 }
        });
        console.log("Server response:", response.status);
        const data = await response.json();
        console.log(data);
        setResponseJson2(JSON.stringify(data, null, 2));
      } catch (err) {
        console.error("Something went wrong", err);
        setResponseJson2(`Error: ${err instanceof Error ? err.message : String(err)}`);
      }
    }
    return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(Heading, null, "Hi ", context.user.firstName, "!"), /* @__PURE__ */ React2.createElement(Spacer, { size: "extra-small" }), /* @__PURE__ */ React2.createElement(Text, null, "This is a template app card.  It's just an example of some things you can do with an app card.  This app card can run 100% for free on a free HubSpot account."), /* @__PURE__ */ React2.createElement(Text, null, "The button below sends a POST request to ", url, ", and sends the contact and associated deal data."), /* @__PURE__ */ React2.createElement(Tile, null, /* @__PURE__ */ React2.createElement(Inline, { gap: "extra-small" }, /* @__PURE__ */ React2.createElement(Text, { format: { fontWeight: "bold" } }, "Contact:"), /* @__PURE__ */ React2.createElement(Text, null, contact.firstname, " ", contact.lastname, " (", contact.email, ")")), /* @__PURE__ */ React2.createElement(Spacer, { size: "medium" }), /* @__PURE__ */ React2.createElement(Flex, { direction: "column" }, /* @__PURE__ */ React2.createElement(Text, { format: { fontWeight: "bold" } }, "Deals:"), deals.map((d) => {
      const hs_deal_id = d.hs_object_id ?? "";
      const hs_deal_name = d.dealname ?? "";
      return /* @__PURE__ */ React2.createElement(Text, null, hs_deal_name, " (", hs_deal_id, ")");
    }))), /* @__PURE__ */ React2.createElement(Tile, null, /* @__PURE__ */ React2.createElement(Flex, { justify: "center" }, /* @__PURE__ */ React2.createElement(Button, { onClick: () => buttonClick(contact, deals, setResponseJson) }, "Click Me")), /* @__PURE__ */ React2.createElement(
      TextArea,
      {
        label: "Response",
        name: "response",
        value: responseJson,
        resize: "vertical",
        rows: 10
      }
    )));
  };
})(React, RemoteUI);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZXMiOlsiLi4vY2FyZHMvbm9kZV9tb2R1bGVzL0BodWJzcG90L3VpLWV4dGVuc2lvbnMvZGlzdC9pbnRlcm5hbC9nbG9iYWwtdXRpbHMuanMiLCIuLi9jYXJkcy9ub2RlX21vZHVsZXMvQGh1YnNwb3QvdWktZXh0ZW5zaW9ucy9kaXN0L2h1YnNwb3QuanMiLCIuLi9jYXJkcy9ub2RlX21vZHVsZXMvQGh1YnNwb3QvdWktZXh0ZW5zaW9ucy9kaXN0L3NoYXJlZC90eXBlcy9odHRwLXJlcXVlc3RzLmpzIiwiLi4vY2FyZHMvbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC1qc3gtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIi4uL2NhcmRzL25vZGVfbW9kdWxlcy9yZWFjdC9qc3gtcnVudGltZS5qcyIsIi4uL2NhcmRzL25vZGVfbW9kdWxlcy9AaHVic3BvdC91aS1leHRlbnNpb25zL2Rpc3Qvc2hhcmVkL3V0aWxzL3JlbW90ZS1jb21wb25lbnQtcmVnaXN0cnkuanMiLCIuLi9jYXJkcy9ub2RlX21vZHVsZXMvQGh1YnNwb3QvdWktZXh0ZW5zaW9ucy9kaXN0L3NoYXJlZC9yZW1vdGVDb21wb25lbnRzLmpzIiwiLi4vY2FyZHMvbm9kZV9tb2R1bGVzL0BodWJzcG90L3VpLWV4dGVuc2lvbnMvZGlzdC9pbnRlcm5hbC9ob29rLXV0aWxzLmpzIiwiLi4vY2FyZHMvbm9kZV9tb2R1bGVzL0BodWJzcG90L3VpLWV4dGVuc2lvbnMvZGlzdC9ob29rcy91dGlscy91c2VGZXRjaExpZmVjeWNsZS5qcyIsIi4uL2NhcmRzL25vZGVfbW9kdWxlcy9AaHVic3BvdC91aS1leHRlbnNpb25zL2Rpc3QvY3JtL3V0aWxzL2ZldGNoQ3JtUHJvcGVydGllcy5qcyIsIi4uL2NhcmRzL25vZGVfbW9kdWxlcy9AaHVic3BvdC91aS1leHRlbnNpb25zL2Rpc3QvY3JtL2hvb2tzL3VzZUNybVByb3BlcnRpZXMuanMiLCIuLi9jYXJkcy9ub2RlX21vZHVsZXMvQGh1YnNwb3QvdWktZXh0ZW5zaW9ucy9kaXN0L3V0aWxzL3BhZ2luYXRpb24uanMiLCIuLi9jYXJkcy9ub2RlX21vZHVsZXMvQGh1YnNwb3QvdWktZXh0ZW5zaW9ucy9kaXN0L2NybS91dGlscy9mZXRjaEFzc29jaWF0aW9ucy5qcyIsIi4uL2NhcmRzL25vZGVfbW9kdWxlcy9AaHVic3BvdC91aS1leHRlbnNpb25zL2Rpc3QvY3JtL2hvb2tzL3VzZUFzc29jaWF0aW9ucy5qcyIsIi4uL2NhcmRzL2NhcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50IGVudmlyb25tZW50IGlzIGEgSHViU3BvdCBleHRlbnNpb24gd29ya2VyLlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgY3VycmVudCBlbnZpcm9ubWVudCBpcyBhIEh1YlNwb3QgZXh0ZW5zaW9uIHdvcmtlci5cbiAqL1xuY29uc3QgaXNSdW5uaW5nSW5Xb3JrZXIgPSAoKSA9PiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBzZWxmLl9fSFVCU1BPVF9FWFRFTlNJT05fV09SS0VSX18gPT09IHRydWU7XG4vKipcbiAqIEEgZmFrZSB3b3JrZXIgZ2xvYmFscyBvYmplY3QgZm9yIHVzZSBpbiB0ZXN0IGVudmlyb25tZW50cy5cbiAqL1xuY29uc3QgZmFrZVdvcmtlckdsb2JhbHMgPSB7XG4gICAgbG9nZ2VyOiB7XG4gICAgICAgIGRlYnVnOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIGluZm86IChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIHdhcm46IChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihkYXRhKTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGV4dGVuZF9WMjogKCkgPT4ge1xuICAgICAgICAvLyBOby1vcCBpbiB0ZXN0IGVudmlyb25tZW50XG4gICAgfSxcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHdlIGFyZSBub3QgdXNpbmcgdGhlIHdvcmtlciBlbmRwb2ludCBpbiB0ZXN0cyBlbnYuXG4gICAgX191c2VFeHRlbnNpb25Db250ZXh0OiAoKSA9PiB7XG4gICAgICAgIC8vIE5vLW9wIGluIHRlc3QgZW52aXJvbm1lbnRcbiAgICB9LFxufTtcbi8qKlxuICogR2V0cyB0aGUgd29ya2VyIGdsb2JhbHMgb2JqZWN0IGZvciB0aGUgY3VycmVudCBlbnZpcm9ubWVudC5cbiAqIEByZXR1cm5zIFRoZSB3b3JrZXIgZ2xvYmFscyBvYmplY3QuXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRXb3JrZXJHbG9iYWxzID0gKCkgPT4ge1xuICAgIHJldHVybiBpc1J1bm5pbmdJbldvcmtlcigpXG4gICAgICAgID8gc2VsZlxuICAgICAgICA6IGZha2VXb3JrZXJHbG9iYWxzO1xufTtcbiIsImltcG9ydCB7IGdldFdvcmtlckdsb2JhbHMgfSBmcm9tIFwiLi9pbnRlcm5hbC9nbG9iYWwtdXRpbHMuanNcIjtcbmNvbnN0IGV4dGVuZF9WMiA9IGdldFdvcmtlckdsb2JhbHMoKS5leHRlbmRfVjI7XG5leHBvcnQgZnVuY3Rpb24gc2VydmVybGVzcyhuYW1lLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHNlbGYuc2VydmVybGVzcyhuYW1lLCBvcHRpb25zKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaCh1cmwsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gc2VsZi5oc0ZldGNoKHVybCwgb3B0aW9ucyk7XG59XG5leHBvcnQgY29uc3QgaHVic3BvdCA9IHtcbiAgICBleHRlbmQ6IGV4dGVuZF9WMixcbiAgICBzZXJ2ZXJsZXNzLFxuICAgIGZldGNoLFxufTtcbiIsIi8qKlxuICogQGNhdGVnb3J5IFNlcnZlcmxlc3NcbiAqL1xuZXhwb3J0IHZhciBTZXJ2ZXJsZXNzRXhlY3V0aW9uU3RhdHVzO1xuKGZ1bmN0aW9uIChTZXJ2ZXJsZXNzRXhlY3V0aW9uU3RhdHVzKSB7XG4gICAgU2VydmVybGVzc0V4ZWN1dGlvblN0YXR1c1tcIlN1Y2Nlc3NcIl0gPSBcIlNVQ0NFU1NcIjtcbiAgICBTZXJ2ZXJsZXNzRXhlY3V0aW9uU3RhdHVzW1wiRXJyb3JcIl0gPSBcIkVSUk9SXCI7XG59KShTZXJ2ZXJsZXNzRXhlY3V0aW9uU3RhdHVzIHx8IChTZXJ2ZXJsZXNzRXhlY3V0aW9uU3RhdHVzID0ge30pKTtcbiIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LWpzeC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50Jyk7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKTtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKTtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0Jyk7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKTtcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5Jyk7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG5cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGl0ZW0pO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cbnZhciBlbmFibGVDYWNoZUVsZW1lbnQgPSBmYWxzZTtcbnZhciBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyA9IGZhbHNlOyAvLyBObyBrbm93biBidWdzLCBidXQgbmVlZHMgcGVyZm9ybWFuY2UgdGVzdGluZ1xuXG52YXIgZW5hYmxlTGVnYWN5SGlkZGVuID0gZmFsc2U7IC8vIEVuYWJsZXMgdW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2sgZmVhdHVyZSBpbiBGaWJlclxuLy8gc3R1ZmYuIEludGVuZGVkIHRvIGVuYWJsZSBSZWFjdCBjb3JlIG1lbWJlcnMgdG8gbW9yZSBlYXNpbHkgZGVidWcgc2NoZWR1bGluZ1xuLy8gaXNzdWVzIGluIERFViBidWlsZHMuXG5cbnZhciBlbmFibGVEZWJ1Z1RyYWNpbmcgPSBmYWxzZTsgLy8gVHJhY2sgd2hpY2ggRmliZXIocykgc2NoZWR1bGUgcmVuZGVyIHdvcmsuXG5cbnZhciBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFO1xuXG57XG4gIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgPSBTeW1ib2wuZm9yKCdyZWFjdC5tb2R1bGUucmVmZXJlbmNlJyk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCBlbmFibGVEZWJ1Z1RyYWNpbmcgIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgZW5hYmxlTGVnYWN5SGlkZGVuICB8fCB0eXBlID09PSBSRUFDVF9PRkZTQ1JFRU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSAgfHwgZW5hYmxlQ2FjaGVFbGVtZW50ICB8fCBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gVGhpcyBuZWVkcyB0byBpbmNsdWRlIGFsbCBwb3NzaWJsZSBtb2R1bGUgcmVmZXJlbmNlIG9iamVjdFxuICAgIC8vIHR5cGVzIHN1cHBvcnRlZCBieSBhbnkgRmxpZ2h0IGNvbmZpZ3VyYXRpb24gYW55d2hlcmUgc2luY2VcbiAgICAvLyB3ZSBkb24ndCBrbm93IHdoaWNoIEZsaWdodCBidWlsZCB0aGlzIHdpbGwgZW5kIHVwIGJlaW5nIHVzZWRcbiAgICAvLyB3aXRoLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgfHwgdHlwZS5nZXRNb2R1bGVJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZGlzcGxheU5hbWUgPSBvdXRlclR5cGUuZGlzcGxheU5hbWU7XG5cbiAgaWYgKGRpc3BsYXlOYW1lKSB7XG4gICAgcmV0dXJuIGRpc3BsYXlOYW1lO1xuICB9XG5cbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZTtcbn0gLy8gS2VlcCBpbiBzeW5jIHdpdGggcmVhY3QtcmVjb25jaWxlci9nZXRDb21wb25lbnROYW1lRnJvbUZpYmVyXG5cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59IC8vIE5vdGUgdGhhdCB0aGUgcmVjb25jaWxlciBwYWNrYWdlIHNob3VsZCBnZW5lcmFsbHkgcHJlZmVyIHRvIHVzZSBnZXRDb21wb25lbnROYW1lRnJvbUZpYmVyKCkgaW5zdGVhZC5cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuXG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgdmFyIG91dGVyTmFtZSA9IHR5cGUuZGlzcGxheU5hbWUgfHwgbnVsbDtcblxuICAgICAgICBpZiAob3V0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG91dGVyTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnTWVtbyc7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWZhbGx0aHJvdWdoXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCAhZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7IC8vIElmIG91ciBjb21wb25lbnQgZnJhbWUgaXMgbGFiZWxlZCBcIjxhbm9ueW1vdXM+XCJcbiAgICAgICAgICAgICAgICAvLyBidXQgd2UgaGF2ZSBhIHVzZXItcHJvdmlkZWQgXCJkaXNwbGF5TmFtZVwiXG4gICAgICAgICAgICAgICAgLy8gc3BsaWNlIGl0IGluIHRvIG1ha2UgdGhlIHN0YWNrIG1vcmUgcmVhZGFibGUuXG5cblxuICAgICAgICAgICAgICAgIGlmIChmbi5kaXNwbGF5TmFtZSAmJiBfZnJhbWUuaW5jbHVkZXMoJzxhbm9ueW1vdXM+JykpIHtcbiAgICAgICAgICAgICAgICAgIF9mcmFtZSA9IF9mcmFtZS5yZXBsYWNlKCc8YW5vbnltb3VzPicsIGZuLmRpc3BsYXlOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChoYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3Byb2QtZXJyb3ItY29kZXNcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgaXNBcnJheUltcGwgPSBBcnJheS5pc0FycmF5OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cbmZ1bmN0aW9uIGlzQXJyYXkoYSkge1xuICByZXR1cm4gaXNBcnJheUltcGwoYSk7XG59XG5cbi8qXG4gKiBUaGUgYCcnICsgdmFsdWVgIHBhdHRlcm4gKHVzZWQgaW4gaW4gcGVyZi1zZW5zaXRpdmUgY29kZSkgdGhyb3dzIGZvciBTeW1ib2xcbiAqIGFuZCBUZW1wb3JhbC4qIHR5cGVzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3B1bGwvMjIwNjQuXG4gKlxuICogVGhlIGZ1bmN0aW9ucyBpbiB0aGlzIG1vZHVsZSB3aWxsIHRocm93IGFuIGVhc2llci10by11bmRlcnN0YW5kLFxuICogZWFzaWVyLXRvLWRlYnVnIGV4Y2VwdGlvbiB3aXRoIGEgY2xlYXIgZXJyb3JzIG1lc3NhZ2UgbWVzc2FnZSBleHBsYWluaW5nIHRoZVxuICogcHJvYmxlbS4gKEluc3RlYWQgb2YgYSBjb25mdXNpbmcgZXhjZXB0aW9uIHRocm93biBpbnNpZGUgdGhlIGltcGxlbWVudGF0aW9uXG4gKiBvZiB0aGUgYHZhbHVlYCBvYmplY3QpLlxuICovXG4vLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuZnVuY3Rpb24gdHlwZU5hbWUodmFsdWUpIHtcbiAge1xuICAgIC8vIHRvU3RyaW5nVGFnIGlzIG5lZWRlZCBmb3IgbmFtZXNwYWNlZCB0eXBlcyBsaWtlIFRlbXBvcmFsLkluc3RhbnRcbiAgICB2YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC50b1N0cmluZ1RhZztcbiAgICB2YXIgdHlwZSA9IGhhc1RvU3RyaW5nVGFnICYmIHZhbHVlW1N5bWJvbC50b1N0cmluZ1RhZ10gfHwgdmFsdWUuY29uc3RydWN0b3IubmFtZSB8fCAnT2JqZWN0JztcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufSAvLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuXG5cbmZ1bmN0aW9uIHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSB7XG4gIHtcbiAgICB0cnkge1xuICAgICAgdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIC8vIElmIHlvdSBlbmRlZCB1cCBoZXJlIGJ5IGZvbGxvd2luZyBhbiBleGNlcHRpb24gY2FsbCBzdGFjaywgaGVyZSdzIHdoYXQnc1xuICAvLyBoYXBwZW5lZDogeW91IHN1cHBsaWVkIGFuIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gUmVhY3QgKGFzIGEgcHJvcCwga2V5LFxuICAvLyBET00gYXR0cmlidXRlLCBDU1MgcHJvcGVydHksIHN0cmluZyByZWYsIGV0Yy4pIGFuZCB3aGVuIFJlYWN0IHRyaWVkIHRvXG4gIC8vIGNvZXJjZSBpdCB0byBhIHN0cmluZyB1c2luZyBgJycgKyB2YWx1ZWAsIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duLlxuICAvL1xuICAvLyBUaGUgbW9zdCBjb21tb24gdHlwZXMgdGhhdCB3aWxsIGNhdXNlIHRoaXMgZXhjZXB0aW9uIGFyZSBgU3ltYm9sYCBpbnN0YW5jZXNcbiAgLy8gYW5kIFRlbXBvcmFsIG9iamVjdHMgbGlrZSBgVGVtcG9yYWwuSW5zdGFudGAuIEJ1dCBhbnkgb2JqZWN0IHRoYXQgaGFzIGFcbiAgLy8gYHZhbHVlT2ZgIG9yIGBbU3ltYm9sLnRvUHJpbWl0aXZlXWAgbWV0aG9kIHRoYXQgdGhyb3dzIHdpbGwgYWxzbyBjYXVzZSB0aGlzXG4gIC8vIGV4Y2VwdGlvbi4gKExpYnJhcnkgYXV0aG9ycyBkbyB0aGlzIHRvIHByZXZlbnQgdXNlcnMgZnJvbSB1c2luZyBidWlsdC1pblxuICAvLyBudW1lcmljIG9wZXJhdG9ycyBsaWtlIGArYCBvciBjb21wYXJpc29uIG9wZXJhdG9ycyBsaWtlIGA+PWAgYmVjYXVzZSBjdXN0b21cbiAgLy8gbWV0aG9kcyBhcmUgbmVlZGVkIHRvIHBlcmZvcm0gYWNjdXJhdGUgYXJpdGhtZXRpYyBvciBjb21wYXJpc29uLilcbiAgLy9cbiAgLy8gVG8gZml4IHRoZSBwcm9ibGVtLCBjb2VyY2UgdGhpcyBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nIGJlZm9yZVxuICAvLyBwYXNzaW5nIGl0IHRvIFJlYWN0LiBUaGUgbW9zdCByZWxpYWJsZSB3YXkgaXMgdXN1YWxseSBgU3RyaW5nKHZhbHVlKWAuXG4gIC8vXG4gIC8vIFRvIGZpbmQgd2hpY2ggdmFsdWUgaXMgdGhyb3dpbmcsIGNoZWNrIHRoZSBicm93c2VyIG9yIGRlYnVnZ2VyIGNvbnNvbGUuXG4gIC8vIEJlZm9yZSB0aGlzIGV4Y2VwdGlvbiB3YXMgdGhyb3duLCB0aGVyZSBzaG91bGQgYmUgYGNvbnNvbGUuZXJyb3JgIG91dHB1dFxuICAvLyB0aGF0IHNob3dzIHRoZSB0eXBlIChTeW1ib2wsIFRlbXBvcmFsLlBsYWluRGF0ZSwgZXRjLikgdGhhdCBjYXVzZWQgdGhlXG4gIC8vIHByb2JsZW0gYW5kIGhvdyB0aGF0IHR5cGUgd2FzIHVzZWQ6IGtleSwgYXRycmlidXRlLCBpbnB1dCB2YWx1ZSBwcm9wLCBldGMuXG4gIC8vIEluIG1vc3QgY2FzZXMsIHRoaXMgY29uc29sZSBvdXRwdXQgYWxzbyBzaG93cyB0aGUgY29tcG9uZW50IGFuZCBpdHNcbiAgLy8gYW5jZXN0b3IgY29tcG9uZW50cyB3aGVyZSB0aGUgZXhjZXB0aW9uIGhhcHBlbmVkLlxuICAvL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgcmV0dXJuICcnICsgdmFsdWU7XG59XG5mdW5jdGlvbiBjaGVja0tleVN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIHtcbiAgICBpZiAod2lsbENvZXJjaW9uVGhyb3codmFsdWUpKSB7XG4gICAgICBlcnJvcignVGhlIHByb3ZpZGVkIGtleSBpcyBhbiB1bnN1cHBvcnRlZCB0eXBlICVzLicgKyAnIFRoaXMgdmFsdWUgbXVzdCBiZSBjb2VyY2VkIHRvIGEgc3RyaW5nIGJlZm9yZSBiZWZvcmUgdXNpbmcgaXQgaGVyZS4nLCB0eXBlTmFtZSh2YWx1ZSkpO1xuXG4gICAgICByZXR1cm4gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTsgLy8gdGhyb3cgKHRvIGhlbHAgY2FsbGVycyBmaW5kIHRyb3VibGVzaG9vdGluZyBjb21tZW50cylcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKG1heWJlS2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNvbmZpZy5rZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAge1xuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGRpZFdhcm5BYm91dEtleVNwcmVhZCA9IHt9O1xuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCAna2V5JykpIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvcHMpLmZpbHRlcihmdW5jdGlvbiAoaykge1xuICAgICAgICAgIHJldHVybiBrICE9PSAna2V5JztcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBiZWZvcmVFeGFtcGxlID0ga2V5cy5sZW5ndGggPiAwID8gJ3trZXk6IHNvbWVLZXksICcgKyBrZXlzLmpvaW4oJzogLi4uLCAnKSArICc6IC4uLn0nIDogJ3trZXk6IHNvbWVLZXl9JztcblxuICAgICAgICBpZiAoIWRpZFdhcm5BYm91dEtleVNwcmVhZFtjb21wb25lbnROYW1lICsgYmVmb3JlRXhhbXBsZV0pIHtcbiAgICAgICAgICB2YXIgYWZ0ZXJFeGFtcGxlID0ga2V5cy5sZW5ndGggPiAwID8gJ3snICsga2V5cy5qb2luKCc6IC4uLiwgJykgKyAnOiAuLi59JyA6ICd7fSc7XG5cbiAgICAgICAgICBlcnJvcignQSBwcm9wcyBvYmplY3QgY29udGFpbmluZyBhIFwia2V5XCIgcHJvcCBpcyBiZWluZyBzcHJlYWQgaW50byBKU1g6XFxuJyArICcgIGxldCBwcm9wcyA9ICVzO1xcbicgKyAnICA8JXMgey4uLnByb3BzfSAvPlxcbicgKyAnUmVhY3Qga2V5cyBtdXN0IGJlIHBhc3NlZCBkaXJlY3RseSB0byBKU1ggd2l0aG91dCB1c2luZyBzcHJlYWQ6XFxuJyArICcgIGxldCBwcm9wcyA9ICVzO1xcbicgKyAnICA8JXMga2V5PXtzb21lS2V5fSB7Li4ucHJvcHN9IC8+JywgYmVmb3JlRXhhbXBsZSwgY29tcG9uZW50TmFtZSwgYWZ0ZXJFeGFtcGxlLCBjb21wb25lbnROYW1lKTtcblxuICAgICAgICAgIGRpZFdhcm5BYm91dEtleVNwcmVhZFtjb21wb25lbnROYW1lICsgYmVmb3JlRXhhbXBsZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG4vLyBldmVuIHdpdGggdGhlIHByb2QgdHJhbnNmb3JtLiBUaGlzIG1lYW5zIHRoYXQganN4REVWIGlzIHB1cmVseVxuLy8gb3B0LWluIGJlaGF2aW9yIGZvciBiZXR0ZXIgbWVzc2FnZXMgYnV0IHRoYXQgd2Ugd29uJ3Qgc3RvcFxuLy8gZ2l2aW5nIHlvdSB3YXJuaW5ncyBpZiB5b3UgdXNlIHByb2R1Y3Rpb24gYXBpcy5cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb25TdGF0aWModHlwZSwgcHJvcHMsIGtleSkge1xuICB7XG4gICAgcmV0dXJuIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIHRydWUpO1xuICB9XG59XG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbkR5bmFtaWModHlwZSwgcHJvcHMsIGtleSkge1xuICB7XG4gICAgcmV0dXJuIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGZhbHNlKTtcbiAgfVxufVxuXG52YXIganN4ID0gIGpzeFdpdGhWYWxpZGF0aW9uRHluYW1pYyA7IC8vIHdlIG1heSB3YW50IHRvIHNwZWNpYWwgY2FzZSBqc3hzIGludGVybmFsbHkgdG8gdGFrZSBhZHZhbnRhZ2Ugb2Ygc3RhdGljIGNoaWxkcmVuLlxuLy8gZm9yIG5vdyB3ZSBjYW4gc2hpcCBpZGVudGljYWwgcHJvZCBmdW5jdGlvbnNcblxudmFyIGpzeHMgPSAganN4V2l0aFZhbGlkYXRpb25TdGF0aWMgO1xuXG5leHBvcnRzLkZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbmV4cG9ydHMuanN4ID0ganN4O1xuZXhwb3J0cy5qc3hzID0ganN4cztcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtcnVudGltZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50IH0gZnJvbSAnQHJlbW90ZS11aS9yZWFjdCc7XG5leHBvcnQgY29uc3QgY3JlYXRlUmVtb3RlQ29tcG9uZW50UmVnaXN0cnkgPSAoKSA9PiB7XG4gICAgY29uc3QgY29tcG9uZW50TWV0YWRhdGFMb29rdXAgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgY29tcG9uZW50TmFtZUJ5Q29tcG9uZW50TWFwID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHJlZ2lzdGVyQ29tcG9uZW50ID0gKGNvbXBvbmVudCwgY29tcG9uZW50TmFtZSwgZnJhZ21lbnRQcm9wcykgPT4ge1xuICAgICAgICBjb21wb25lbnROYW1lQnlDb21wb25lbnRNYXAuc2V0KGNvbXBvbmVudCwgY29tcG9uZW50TmFtZSk7XG4gICAgICAgIGNvbXBvbmVudE1ldGFkYXRhTG9va3VwLnNldChjb21wb25lbnROYW1lLCB7XG4gICAgICAgICAgICBmcmFnbWVudFByb3BzU2V0OiBuZXcgU2V0KGZyYWdtZW50UHJvcHMpLFxuICAgICAgICAgICAgZnJhZ21lbnRQcm9wc0FycmF5OiBmcmFnbWVudFByb3BzLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldENvbXBvbmVudE5hbWU6IChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lQnlDb21wb25lbnRNYXAuZ2V0KGNvbXBvbmVudCk7XG4gICAgICAgICAgICBpZiAoIWNvbXBvbmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnROYW1lO1xuICAgICAgICB9LFxuICAgICAgICBpc0FsbG93ZWRDb21wb25lbnROYW1lOiAoY29tcG9uZW50TmFtZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudE1ldGFkYXRhTG9va3VwLmhhcyhjb21wb25lbnROYW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNDb21wb25lbnRGcmFnbWVudFByb3A6IChjb21wb25lbnROYW1lLCBwcm9wTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50TWV0YWRhdGEgPSBjb21wb25lbnRNZXRhZGF0YUxvb2t1cC5nZXQoY29tcG9uZW50TmFtZSk7XG4gICAgICAgICAgICBpZiAoIWNvbXBvbmVudE1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudE1ldGFkYXRhLmZyYWdtZW50UHJvcHNTZXQuaGFzKHByb3BOYW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q29tcG9uZW50RnJhZ21lbnRQcm9wTmFtZXM6IChjb21wb25lbnROYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnRNZXRhZGF0YSA9IGNvbXBvbmVudE1ldGFkYXRhTG9va3VwLmdldChjb21wb25lbnROYW1lKTtcbiAgICAgICAgICAgIGlmICghY29tcG9uZW50TWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IGZyYWdtZW50UHJvcHNBcnJheSB9ID0gY29tcG9uZW50TWV0YWRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZnJhZ21lbnRQcm9wc0FycmF5O1xuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50OiAoY29tcG9uZW50TmFtZSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGZyYWdtZW50UHJvcHMgPSBbXSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHJlbW90ZVJlYWN0Q29tcG9uZW50ID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoY29tcG9uZW50TmFtZSwge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50UHJvcHM6IGZyYWdtZW50UHJvcHMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZWdpc3RlckNvbXBvbmVudChyZW1vdGVSZWFjdENvbXBvbmVudCwgY29tcG9uZW50TmFtZSwgZnJhZ21lbnRQcm9wcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlQ29tcG91bmRSZWFjdENvbXBvbmVudDogKGNvbXBvbmVudE5hbWUsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZnJhZ21lbnRQcm9wcyA9IFtdIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgY29uc3QgUmVtb3RlQ29tcG9uZW50VHlwZSA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KGNvbXBvbmVudE5hbWUsIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudFByb3BzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBXZSBjYW4gb25seSBhdHRhY2ggcHJvcGVydGllcyB0byBhIGZ1bmN0aW9uIGNvbXBvbmVudCB0eXBlLCBzbyB3ZSBuZWVkIHRvIGNoZWNrIGlmIHRoZSByZW1vdGUgY29tcG9uZW50IHR5cGUgaXMgYSBmdW5jdGlvbi5cbiAgICAgICAgICAgIC8vIElmIHRoZSByZW1vdGUgY29tcG9uZW50IHR5cGUgaXMgbm90IGEgZnVuY3Rpb24sIHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIGZ1bmN0aW9uIGNvbXBvbmVudC5cbiAgICAgICAgICAgIGNvbnN0IENvbXBvdW5kRnVuY3Rpb25Db21wb25lbnRUeXBlID0gdHlwZW9mIFJlbW90ZUNvbXBvbmVudFR5cGUgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICA/IFJlbW90ZUNvbXBvbmVudFR5cGVcbiAgICAgICAgICAgICAgICA6IChwcm9wcykgPT4gKF9qc3goUmVtb3RlQ29tcG9uZW50VHlwZSwgeyAuLi5wcm9wcyB9KSk7XG4gICAgICAgICAgICAvLyBBdHRhY2ggdGhlIGNvbXBvdW5kIGNvbXBvbmVudCBwcm9wZXJ0aWVzIHRvIHRoZSBmdW5jdGlvbiBjb21wb25lbnQgdGhhdCB3ZSB3aWxsIGJlIHJldHVybmluZy5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oQ29tcG91bmRGdW5jdGlvbkNvbXBvbmVudFR5cGUsIG9wdGlvbnMuY29tcG91bmRDb21wb25lbnRQcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgIC8vIFJlZ2lzdGVyIHRoZSBjb21wb3VuZCBmdW5jdGlvbiBjb21wb25lbnQgd2l0aCB0aGUgcmVnaXN0cnkgYW5kIHJldHVybiBpdC5cbiAgICAgICAgICAgIHJldHVybiByZWdpc3RlckNvbXBvbmVudChDb21wb3VuZEZ1bmN0aW9uQ29tcG9uZW50VHlwZSwgY29tcG9uZW50TmFtZSwgZnJhZ21lbnRQcm9wcyk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVSZW1vdGVDb21wb25lbnRSZWdpc3RyeSB9IGZyb20gXCIuL3V0aWxzL3JlbW90ZS1jb21wb25lbnQtcmVnaXN0cnkuanNcIjtcbi8qKlxuICogUmVwcmVzZW50cyBhIHJlZ2lzdHJ5IG9mIEh1YlNwb3QtcHJvdmlkZWQgUmVhY3QgY29tcG9uZW50cyB0aGF0IHNob3VsZCBvbmx5IGJlIHVzZWQgKippbnRlcm5hbGx5KiogYnkgdGhlIFVJIGV4dGVuc2lvbiBTREsuXG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjb25zdCBfX2h1YlNwb3RDb21wb25lbnRSZWdpc3RyeSA9IGNyZWF0ZVJlbW90ZUNvbXBvbmVudFJlZ2lzdHJ5KCk7XG5jb25zdCB7IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQsIGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlQ29tcG91bmRSZWFjdENvbXBvbmVudCwgfSA9IF9faHViU3BvdENvbXBvbmVudFJlZ2lzdHJ5O1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBTVEFOREFSRCBDT01QT05FTlRTXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8qKlxuICogVGhlIGBBbGVydGAgY29tcG9uZW50IHJlbmRlcnMgYW4gYWxlcnQgd2l0aGluIGEgY2FyZC4gVXNlIHRoaXMgY29tcG9uZW50IHRvIGdpdmUgdXNhZ2UgZ3VpZGFuY2UsIG5vdGlmeSB1c2VycyBvZiBhY3Rpb24gcmVzdWx0cywgb3Igd2FybiB0aGVtIGFib3V0IHBvdGVudGlhbCBpc3N1ZXMgb3IgZmFpbHVyZXMuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvYWxlcnQgRG9jc31cbiAqIC0ge0BsaW5rIGh0dHBzOi8vYXBwLmh1YnNwb3QuY29tL2RvY3MvNDgwMDg5MTYvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9hbGVydCN2YXJpYW50cyBWYXJpYW50c31cbiAqL1xuZXhwb3J0IGNvbnN0IEFsZXJ0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQWxlcnQnKTtcbi8qKlxuICogVGhlIGBCdXR0b25gIGNvbXBvbmVudCByZW5kZXJzIGEgc2luZ2xlIGJ1dHRvbi4gVXNlIHRoaXMgY29tcG9uZW50IHRvIGVuYWJsZSB1c2VycyB0byBwZXJmb3JtIGFjdGlvbnMsIHN1Y2ggYXMgc3VibWl0dGluZyBhIGZvcm0sIHNlbmRpbmcgZGF0YSB0byBhbiBleHRlcm5hbCBzeXN0ZW0sIG9yIGRlbGV0aW5nIGRhdGEuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvYnV0dG9uIERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2J1dHRvbiN1c2FnZS1leGFtcGxlcyBFeGFtcGxlc31cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9IdWJTcG90L3VpLWV4dGVuc2lvbnMtZXhhbXBsZXMvdHJlZS9tYWluL2Rlc2lnbi1wYXR0ZXJucyNidXR0b24gRGVzaWduIFBhdHRlcm4gRXhhbXBsZXN9XG4gKi9cbmV4cG9ydCBjb25zdCBCdXR0b24gPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdCdXR0b24nLCB7XG4gICAgZnJhZ21lbnRQcm9wczogWydvdmVybGF5J10sXG59KTtcbi8qKlxuICogVGhlIGBCdXR0b25Sb3dgIGNvbXBvbmVudCByZW5kZXJzIGEgcm93IG9mIHNwZWNpZmllZCBgQnV0dG9uYCBjb21wb25lbnRzLiBVc2UgdGhpcyBjb21wb25lbnQgd2hlbiB5b3Ugd2FudCB0byBpbmNsdWRlIG11bHRpcGxlIGJ1dHRvbnMgaW4gYSByb3cuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvYnV0dG9uLXJvdyBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgQnV0dG9uUm93ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQnV0dG9uUm93Jyk7XG5leHBvcnQgY29uc3QgQ2FyZCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0NhcmQnKTtcbi8qKlxuICogVGhlIGBEZXNjcmlwdGlvbkxpc3RgIGNvbXBvbmVudCByZW5kZXJzIHBhaXJzIG9mIGxhYmVscyBhbmQgdmFsdWVzLiBVc2UgdGhpcyBjb21wb25lbnQgdG8gZGlzcGxheSBwYWlycyBvZiBsYWJlbHMgYW5kIHZhbHVlcyBpbiBhIHdheSB0aGF0J3MgZWFzeSB0byByZWFkIGF0IGEgZ2xhbmNlLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2Rlc2NyaXB0aW9uLWxpc3QgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uTGlzdCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0Rlc2NyaXB0aW9uTGlzdCcpO1xuLyoqXG4gKiBUaGUgYERlc2NyaXB0aW9uTGlzdEl0ZW1gIGNvbXBvbmVudCByZW5kZXJzIGEgc2luZ2xlIHNldCBvZiBhIGxhYmVsIGFuZCB2YWx1ZS4gVXNlIHRoaXMgY29tcG9uZW50IHdpdGhpbiBhIGBEZXNjcmlwdGlvbkxpc3RgIGNvbXBvbmVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9kZXNjcmlwdGlvbi1saXN0IERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbkxpc3RJdGVtID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRGVzY3JpcHRpb25MaXN0SXRlbScpO1xuLyoqXG4gKiBUaGUgYERpdmlkZXJgIGNvbXBvbmVudCByZW5kZXJzIGEgZ3JleSwgaG9yaXpvbnRhbCBsaW5lIGZvciBzcGFjaW5nIG91dCBjb21wb25lbnRzIHZlcnRpY2FsbHkgb3IgY3JlYXRpbmcgc2VjdGlvbnMgaW4gYW4gZXh0ZW5zaW9uLiBVc2UgdGhpcyBjb21wb25lbnQgdG8gc3BhY2Ugb3V0IG90aGVyIGNvbXBvbmVudHMgd2hlbiB0aGUgY29udGVudCBuZWVkcyBtb3JlIHNlcGFyYXRpb24gdGhhbiB3aGl0ZSBzcGFjZS5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9kaXZpZGVyIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBEaXZpZGVyID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRGl2aWRlcicpO1xuLyoqXG4gKiBUaGUgYFNwYWNlcmAgY29tcG9uZW50IHJlbmRlcnMgdmVydGljYWwgc3BhY2UgYmV0d2VlbiBjb21wb25lbnRzLiBVc2UgdGhpcyBjb21wb25lbnRcbiAqIHRvIGFkZCBjb25zaXN0ZW50IHNwYWNpbmcgd2l0aG91dCB1c2luZyBlbXB0eSB3cmFwcGVyIGNvbXBvbmVudHMuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvc3BhY2VyIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBTcGFjZXIgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdTcGFjZXInKTtcbi8qKlxuICogVGhlIGBFbXB0eVN0YXRlYCBjb21wb25lbnQgc2V0cyB0aGUgY29udGVudCB0aGF0IGFwcGVhcnMgd2hlbiB0aGUgZXh0ZW5zaW9uIGlzIGluIGFuIGVtcHR5IHN0YXRlLiBVc2UgdGhpcyBjb21wb25lbnQgd2hlbiB0aGVyZSdzIG5vIGNvbnRlbnQgb3IgZGF0YSB0byBoZWxwIGd1aWRlIHVzZXJzLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2VtcHR5LXN0YXRlIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBFbXB0eVN0YXRlID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRW1wdHlTdGF0ZScpO1xuLyoqXG4gKiBUaGUgYEVycm9yU3RhdGVgIGNvbXBvbmVudCBzZXRzIHRoZSBjb250ZW50IG9mIGFuIGVycm9yaW5nIGV4dGVuc2lvbi4gVXNlIHRoaXMgY29tcG9uZW50IHRvIGd1aWRlIHVzZXJzIHRocm91Z2ggcmVzb2x2aW5nIGVycm9ycyB0aGF0IHlvdXIgZXh0ZW5zaW9uIG1pZ2h0IGVuY291bnRlci5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9lcnJvci1zdGF0ZSBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgRXJyb3JTdGF0ZSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0Vycm9yU3RhdGUnKTtcbi8qKlxuICogVGhlIGBGb3JtYCBjb21wb25lbnQgcmVuZGVycyBhIGZvcm0gdGhhdCBjYW4gY29udGFpbiBvdGhlciBzdWJjb21wb25lbnRzLCBzdWNoIGFzIGBJbnB1dGAsIGBTZWxlY3RgLCBhbmQgYEJ1dHRvbmAuIFVzZSB0aGlzIGNvbXBvbmVudCB0byBlbmFibGUgdXNlcnMgdG8gc3VibWl0IGRhdGEgdG8gSHViU3BvdCBvciBhbiBleHRlcm5hbCBzeXN0ZW0uXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvZm9ybSBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0h1YlNwb3QvdWktZXh0ZW5zaW9ucy1leGFtcGxlcy90cmVlL21haW4vZGVzaWduLXBhdHRlcm5zI2Zvcm0gRGVzaWduIFBhdHRlcm4gRXhhbXBsZXN9XG4gKi9cbmV4cG9ydCBjb25zdCBGb3JtID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRm9ybScpO1xuLyoqXG4gKiBUaGUgYEhlYWRpbmdgIGNvbXBvbmVudCByZW5kZXJzIGxhcmdlIGhlYWRpbmcgdGV4dC4gVXNlIHRoaXMgY29tcG9uZW50IHRvIGludHJvZHVjZSBvciBkaWZmZXJlbnRpYXRlIHNlY3Rpb25zIG9mIHlvdXIgY29tcG9uZW50LlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2hlYWRpbmcgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IEhlYWRpbmcgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdIZWFkaW5nJyk7XG4vKipcbiAqIFRoZSBgSW1hZ2VgIGNvbXBvbmVudCByZW5kZXJzIGFuIGltYWdlLiBVc2UgdGhpcyBjb21wb25lbnQgdG8gYWRkIGEgbG9nbyBvciBvdGhlciB2aXN1YWwgYnJhbmQgaWRlbnRpdHkgYXNzZXQsIG9yIHRvIGFjY2VudHVhdGUgb3RoZXIgY29udGVudCBpbiB0aGUgZXh0ZW5zaW9uLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2ltYWdlIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBJbWFnZSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0ltYWdlJywge1xuICAgIGZyYWdtZW50UHJvcHM6IFsnb3ZlcmxheSddLFxufSk7XG4vKipcbiAqIFRoZSBgSW5wdXRgIGNvbXBvbmVudCByZW5kZXJzIGEgdGV4dCBpbnB1dCBmaWVsZCB3aGVyZSBhIHVzZXIgY2FuIGVudGVyIGEgY3VzdG9tIHRleHQgdmFsdWUuIExpa2Ugb3RoZXIgaW5wdXRzLCB0aGlzIGNvbXBvbmVudCBzaG91bGQgYmUgdXNlZCB3aXRoaW4gYSBgRm9ybWAgdGhhdCBoYXMgYSBzdWJtaXQgYnV0dG9uLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2lucHV0IERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBJbnB1dCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0lucHV0Jyk7XG4vKipcbiAqIFRoZSBgTGlua2AgY29tcG9uZW50IHJlbmRlcnMgYSBjbGlja2FibGUgaHlwZXJsaW5rLiBVc2UgbGlua3MgdG8gZGlyZWN0IHVzZXJzIHRvIGFuIGV4dGVybmFsIHdlYiBwYWdlIG9yIGFub3RoZXIgcGFydCBvZiB0aGUgSHViU3BvdCBhcHAuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvbGluayBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgTGluayA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0xpbmsnLCB7XG4gICAgZnJhZ21lbnRQcm9wczogWydvdmVybGF5J10sXG59KTtcbi8qKlxuICogVGhlIGBUZXh0QXJlYWAgY29tcG9uZW50IHJlbmRlcnMgYSBmaWxsYWJsZSB0ZXh0IGZpZWxkLiBMaWtlIG90aGVyIGlucHV0cywgdGhpcyBjb21wb25lbnQgc2hvdWxkIGJlIHVzZWQgd2l0aGluIGEgYEZvcm1gIHRoYXQgaGFzIGEgc3VibWl0IGJ1dHRvbi5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy90ZXh0LWFyZWEgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFRleHRBcmVhID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnVGV4dEFyZWEnKTtcbi8vIFRleHRhcmVhIHdhcyBjaGFuZ2VkIHRvIFRleHRBcmVhXG4vLyBFeHBvcnRpbmcgYm90aCBmb3IgYmFja3dhcmRzIGNvbXBhdFxuLyoqIEBkZXByZWNhdGVkIHVzZSBUZXh0QXJlYSBpbnN0ZWFkLiBXaXRoIGEgY2FwaXRhbCBBLiovXG5leHBvcnQgY29uc3QgVGV4dGFyZWEgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUZXh0YXJlYScpO1xuLyoqXG4gKiBUaGUgYExvYWRpbmdTcGlubmVyYCBjb21wb25lbnQgcmVuZGVycyBhIHZpc3VhbCBpbmRpY2F0b3IgZm9yIHdoZW4gYW4gZXh0ZW5zaW9uIGlzIGxvYWRpbmcgb3IgcHJvY2Vzc2luZyBkYXRhLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2xvYWRpbmctc3Bpbm5lciBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgTG9hZGluZ1NwaW5uZXIgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdMb2FkaW5nU3Bpbm5lcicpO1xuLyoqXG4gKiBUaGUgYFByb2dyZXNzQmFyYCBjb21wb25lbnQgcmVuZGVycyBhIHZpc3VhbCBpbmRpY2F0b3Igc2hvd2luZyBhIG51bWVyaWMgYW5kL29yIHBlcmNlbnRhZ2UtYmFzZWQgcmVwcmVzZW50YXRpb24gb2YgcHJvZ3Jlc3MuIFRoZSBwZXJjZW50YWdlIGlzIGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIG1heGltdW0gcG9zc2libGUgdmFsdWUgc3BlY2lmaWVkIGluIHRoZSBjb21wb25lbnQuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBQcm9ncmVzc0JhciA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1Byb2dyZXNzQmFyJyk7XG4vKipcbiAqIFRoZSBgU2VsZWN0YCBjb21wb25lbnQgcmVuZGVycyBhIGRyb3Bkb3duIG1lbnUgc2VsZWN0IGZpZWxkIHdoZXJlIGEgdXNlciBjYW4gc2VsZWN0IGEgc2luZ2xlIHZhbHVlLiBBIHNlYXJjaCBiYXIgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGluY2x1ZGVkIHdoZW4gdGhlcmUgYXJlIG1vcmUgdGhhbiBzZXZlbiBvcHRpb25zLiBMaWtlIG90aGVyIGlucHV0cywgdGhpcyBjb21wb25lbnQgc2hvdWxkIGJlIHVzZWQgd2l0aGluIGEgYEZvcm1gIHRoYXQgaGFzIGEgc3VibWl0IGJ1dHRvbi5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9zZWxlY3QgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFNlbGVjdCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1NlbGVjdCcpO1xuLyoqXG4gKiBUaGUgYFRhZ2AgY29tcG9uZW50IHJlbmRlcnMgYSB0YWcgdG8gbGFiZWwgb3IgY2F0ZWdvcml6ZSBpbmZvcm1hdGlvbiBvciBvdGhlciBjb21wb25lbnRzLiBUYWdzIGNhbiBiZSBzdGF0aWMgb3IgY2xpY2thYmxlIGZvciBpbnZva2luZyBmdW5jdGlvbnMuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdGFnIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBUYWcgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUYWcnLCB7XG4gICAgZnJhZ21lbnRQcm9wczogWydvdmVybGF5J10sXG59KTtcbi8qKlxuICogVGhlIGBUZXh0YCBjb21wb25lbnQgcmVuZGVycyB0ZXh0IHdpdGggZm9ybWF0dGluZyBvcHRpb25zLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3RleHQgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFRleHQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUZXh0Jyk7XG4vKipcbiAqIFRoZSBgVGlsZWAgY29tcG9uZW50IHJlbmRlcnMgYSBzcXVhcmUgdGlsZSB0aGF0IGNhbiBjb250YWluIG90aGVyIGNvbXBvbmVudHMuIFVzZSB0aGlzIGNvbXBvbmVudCB0byBjcmVhdGUgZ3JvdXBzIG9mIHJlbGF0ZWQgY29tcG9uZW50cy5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy90aWxlIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBUaWxlID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnVGlsZScpO1xuLyoqIEBkZXByZWNhdGVkIHVzZSBGbGV4IGluc3RlYWQuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCByZWxlYXNlLiAqL1xuZXhwb3J0IGNvbnN0IFN0YWNrID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnU3RhY2snKTtcbi8qKlxuICogVGhlIGBUb2dnbGVHcm91cGAgY29tcG9uZW50IHJlbmRlcnMgYSBsaXN0IG9mIHNlbGVjdGFibGUgb3B0aW9ucywgZWl0aGVyIGluIHJhZGlvIGJ1dHRvbiBvciBjaGVja2JveCBmb3JtLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3RvZ2dsZS1ncm91cCBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgVG9nZ2xlR3JvdXAgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUb2dnbGVHcm91cCcpO1xuLyoqXG4gKiBUaGUgYFN0YXRpc3RpY3NJdGVtYCBjb21wb25lbnQgcmVuZGVycyBhIHNpbmdsZSBkYXRhIHBvaW50IHdpdGhpbiBhIGBTdGF0aXN0aWNzYCBjb21wb25lbnQuIFVzZSB0aGlzIGNvbXBvbmVudCB0byBkaXNwbGF5IGEgc2luZ2xlIGRhdGEgcG9pbnQsIHN1Y2ggYXMgYSBudW1iZXIgb3IgcGVyY2VudGFnZS5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9zdGF0aXN0aWNzIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBTdGF0aXN0aWNzSXRlbSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1N0YXRpc3RpY3NJdGVtJyk7XG4vKipcbiAqIFRoZSBgU3RhdGlzdGljc2AgY29tcG9uZW50IHJlbmRlcnMgYSB2aXN1YWwgc3BvdGxpZ2h0IG9mIG9uZSBvciBtb3JlIGRhdGEgcG9pbnRzLiBJbmNsdWRlcyB0aGUgYFN0YXRpc3RpY3NJdGVtYCBhbmQgYFN0YXRpc3RpY3NUcmVuZGAgc3ViY29tcG9uZW50cy5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9zdGF0aXN0aWNzIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBTdGF0aXN0aWNzID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnU3RhdGlzdGljcycpO1xuLyoqXG4gKiBUaGUgYFN0YXRpc3RpY3NUcmVuZGAgY29tcG9uZW50IHJlbmRlcnMgYSBwZXJjZW50YWdlIHRyZW5kIHZhbHVlIGFuZCBkaXJlY3Rpb24gYWxvbnNpZGUgYSBgU3RhdGlzdGljc0l0ZW1gIGNvbXBvbmVudC4gVXNlIHRoaXMgY29tcG9uZW50IHdpdGhpbiB0aGUgYFN0YXRpc3RpY3NJdGVtYCBjb21wb25lbnQuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvc3RhdGlzdGljcyBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgU3RhdGlzdGljc1RyZW5kID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnU3RhdGlzdGljc1RyZW5kJyk7XG4vKipcbiAqIFRoZSBgVGFibGVgIGNvbXBvbmVudCByZW5kZXJzIGEgdGFibGUuIFRvIGZvcm1hdCB0aGUgdGFibGUsIHVzZSB0aGUgc3ViY29tcG9uZW50cyBgVGFibGVIZWFkYCwgYFRhYmxlUm93YCwgYFRhYmxlSGVhZGVyYCwgYFRhYmxlQm9keWAsIGBUYWJsZUNlbGxgYW5kIGBUYWJsZUZvb3RlcmAuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdGFibGUgRG9jc31cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9IdWJTcG90L3VpLWV4dGVuc2lvbnMtZXhhbXBsZXMvdHJlZS9tYWluL2Rlc2lnbi1wYXR0ZXJucyN0YWJsZSBEZXNpZ24gUGF0dGVybiBFeGFtcGxlfVxuICovXG5leHBvcnQgY29uc3QgVGFibGUgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUYWJsZScpO1xuLyoqXG4gKiBUaGUgYFRhYmxlRm9vdGVyYCBjb21wb25lbnQgcmVuZGVycyBhIGZvb3RlciB3aXRoaW4gYSBgVGFibGVgIGNvbXBvbmVudC4gVXNlIHRoaXMgY29tcG9uZW50IHRvIGRpc3BsYXkgdG90YWxzIG9yIG90aGVyIHN1bW1hcnkgaW5mb3JtYXRpb24uXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdGFibGUgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFRhYmxlRm9vdGVyID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnVGFibGVGb290ZXInKTtcbi8qKlxuICogVGhlIGBUYWJsZUNlbGxgIGNvbXBvbmVudCByZW5kZXJzIGluZGl2aWR1YWwgY2VsbHMgd2l0aGluIHRoZSBgVGFibGVCb2R5YCBjb21wb25lbnQuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdGFibGUgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFRhYmxlQ2VsbCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RhYmxlQ2VsbCcpO1xuLyoqXG4gKiBUaGUgYFRhYmxlUm93YCBjb21wb25lbnQgcmVuZGVycyBhIHJvdyB3aXRoaW4gdGhlIGBUYWJsZUJvZHlgIG9yIGBUYWJsZUhlYWRgIGNvbXBvbmVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy90YWJsZSBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgVGFibGVSb3cgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUYWJsZVJvdycpO1xuLyoqXG4gKiBUaGUgYFRhYmxlQm9keWAgY29tcG9uZW50IHJlbmRlcnMgdGhlIGJvZHkgKHJvd3MgYW5kIGNlbGxzKSBvZiBhIHRhYmxlIHdpdGhpbiB0aGUgYFRhYmxlYCBjb21wb25lbnQuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdGFibGUgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFRhYmxlQm9keSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RhYmxlQm9keScpO1xuLyoqXG4gKiBUaGUgYFRhYmxlSGVhZGVyYCBjb21wb25lbnQgcmVuZGVycyBpbmRpdmlkdWFsIGNlbGxzIGNvbnRhaW5pbmcgYm9sZGVkIGNvbHVtbiBsYWJlbHMsIHdpdGhpbiBgVGFibGVIZWFkYC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy90YWJsZSBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgVGFibGVIZWFkZXIgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUYWJsZUhlYWRlcicpO1xuLyoqXG4gKiBUaGUgYFRhYmxlSGVhZGAgY29tcG9uZW50IHJlbmRlcnMgdGhlIGhlYWRlciBzZWN0aW9uIG9mIHRoZSBgVGFibGVgIGNvbXBvbmVudCwgY29udGFpbmluZyBjb2x1bW4gbGFiZWxzLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3RhYmxlIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBUYWJsZUhlYWQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUYWJsZUhlYWQnKTtcbi8qKlxuICogVGhlIGBOdW1iZXJJbnB1dGAgY29tcG9uZW50IHJlbmRlcnMgYSBudW1iZXIgaW5wdXQgZmllbGQuIExpa2Ugb3RoZXIgaW5wdXRzLCB0aGlzIGNvbXBvbmVudCBzaG91bGQgYmUgdXNlZCB3aXRoaW4gYSBgRm9ybWAgdGhhdCBoYXMgYSBzdWJtaXQgYnV0dG9uLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL251bWJlci1pbnB1dCBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgTnVtYmVySW5wdXQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdOdW1iZXJJbnB1dCcpO1xuLyoqXG4gKiBUaGUgYEJveGAgY29tcG9uZW50IHJlbmRlcnMgYW4gZW1wdHkgZGl2IGNvbnRhaW5lciBmb3IgZmluZSB0dW5pbmcgdGhlIHNwYWNpbmcgb2YgY29tcG9uZW50cy4gQ29tbW9ubHkgdXNlZCB3aXRoIHRoZSBgRmxleGAgY29tcG9uZW50LlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2JveCBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0h1YlNwb3QvdWktZXh0ZW5zaW9ucy1leGFtcGxlcy90cmVlL21haW4vZmxleC1hbmQtYm94IEZsZXggYW5kIEJveCBFeGFtcGxlfVxuICovXG5leHBvcnQgY29uc3QgQm94ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQm94Jyk7XG4vKipcbiAqIFRoZSBgU3RlcEluZGljYXRvcmAgY29tcG9uZW50IHJlbmRlcnMgYW4gaW5kaWNhdG9yIHRvIHNob3cgdGhlIGN1cnJlbnQgc3RlcCBvZiBhIG11bHRpLXN0ZXAgcHJvY2Vzcy5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9zdGVwLWluZGljYXRvciBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgU3RlcEluZGljYXRvciA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1N0ZXBJbmRpY2F0b3InKTtcbi8qKlxuICogVGhlIGBBY2NvcmRpb25gIGNvbXBvbmVudCByZW5kZXJzIGFuIGV4cGFuZGFibGUgYW5kIGNvbGxhcHNhYmxlIHNlY3Rpb24gdGhhdCBjYW4gY29udGFpbiBvdGhlciBjb21wb25lbnRzLiBUaGlzIGNvbXBvbmVudCBjYW4gYmUgaGVscGZ1bCBmb3Igc2F2aW5nIHNwYWNlIGFuZCBicmVha2luZyB1cCBleHRlbnNpb24gY29udGVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9hY2NvcmRpb24gRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IEFjY29yZGlvbiA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0FjY29yZGlvbicpO1xuLyoqXG4gKiBUaGUgTXVsdGlTZWxlY3QgY29tcG9uZW50IHJlbmRlcnMgYSBkcm9wZG93biBtZW51IHNlbGVjdCBmaWVsZCB3aGVyZSBhIHVzZXIgY2FuIHNlbGVjdCBtdWx0aXBsZSB2YWx1ZXMuIENvbW1vbmx5IHVzZWQgd2l0aGluIHRoZSBgRm9ybWAgY29tcG9uZW50LlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL211bHRpLXNlbGVjdCBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgTXVsdGlTZWxlY3QgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdNdWx0aVNlbGVjdCcpO1xuLyoqXG4gKiBUaGUgYEZsZXhgIGNvbXBvbmVudCByZW5kZXJzIGEgZmxleCBjb250YWluZXIgdGhhdCBjYW4gY29udGFpbiBvdGhlciBjb21wb25lbnRzLCBhbmQgYXJyYW5nZSB0aGVtIHdpdGggcHJvcHMuIFVzZSB0aGlzIGNvbXBvbmVudCB0byBjcmVhdGUgYSBmbGV4aWJsZSBhbmQgcmVzcG9uc2l2ZSBsYXlvdXQuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvZmxleCBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0h1YlNwb3QvdWktZXh0ZW5zaW9ucy1leGFtcGxlcy90cmVlL21haW4vZmxleC1hbmQtYm94IEZsZXggYW5kIEJveCBFeGFtcGxlfVxuICovXG5leHBvcnQgY29uc3QgRmxleCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0ZsZXgnKTtcbi8qKlxuICogVGhlIGBEYXRlSW5wdXRgIGNvbXBvbmVudCByZW5kZXJzIGFuIGlucHV0IGZpZWxkIHdoZXJlIGEgdXNlciBjYW4gc2VsZWN0IGEgZGF0ZS4gQ29tbW9ubHkgdXNlZCB3aXRoaW4gdGhlIGBGb3JtYCBjb21wb25lbnQuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvZGF0ZS1pbnB1dCBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgRGF0ZUlucHV0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRGF0ZUlucHV0Jyk7XG4vKipcbiAqIFRoZSBgQ2hlY2tib3hgIGNvbXBvbmVudCByZW5kZXJzIGEgc2luZ2xlIGNoZWNrYm94IGlucHV0LiBDb21tb25seSB1c2VkIHdpdGhpbiB0aGUgYEZvcm1gIGNvbXBvbmVudC4gSWYgeW91IHdhbnQgdG8gZGlzcGxheSBtdWx0aXBsZSBjaGVja2JveGVzLCB5b3Ugc2hvdWxkIHVzZSBgVG9nZ2xlR3JvdXBgIGluc3RlYWQsIGFzIGl0IGNvbWVzIHdpdGggZXh0cmEgbG9naWMgZm9yIGhhbmRsaW5nIG11bHRpcGxlIGNoZWNrYm94ZXMuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvY2hlY2tib3ggRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IENoZWNrYm94ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ2hlY2tib3gnKTtcbi8qKlxuICogVGhlIGBSYWRpb0J1dHRvbmAgY29tcG9uZW50IHJlbmRlcnMgYSBzaW5nbGUgcmFkaW8gaW5wdXQuIENvbW1vbmx5IHVzZWQgd2l0aGluIHRoZSBgRm9ybWAgY29tcG9uZW50LiBJZiB5b3Ugd2FudCB0byBkaXNwbGF5IG11bHRpcGxlIHJhZGlvIGlucHV0cywgeW91IHNob3VsZCB1c2UgYFRvZ2dsZUdyb3VwYCBpbnN0ZWFkLCBhcyBpdCBjb21lcyB3aXRoIGV4dHJhIGxvZ2ljIGZvciBoYW5kbGluZyBtdWx0aXBsZSBpbnB1dHMuXG4gKi9cbmV4cG9ydCBjb25zdCBSYWRpb0J1dHRvbiA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1JhZGlvQnV0dG9uJyk7XG4vKipcbiAqIFRoZSBgTGlzdGAgY29tcG9uZW50IHJlbmRlcnMgYSBsaXN0IG9mIGl0ZW1zLiBVc2UgdGhpcyBjb21wb25lbnQgdG8gZGlzcGxheSBhIGxpc3Qgb2YgaXRlbXMsIHN1Y2ggYXMgYSBsaXN0IG9mIGNvbnRhY3RzLCB0YXNrcywgb3Igb3RoZXIgZGF0YS4gQSBsaXN0IGNhbiBiZSBzdHlsZWQgYXMgYSBidWxsZXRlZCBsaXN0IG9yIGEgbnVtYmVyZWQgbGlzdC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9saXN0IERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBMaXN0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnTGlzdCcpO1xuLyoqXG4gKiBUaGUgYFRvZ2dsZWAgY29tcG9uZW50IHJlbmRlcnMgYSBib29sZWFuIHRvZ2dsZSBzd2l0Y2ggdGhhdCBjYW4gYmUgY29uZmlndXJlZCB3aXRoIHNpemluZywgbGFiZWwgcG9zaXRpb24sIHJlYWQtb25seSwgYW5kIG1vcmUuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdG9nZ2xlIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBUb2dnbGUgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUb2dnbGUnKTtcbi8qKlxuICogVGhlIGBEcm9wZG93bmAgY29tcG9uZW50IHJlbmRlcnMgYSBkcm9wZG93biBtZW51IHRoYXQgY2FuIGFwcGVhciBhcyBhIGJ1dHRvbiBvciBoeXBlcmxpbmsuIFVzZSB0aGlzIGNvbXBvbmVudCB0byBlbmFibGUgdXNlcnMgdG8gc2VsZWN0IGZyb20gbXVsdGlwbGUgb3B0aW9ucyBpbiBhIGNvbXBhY3QgbGlzdC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9kcm9wZG93biBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgRHJvcGRvd24gPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZUNvbXBvdW5kUmVhY3RDb21wb25lbnQoJ0Ryb3Bkb3duJywge1xuICAgIGNvbXBvdW5kQ29tcG9uZW50UHJvcGVydGllczoge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGBEcm9wZG93bi5CdXR0b25JdGVtYCBjb21wb25lbnQgcmVwcmVzZW50cyBhIHNpbmdsZSBvcHRpb24gd2l0aGluIGEgYERyb3Bkb3duYCBtZW51LiBVc2UgdGhpcyBjb21wb25lbnQgYXMgYSBjaGlsZCBvZiB0aGUgYERyb3Bkb3duYCBjb21wb25lbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqICoqTGlua3M6KipcbiAgICAgICAgICpcbiAgICAgICAgICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9kcm9wZG93biBEb2NzfVxuICAgICAgICAgKi9cbiAgICAgICAgQnV0dG9uSXRlbTogY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRHJvcGRvd25CdXR0b25JdGVtJywge1xuICAgICAgICAgICAgZnJhZ21lbnRQcm9wczogWydvdmVybGF5J10sXG4gICAgICAgIH0pLFxuICAgIH0sXG59KTtcbi8qKlxuICogVGhlIFBhbmVsIGNvbXBvbmVudCByZW5kZXJzIGEgcGFuZWwgb3ZlcmxheSBvbiB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgcGFnZSBhbmQgY29udGFpbnMgb3RoZXIgY29tcG9uZW50cy5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9wYW5lbCBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0h1YlNwb3QvdWktZXh0ZW5zaW9ucy1leGFtcGxlcy90cmVlL21haW4vb3ZlcmxheS1leGFtcGxlIE92ZXJsYXkgRXhhbXBsZX1cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9IdWJTcG90L3VpLWV4dGVuc2lvbnMtZXhhbXBsZXMvdHJlZS9tYWluL2Rlc2lnbi1wYXR0ZXJucyNwYW5lbCBEZXNpZ24gUGF0dGVybiBFeGFtcGxlc31cbiAqL1xuZXhwb3J0IGNvbnN0IFBhbmVsID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnUGFuZWwnKTtcbi8qKlxuICogVGhlIGBQYW5lbEZvb3RlcmAgaXMgYSBzdGlja3kgZm9vdGVyIGNvbXBvbmVudCBkaXNwbGF5ZWQgYXQgdGhlIGJvdHRvbSBvZiBhIGBQYW5lbGAgY29tcG9uZW50LiBVc2UgdGhpcyBjb21wb25lbnQgdG8gZGlzcGxheSBhY3Rpb25zIG9yIG90aGVyIGNvbnRlbnQgdGhhdCBzaG91bGQgYmUgdmlzaWJsZSBhdCBhbGwgdGltZXMuIEluY2x1ZGUgb25seSBvbmUgYFBhbmVsRm9vdGVyYCBjb21wb25lbnQgcGVyIGBQYW5lbGAuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvcGFuZWwtZm9vdGVyIERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9vdmVybGF5LWV4YW1wbGUgT3ZlcmxheSBFeGFtcGxlfVxuICovXG5leHBvcnQgY29uc3QgUGFuZWxGb290ZXIgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdQYW5lbEZvb3RlcicpO1xuLyoqXG4gKiBUaGUgYFBhbmVsQm9keWAgY29tcG9uZW50IGlzIGEgY29udGFpbmVyIHRoYXQgd3JhcHMgdGhlIHBhbmVsJ3MgY29udGVudCBhbmQgbWFrZXMgaXQgc2Nyb2xsYWJsZS4gSW5jbHVkZSBvbmx5IG9uZSBgUGFuZWxCb2R5YCBjb21wb25lbnQgcGVyIGBQYW5lbGAuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvcGFuZWwtZm9vdGVyIERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9vdmVybGF5LWV4YW1wbGUgT3ZlcmxheSBFeGFtcGxlfVxuICovXG5leHBvcnQgY29uc3QgUGFuZWxCb2R5ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnUGFuZWxCb2R5Jyk7XG4vKipcbiAqIFRoZSBgUGFuZWxTZWN0aW9uYCBjb21wb25lbnQgaXMgYSBjb250YWluZXIgdGhhdCBhZGRzIHBhZGRpbmcgYW5kIGJvdHRvbSBtYXJnaW4gdG8gcHJvdmlkZSBzcGFjaW5nIGJldHdlZW4gY29udGVudC4gVXNlIHRoZSBgUGFuZWxTZWN0aW9uYCBjb21wb25lbnQgdG8gc2VwYXJhdGUgY29udGVudCB3aXRoaW4gYSBgUGFuZWxCb2R5YC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9wYW5lbC1mb290ZXIgRG9jc31cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9IdWJTcG90L3VpLWV4dGVuc2lvbnMtZXhhbXBsZXMvdHJlZS9tYWluL292ZXJsYXktZXhhbXBsZSBPdmVybGF5IEV4YW1wbGV9XG4gKi9cbmV4cG9ydCBjb25zdCBQYW5lbFNlY3Rpb24gPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdQYW5lbFNlY3Rpb24nKTtcbi8qKlxuICogVGhlIGBTdGVwcGVySW5wdXRgIGNvbXBvbmVudCByZW5kZXJzIGEgbnVtYmVyIGlucHV0IGZpZWxkIHRoYXQgY2FuIGJlIGluY3JlYXNlZCBvciBkZWNyZWFzZWQgYnkgYSBzZXQgbnVtYmVyLiBDb21tb25seSB1c2VkIHdpdGhpbiB0aGUgYEZvcm1gIGNvbXBvbmVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9zdGVwcGVyLWlucHV0IERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBTdGVwcGVySW5wdXQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdTdGVwcGVySW5wdXQnKTtcbi8qKlxuICogVGhlIE1vZGFsIGNvbXBvbmVudCByZW5kZXJzIGEgcG9wLXVwIG92ZXJsYXkgdGhhdCBjYW4gY29udGFpbiBvdGhlciBjb21wb25lbnRzLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL21vZGFsIERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9vdmVybGF5LWV4YW1wbGUgT3ZlcmxheSBFeGFtcGxlfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0h1YlNwb3QvdWktZXh0ZW5zaW9ucy1leGFtcGxlcy90cmVlL21haW4vZGVzaWduLXBhdHRlcm5zI21vZGFsIERlc2lnbiBQYXR0ZXJuIEV4YW1wbGVzfVxuICovXG5leHBvcnQgY29uc3QgTW9kYWwgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdNb2RhbCcpO1xuLyoqXG4gKiBUaGUgYE1vZGFsQm9keWAgY29tcG9uZW50IGNvbnRhaW5zIHRoZSBtYWluIGNvbnRlbnQgb2YgdGhlIG1vZGFsLiBPbmUgYE1vZGFsQm9keWAgaXMgcmVxdWlyZWQgcGVyIGBNb2RhbGAuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvbW9kYWwgRG9jc31cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9IdWJTcG90L3VpLWV4dGVuc2lvbnMtZXhhbXBsZXMvdHJlZS9tYWluL292ZXJsYXktZXhhbXBsZSBPdmVybGF5IEV4YW1wbGV9XG4gKi9cbmV4cG9ydCBjb25zdCBNb2RhbEJvZHkgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdNb2RhbEJvZHknKTtcbi8qKlxuICogVGhlIGBNb2RhbEZvb3RlcmAgY29tcG9uZW50IGlzIGFuIG9wdGlvbmFsIGNvbXBvbmVudCB0byBmb3JtYXQgdGhlIGZvb3RlciBzZWN0aW9uIG9mIHRoZSBtb2RhbC4gVXNlIG9uZSBgTW9kYWxGb290ZXJgIHBlciBgTW9kYWxgLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL21vZGFsIERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9vdmVybGF5LWV4YW1wbGUgT3ZlcmxheSBFeGFtcGxlfVxuICovXG5leHBvcnQgY29uc3QgTW9kYWxGb290ZXIgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdNb2RhbEZvb3RlcicpO1xuLyoqXG4gKiBVc2UgdGhlIGBJY29uYCBjb21wb25lbnQgdG8gcmVuZGVyIGEgdmlzdWFsIGljb24gd2l0aGluIG90aGVyIGNvbXBvbmVudHMuIEl0IGNhbiBnZW5lcmFsbHkgYmUgdXNlZCBpbnNpZGUgbW9zdCBjb21wb25lbnRzLCBleGNsdWRpbmcgb25lcyB0aGF0IGRvbid0IHN1cHBvcnQgY2hpbGQgY29tcG9uZW50cy5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9pY29uIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBJY29uID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnSWNvbicpO1xuLyoqXG4gKiBUaGUgYFN0YXR1c1RhZ2AgY29tcG9uZW50IHJlbmRlcnMgYSB2aXN1YWwgaW5kaWNhdG9yIHRvIGRpc3BsYXkgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIGFuIGl0ZW0uIFN0YXR1cyB0YWdzIGNhbiBiZSBzdGF0aWMgb3IgY2xpY2thYmxlLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3N0YXR1cy10YWcgRG9jc31cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvc3RhdHVzLXRhZyN2YXJpYW50cyBWYXJpYW50c31cbiAqL1xuZXhwb3J0IGNvbnN0IFN0YXR1c1RhZyA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1N0YXR1c1RhZycpO1xuLyoqXG4gKiBUaGUgYExvYWRpbmdCdXR0b25gIGNvbXBvbmVudCByZW5kZXJzIGEgYnV0dG9uIHdpdGggbG9hZGluZyBzdGF0ZSBvcHRpb25zLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2xvYWRpbmctYnV0dG9uIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBMb2FkaW5nQnV0dG9uID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnTG9hZGluZ0J1dHRvbicsIHtcbiAgICBmcmFnbWVudFByb3BzOiBbJ292ZXJsYXknXSxcbn0pO1xuLyoqXG4gKiBUaGUgYEJhckNoYXJ0YCBjb21wb25lbnQgcmVuZGVycyBhIGJhciBjaGFydCBmb3IgdmlzdWFsaXppbmcgZGF0YS4gVGhpcyB0eXBlIG9mIGNoYXJ0IGlzIGJlc3Qgc3VpdGVkIGZvciBjb21wYXJpbmcgY2F0ZWdvcmljYWwgZGF0YS5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9iYXItY2hhcnQgQmFyQ2hhcnQgRG9jc31cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvY2hhcnRzIENoYXJ0cyBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0h1YlNwb3QvdWktZXh0ZW5zaW9ucy1leGFtcGxlcy90cmVlL21haW4vY2hhcnRzLWV4YW1wbGUgQ2hhcnRzIEV4YW1wbGV9XG4gKi9cbmV4cG9ydCBjb25zdCBCYXJDaGFydCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0JhckNoYXJ0Jyk7XG4vKipcbiAqIFRoZSBgTGluZUNoYXJ0YCBjb21wb25lbnQgcmVuZGVycyBhIGxpbmUgY2hhcnQgZm9yIHZpc3VhbGl6aW5nIGRhdGEuIFRoaXMgdHlwZSBvZiBjaGFydCBpcyBiZXN0IHN1aXRlZCBmb3IgdGltZSBzZXJpZXMgcGxvdHMgb3IgdHJlbmQgZGF0YS5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9saW5lLWNoYXJ0IExpbmVDaGFydCBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9jaGFydHMgQ2hhcnRzIERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9jaGFydHMtZXhhbXBsZSBDaGFydHMgRXhhbXBsZX1cbiAqL1xuZXhwb3J0IGNvbnN0IExpbmVDaGFydCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0xpbmVDaGFydCcpO1xuLyoqXG4gKiBUaGUgYFNjb3JlQ2lyY2xlYCBjb21wb25lbnQgZGlzcGxheXMgYSBzY29yZSB2YWx1ZSAoMC0xMDApIGFzIGEgY2lyY3VsYXIgcHJvZ3Jlc3MgaW5kaWNhdG9yIHdpdGggY29sb3ItY29kZWQgYmFuZHMuXG4gKiBTY29yZXMgYXJlIGNvbG9yLWNvZGVkOiAwLTMyIChhbGVydC9yZWQpLCAzMy02NSAod2FybmluZy95ZWxsb3cpLCA2Ni0xMDAgKHN1Y2Nlc3MvZ3JlZW4pLlxuICogQGV4YW1wbGVcbiAqIGBgYHRzeFxuICogICA8U2NvcmVDaXJjbGUgc2NvcmU9ezc1fSAvPlxuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBTY29yZUNpcmNsZSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1Njb3JlQ2lyY2xlJyk7XG4vKipcbiAqIGBUYWJzYCBhbGxvdyB5b3UgdG8gZ3JvdXAgcmVsYXRlZCBjb250ZW50IGluIGEgY29tcGFjdCBzcGFjZSwgYWxsb3dpbmcgdXNlcnMgdG8gc3dpdGNoIGJldHdlZW4gdmlld3Mgd2l0aG91dCBsZWF2aW5nIHRoZSBwYWdlLlxuICogQGV4YW1wbGVcbiAqIGBgYHRzeFxuICogPFRhYnMgZGVmYXVsdFNlbGVjdGVkPVwiMVwiPlxuICogICA8VGFiIHRhYklkPVwiMVwiPkZpcnN0IHRhYiBjb250ZW50PC9UYWI+XG4gKiAgIDxUYWIgdGFiSWQ9XCIyXCI+U2Vjb25kIHRhYiBjb250ZW50PC9UYWI+XG4gKiA8L1RhYnM+XG4gKiBgYGBcbiAqXG4gKiAqKkxpbmtzOioqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3RhYnMgRG9jdW1lbnRhdGlvbn1cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9odWJzcG90ZGV2L3VpZS10YWJiZWQtcHJvZHVjdC1jYXJvdXNlbCBUYWJzIEV4YW1wbGV9XG4gKi9cbmV4cG9ydCBjb25zdCBUYWJzID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnVGFicycpO1xuLyoqXG4gKiBFYWNoIGBUYWJgIHJlcHJlc2VudHMgYSBzaW5nbGUgdGFiIChvciBcInZpZXdcIikgd2l0aGluIHRoZSBwYXJlbnQgYFRhYnNgIGNvbXBvbmVudC5cbiAqIEBleGFtcGxlXG4gKiBgYGB0c3hcbiAqIDxUYWJzIGRlZmF1bHRTZWxlY3RlZD1cIjFcIj5cbiAqICAgPFRhYiB0YWJJZD1cIjFcIj5GaXJzdCB0YWIgY29udGVudDwvVGFiPlxuICogICA8VGFiIHRhYklkPVwiMlwiPlNlY29uZCB0YWIgY29udGVudDwvVGFiPlxuICogPC9UYWJzPlxuICogYGBgXG4gKlxuICogKipMaW5rczoqKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy90YWJzIERvY3VtZW50YXRpb259XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vaHVic3BvdGRldi91aWUtdGFiYmVkLXByb2R1Y3QtY2Fyb3VzZWwgVGFicyBFeGFtcGxlfVxuICovXG5leHBvcnQgY29uc3QgVGFiID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnVGFiJyk7XG4vKipcbiAqIFRoZSBgSWxsdXN0cmF0aW9uYCBjb21wb25lbnQgcmVuZGVycyBhbiBpbGx1c3RyYXRpb24uXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvaWxsdXN0cmF0aW9uIElsbHVzdHJhdGlvbiBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgSWxsdXN0cmF0aW9uID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnSWxsdXN0cmF0aW9uJyk7XG4vKipcbiAqIFRoZSBgVG9vbHRpcGAgY29tcG9uZW50IHJlbmRlcnMgYSB0b29sdGlwIGZvciBhIGNvbXBvbmVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3Rvb2x0aXAgRG9jdW1lbnRhdGlvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IFRvb2x0aXAgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUb29sdGlwJyk7XG4vKipcbiAqIFRoZSBgU2VhcmNoSW5wdXRgIGNvbXBvbmVudCByZW5kZXJzIGEgc2VhcmNoIGlucHV0IGZpZWxkLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3NlYXJjaC1pbnB1dCBTZWFyY2hJbnB1dCBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgU2VhcmNoSW5wdXQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdTZWFyY2hJbnB1dCcpO1xuLyoqXG4gKiBUaGUgYFRpbWVJbnB1dGAgY29tcG9uZW50IHJlbmRlcnMgYW4gaW5wdXQgZmllbGQgd2hlcmUgYSB1c2VyIGNhbiBzZWxlY3QgYSB0aW1lLiBDb21tb25seSB1c2VkIHdpdGhpbiB0aGUgYEZvcm1gIGNvbXBvbmVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy90aW1lLWlucHV0IERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBUaW1lSW5wdXQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUaW1lSW5wdXQnKTtcbi8qKlxuICogVGhlIGBDdXJyZW5jeUlucHV0YCBjb21wb25lbnQgcmVuZGVycyBhIGN1cnJlbmN5IGlucHV0IGZpZWxkIHdpdGggcHJvcGVyIGZvcm1hdHRpbmcsXG4gKiBjdXJyZW5jeSBzeW1ib2xzLCBhbmQgbG9jYWxlLXNwZWNpZmljIGRpc3BsYXkgcGF0dGVybnMuIENvbW1vbmx5IHVzZWQgd2l0aGluIHRoZSBgRm9ybWAgY29tcG9uZW50LlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2N1cnJlbmN5LWlucHV0IERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBDdXJyZW5jeUlucHV0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ3VycmVuY3lJbnB1dCcpO1xuLyoqXG4gKiBUaGUgYElubGluZWAgY29tcG9uZW50IHNwcmVhZHMgYWxpZ25zIGl0cyBjaGlsZHJlbiBob3Jpem9udGFsbHkgKGFsb25nIHRoZSB4LWF4aXMpLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2lubGluZSBEb2NzfVxuICovIGV4cG9ydCBjb25zdCBJbmxpbmUgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdJbmxpbmUnKTtcbi8qKlxuICogVGhlIGBBdXRvR3JpZGAgY29tcG9uZW50IHJlbmRlcnMgYSByZXNwb25zaXZlIGdyaWQgbGF5b3V0IHRoYXQgYXV0b21hdGljYWxseSBhZGp1c3RzIHRoZSBudW1iZXIgb2YgY29sdW1ucyBiYXNlZCBvbiBhdmFpbGFibGUgc3BhY2UuIFVzZSB0aGlzIGNvbXBvbmVudCB0byBjcmVhdGUgZmxleGlibGUgZ3JpZCBsYXlvdXRzIGZvciBjYXJkcywgdGlsZXMsIG9yIG90aGVyIGNvbnRlbnQuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvc2ltcGxlLWdyaWQgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IEF1dG9HcmlkID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQXV0b0dyaWQnKTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBDUk0gQ09NUE9ORU5UU1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmV4cG9ydCBjb25zdCBDcm1Qcm9wZXJ0eUxpc3QgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdDcm1Qcm9wZXJ0eUxpc3QnKTtcbmV4cG9ydCBjb25zdCBDcm1Bc3NvY2lhdGlvblRhYmxlID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ3JtQXNzb2NpYXRpb25UYWJsZScpO1xuZXhwb3J0IGNvbnN0IENybURhdGFIaWdobGlnaHQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdDcm1EYXRhSGlnaGxpZ2h0Jyk7XG5leHBvcnQgY29uc3QgQ3JtUmVwb3J0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ3JtUmVwb3J0Jyk7XG5leHBvcnQgY29uc3QgQ3JtQXNzb2NpYXRpb25QaXZvdCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0NybUFzc29jaWF0aW9uUGl2b3QnKTtcbmV4cG9ydCBjb25zdCBDcm1Bc3NvY2lhdGlvblByb3BlcnR5TGlzdCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0NybUFzc29jaWF0aW9uUHJvcGVydHlMaXN0Jyk7XG5leHBvcnQgY29uc3QgQ3JtQXNzb2NpYXRpb25TdGFnZVRyYWNrZXIgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdDcm1Bc3NvY2lhdGlvblN0YWdlVHJhY2tlcicpO1xuZXhwb3J0IGNvbnN0IENybVNpbXBsZURlYWRsaW5lID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ3JtU2ltcGxlRGVhZGxpbmUnKTtcbmV4cG9ydCBjb25zdCBDcm1TdGFnZVRyYWNrZXIgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdDcm1TdGFnZVRyYWNrZXInKTtcbmV4cG9ydCBjb25zdCBDcm1TdGF0aXN0aWNzID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ3JtU3RhdGlzdGljcycpO1xuZXhwb3J0IGNvbnN0IENybUFjdGlvbkJ1dHRvbiA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0NybUFjdGlvbkJ1dHRvbicpO1xuZXhwb3J0IGNvbnN0IENybUFjdGlvbkxpbmsgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdDcm1BY3Rpb25MaW5rJyk7XG5leHBvcnQgY29uc3QgQ3JtQ2FyZEFjdGlvbnMgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdDcm1DYXJkQWN0aW9ucycpO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEFQUCBIT01FIENPTVBPTkVOVFNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vKipcbiAqIFRoZSBgSGVhZGVyQWN0aW9uc2AgY29tcG9uZW50IHJlbmRlcnMgYSBjb250YWluZXIgZm9yIGFjdGlvbiBidXR0b25zIGluIHRoZSBhcHAgaG9tZSBoZWFkZXIuIEl0IGFjY2VwdHMgYFByaW1hcnlIZWFkZXJBY3Rpb25CdXR0b25gIGFuZCBgU2Vjb25kYXJ5SGVhZGVyQWN0aW9uQnV0dG9uYCBhcyBjaGlsZHJlbi5cbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBIZWFkZXJBY3Rpb25zID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnSGVhZGVyQWN0aW9ucycpO1xuLyoqXG4gKiBUaGUgYFByaW1hcnlIZWFkZXJBY3Rpb25CdXR0b25gIGNvbXBvbmVudCByZW5kZXJzIGEgcHJpbWFyeSBhY3Rpb24gYnV0dG9uIGluIHRoZSBhcHAgaG9tZSBoZWFkZXIuIFRoaXMgYnV0dG9uIGlzIHN0eWxlZCBhcyB0aGUgbWFpbiBjYWxsLXRvLWFjdGlvbiBhbmQgb25seSBvbmUgc2hvdWxkIGJlIHVzZWQgcGVyIGBIZWFkZXJBY3Rpb25zYCBjb250YWluZXIuXG4gKlxuICovXG5leHBvcnQgY29uc3QgUHJpbWFyeUhlYWRlckFjdGlvbkJ1dHRvbiA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1ByaW1hcnlIZWFkZXJBY3Rpb25CdXR0b24nLCB7XG4gICAgZnJhZ21lbnRQcm9wczogWydvdmVybGF5J10sXG59KTtcbi8qKlxuICogVGhlIGBTZWNvbmRhcnlIZWFkZXJBY3Rpb25CdXR0b25gIGNvbXBvbmVudCByZW5kZXJzIGEgc2Vjb25kYXJ5IGFjdGlvbiBidXR0b24gaW4gdGhlIGFwcCBob21lIGhlYWRlci4gTXVsdGlwbGUgc2Vjb25kYXJ5IGFjdGlvbnMgY2FuIGJlIHVzZWQgYW5kIHRoZXkgd2lsbCBiZSBncm91cGVkIGFwcHJvcHJpYXRlbHkgaW4gdGhlIGhlYWRlci5cbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBTZWNvbmRhcnlIZWFkZXJBY3Rpb25CdXR0b24gPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdTZWNvbmRhcnlIZWFkZXJBY3Rpb25CdXR0b24nLCB7XG4gICAgZnJhZ21lbnRQcm9wczogWydvdmVybGF5J10sXG59KTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBBUFAgUEFHRSBDT01QT05FTlRTXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLyoqXG4gKiBUaGUgYFBhZ2VIZWFkZXJgIGNvbXBvbmVudCByZW5kZXJzIHRoZSBhY3Rpb25zIHdpdGhpbiB0aGUgaGVhZGVyIG9mIHRoZSBwYWdlLiBJdCBhY2NlcHRzIGBQcmltYXJ5QWN0aW9uYCBhbmQgYFNlY29uZGFyeUFjdGlvbnNgIGFzIGNoaWxkcmVuLlxuICpcbiAqICoqTGlua3M6KipcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL2FwcC1wYWdlLWNvbXBvbmVudHMvcGFnZS1oZWFkZXIgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFBhZ2VIZWFkZXIgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZUNvbXBvdW5kUmVhY3RDb21wb25lbnQoJ1BhZ2VIZWFkZXInLCB7XG4gICAgY29tcG91bmRDb21wb25lbnRQcm9wZXJ0aWVzOiB7XG4gICAgICAgIFByaW1hcnlBY3Rpb246IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1BhZ2VIZWFkZXJQcmltYXJ5QWN0aW9uJyksXG4gICAgICAgIFNlY29uZGFyeUFjdGlvbnM6IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1BhZ2VIZWFkZXJTZWNvbmRhcnlBY3Rpb25zJyksXG4gICAgICAgIExpbms6IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1BhZ2VIZWFkZXJMaW5rJyksXG4gICAgICAgIFBhZ2VMaW5rOiBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdQYWdlSGVhZGVyUGFnZUxpbmsnKSxcbiAgICB9LFxufSk7XG4vKipcbiAqIFRoZSAnUGFnZUJyZWFkY3J1bWJzJyBjb21wb25lbnQgcmVuZGVycyBhIGxpc3Qgb2YgbGlua3MgdG8gc2hvdyB0aGUgdXNlcidzIGN1cnJlbnQgbG9jYXRpb24gd2l0aGluIHRoZSBhcHAgYW5kIGFsbG93IHRoZW0gdG8gbmF2aWdhdGUgYmFjayB0byBwcmV2aW91cyBwYWdlcy5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvYXBwLXBhZ2UtY29tcG9uZW50cy9wYWdlLWJyZWFkY3J1bWJzIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBQYWdlQnJlYWRjcnVtYnMgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZUNvbXBvdW5kUmVhY3RDb21wb25lbnQoJ1BhZ2VCcmVhZGNydW1icycsIHtcbiAgICBjb21wb3VuZENvbXBvbmVudFByb3BlcnRpZXM6IHtcbiAgICAgICAgUGFnZUxpbms6IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1BhZ2VCcmVhZGNydW1ic1BhZ2VMaW5rJyksXG4gICAgICAgIEN1cnJlbnQ6IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1BhZ2VCcmVhZGNydW1ic0N1cnJlbnQnKSxcbiAgICB9LFxufSk7XG5leHBvcnQgY29uc3QgUGFnZUxpbmsgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdQYWdlTGluaycpO1xuZXhwb3J0IGNvbnN0IFBhZ2VUaXRsZSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1BhZ2VUaXRsZScpO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEVYUEVSSU1FTlRBTCBDT01QT05FTlRTXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLyoqXG4gKiBAZXhwZXJpbWVudGFsIFRoaXMgY29tcG9uZW50IGlzIGV4cGVyaW1lbnRhbC4gQXZvaWQgdXNpbmcgaXQgaW4gcHJvZHVjdGlvbiBkdWUgdG8gcG90ZW50aWFsIGJyZWFraW5nIGNoYW5nZXMuIFlvdXIgZmVlZGJhY2sgaXMgdmFsdWFibGUgZm9yIGltcHJvdmVtZW50cy4gU3RheSB0dW5lZCBmb3IgdXBkYXRlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IElmcmFtZSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0lmcmFtZScpO1xuLyoqXG4gKiBAZXhwZXJpbWVudGFsIFRoaXMgY29tcG9uZW50IGlzIGV4cGVyaW1lbnRhbC4gQXZvaWQgdXNpbmcgaXQgaW4gcHJvZHVjdGlvbiBkdWUgdG8gcG90ZW50aWFsIGJyZWFraW5nIGNoYW5nZXMuIFlvdXIgZmVlZGJhY2sgaXMgdmFsdWFibGUgZm9yIGltcHJvdmVtZW50cy4gU3RheSB0dW5lZCBmb3IgdXBkYXRlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IE1lZGlhT2JqZWN0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnTWVkaWFPYmplY3QnLCB7XG4gICAgZnJhZ21lbnRQcm9wczogWydpdGVtUmlnaHQnLCAnaXRlbUxlZnQnXSxcbn0pO1xuLyoqXG4gKiBAZXhwZXJpbWVudGFsIFRoaXMgY29tcG9uZW50IGlzIGV4cGVyaW1lbnRhbC4gQXZvaWQgdXNpbmcgaXQgaW4gcHJvZHVjdGlvbiBkdWUgdG8gcG90ZW50aWFsIGJyZWFraW5nIGNoYW5nZXMuIFlvdXIgZmVlZGJhY2sgaXMgdmFsdWFibGUgZm9yIGltcHJvdmVtZW50cy4gU3RheSB0dW5lZCBmb3IgdXBkYXRlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IFN0YWNrMiA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1N0YWNrMicpO1xuLyoqXG4gKiBAZXhwZXJpbWVudGFsIFRoaXMgY29tcG9uZW50IGlzIGV4cGVyaW1lbnRhbC4gQXZvaWQgdXNpbmcgaXQgaW4gcHJvZHVjdGlvbiBkdWUgdG8gcG90ZW50aWFsIGJyZWFraW5nIGNoYW5nZXMuIFlvdXIgZmVlZGJhY2sgaXMgdmFsdWFibGUgZm9yIGltcHJvdmVtZW50cy4gU3RheSB0dW5lZCBmb3IgdXBkYXRlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IENlbnRlciA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0NlbnRlcicpO1xuLyoqXG4gKiBAZXhwZXJpbWVudGFsIFRoaXMgY29tcG9uZW50IGlzIGV4cGVyaW1lbnRhbC4gQXZvaWQgdXNpbmcgaXQgaW4gcHJvZHVjdGlvbiBkdWUgdG8gcG90ZW50aWFsIGJyZWFraW5nIGNoYW5nZXMuIFlvdXIgZmVlZGJhY2sgaXMgdmFsdWFibGUgZm9yIGltcHJvdmVtZW50cy4gU3RheSB0dW5lZCBmb3IgdXBkYXRlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IEdyaWQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdHcmlkJyk7XG4vKipcbiAqIEBleHBlcmltZW50YWwgVGhpcyBjb21wb25lbnQgaXMgZXhwZXJpbWVudGFsLiBBdm9pZCB1c2luZyBpdCBpbiBwcm9kdWN0aW9uIGR1ZSB0byBwb3RlbnRpYWwgYnJlYWtpbmcgY2hhbmdlcy4gWW91ciBmZWVkYmFjayBpcyB2YWx1YWJsZSBmb3IgaW1wcm92ZW1lbnRzLiBTdGF5IHR1bmVkIGZvciB1cGRhdGVzLlxuICovXG5leHBvcnQgY29uc3QgR3JpZEl0ZW0gPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdHcmlkSXRlbScpO1xuLyoqXG4gKiBAZXhwZXJpbWVudGFsIFRoaXMgY29tcG9uZW50IGlzIGV4cGVyaW1lbnRhbC4gQXZvaWQgdXNpbmcgaXQgaW4gcHJvZHVjdGlvbiBkdWUgdG8gcG90ZW50aWFsIGJyZWFraW5nIGNoYW5nZXMuIFlvdXIgZmVlZGJhY2sgaXMgdmFsdWFibGUgZm9yIGltcHJvdmVtZW50cy4gU3RheSB0dW5lZCBmb3IgdXBkYXRlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IFNldHRpbmdzVmlldyA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1NldHRpbmdzVmlldycpO1xuLyoqXG4gKiBUaGUgYEV4cGFuZGFibGVUZXh0YCBjb21wb25lbnQgcmVuZGVycyBhIHRleHQgdGhhdCBjYW4gYmUgZXhwYW5kZWQgb3IgY29sbGFwc2VkIGJhc2VkIG9uIGEgbWF4aW11bSBoZWlnaHQuXG4gKlxuICogQGV4cGVyaW1lbnRhbCBUaGlzIGNvbXBvbmVudCBpcyBleHBlcmltZW50YWwuIEF2b2lkIHVzaW5nIGl0IGluIHByb2R1Y3Rpb24gZHVlIHRvIHBvdGVudGlhbCBicmVha2luZyBjaGFuZ2VzLiBZb3VyIGZlZWRiYWNrIGlzIHZhbHVhYmxlIGZvciBpbXByb3ZlbWVudHMuIFN0YXkgdHVuZWQgZm9yIHVwZGF0ZXMuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvZXhwYW5kYWJsZS10ZXh0IEV4cGFuZGFibGVUZXh0IERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBFeHBhbmRhYmxlVGV4dCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0V4cGFuZGFibGVUZXh0Jyk7XG4vKipcbiAqIFRoZSBgUG9wb3ZlcmAgY29tcG9uZW50IHJlbmRlcnMgYSBwb3BvdmVyIG92ZXJsYXkgdGhhdCBjYW4gY29udGFpbiBvdGhlciBjb21wb25lbnRzLlxuICpcbiAqIEBleHBlcmltZW50YWwgVGhpcyBjb21wb25lbnQgaXMgZXhwZXJpbWVudGFsLiBBdm9pZCB1c2luZyBpdCBpbiBwcm9kdWN0aW9uIGR1ZSB0byBwb3RlbnRpYWwgYnJlYWtpbmcgY2hhbmdlcy4gWW91ciBmZWVkYmFjayBpcyB2YWx1YWJsZSBmb3IgaW1wcm92ZW1lbnRzLiBTdGF5IHR1bmVkIGZvciB1cGRhdGVzLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3BvcG92ZXIgUG9wb3ZlciBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgUG9wb3ZlciA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1BvcG92ZXInKTtcbi8qKlxuICogQGV4cGVyaW1lbnRhbCBUaGlzIGNvbXBvbmVudCBpcyBleHBlcmltZW50YWwuIEF2b2lkIHVzaW5nIGl0IGluIHByb2R1Y3Rpb24gZHVlIHRvIHBvdGVudGlhbCBicmVha2luZyBjaGFuZ2VzLiBZb3VyIGZlZWRiYWNrIGlzIHZhbHVhYmxlIGZvciBpbXByb3ZlbWVudHMuIFN0YXkgdHVuZWQgZm9yIHVwZGF0ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBGaWxlSW5wdXQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdGaWxlSW5wdXQnKTtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IFJlYWN0UmVuZGVyTW9ja3NDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcbi8qKlxuICogQ3JlYXRlcyBhIG1vY2stYXdhcmUgaG9vayBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIG1vY2sgdGhlIG9yaWdpbmFsIGhvb2sgZnVuY3Rpb24uXG4gKiBUaGUgbW9jay1hd2FyZSBob29rIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIHRoZSBtb2NrZWQgaG9vayBmdW5jdGlvbiBpZiBhIG1vY2sgaXMgZm91bmQsIG90aGVyd2lzZSBpdCB3aWxsIHJldHVybiB0aGUgb3JpZ2luYWwgaG9vayBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gaG9va05hbWUgVGhlIG5hbWUgb2YgdGhlIGhvb2sgdG8gbW9jayB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBrZXkgaW4gdGhlIE1vY2tzIGludGVyZmFjZVxuICogQHBhcmFtIG9yaWdpbmFsSG9va0Z1bmN0aW9uIFRoZSBvcmlnaW5hbCBob29rIGZ1bmN0aW9uIHRvIGNhbGwgaWYgbm8gbW9jayBpcyBmb3VuZFxuICogQHJldHVybnMgVGhlIG1vY2tlZCBob29rIGZ1bmN0aW9uIG9yIHRoZSBvcmlnaW5hbCBob29rIGZ1bmN0aW9uIGlmIG5vIG1vY2sgaXMgZm91bmRcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZU1vY2tBd2FyZUhvb2sgPSAoaG9va05hbWUsIG9yaWdpbmFsSG9va0Z1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgdXNlV3JhcHBlciA9ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vY2tzQ29udGV4dCA9IHVzZU1vY2tzQ29udGV4dCgpO1xuICAgICAgICBpZiAoIW1vY2tzQ29udGV4dCkge1xuICAgICAgICAgICAgLy8gSWYgbm8gbW9ja3MgYXJlIHByb3ZpZGVkLCBjYWxsIHRoZSBvcmlnaW5hbCBob29rIGZ1bmN0aW9uXG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxIb29rRnVuY3Rpb24oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBtb2NrcyB9ID0gbW9ja3NDb250ZXh0O1xuICAgICAgICBjb25zdCBtb2NrSG9vayA9IG1vY2tzW2hvb2tOYW1lXTtcbiAgICAgICAgaWYgKCFtb2NrSG9vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbGxlZ2FsIFN0YXRlOiBNb2NrIGZvciBob29rICR7aG9va05hbWV9IG5vdCBmb3VuZC5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW9ja0hvb2soLi4uYXJncyk7XG4gICAgfTtcbiAgICByZXR1cm4gdXNlV3JhcHBlcjtcbn07XG4vKipcbiAqIEEgaG9vayB0aGF0IHByb3ZpZGVzIGFjY2VzcyB0byB0aGUgTW9ja3MgY29udGV4dC5cbiAqIFJldHVybnMgdGhlIG1vY2tzIGNvbnRleHQgdmFsdWUgaWYgaW5zaWRlIGEgTW9ja3NDb250ZXh0UHJvdmlkZXIsIG90aGVyd2lzZSByZXR1cm5zIG51bGwuXG4gKlxuICogQHJldHVybnMgVGhlIG1vY2tzIGNvbnRleHQgdmFsdWUgb3IgbnVsbCBpZiBub3QgaW4gYSB0ZXN0IGVudmlyb25tZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTW9ja3NDb250ZXh0KCkge1xuICAgIHJldHVybiB1c2VDb250ZXh0KFJlYWN0UmVuZGVyTW9ja3NDb250ZXh0KTtcbn1cbi8qKlxuICogQSBSZWFjdCBjb21wb25lbnQgdGhhdCBwcm92aWRlcyB0aGUgTW9ja3MgY29udGV4dCB0aGF0IGNhbiBiZSB1c2VkIHRvIHByb3ZpZGUgbW9ja3MgdG8gdGhlIG1vY2stYXdhcmUgaG9vayBmdW5jdGlvbnMuXG4gKlxuICogQHBhcmFtIGNoaWxkcmVuIFRoZSBjaGlsZHJlbiB0byByZW5kZXIuXG4gKiBAcmV0dXJucyBUaGUgY2hpbGRyZW4gd3JhcHBlZCBpbiB0aGUgTW9ja3MgY29udGV4dCBwcm92aWRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IE1vY2tzQ29udGV4dFByb3ZpZGVyID0gUmVhY3RSZW5kZXJNb2Nrc0NvbnRleHQuUHJvdmlkZXI7XG4vKipcbiAqIFN0YWJpbGl6ZXMgYSB2YWx1ZSdzIHJlZmVyZW5jZSBpZGVudGl0eSBhY3Jvc3MgcmUtcmVuZGVycyB1c2luZyBkZWVwXG4gKiBjb21wYXJpc29uIHZpYSBKU09OLnN0cmluZ2lmeS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZVZhbHVlKHZhbHVlKSB7XG4gICAgY29uc3Qgc3RhYmxlUmVmID0gdXNlUmVmKHtcbiAgICAgICAga2V5OiBKU09OLnN0cmluZ2lmeSh2YWx1ZSksXG4gICAgICAgIHZhbHVlLFxuICAgIH0pO1xuICAgIGNvbnN0IGtleSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICBpZiAoa2V5ICE9PSBzdGFibGVSZWYuY3VycmVudC5rZXkpIHtcbiAgICAgICAgc3RhYmxlUmVmLmN1cnJlbnQgPSB7IGtleSwgdmFsdWUgfTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YWJsZVJlZi5jdXJyZW50LnZhbHVlO1xufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuZnVuY3Rpb24gbm9ybWFsaXplRXJyb3IoZXJyLCBkZWZhdWx0TWVzc2FnZSkge1xuICAgIHJldHVybiBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyciA6IG5ldyBFcnJvcihkZWZhdWx0TWVzc2FnZSk7XG59XG4vKipcbiAqIFNoYXJlZCBmZXRjaC9yZWZldGNoL2NsZWFudXAvYWJvcnQgbGlmZWN5Y2xlIGZvciBkYXRhIGhvb2tzLlxuICpcbiAqIE1hbmFnZXM6XG4gKiAtIEluaXRpYWwgZmV0Y2ggb24gbW91bnQgYW5kIHdoZW4gZGVwcyBjaGFuZ2VcbiAqIC0gQ2FuY2VsbGF0aW9uIG9mIGluLWZsaWdodCBmZXRjaGVzIG9uIHVubW91bnQgb3IgZGVwcyBjaGFuZ2VcbiAqIC0gUmVmZXRjaCB3aXRoIGFib3J0IHNpZ25hbCBhbmQgY2xlYW51cCB0cmFja2luZ1xuICogLSBFcnJvciBub3JtYWxpemF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VGZXRjaExpZmVjeWNsZSh7IGZldGNoRm4sIGNhbGxiYWNrcywgZGVwcywgZGVmYXVsdEVycm9yTWVzc2FnZSA9ICdBbiBlcnJvciBvY2N1cnJlZCcsIH0pIHtcbiAgICAvLyBTdG9yZSBsYXRlc3QgdmVyc2lvbnMgaW4gcmVmcyB0byBhdm9pZCBzdGFsZSBjbG9zdXJlcyBpbiByZWZldGNoXG4gICAgY29uc3QgZmV0Y2hGblJlZiA9IHVzZVJlZihmZXRjaEZuKTtcbiAgICBmZXRjaEZuUmVmLmN1cnJlbnQgPSBmZXRjaEZuO1xuICAgIGNvbnN0IGNhbGxiYWNrc1JlZiA9IHVzZVJlZihjYWxsYmFja3MpO1xuICAgIGNhbGxiYWNrc1JlZi5jdXJyZW50ID0gY2FsbGJhY2tzO1xuICAgIGNvbnN0IGRlZmF1bHRFcnJvck1lc3NhZ2VSZWYgPSB1c2VSZWYoZGVmYXVsdEVycm9yTWVzc2FnZSk7XG4gICAgZGVmYXVsdEVycm9yTWVzc2FnZVJlZi5jdXJyZW50ID0gZGVmYXVsdEVycm9yTWVzc2FnZTtcbiAgICAvLyBUcmFjayBpbi1mbGlnaHQgcmVmZXRjaCB0byBzdXBwb3J0IGNhbmNlbGxhdGlvblxuICAgIGNvbnN0IHJlZmV0Y2hBYm9ydFJlZiA9IHVzZVJlZihudWxsKTtcbiAgICAvLyBUcmFjayByZWZldGNoIGNsZWFudXAgZnVuY3Rpb24gdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICBjb25zdCByZWZldGNoQ2xlYW51cFJlZiA9IHVzZVJlZihudWxsKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGxldCBjbGVhbnVwID0gbnVsbDtcbiAgICAgICAgY29uc3Qgc2lnbmFsID0geyBjYW5jZWxsZWQ6IGZhbHNlLCBpc1JlZmV0Y2g6IGZhbHNlIH07XG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB7IGlzUmVmZXRjaDogZmFsc2UgfTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzUmVmLmN1cnJlbnQub25TdGFydChjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaEZuUmVmLmN1cnJlbnQoc2lnbmFsKTtcbiAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3NSZWYuY3VycmVudC5vblN1Y2Nlc3MocmVzdWx0LmRhdGEsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhbnVwID0gcmVzdWx0LmNsZWFudXAgPz8gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzUmVmLmN1cnJlbnQub25FcnJvcihub3JtYWxpemVFcnJvcihlcnIsIGRlZmF1bHRFcnJvck1lc3NhZ2VSZWYuY3VycmVudCksIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZmV0Y2hEYXRhKCk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2lnbmFsLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAvLyBDYWxsIGNsZWFudXAgZnVuY3Rpb24gdG8gcmVsZWFzZSByZXNvdXJjZXNcbiAgICAgICAgICAgIGlmIChjbGVhbnVwKSB7XG4gICAgICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2xlYW4gdXAgYW55IGFjdGl2ZSByZWZldGNoIHN1YnNjcmlwdGlvblxuICAgICAgICAgICAgaWYgKHJlZmV0Y2hDbGVhbnVwUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICByZWZldGNoQ2xlYW51cFJlZi5jdXJyZW50KCk7XG4gICAgICAgICAgICAgICAgcmVmZXRjaENsZWFudXBSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSwgZGVwcyk7XG4gICAgY29uc3QgcmVmZXRjaCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgLy8gQ2FuY2VsIGFueSBpbi1mbGlnaHQgcmVmZXRjaFxuICAgICAgICBpZiAocmVmZXRjaEFib3J0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJlZmV0Y2hBYm9ydFJlZi5jdXJyZW50LmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2xlYW4gdXAgb2xkIHJlZmV0Y2ggc3Vic2NyaXB0aW9uIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzXG4gICAgICAgIGlmIChyZWZldGNoQ2xlYW51cFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICByZWZldGNoQ2xlYW51cFJlZi5jdXJyZW50KCk7XG4gICAgICAgICAgICByZWZldGNoQ2xlYW51cFJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBDcmVhdGUgbmV3IGFib3J0IHNpZ25hbCBmb3IgdGhpcyByZWZldGNoXG4gICAgICAgIGNvbnN0IGFib3J0U2lnbmFsID0geyBjYW5jZWxsZWQ6IGZhbHNlLCBpc1JlZmV0Y2g6IHRydWUgfTtcbiAgICAgICAgcmVmZXRjaEFib3J0UmVmLmN1cnJlbnQgPSBhYm9ydFNpZ25hbDtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHsgaXNSZWZldGNoOiB0cnVlIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjYWxsYmFja3NSZWYuY3VycmVudC5vblN0YXJ0KGNvbnRleHQpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2hGblJlZi5jdXJyZW50KGFib3J0U2lnbmFsKTtcbiAgICAgICAgICAgIGlmICghYWJvcnRTaWduYWwuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzUmVmLmN1cnJlbnQub25TdWNjZXNzKHJlc3VsdC5kYXRhLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAvLyBTdG9yZSBjbGVhbnVwIGZvciBuZXh0IHJlZmV0Y2ggb3IgdW5tb3VudFxuICAgICAgICAgICAgICAgIHJlZmV0Y2hDbGVhbnVwUmVmLmN1cnJlbnQgPSByZXN1bHQuY2xlYW51cCA/PyBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgY2FuY2VsbGVkLCBjbGVhbiB1cCBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY2xlYW51cCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuY2xlYW51cCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoIWFib3J0U2lnbmFsLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrc1JlZi5jdXJyZW50Lm9uRXJyb3Iobm9ybWFsaXplRXJyb3IoZXJyLCBkZWZhdWx0RXJyb3JNZXNzYWdlUmVmLmN1cnJlbnQpLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIC8vIENsZWFyIHRoZSBhYm9ydCByZWYgaWYgdGhpcyBpcyBzdGlsbCB0aGUgY3VycmVudCByZWZldGNoXG4gICAgICAgICAgICBpZiAocmVmZXRjaEFib3J0UmVmLmN1cnJlbnQgPT09IGFib3J0U2lnbmFsKSB7XG4gICAgICAgICAgICAgICAgcmVmZXRjaEFib3J0UmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIHJldHVybiB7IHJlZmV0Y2ggfTtcbn1cbiIsIi8vIFR5cGUgZ3VhcmQgZm9yIENybVByb3BlcnRpZXNSZXNwb25zZVxuZnVuY3Rpb24gaXNDcm1Qcm9wZXJ0aWVzUmVzcG9uc2UoZGF0YSkge1xuICAgIGlmIChcbiAgICAvLyBDb25maXJtIHRoZSBkYXRhIGlzIGEgZGVmaW5lZCBvYmplY3RcbiAgICBkYXRhID09PSBudWxsIHx8XG4gICAgICAgIHR5cGVvZiBkYXRhICE9PSAnb2JqZWN0JyB8fFxuICAgICAgICAvLyBDb25maXJtIGFsbCBrZXlzIGFuZCB2YWx1ZXMgYXJlIHN0cmluZ3MsIG9yIG51bGxcbiAgICAgICAgIU9iamVjdC5rZXlzKGRhdGEpLmV2ZXJ5KChrZXkpID0+IHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgICAodHlwZW9mIGRhdGFba2V5XSA9PT0gJ3N0cmluZycgfHwgZGF0YVtrZXldID09PSBudWxsKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydCBjb25zdCBmZXRjaENybVByb3BlcnRpZXMgPSBhc3luYyAocHJvcGVydHlOYW1lcywgcHJvcGVydGllc1VwZGF0ZWRDYWxsYmFjaywgb3B0aW9ucykgPT4ge1xuICAgIGxldCByZXNwb25zZTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHRyeSB7XG4gICAgICAgIHJlc3BvbnNlID0gYXdhaXQgc2VsZi5mZXRjaENybVByb3BlcnRpZXMocHJvcGVydHlOYW1lcywgcHJvcGVydGllc1VwZGF0ZWRDYWxsYmFjaywgb3B0aW9ucyk7XG4gICAgICAgIHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIE9ubHkgaGFuZGxlIG5ldHdvcmsvcGFyc2luZyBlcnJvcnMsIG5vdCBvdXIgdmFsaWRhdGlvbiBlcnJvcnNcbiAgICAgICAgdGhyb3cgZXJyb3IgaW5zdGFuY2VvZiBFcnJvclxuICAgICAgICAgICAgPyBlcnJvclxuICAgICAgICAgICAgOiBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBDUk0gcHJvcGVydGllczogVW5rbm93biBlcnJvcicpO1xuICAgIH1cbiAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihyZXN1bHQuZXJyb3IpO1xuICAgIH1cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGZldGNoIENSTSBwcm9wZXJ0aWVzOiAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XG4gICAgfVxuICAgIGlmICghaXNDcm1Qcm9wZXJ0aWVzUmVzcG9uc2UocmVzdWx0LmRhdGEpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCByZXNwb25zZSBmb3JtYXQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQgeyB1c2VNZW1vLCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRmV0Y2hMaWZlY3ljbGUgfSBmcm9tIFwiLi4vLi4vaG9va3MvdXRpbHMvdXNlRmV0Y2hMaWZlY3ljbGUuanNcIjtcbmltcG9ydCB7IGNyZWF0ZU1vY2tBd2FyZUhvb2ssIHVzZVN0YWJsZVZhbHVlLCB9IGZyb20gXCIuLi8uLi9pbnRlcm5hbC9ob29rLXV0aWxzLmpzXCI7XG5pbXBvcnQgeyBmZXRjaENybVByb3BlcnRpZXMgfSBmcm9tIFwiLi4vdXRpbHMvZmV0Y2hDcm1Qcm9wZXJ0aWVzLmpzXCI7XG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgcHJvcGVydGllczoge30sXG4gICAgZXJyb3I6IG51bGwsXG4gICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgIGlzUmVmZXRjaGluZzogZmFsc2UsXG59O1xuZnVuY3Rpb24gY3JtUHJvcGVydGllc1JlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnRkVUQ0hfU1RBUlQnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdGRVRDSF9TVUNDRVNTJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ0ZFVENIX0VSUk9SJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczoge30sXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdSRUZFVENIX1NUQVJUJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNSZWZldGNoaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnUkVGRVRDSF9TVUNDRVNTJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNSZWZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ1JFRkVUQ0hfRVJST1InOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc1JlZmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuY29uc3QgREVGQVVMVF9PUFRJT05TID0ge307XG4vKipcbiAqIEEgaG9vayBmb3IgdXNpbmcgYW5kIG1hbmFnaW5nIENSTSBwcm9wZXJ0aWVzLlxuICovXG5mdW5jdGlvbiB1c2VDcm1Qcm9wZXJ0aWVzSW50ZXJuYWwocHJvcGVydHlOYW1lcywgb3B0aW9ucyA9IERFRkFVTFRfT1BUSU9OUykge1xuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihjcm1Qcm9wZXJ0aWVzUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcbiAgICAvLyBTb3J0IHByb3BlcnR5IG5hbWVzIHNvIHRoYXQgb3JkZXIgZG9lc24ndCBtYXR0ZXIgZm9yIGNhY2hlIGtleXNcbiAgICBjb25zdCBzb3J0ZWRQcm9wZXJ0eU5hbWVzID0gdXNlTWVtbygoKSA9PiBBcnJheS5pc0FycmF5KHByb3BlcnR5TmFtZXMpID8gWy4uLnByb3BlcnR5TmFtZXNdLnNvcnQoKSA6IHByb3BlcnR5TmFtZXMsIFtwcm9wZXJ0eU5hbWVzXSk7XG4gICAgY29uc3Qgc3RhYmxlUHJvcGVydHlOYW1lcyA9IHVzZVN0YWJsZVZhbHVlKHNvcnRlZFByb3BlcnR5TmFtZXMpO1xuICAgIGNvbnN0IHN0YWJsZU9wdGlvbnMgPSB1c2VTdGFibGVWYWx1ZShvcHRpb25zKTtcbiAgICBjb25zdCB7IHJlZmV0Y2ggfSA9IHVzZUZldGNoTGlmZWN5Y2xlKHtcbiAgICAgICAgZmV0Y2hGbjogKHNpZ25hbCkgPT4gZmV0Y2hDcm1Qcm9wZXJ0aWVzKHN0YWJsZVByb3BlcnR5TmFtZXMsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXNpZ25hbC5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHNpZ25hbC5pc1JlZmV0Y2ggPyAnUkVGRVRDSF9TVUNDRVNTJyA6ICdGRVRDSF9TVUNDRVNTJyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogZGF0YSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgc3RhYmxlT3B0aW9ucyksXG4gICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgb25TdGFydDogKHsgaXNSZWZldGNoIH0pID0+IGRpc3BhdGNoKHsgdHlwZTogaXNSZWZldGNoID8gJ1JFRkVUQ0hfU1RBUlQnIDogJ0ZFVENIX1NUQVJUJyB9KSxcbiAgICAgICAgICAgIG9uU3VjY2VzczogKGRhdGEsIHsgaXNSZWZldGNoIH0pID0+IGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBpc1JlZmV0Y2ggPyAnUkVGRVRDSF9TVUNDRVNTJyA6ICdGRVRDSF9TVUNDRVNTJyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBkYXRhLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBvbkVycm9yOiAoZXJyb3IsIHsgaXNSZWZldGNoIH0pID0+IGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBpc1JlZmV0Y2ggPyAnUkVGRVRDSF9FUlJPUicgOiAnRkVUQ0hfRVJST1InLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGVycm9yLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0sXG4gICAgICAgIGRlcHM6IFtzdGFibGVQcm9wZXJ0eU5hbWVzLCBzdGFibGVPcHRpb25zXSxcbiAgICAgICAgZGVmYXVsdEVycm9yTWVzc2FnZTogJ0ZhaWxlZCB0byBmZXRjaCBDUk0gcHJvcGVydGllcycsXG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlZmV0Y2gsXG4gICAgfTtcbn1cbmV4cG9ydCBjb25zdCB1c2VDcm1Qcm9wZXJ0aWVzID0gY3JlYXRlTW9ja0F3YXJlSG9vaygndXNlQ3JtUHJvcGVydGllcycsIHVzZUNybVByb3BlcnRpZXNJbnRlcm5hbCk7XG4iLCJleHBvcnQgY29uc3QgREVGQVVMVF9QQUdFX1NJWkUgPSAxMDtcbi8qKlxuICogQ2FsY3VsYXRlIHBhZ2luYXRpb24gZmxhZ3MgYmFzZWQgb24gY3VycmVudCBwYWdlIGFuZCBBUEkgaGFzTW9yZSBmbGFnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVQYWdpbmF0aW9uRmxhZ3MoY3VycmVudFBhZ2UsIGhhc01vcmUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBoYXNOZXh0UGFnZTogaGFzTW9yZSxcbiAgICAgICAgaGFzUHJldmlvdXNQYWdlOiBjdXJyZW50UGFnZSA+IDEsXG4gICAgfTtcbn1cbiIsImZ1bmN0aW9uIGlzQXNzb2NpYXRpb25zUmVzcG9uc2UoZGF0YSkge1xuICAgIGlmIChkYXRhID09PSBudWxsIHx8XG4gICAgICAgIHR5cGVvZiBkYXRhICE9PSAnb2JqZWN0JyB8fFxuICAgICAgICAhQXJyYXkuaXNBcnJheShkYXRhLnJlc3VsdHMpIHx8XG4gICAgICAgIHR5cGVvZiBkYXRhLmhhc01vcmUgIT09ICdib29sZWFuJyB8fFxuICAgICAgICB0eXBlb2YgZGF0YS5uZXh0T2Zmc2V0ICE9PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBkYXRhLnJlc3VsdHMuZXZlcnkoKHJlc3VsdCkgPT4gcmVzdWx0ICE9PSBudWxsICYmXG4gICAgICAgIHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnICYmXG4gICAgICAgIHR5cGVvZiByZXN1bHQudG9PYmplY3RJZCA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgQXJyYXkuaXNBcnJheShyZXN1bHQuYXNzb2NpYXRpb25UeXBlcykgJiZcbiAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMgIT09IG51bGwgJiZcbiAgICAgICAgdHlwZW9mIHJlc3VsdC5wcm9wZXJ0aWVzID09PSAnb2JqZWN0Jyk7XG59XG5leHBvcnQgY29uc3QgZmV0Y2hBc3NvY2lhdGlvbnMgPSBhc3luYyAocmVxdWVzdCwgb3B0aW9ucykgPT4ge1xuICAgIGxldCByZXNwb25zZTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHRyeSB7XG4gICAgICAgIHJlc3BvbnNlID0gYXdhaXQgc2VsZi5mZXRjaEFzc29jaWF0aW9ucyhyZXF1ZXN0LCBvcHRpb25zKTtcbiAgICAgICAgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXJyb3IgaW5zdGFuY2VvZiBFcnJvclxuICAgICAgICAgICAgPyBlcnJvclxuICAgICAgICAgICAgOiBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBhc3NvY2lhdGlvbnM6IFVua25vd24gZXJyb3InKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzdWx0LmVycm9yKTtcbiAgICB9XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBmZXRjaCBhc3NvY2lhdGlvbnM6ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcbiAgICB9XG4gICAgaWYgKCFpc0Fzc29jaWF0aW9uc1Jlc3BvbnNlKHJlc3VsdC5kYXRhKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmVzcG9uc2UgZm9ybWF0Jyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgICAgICBjbGVhbnVwOiByZXN1bHQuY2xlYW51cCB8fCAoKCkgPT4geyB9KSxcbiAgICB9O1xufTtcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRmV0Y2hMaWZlY3ljbGUgfSBmcm9tIFwiLi4vLi4vaG9va3MvdXRpbHMvdXNlRmV0Y2hMaWZlY3ljbGUuanNcIjtcbmltcG9ydCB7IGNyZWF0ZU1vY2tBd2FyZUhvb2ssIHVzZVN0YWJsZVZhbHVlLCB9IGZyb20gXCIuLi8uLi9pbnRlcm5hbC9ob29rLXV0aWxzLmpzXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVQYWdpbmF0aW9uRmxhZ3MsIERFRkFVTFRfUEFHRV9TSVpFLCB9IGZyb20gXCIuLi8uLi91dGlscy9wYWdpbmF0aW9uLmpzXCI7XG5pbXBvcnQgeyBmZXRjaEFzc29jaWF0aW9ucyB9IGZyb20gXCIuLi91dGlscy9mZXRjaEFzc29jaWF0aW9ucy5qc1wiO1xuZnVuY3Rpb24gY3JlYXRlSW5pdGlhbFN0YXRlKHBhZ2VTaXplKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdWx0czogW10sXG4gICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICAgIGlzUmVmZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgICAgICBwYWdlU2l6ZSxcbiAgICAgICAgaGFzTW9yZTogZmFsc2UsXG4gICAgICAgIGN1cnJlbnRPZmZzZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgbmV4dE9mZnNldDogdW5kZWZpbmVkLFxuICAgICAgICBvZmZzZXRIaXN0b3J5OiBbXSxcbiAgICB9O1xufVxuZnVuY3Rpb24gYXNzb2NpYXRpb25zUmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdGRVRDSF9TVEFSVCc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ0ZFVENIX1NVQ0NFU1MnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc3VsdHM6IGFjdGlvbi5wYXlsb2FkLnJlc3VsdHMsXG4gICAgICAgICAgICAgICAgaGFzTW9yZTogYWN0aW9uLnBheWxvYWQuaGFzTW9yZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50T2Zmc2V0OiBhY3Rpb24ucGF5bG9hZC5jdXJyZW50T2Zmc2V0LFxuICAgICAgICAgICAgICAgIG5leHRPZmZzZXQ6IGFjdGlvbi5wYXlsb2FkLm5leHRPZmZzZXQsXG4gICAgICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdGRVRDSF9FUlJPUic6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIHJlc3VsdHM6IFtdLFxuICAgICAgICAgICAgICAgIGhhc01vcmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRPZmZzZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBuZXh0T2Zmc2V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdORVhUX1BBR0UnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZTogc3RhdGUuY3VycmVudFBhZ2UgKyAxLFxuICAgICAgICAgICAgICAgIG9mZnNldEhpc3Rvcnk6IHN0YXRlLmN1cnJlbnRPZmZzZXQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICA/IFsuLi5zdGF0ZS5vZmZzZXRIaXN0b3J5LCBzdGF0ZS5jdXJyZW50T2Zmc2V0XVxuICAgICAgICAgICAgICAgICAgICA6IHN0YXRlLm9mZnNldEhpc3RvcnksXG4gICAgICAgICAgICAgICAgY3VycmVudE9mZnNldDogc3RhdGUubmV4dE9mZnNldCxcbiAgICAgICAgICAgICAgICBuZXh0T2Zmc2V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdQUkVWSU9VU19QQUdFJzoge1xuICAgICAgICAgICAgY29uc3QgbmV3UGFnZSA9IE1hdGgubWF4KDEsIHN0YXRlLmN1cnJlbnRQYWdlIC0gMSk7XG4gICAgICAgICAgICBjb25zdCBuZXdIaXN0b3J5ID0gWy4uLnN0YXRlLm9mZnNldEhpc3RvcnldO1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNPZmZzZXQgPSBuZXdIaXN0b3J5LnBvcCgpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZTogbmV3UGFnZSxcbiAgICAgICAgICAgICAgICBvZmZzZXRIaXN0b3J5OiBuZXdIaXN0b3J5LFxuICAgICAgICAgICAgICAgIGN1cnJlbnRPZmZzZXQ6IHByZXZpb3VzT2Zmc2V0LFxuICAgICAgICAgICAgICAgIG5leHRPZmZzZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnUkVTRVQnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZTogMSxcbiAgICAgICAgICAgICAgICByZXN1bHRzOiBbXSxcbiAgICAgICAgICAgICAgICBoYXNNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgICAgICBjdXJyZW50T2Zmc2V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgbmV4dE9mZnNldDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIG9mZnNldEhpc3Rvcnk6IFtdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnUkVGRVRDSF9TVEFSVCc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzUmVmZXRjaGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ1JFRkVUQ0hfU1VDQ0VTUyc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzUmVmZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVzdWx0czogYWN0aW9uLnBheWxvYWQucmVzdWx0cyxcbiAgICAgICAgICAgICAgICBoYXNNb3JlOiBhY3Rpb24ucGF5bG9hZC5oYXNNb3JlLFxuICAgICAgICAgICAgICAgIG5leHRPZmZzZXQ6IGFjdGlvbi5wYXlsb2FkLm5leHRPZmZzZXQsXG4gICAgICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdSRUZFVENIX0VSUk9SJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNSZWZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cbmNvbnN0IERFRkFVTFRfT1BUSU9OUyA9IHt9O1xuLyoqXG4gKiBBIGhvb2sgdG8gZmV0Y2ggYW5kIG1hbmFnZSBhc3NvY2lhdGlvbnMgYmV0d2VlbiBDUk0gb2JqZWN0cyB3aXRoIHBhZ2luYXRpb24gc3VwcG9ydC5cbiAqL1xuZnVuY3Rpb24gdXNlQXNzb2NpYXRpb25zSW50ZXJuYWwoY29uZmlnLCBvcHRpb25zID0gREVGQVVMVF9PUFRJT05TKSB7XG4gICAgY29uc3QgcGFnZVNpemUgPSBjb25maWc/LnBhZ2VMZW5ndGggPz8gREVGQVVMVF9QQUdFX1NJWkU7XG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGFzc29jaWF0aW9uc1JlZHVjZXIsIHVzZU1lbW8oKCkgPT4gY3JlYXRlSW5pdGlhbFN0YXRlKHBhZ2VTaXplKSwgW3BhZ2VTaXplXSkpO1xuICAgIGNvbnN0IHN0YWJsZUNvbmZpZyA9IHVzZVN0YWJsZVZhbHVlKGNvbmZpZyk7XG4gICAgY29uc3Qgc3RhYmxlT3B0aW9ucyA9IHVzZVN0YWJsZVZhbHVlKG9wdGlvbnMpO1xuICAgIC8vIFBhZ2luYXRpb24gYWN0aW9uc1xuICAgIGNvbnN0IG5leHRQYWdlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjb25zdCBwYWdpbmF0aW9uRmxhZ3MgPSBjYWxjdWxhdGVQYWdpbmF0aW9uRmxhZ3Moc3RhdGUuY3VycmVudFBhZ2UsIHN0YXRlLmhhc01vcmUpO1xuICAgICAgICBpZiAocGFnaW5hdGlvbkZsYWdzLmhhc05leHRQYWdlKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdORVhUX1BBR0UnIH0pO1xuICAgICAgICB9XG4gICAgfSwgW3N0YXRlLmN1cnJlbnRQYWdlLCBzdGF0ZS5oYXNNb3JlXSk7XG4gICAgY29uc3QgcHJldmlvdXNQYWdlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjb25zdCBwYWdpbmF0aW9uRmxhZ3MgPSBjYWxjdWxhdGVQYWdpbmF0aW9uRmxhZ3Moc3RhdGUuY3VycmVudFBhZ2UsIHN0YXRlLmhhc01vcmUpO1xuICAgICAgICBpZiAocGFnaW5hdGlvbkZsYWdzLmhhc1ByZXZpb3VzUGFnZSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnUFJFVklPVVNfUEFHRScgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbc3RhdGUuY3VycmVudFBhZ2UsIHN0YXRlLmhhc01vcmVdKTtcbiAgICBjb25zdCByZXNldCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgcGFnaW5hdGlvbkZsYWdzID0gY2FsY3VsYXRlUGFnaW5hdGlvbkZsYWdzKHN0YXRlLmN1cnJlbnRQYWdlLCBzdGF0ZS5oYXNNb3JlKTtcbiAgICAgICAgLy8gT25seSByZXNldCB0byBmaXJzdCBwYWdlIGlmIHdlJ3JlIG5vdCBhbHJlYWR5IG9uIHRoZSBmaXJzdCBwYWdlXG4gICAgICAgIGlmIChwYWdpbmF0aW9uRmxhZ3MuaGFzUHJldmlvdXNQYWdlKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRVNFVCcgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbc3RhdGUuY3VycmVudFBhZ2UsIHN0YXRlLmhhc01vcmVdKTtcbiAgICBjb25zdCB7IHJlZmV0Y2ggfSA9IHVzZUZldGNoTGlmZWN5Y2xlKHtcbiAgICAgICAgZmV0Y2hGbjogKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgICAgICB0b09iamVjdFR5cGU6IHN0YWJsZUNvbmZpZz8udG9PYmplY3RUeXBlLFxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHN0YWJsZUNvbmZpZz8ucHJvcGVydGllcyxcbiAgICAgICAgICAgICAgICBwYWdlTGVuZ3RoOiBwYWdlU2l6ZSxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IHN0YXRlLmN1cnJlbnRPZmZzZXQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoQXNzb2NpYXRpb25zKHJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzVG9Gb3JtYXQ6IHN0YWJsZU9wdGlvbnMucHJvcGVydGllc1RvRm9ybWF0LFxuICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdPcHRpb25zOiBzdGFibGVPcHRpb25zLmZvcm1hdHRpbmdPcHRpb25zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgb25TdGFydDogKHsgaXNSZWZldGNoIH0pID0+IGRpc3BhdGNoKHsgdHlwZTogaXNSZWZldGNoID8gJ1JFRkVUQ0hfU1RBUlQnIDogJ0ZFVENIX1NUQVJUJyB9KSxcbiAgICAgICAgICAgIG9uU3VjY2VzczogKGRhdGEsIHsgaXNSZWZldGNoIH0pID0+IGRpc3BhdGNoKGlzUmVmZXRjaFxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUkVGRVRDSF9TVUNDRVNTJyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0czogZGF0YS5yZXN1bHRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzTW9yZTogZGF0YS5oYXNNb3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE9mZnNldDogZGF0YS5uZXh0T2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0ZFVENIX1NVQ0NFU1MnLFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiBkYXRhLnJlc3VsdHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNNb3JlOiBkYXRhLmhhc01vcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0T2Zmc2V0OiBkYXRhLm5leHRPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50T2Zmc2V0OiBzdGF0ZS5jdXJyZW50T2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgb25FcnJvcjogKGVycm9yLCB7IGlzUmVmZXRjaCB9KSA9PiBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogaXNSZWZldGNoID8gJ1JFRkVUQ0hfRVJST1InIDogJ0ZFVENIX0VSUk9SJyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBlcnJvcixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9LFxuICAgICAgICBkZXBzOiBbXG4gICAgICAgICAgICBzdGFibGVDb25maWcsXG4gICAgICAgICAgICBzdGFibGVPcHRpb25zLFxuICAgICAgICAgICAgc3RhdGUuY3VycmVudFBhZ2UsXG4gICAgICAgICAgICBzdGF0ZS5jdXJyZW50T2Zmc2V0LFxuICAgICAgICAgICAgcGFnZVNpemUsXG4gICAgICAgIF0sXG4gICAgICAgIGRlZmF1bHRFcnJvck1lc3NhZ2U6ICdGYWlsZWQgdG8gZmV0Y2ggYXNzb2NpYXRpb25zJyxcbiAgICB9KTtcbiAgICAvLyBDYWxjdWxhdGUgcGFnaW5hdGlvbiBmbGFnc1xuICAgIGNvbnN0IHBhZ2luYXRpb25GbGFncyA9IGNhbGN1bGF0ZVBhZ2luYXRpb25GbGFncyhzdGF0ZS5jdXJyZW50UGFnZSwgc3RhdGUuaGFzTW9yZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdWx0czogc3RhdGUucmVzdWx0cyxcbiAgICAgICAgZXJyb3I6IHN0YXRlLmVycm9yLFxuICAgICAgICBpc0xvYWRpbmc6IHN0YXRlLmlzTG9hZGluZyxcbiAgICAgICAgaXNSZWZldGNoaW5nOiBzdGF0ZS5pc1JlZmV0Y2hpbmcsXG4gICAgICAgIHJlZmV0Y2gsXG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgIGhhc05leHRQYWdlOiBwYWdpbmF0aW9uRmxhZ3MuaGFzTmV4dFBhZ2UsXG4gICAgICAgICAgICBoYXNQcmV2aW91c1BhZ2U6IHBhZ2luYXRpb25GbGFncy5oYXNQcmV2aW91c1BhZ2UsXG4gICAgICAgICAgICBjdXJyZW50UGFnZTogc3RhdGUuY3VycmVudFBhZ2UsXG4gICAgICAgICAgICBwYWdlU2l6ZTogc3RhdGUucGFnZVNpemUsXG4gICAgICAgICAgICBuZXh0UGFnZSxcbiAgICAgICAgICAgIHByZXZpb3VzUGFnZSxcbiAgICAgICAgICAgIHJlc2V0LFxuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnQgY29uc3QgdXNlQXNzb2NpYXRpb25zID0gY3JlYXRlTW9ja0F3YXJlSG9vaygndXNlQXNzb2NpYXRpb25zJywgdXNlQXNzb2NpYXRpb25zSW50ZXJuYWwpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBodWJzcG90LCBMb2FkaW5nU3Bpbm5lciwgU3BhY2VyLCBFcnJvclN0YXRlLCBGbGV4LCBIZWFkaW5nLCBUZXh0QXJlYSwgTGluaywgVGV4dCwgQnV0dG9uLCBJbmxpbmUsIFRpbGUgfSBmcm9tICdAaHVic3BvdC91aS1leHRlbnNpb25zJztcbmltcG9ydCB7IHVzZUNybVByb3BlcnRpZXMsIHVzZUFzc29jaWF0aW9ucyB9IGZyb20gJ0BodWJzcG90L3VpLWV4dGVuc2lvbnMvY3JtJztcblxuaHVic3BvdC5leHRlbmQ8J2NybS5yZWNvcmQudGFiJz4oKHsgY29udGV4dCB9KSA9PiAoXG4gIDxFeHRlbnNpb24gY29udGV4dD17Y29udGV4dH0gLz5cbikpO1xuXG5jb25zdCB1cmwgPSAnaHR0cHM6Ly8zNC4xMzAuOTYuNDQubmlwLmlvL3dlYmhvb2snO1xuXG5jb25zdCBFeHRlbnNpb24gPSAoeyBjb250ZXh0IH0pID0+IHtcbiAgY29uc3QgW3Jlc3BvbnNlSnNvbiwgc2V0UmVzcG9uc2VKc29uXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cbiAgY29uc3QgeyBwcm9wZXJ0aWVzOiBjb250YWN0LCBpc0xvYWRpbmc6IGNvbnRhY3RzTG9hZGluZywgZXJyb3I6IGNvbnRhY3RzRXJyb3IgfSA9IHVzZUNybVByb3BlcnRpZXMoW1xuICAgICdmaXJzdG5hbWUnLFxuICAgICdsYXN0bmFtZScsXG4gICAgJ2VtYWlsJyxcbiAgICAnaHNfb2JqZWN0X2lkJyxcbiAgXSk7XG5cbiAgY29uc3QgeyByZXN1bHRzOiBkZWFsUmVzdWx0cywgaXNMb2FkaW5nOiBkZWFsc0xvYWRpbmcsIGVycm9yOiBkZWFsc0Vycm9yIH0gPSB1c2VBc3NvY2lhdGlvbnMoe1xuICAgIHRvT2JqZWN0VHlwZTogJzAtMycsXG4gICAgcGFnZUxlbmd0aDogMTAwLFxuICAgIHByb3BlcnRpZXM6IFtcbiAgICAgICdoc19vYmplY3RfaWQnLFxuICAgICAgJ2RlYWxuYW1lJyxcbiAgICAgICdodWJzcG90X293bmVyX2lkJyxcbiAgICBdLFxuICB9KTtcblxuICBpZiAoY29udGFjdHNMb2FkaW5nKSByZXR1cm4gPExvYWRpbmdTcGlubmVyIGxhYmVsPVwiTG9hZGluZy4uLlwiIC8+O1xuICBpZiAoY29udGFjdHNFcnJvcikgcmV0dXJuIDxFcnJvclN0YXRlIHRpdGxlPVwiRXJyb3JcIj48VGV4dD57Y29udGFjdHNFcnJvci5tZXNzYWdlfTwvVGV4dD48L0Vycm9yU3RhdGU+O1xuICBpZiAoZGVhbHNMb2FkaW5nKSByZXR1cm4gPExvYWRpbmdTcGlubmVyIGxhYmVsPVwiTG9hZGluZyBtZXNzYWdlcy4uLlwiIC8+O1xuICBpZiAoZGVhbHNFcnJvcikgcmV0dXJuIDxFcnJvclN0YXRlIHRpdGxlPVwiRXJyb3JcIj48VGV4dD57ZGVhbHNFcnJvci5tZXNzYWdlfTwvVGV4dD48L0Vycm9yU3RhdGU+O1xuXG4gIGNvbnN0IGRlYWxzID0gKGRlYWxSZXN1bHRzPy5tYXAociA9PiByLnByb3BlcnRpZXMpID8/IFtdKTtcblxuICBjb25zdCBhcHBDYXJkRG9jc0xpbmsgPVxuICAgICdodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy9hcHAtY2FyZHMvb3ZlcnZpZXcnO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGJ1dHRvbkNsaWNrKFxuICAgIGNvbnRhY3Q6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bGw+LFxuICAgIGRlYWxzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudWxsPltdLFxuICAgIHNldFJlc3BvbnNlSnNvbjogKHZhbDogc3RyaW5nKSA9PiB2b2lkXG4gICkge1xuICAgIGNvbnNvbGUubG9nKFwiQnV0dG9uIGNsaWNrZWQhXCIpO1xuICAgIHNldFJlc3BvbnNlSnNvbihcIkxvYWRpbmcuLi5cIik7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaHVic3BvdC5mZXRjaCh1cmwsIHtcbiAgICAgICAgdGltZW91dDogMl8wMDAsXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGJvZHk6IHtjb250YWN0LCBkZWFsc30sXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiU2VydmVyIHJlc3BvbnNlOlwiLCByZXNwb25zZS5zdGF0dXMpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgc2V0UmVzcG9uc2VKc29uKEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiLCBlcnIpO1xuICAgICAgc2V0UmVzcG9uc2VKc29uKGBFcnJvcjogJHtlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogU3RyaW5nKGVycil9YCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRpbmc+SGkge2NvbnRleHQudXNlci5maXJzdE5hbWV9ITwvSGVhZGluZz5cbiAgICAgIDxTcGFjZXIgc2l6ZT1cImV4dHJhLXNtYWxsXCIgLz5cbiAgICAgIDxUZXh0PlRoaXMgaXMgYSB0ZW1wbGF0ZSBhcHAgY2FyZC4gIEl0J3MganVzdCBhbiBleGFtcGxlIG9mIHNvbWUgdGhpbmdzIHlvdSBjYW4gZG8gd2l0aCBhbiBhcHAgY2FyZC4gIFRoaXMgYXBwIGNhcmQgY2FuIHJ1biAxMDAlIGZvciBmcmVlIG9uIGEgZnJlZSBIdWJTcG90IGFjY291bnQuPC9UZXh0PlxuICAgICAgPFRleHQ+VGhlIGJ1dHRvbiBiZWxvdyBzZW5kcyBhIFBPU1QgcmVxdWVzdCB0byB7dXJsfSwgYW5kIHNlbmRzIHRoZSBjb250YWN0IGFuZCBhc3NvY2lhdGVkIGRlYWwgZGF0YS48L1RleHQ+XG5cbiAgICAgIDxUaWxlPlxuICAgICAgICA8SW5saW5lIGdhcD1cImV4dHJhLXNtYWxsXCI+XG4gICAgICAgICAgPFRleHQgZm9ybWF0PXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PkNvbnRhY3Q6PC9UZXh0PlxuICAgICAgICAgIDxUZXh0Pntjb250YWN0LmZpcnN0bmFtZX0ge2NvbnRhY3QubGFzdG5hbWV9ICh7Y29udGFjdC5lbWFpbH0pPC9UZXh0PlxuICAgICAgICA8L0lubGluZT5cbiAgICAgICAgPFNwYWNlciBzaXplPVwibWVkaXVtXCIgLz5cbiAgICAgICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgPFRleHQgZm9ybWF0PXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PkRlYWxzOjwvVGV4dD5cbiAgICAgICAgICB7ZGVhbHMubWFwKGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaHNfZGVhbF9pZCA9IGQuaHNfb2JqZWN0X2lkID8/IFwiXCI7XG4gICAgICAgICAgICBjb25zdCBoc19kZWFsX25hbWUgPSBkLmRlYWxuYW1lID8/IFwiXCI7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8VGV4dD57aHNfZGVhbF9uYW1lfSAoe2hzX2RlYWxfaWR9KTwvVGV4dD5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvVGlsZT5cblxuICAgICAgPFRpbGU+XG4gICAgICAgIDxGbGV4IGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGJ1dHRvbkNsaWNrKGNvbnRhY3QsIGRlYWxzLCBzZXRSZXNwb25zZUpzb24pfT5cbiAgICAgICAgICAgIENsaWNrIE1lXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRmxleD5cbiAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgbGFiZWw9XCJSZXNwb25zZVwiXG4gICAgICAgICAgbmFtZT1cInJlc3BvbnNlXCJcbiAgICAgICAgICB2YWx1ZT17cmVzcG9uc2VKc29ufVxuICAgICAgICAgIHJlc2l6ZT1cInZlcnRpY2FsXCJcbiAgICAgICAgICByb3dzPXsxMH1cbiAgICAgICAgLz5cbiAgICAgIDwvVGlsZT5cbiAgICA8Lz5cbiAgKTtcbn07Il0sIm5hbWVzIjpbInVybCIsIlNlcnZlcmxlc3NFeGVjdXRpb25TdGF0dXMiLCJSZWFjdCIsInJlcXVpcmUkJDAiLCJSZWFjdERlYnVnQ3VycmVudEZyYW1lIiwic2VsZiIsImpzeFJ1bnRpbWVNb2R1bGUiLCJjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCIsIl9qc3giLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVJlZiIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwiREVGQVVMVF9PUFRJT05TIiwidXNlUmVkdWNlciIsInVzZU1lbW8iLCJwYWdpbmF0aW9uRmxhZ3MiLCJ1c2VTdGF0ZSIsImNvbnRhY3QiLCJkZWFscyIsInNldFJlc3BvbnNlSnNvbiJdLCJtYXBwaW5ncyI6Ijs7QUFJQSxRQUFNLG9CQUFvQixNQUFNLE9BQU8sU0FBUyxlQUM1QyxLQUFLLGlDQUFpQztBQUkxQyxRQUFNLG9CQUFvQjtBQUFBLElBQ3RCLFFBQVE7QUFBQSxNQUNKLE9BQU8sQ0FBQyxTQUFTO0FBQ2IsZ0JBQVEsSUFBSSxJQUFJO0FBQUEsTUFDcEI7QUFBQSxNQUNBLE1BQU0sQ0FBQyxTQUFTO0FBQ1osZ0JBQVEsS0FBSyxJQUFJO0FBQUEsTUFDckI7QUFBQSxNQUNBLE1BQU0sQ0FBQyxTQUFTO0FBQ1osZ0JBQVEsS0FBSyxJQUFJO0FBQUEsTUFDckI7QUFBQSxNQUNBLE9BQU8sQ0FBQyxTQUFTO0FBQ2IsZ0JBQVEsTUFBTSxJQUFJO0FBQUEsTUFDdEI7QUFBQSxJQUNSO0FBQUEsSUFDSSxXQUFXLE1BQU07QUFBQSxJQUVqQjtBQUFBO0FBQUEsSUFFQSx1QkFBdUIsTUFBTTtBQUFBLElBRTdCO0FBQUEsRUFDSjtBQUtPLFFBQU0sbUJBQW1CLE1BQU07QUFDbEMsV0FBTyxrQkFBaUIsSUFDbEIsT0FDQTtBQUFBLEVBQ1Y7QUN2Q0EsUUFBTSxZQUFZLGlCQUFnQixFQUFHO0FBQzlCLFdBQVMsV0FBVyxNQUFNLFNBQVM7QUFDdEMsV0FBTyxLQUFLLFdBQVcsTUFBTSxPQUFPO0FBQUEsRUFDeEM7QUFDTyxXQUFTLE1BQU1BLE1BQUssU0FBUztBQUNoQyxXQUFPLEtBQUssUUFBUUEsTUFBSyxPQUFPO0FBQUEsRUFDcEM7QUFDTyxRQUFNLFVBQVU7QUFBQSxJQUNuQixRQUFRO0FBQUEsSUFDUjtBQUFBLElBQ0E7QUFBQSxFQUNKO0FDVE8sTUFBSTtBQUNYLEdBQUMsU0FBVUMsNEJBQTJCO0FBQ2xDLElBQUFBLDJCQUEwQixTQUFTLElBQUk7QUFDdkMsSUFBQUEsMkJBQTBCLE9BQU8s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LElBQUksSUFBSTtBQUNoQkMseUJBQWdCLEtBQUssVUFBVSxNQUFNLE1BQU0sQ0FBQyxDQUFDO0FBQUEsTUFDL0MsU0FBUyxLQUFLO0FBQ1osZ0JBQVEsTUFBTSx3QkFBd0IsR0FBRztBQUN6Q0EseUJBQWdCLFVBQVUsZUFBZSxRQUFRLElBQUksVUFBVSxPQUFPLEdBQUcsQ0FBQyxFQUFFO0FBQUEsTUFDOUU7QUFBQSxJQUNGO0FBRUEsV0FDRSxnQkFBQW5CLE9BQUEsY0FBQUEsT0FBQSxVQUFBLE1BQ0UsZ0JBQUFBLE9BQUEsY0FBQyxTQUFBLE1BQVEsT0FBSSxRQUFRLEtBQUssV0FBVSxHQUFDLHdDQUNwQyxRQUFBLEVBQU8sTUFBSyxjQUFBLENBQWMsd0NBQzFCLE1BQUEsTUFBSyxnS0FBOEosR0FDcEssZ0JBQUFBLE9BQUEsY0FBQyxNQUFBLE1BQUssNkNBQTBDLEtBQUksbURBQWlELEdBRXJHLGdCQUFBQSxPQUFBLGNBQUMsTUFBQSxNQUNDLGdCQUFBQSxPQUFBLGNBQUMsUUFBQSxFQUFPLEtBQUksaUJBQ1YsZ0JBQUFBLE9BQUEsY0FBQyxNQUFBLEVBQUssUUFBUSxFQUFFLFlBQVksT0FBQSxFQUFPLEdBQUcsVUFBUSxHQUM5QyxnQkFBQUEsT0FBQSxjQUFDLE1BQUEsTUFBTSxRQUFRLFdBQVUsS0FBRSxRQUFRLFVBQVMsTUFBRyxRQUFRLE9BQU0sR0FBQyxDQUNoRSx3Q0FDQyxRQUFBLEVBQU8sTUFBSyxVQUFTLEdBQ3RCLGdCQUFBQSxPQUFBLGNBQUMsTUFBQSxFQUFLLFdBQVUsU0FBQSx3Q0FDYixNQUFBLEVBQUssUUFBUSxFQUFFLFlBQVksU0FBTyxHQUFHLFFBQU0sR0FDM0MsTUFBTSxJQUFJLENBQUEsTUFBSztBQUNkLFlBQU0sYUFBYSxFQUFFLGdCQUFnQjtBQUNyQyxZQUFNLGVBQWUsRUFBRSxZQUFZO0FBQ25DLGFBQ0UsZ0JBQUFBLE9BQUEsY0FBQyxNQUFBLE1BQU0sY0FBYSxNQUFHLFlBQVcsR0FBQztBQUFBLElBRXZDLENBQUMsQ0FDSCxDQUNGLHdDQUVDLE1BQUEsTUFDQyxnQkFBQUEsT0FBQSxjQUFDLFFBQUssU0FBUSxTQUFBLHdDQUNYLFFBQUEsRUFBTyxTQUFTLE1BQU0sWUFBWSxTQUFTLE9BQU8sZUFBZSxFQUFBLEdBQUcsVUFFckUsQ0FDRixHQUNBLGdCQUFBQSxPQUFBO0FBQUEsTUFBQztBQUFBLE1BQUE7QUFBQSxRQUNDLE9BQU07QUFBQSxRQUNOLE1BQUs7QUFBQSxRQUNMLE9BQU87QUFBQSxRQUNQLFFBQU87QUFBQSxRQUNQLE1BQU07QUFBQSxNQUFBO0FBQUEsSUFBQSxDQUVWLENBQ0Y7QUFBQSxFQUVKOzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMCwxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxM119
