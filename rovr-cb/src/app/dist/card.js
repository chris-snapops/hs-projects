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
  function fetch(url, options) {
    return self.hsFetch(url, options);
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
  createAndRegisterRemoteReactComponent("Button", {
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
  createAndRegisterRemoteReactComponent("Heading");
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
  createAndRegisterRemoteReactComponent("Tile");
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
  const Box = createAndRegisterRemoteReactComponent("Box");
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
  hubspot.extend(({ context, actions }) => /* @__PURE__ */ React2.createElement(SMSHistory, { context, actions }));
  function parseHubSpotDate(val) {
    if (!val) return /* @__PURE__ */ new Date();
    const num = Number(val);
    if (!isNaN(num) && String(val).length > 10) return new Date(num);
    const d = new Date(String(val));
    return isNaN(d.getTime()) ? /* @__PURE__ */ new Date() : d;
  }
  function formatTime(date) {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }
  function formatDateHeader(date) {
    const today = /* @__PURE__ */ new Date();
    if (date.toDateString() === today.toDateString()) return "Today";
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    if (date.toDateString() === yesterday.toDateString()) return "Yesterday";
    return date.toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" });
  }
  function stripHTML(html) {
    return html.replace(/<[^>]*>/g, "").trim();
  }
  function getVisualWidth(str) {
    const widths = {
      A: 2.5,
      B: 2.5,
      C: 2.5,
      D: 2.78,
      E: 2.27,
      F: 2.27,
      G: 2.94,
      H: 2.78,
      I: 1.19,
      J: 2,
      K: 2.63,
      L: 2.17,
      M: 3.13,
      N: 2.94,
      O: 2.94,
      P: 2.27,
      Q: 2.94,
      R: 2.5,
      S: 2.27,
      T: 2.17,
      U: 2.78,
      V: 2.5,
      W: 3.57,
      X: 2.5,
      Y: 2.38,
      Z: 2.38,
      a: 2,
      b: 2.27,
      c: 2,
      d: 2.38,
      e: 2.17,
      f: 1.47,
      g: 2.17,
      h: 2.17,
      i: 1.02,
      j: 0.88,
      k: 2,
      l: 0.83,
      m: 3.33,
      n: 2.17,
      o: 2.27,
      p: 2.27,
      q: 2.27,
      r: 1.39,
      s: 1.79,
      t: 1.39,
      u: 2.17,
      v: 2.17,
      w: 2.94,
      x: 2,
      y: 2.08,
      z: 1.72,
      " ": 1,
      ".": 0.8,
      ",": 0.8,
      ":": 0.9,
      ";": 0.9,
      "!": 1,
      "?": 2,
      "'": 0.8,
      '"': 1.4,
      "-": 1.3,
      "–": 2,
      "—": 2.8,
      "(": 1.3,
      ")": 1.3,
      "[": 1.3,
      "]": 1.3,
      "/": 1.5,
      "|": 0.7
    };
    return [...str].reduce((acc, char) => acc + (widths[char] ?? 2.27), 0) * 0.52 - 2;
  }
  const MessageBubble = ({ body, time, isOutgoing }) => {
    const lines = body.split("\n");
    const maxVisualWidth = Math.max(...lines.map(getVisualWidth));
    const cols = Math.min(Math.ceil(maxVisualWidth), 50) || 1;
    const rows = Math.min(
      lines.reduce((acc, l) => acc + Math.max(1, Math.ceil(getVisualWidth(l) / cols)), 0),
      20
    );
    const timeLabel = /* @__PURE__ */ React2.createElement(Text, { variant: "microcopy" }, time);
    return /* @__PURE__ */ React2.createElement(Inline, { justify: isOutgoing ? "end" : "between", align: "end" }, /* @__PURE__ */ React2.createElement(Inline, { align: "end", gap: "extra-small" }, /* @__PURE__ */ React2.createElement(TextArea, { label: "", name: "", cols, rows, resize: "none", readOnly: true, value: body }), timeLabel));
  };
  const SMSHistory = ({ context, actions }) => {
    const { results, isLoading, error } = useAssociations({
      toObjectType: "0-18",
      pageLength: 100,
      properties: [
        "hs_communication_body",
        "hs_communication_channel_type",
        "hs_timestamp",
        "communication_direction",
        "hubspot_owner_id"
      ]
    });
    if (isLoading) return /* @__PURE__ */ React2.createElement(LoadingSpinner, { label: "Loading messages..." });
    if (error) return /* @__PURE__ */ React2.createElement(ErrorState, { title: "Error" }, /* @__PURE__ */ React2.createElement(Text, null, error.message));
    const smsMessages = (results ?? []).filter((r) => r.properties.hs_communication_channel_type === "SMS").sort(
      (a, b) => parseHubSpotDate(b.properties.hs_timestamp).getTime() - parseHubSpotDate(a.properties.hs_timestamp).getTime()
    );
    if (smsMessages.length === 0) {
      return /* @__PURE__ */ React2.createElement(Flex, { direction: "column", alignItems: "center", padding: "medium" }, /* @__PURE__ */ React2.createElement(Text, null, "No SMS history found."));
    }
    let lastDateHeader = "";
    return /* @__PURE__ */ React2.createElement(Flex, { direction: "column", gap: "extra-small" }, smsMessages.map((msg) => {
      const date = parseHubSpotDate(msg.properties.hs_timestamp);
      const dateHeader = formatDateHeader(date);
      const showSeparator = dateHeader !== lastDateHeader;
      if (showSeparator) lastDateHeader = dateHeader;
      const isOutgoing = msg.properties.communication_direction === "OUTBOUND";
      const body = stripHTML(
        (msg.properties.hs_communication_body ?? "").replaceAll('</p><p style="margin:0;">', "\n")
      );
      return /* @__PURE__ */ React2.createElement(Box, { key: msg.toObjectId }, showSeparator && /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(Spacer, { size: "small" }), /* @__PURE__ */ React2.createElement(Inline, { justify: "center" }, /* @__PURE__ */ React2.createElement(Text, null, dateHeader))), /* @__PURE__ */ React2.createElement(MessageBubble, { body, time: formatTime(date), isOutgoing }));
    }));
  };
})(React, RemoteUI);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZXMiOlsiLi4vY2FyZHMvbm9kZV9tb2R1bGVzL0BodWJzcG90L3VpLWV4dGVuc2lvbnMvZGlzdC9pbnRlcm5hbC9nbG9iYWwtdXRpbHMuanMiLCIuLi9jYXJkcy9ub2RlX21vZHVsZXMvQGh1YnNwb3QvdWktZXh0ZW5zaW9ucy9kaXN0L2h1YnNwb3QuanMiLCIuLi9jYXJkcy9ub2RlX21vZHVsZXMvQGh1YnNwb3QvdWktZXh0ZW5zaW9ucy9kaXN0L3NoYXJlZC90eXBlcy9odHRwLXJlcXVlc3RzLmpzIiwiLi4vY2FyZHMvbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC1qc3gtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIi4uL2NhcmRzL25vZGVfbW9kdWxlcy9yZWFjdC9qc3gtcnVudGltZS5qcyIsIi4uL2NhcmRzL25vZGVfbW9kdWxlcy9AaHVic3BvdC91aS1leHRlbnNpb25zL2Rpc3Qvc2hhcmVkL3V0aWxzL3JlbW90ZS1jb21wb25lbnQtcmVnaXN0cnkuanMiLCIuLi9jYXJkcy9ub2RlX21vZHVsZXMvQGh1YnNwb3QvdWktZXh0ZW5zaW9ucy9kaXN0L3NoYXJlZC9yZW1vdGVDb21wb25lbnRzLmpzIiwiLi4vY2FyZHMvbm9kZV9tb2R1bGVzL0BodWJzcG90L3VpLWV4dGVuc2lvbnMvZGlzdC9pbnRlcm5hbC9ob29rLXV0aWxzLmpzIiwiLi4vY2FyZHMvbm9kZV9tb2R1bGVzL0BodWJzcG90L3VpLWV4dGVuc2lvbnMvZGlzdC9ob29rcy91dGlscy91c2VGZXRjaExpZmVjeWNsZS5qcyIsIi4uL2NhcmRzL25vZGVfbW9kdWxlcy9AaHVic3BvdC91aS1leHRlbnNpb25zL2Rpc3QvdXRpbHMvcGFnaW5hdGlvbi5qcyIsIi4uL2NhcmRzL25vZGVfbW9kdWxlcy9AaHVic3BvdC91aS1leHRlbnNpb25zL2Rpc3QvY3JtL3V0aWxzL2ZldGNoQXNzb2NpYXRpb25zLmpzIiwiLi4vY2FyZHMvbm9kZV9tb2R1bGVzL0BodWJzcG90L3VpLWV4dGVuc2lvbnMvZGlzdC9jcm0vaG9va3MvdXNlQXNzb2NpYXRpb25zLmpzIiwiLi4vY2FyZHMvY2FyZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQgaXMgYSBIdWJTcG90IGV4dGVuc2lvbiB3b3JrZXIuXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBjdXJyZW50IGVudmlyb25tZW50IGlzIGEgSHViU3BvdCBleHRlbnNpb24gd29ya2VyLlxuICovXG5jb25zdCBpc1J1bm5pbmdJbldvcmtlciA9ICgpID0+IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHNlbGYuX19IVUJTUE9UX0VYVEVOU0lPTl9XT1JLRVJfXyA9PT0gdHJ1ZTtcbi8qKlxuICogQSBmYWtlIHdvcmtlciBnbG9iYWxzIG9iamVjdCBmb3IgdXNlIGluIHRlc3QgZW52aXJvbm1lbnRzLlxuICovXG5jb25zdCBmYWtlV29ya2VyR2xvYmFscyA9IHtcbiAgICBsb2dnZXI6IHtcbiAgICAgICAgZGVidWc6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5mbzogKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2FybjogKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGRhdGEpO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgZXh0ZW5kX1YyOiAoKSA9PiB7XG4gICAgICAgIC8vIE5vLW9wIGluIHRlc3QgZW52aXJvbm1lbnRcbiAgICB9LFxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3Igd2UgYXJlIG5vdCB1c2luZyB0aGUgd29ya2VyIGVuZHBvaW50IGluIHRlc3RzIGVudi5cbiAgICBfX3VzZUV4dGVuc2lvbkNvbnRleHQ6ICgpID0+IHtcbiAgICAgICAgLy8gTm8tb3AgaW4gdGVzdCBlbnZpcm9ubWVudFxuICAgIH0sXG59O1xuLyoqXG4gKiBHZXRzIHRoZSB3b3JrZXIgZ2xvYmFscyBvYmplY3QgZm9yIHRoZSBjdXJyZW50IGVudmlyb25tZW50LlxuICogQHJldHVybnMgVGhlIHdvcmtlciBnbG9iYWxzIG9iamVjdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGdldFdvcmtlckdsb2JhbHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGlzUnVubmluZ0luV29ya2VyKClcbiAgICAgICAgPyBzZWxmXG4gICAgICAgIDogZmFrZVdvcmtlckdsb2JhbHM7XG59O1xuIiwiaW1wb3J0IHsgZ2V0V29ya2VyR2xvYmFscyB9IGZyb20gXCIuL2ludGVybmFsL2dsb2JhbC11dGlscy5qc1wiO1xuY29uc3QgZXh0ZW5kX1YyID0gZ2V0V29ya2VyR2xvYmFscygpLmV4dGVuZF9WMjtcbmV4cG9ydCBmdW5jdGlvbiBzZXJ2ZXJsZXNzKG5hbWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gc2VsZi5zZXJ2ZXJsZXNzKG5hbWUsIG9wdGlvbnMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoKHVybCwgb3B0aW9ucykge1xuICAgIHJldHVybiBzZWxmLmhzRmV0Y2godXJsLCBvcHRpb25zKTtcbn1cbmV4cG9ydCBjb25zdCBodWJzcG90ID0ge1xuICAgIGV4dGVuZDogZXh0ZW5kX1YyLFxuICAgIHNlcnZlcmxlc3MsXG4gICAgZmV0Y2gsXG59O1xuIiwiLyoqXG4gKiBAY2F0ZWdvcnkgU2VydmVybGVzc1xuICovXG5leHBvcnQgdmFyIFNlcnZlcmxlc3NFeGVjdXRpb25TdGF0dXM7XG4oZnVuY3Rpb24gKFNlcnZlcmxlc3NFeGVjdXRpb25TdGF0dXMpIHtcbiAgICBTZXJ2ZXJsZXNzRXhlY3V0aW9uU3RhdHVzW1wiU3VjY2Vzc1wiXSA9IFwiU1VDQ0VTU1wiO1xuICAgIFNlcnZlcmxlc3NFeGVjdXRpb25TdGF0dXNbXCJFcnJvclwiXSA9IFwiRVJST1JcIjtcbn0pKFNlcnZlcmxlc3NFeGVjdXRpb25TdGF0dXMgfHwgKFNlcnZlcmxlc3NFeGVjdXRpb25TdGF0dXMgPSB7fSkpO1xuIiwiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubWVtbycpO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cblxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBTdHJpbmcoaXRlbSk7XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxudmFyIGVuYWJsZUNhY2hlRWxlbWVudCA9IGZhbHNlO1xudmFyIGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nID0gZmFsc2U7IC8vIE5vIGtub3duIGJ1Z3MsIGJ1dCBuZWVkcyBwZXJmb3JtYW5jZSB0ZXN0aW5nXG5cbnZhciBlbmFibGVMZWdhY3lIaWRkZW4gPSBmYWxzZTsgLy8gRW5hYmxlcyB1bnN0YWJsZV9hdm9pZFRoaXNGYWxsYmFjayBmZWF0dXJlIGluIEZpYmVyXG4vLyBzdHVmZi4gSW50ZW5kZWQgdG8gZW5hYmxlIFJlYWN0IGNvcmUgbWVtYmVycyB0byBtb3JlIGVhc2lseSBkZWJ1ZyBzY2hlZHVsaW5nXG4vLyBpc3N1ZXMgaW4gREVWIGJ1aWxkcy5cblxudmFyIGVuYWJsZURlYnVnVHJhY2luZyA9IGZhbHNlOyAvLyBUcmFjayB3aGljaCBGaWJlcihzKSBzY2hlZHVsZSByZW5kZXIgd29yay5cblxudmFyIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0U7XG5cbntcbiAgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1vZHVsZS5yZWZlcmVuY2UnKTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IGVuYWJsZURlYnVnVHJhY2luZyAgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCBlbmFibGVMZWdhY3lIaWRkZW4gIHx8IHR5cGUgPT09IFJFQUNUX09GRlNDUkVFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICB8fCBlbmFibGVDYWNoZUVsZW1lbnQgIHx8IGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBUaGlzIG5lZWRzIHRvIGluY2x1ZGUgYWxsIHBvc3NpYmxlIG1vZHVsZSByZWZlcmVuY2Ugb2JqZWN0XG4gICAgLy8gdHlwZXMgc3VwcG9ydGVkIGJ5IGFueSBGbGlnaHQgY29uZmlndXJhdGlvbiBhbnl3aGVyZSBzaW5jZVxuICAgIC8vIHdlIGRvbid0IGtub3cgd2hpY2ggRmxpZ2h0IGJ1aWxkIHRoaXMgd2lsbCBlbmQgdXAgYmVpbmcgdXNlZFxuICAgIC8vIHdpdGguXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSB8fCB0eXBlLmdldE1vZHVsZUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBkaXNwbGF5TmFtZSA9IG91dGVyVHlwZS5kaXNwbGF5TmFtZTtcblxuICBpZiAoZGlzcGxheU5hbWUpIHtcbiAgICByZXR1cm4gZGlzcGxheU5hbWU7XG4gIH1cblxuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lO1xufSAvLyBLZWVwIGluIHN5bmMgd2l0aCByZWFjdC1yZWNvbmNpbGVyL2dldENvbXBvbmVudE5hbWVGcm9tRmliZXJcblxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn0gLy8gTm90ZSB0aGF0IHRoZSByZWNvbmNpbGVyIHBhY2thZ2Ugc2hvdWxkIGdlbmVyYWxseSBwcmVmZXIgdG8gdXNlIGdldENvbXBvbmVudE5hbWVGcm9tRmliZXIoKSBpbnN0ZWFkLlxuXG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG5cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICB2YXIgb3V0ZXJOYW1lID0gdHlwZS5kaXNwbGF5TmFtZSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChvdXRlck5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gb3V0ZXJOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdNZW1vJztcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZmFsbHRocm91Z2hcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoICFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTsgLy8gSWYgb3VyIGNvbXBvbmVudCBmcmFtZSBpcyBsYWJlbGVkIFwiPGFub255bW91cz5cIlxuICAgICAgICAgICAgICAgIC8vIGJ1dCB3ZSBoYXZlIGEgdXNlci1wcm92aWRlZCBcImRpc3BsYXlOYW1lXCJcbiAgICAgICAgICAgICAgICAvLyBzcGxpY2UgaXQgaW4gdG8gbWFrZSB0aGUgc3RhY2sgbW9yZSByZWFkYWJsZS5cblxuXG4gICAgICAgICAgICAgICAgaWYgKGZuLmRpc3BsYXlOYW1lICYmIF9mcmFtZS5pbmNsdWRlcygnPGFub255bW91cz4nKSkge1xuICAgICAgICAgICAgICAgICAgX2ZyYW1lID0gX2ZyYW1lLnJlcGxhY2UoJzxhbm9ueW1vdXM+JywgZm4uZGlzcGxheU5hbWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKGhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvcHJvZC1lcnJvci1jb2Rlc1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBpc0FycmF5SW1wbCA9IEFycmF5LmlzQXJyYXk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcblxuZnVuY3Rpb24gaXNBcnJheShhKSB7XG4gIHJldHVybiBpc0FycmF5SW1wbChhKTtcbn1cblxuLypcbiAqIFRoZSBgJycgKyB2YWx1ZWAgcGF0dGVybiAodXNlZCBpbiBpbiBwZXJmLXNlbnNpdGl2ZSBjb2RlKSB0aHJvd3MgZm9yIFN5bWJvbFxuICogYW5kIFRlbXBvcmFsLiogdHlwZXMuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC8yMjA2NC5cbiAqXG4gKiBUaGUgZnVuY3Rpb25zIGluIHRoaXMgbW9kdWxlIHdpbGwgdGhyb3cgYW4gZWFzaWVyLXRvLXVuZGVyc3RhbmQsXG4gKiBlYXNpZXItdG8tZGVidWcgZXhjZXB0aW9uIHdpdGggYSBjbGVhciBlcnJvcnMgbWVzc2FnZSBtZXNzYWdlIGV4cGxhaW5pbmcgdGhlXG4gKiBwcm9ibGVtLiAoSW5zdGVhZCBvZiBhIGNvbmZ1c2luZyBleGNlcHRpb24gdGhyb3duIGluc2lkZSB0aGUgaW1wbGVtZW50YXRpb25cbiAqIG9mIHRoZSBgdmFsdWVgIG9iamVjdCkuXG4gKi9cbi8vICRGbG93Rml4TWUgb25seSBjYWxsZWQgaW4gREVWLCBzbyB2b2lkIHJldHVybiBpcyBub3QgcG9zc2libGUuXG5mdW5jdGlvbiB0eXBlTmFtZSh2YWx1ZSkge1xuICB7XG4gICAgLy8gdG9TdHJpbmdUYWcgaXMgbmVlZGVkIGZvciBuYW1lc3BhY2VkIHR5cGVzIGxpa2UgVGVtcG9yYWwuSW5zdGFudFxuICAgIHZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLnRvU3RyaW5nVGFnO1xuICAgIHZhciB0eXBlID0gaGFzVG9TdHJpbmdUYWcgJiYgdmFsdWVbU3ltYm9sLnRvU3RyaW5nVGFnXSB8fCB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lIHx8ICdPYmplY3QnO1xuICAgIHJldHVybiB0eXBlO1xuICB9XG59IC8vICRGbG93Rml4TWUgb25seSBjYWxsZWQgaW4gREVWLCBzbyB2b2lkIHJldHVybiBpcyBub3QgcG9zc2libGUuXG5cblxuZnVuY3Rpb24gd2lsbENvZXJjaW9uVGhyb3codmFsdWUpIHtcbiAge1xuICAgIHRyeSB7XG4gICAgICB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAgLy8gSWYgeW91IGVuZGVkIHVwIGhlcmUgYnkgZm9sbG93aW5nIGFuIGV4Y2VwdGlvbiBjYWxsIHN0YWNrLCBoZXJlJ3Mgd2hhdCdzXG4gIC8vIGhhcHBlbmVkOiB5b3Ugc3VwcGxpZWQgYW4gb2JqZWN0IG9yIHN5bWJvbCB2YWx1ZSB0byBSZWFjdCAoYXMgYSBwcm9wLCBrZXksXG4gIC8vIERPTSBhdHRyaWJ1dGUsIENTUyBwcm9wZXJ0eSwgc3RyaW5nIHJlZiwgZXRjLikgYW5kIHdoZW4gUmVhY3QgdHJpZWQgdG9cbiAgLy8gY29lcmNlIGl0IHRvIGEgc3RyaW5nIHVzaW5nIGAnJyArIHZhbHVlYCwgYW4gZXhjZXB0aW9uIHdhcyB0aHJvd24uXG4gIC8vXG4gIC8vIFRoZSBtb3N0IGNvbW1vbiB0eXBlcyB0aGF0IHdpbGwgY2F1c2UgdGhpcyBleGNlcHRpb24gYXJlIGBTeW1ib2xgIGluc3RhbmNlc1xuICAvLyBhbmQgVGVtcG9yYWwgb2JqZWN0cyBsaWtlIGBUZW1wb3JhbC5JbnN0YW50YC4gQnV0IGFueSBvYmplY3QgdGhhdCBoYXMgYVxuICAvLyBgdmFsdWVPZmAgb3IgYFtTeW1ib2wudG9QcmltaXRpdmVdYCBtZXRob2QgdGhhdCB0aHJvd3Mgd2lsbCBhbHNvIGNhdXNlIHRoaXNcbiAgLy8gZXhjZXB0aW9uLiAoTGlicmFyeSBhdXRob3JzIGRvIHRoaXMgdG8gcHJldmVudCB1c2VycyBmcm9tIHVzaW5nIGJ1aWx0LWluXG4gIC8vIG51bWVyaWMgb3BlcmF0b3JzIGxpa2UgYCtgIG9yIGNvbXBhcmlzb24gb3BlcmF0b3JzIGxpa2UgYD49YCBiZWNhdXNlIGN1c3RvbVxuICAvLyBtZXRob2RzIGFyZSBuZWVkZWQgdG8gcGVyZm9ybSBhY2N1cmF0ZSBhcml0aG1ldGljIG9yIGNvbXBhcmlzb24uKVxuICAvL1xuICAvLyBUbyBmaXggdGhlIHByb2JsZW0sIGNvZXJjZSB0aGlzIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcgYmVmb3JlXG4gIC8vIHBhc3NpbmcgaXQgdG8gUmVhY3QuIFRoZSBtb3N0IHJlbGlhYmxlIHdheSBpcyB1c3VhbGx5IGBTdHJpbmcodmFsdWUpYC5cbiAgLy9cbiAgLy8gVG8gZmluZCB3aGljaCB2YWx1ZSBpcyB0aHJvd2luZywgY2hlY2sgdGhlIGJyb3dzZXIgb3IgZGVidWdnZXIgY29uc29sZS5cbiAgLy8gQmVmb3JlIHRoaXMgZXhjZXB0aW9uIHdhcyB0aHJvd24sIHRoZXJlIHNob3VsZCBiZSBgY29uc29sZS5lcnJvcmAgb3V0cHV0XG4gIC8vIHRoYXQgc2hvd3MgdGhlIHR5cGUgKFN5bWJvbCwgVGVtcG9yYWwuUGxhaW5EYXRlLCBldGMuKSB0aGF0IGNhdXNlZCB0aGVcbiAgLy8gcHJvYmxlbSBhbmQgaG93IHRoYXQgdHlwZSB3YXMgdXNlZDoga2V5LCBhdHJyaWJ1dGUsIGlucHV0IHZhbHVlIHByb3AsIGV0Yy5cbiAgLy8gSW4gbW9zdCBjYXNlcywgdGhpcyBjb25zb2xlIG91dHB1dCBhbHNvIHNob3dzIHRoZSBjb21wb25lbnQgYW5kIGl0c1xuICAvLyBhbmNlc3RvciBjb21wb25lbnRzIHdoZXJlIHRoZSBleGNlcHRpb24gaGFwcGVuZWQuXG4gIC8vXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuICByZXR1cm4gJycgKyB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAge1xuICAgIGlmICh3aWxsQ29lcmNpb25UaHJvdyh2YWx1ZSkpIHtcbiAgICAgIGVycm9yKCdUaGUgcHJvdmlkZWQga2V5IGlzIGFuIHVuc3VwcG9ydGVkIHR5cGUgJXMuJyArICcgVGhpcyB2YWx1ZSBtdXN0IGJlIGNvZXJjZWQgdG8gYSBzdHJpbmcgYmVmb3JlIGJlZm9yZSB1c2luZyBpdCBoZXJlLicsIHR5cGVOYW1lKHZhbHVlKSk7XG5cbiAgICAgIHJldHVybiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpOyAvLyB0aHJvdyAodG8gaGVscCBjYWxsZXJzIGZpbmQgdHJvdWJsZXNob290aW5nIGNvbW1lbnRzKVxuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd247XG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd247XG52YXIgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBzZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBzZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwN1xuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBqc3hERVYodHlwZSwgY29uZmlnLCBtYXliZUtleSwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBrZXkgPSBudWxsO1xuICAgIHZhciByZWYgPSBudWxsOyAvLyBDdXJyZW50bHksIGtleSBjYW4gYmUgc3ByZWFkIGluIGFzIGEgcHJvcC4gVGhpcyBjYXVzZXMgYSBwb3RlbnRpYWxcbiAgICAvLyBpc3N1ZSBpZiBrZXkgaXMgYWxzbyBleHBsaWNpdGx5IGRlY2xhcmVkIChpZS4gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz5cbiAgICAvLyBvciA8ZGl2IGtleT1cIkhpXCIgey4uLnByb3BzfSAvPiApLiBXZSB3YW50IHRvIGRlcHJlY2F0ZSBrZXkgc3ByZWFkLFxuICAgIC8vIGJ1dCBhcyBhbiBpbnRlcm1lZGlhcnkgc3RlcCwgd2Ugd2lsbCB1c2UganN4REVWIGZvciBldmVyeXRoaW5nIGV4Y2VwdFxuICAgIC8vIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+LCBiZWNhdXNlIHdlIGFyZW4ndCBjdXJyZW50bHkgYWJsZSB0byB0ZWxsIGlmXG4gICAgLy8ga2V5IGlzIGV4cGxpY2l0bHkgZGVjbGFyZWQgdG8gYmUgdW5kZWZpbmVkIG9yIG5vdC5cblxuICAgIGlmIChtYXliZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24obWF5YmVLZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIG1heWJlS2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpO1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICAgIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICB7XG4gICAgaWYgKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICB7XG4gICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmZvO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gICAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gICAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgZGlkV2FybkFib3V0S2V5U3ByZWFkID0ge307XG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gICAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSk7XG5cbiAgICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgICAgfSBlbHNlIGlmIChpc0FycmF5KHR5cGUpKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgICAgfVxuXG4gICAgICBlcnJvcignUmVhY3QuanN4OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIHNvdXJjZSwgc2VsZik7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gICAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAgIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gICAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICAgIGlmICh2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaXNTdGF0aWNDaGlsZHJlbikge1xuICAgICAgICAgIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbltpXSwgdHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcignUmVhY3QuanN4OiBTdGF0aWMgY2hpbGRyZW4gc2hvdWxkIGFsd2F5cyBiZSBhbiBhcnJheS4gJyArICdZb3UgYXJlIGxpa2VseSBleHBsaWNpdGx5IGNhbGxpbmcgUmVhY3QuanN4cyBvciBSZWFjdC5qc3hERVYuICcgKyAnVXNlIHRoZSBCYWJlbCB0cmFuc2Zvcm0gaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW4sIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwocHJvcHMsICdrZXknKSkge1xuICAgICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhwcm9wcykuZmlsdGVyKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgcmV0dXJuIGsgIT09ICdrZXknO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGJlZm9yZUV4YW1wbGUgPSBrZXlzLmxlbmd0aCA+IDAgPyAne2tleTogc29tZUtleSwgJyArIGtleXMuam9pbignOiAuLi4sICcpICsgJzogLi4ufScgOiAne2tleTogc29tZUtleX0nO1xuXG4gICAgICAgIGlmICghZGlkV2FybkFib3V0S2V5U3ByZWFkW2NvbXBvbmVudE5hbWUgKyBiZWZvcmVFeGFtcGxlXSkge1xuICAgICAgICAgIHZhciBhZnRlckV4YW1wbGUgPSBrZXlzLmxlbmd0aCA+IDAgPyAneycgKyBrZXlzLmpvaW4oJzogLi4uLCAnKSArICc6IC4uLn0nIDogJ3t9JztcblxuICAgICAgICAgIGVycm9yKCdBIHByb3BzIG9iamVjdCBjb250YWluaW5nIGEgXCJrZXlcIiBwcm9wIGlzIGJlaW5nIHNwcmVhZCBpbnRvIEpTWDpcXG4nICsgJyAgbGV0IHByb3BzID0gJXM7XFxuJyArICcgIDwlcyB7Li4ucHJvcHN9IC8+XFxuJyArICdSZWFjdCBrZXlzIG11c3QgYmUgcGFzc2VkIGRpcmVjdGx5IHRvIEpTWCB3aXRob3V0IHVzaW5nIHNwcmVhZDpcXG4nICsgJyAgbGV0IHByb3BzID0gJXM7XFxuJyArICcgIDwlcyBrZXk9e3NvbWVLZXl9IHsuLi5wcm9wc30gLz4nLCBiZWZvcmVFeGFtcGxlLCBjb21wb25lbnROYW1lLCBhZnRlckV4YW1wbGUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgICAgICAgZGlkV2FybkFib3V0S2V5U3ByZWFkW2NvbXBvbmVudE5hbWUgKyBiZWZvcmVFeGFtcGxlXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkge1xuICAgICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAvLyBUaGVzZSB0d28gZnVuY3Rpb25zIGV4aXN0IHRvIHN0aWxsIGdldCBjaGlsZCB3YXJuaW5ncyBpbiBkZXZcbi8vIGV2ZW4gd2l0aCB0aGUgcHJvZCB0cmFuc2Zvcm0uIFRoaXMgbWVhbnMgdGhhdCBqc3hERVYgaXMgcHVyZWx5XG4vLyBvcHQtaW4gYmVoYXZpb3IgZm9yIGJldHRlciBtZXNzYWdlcyBidXQgdGhhdCB3ZSB3b24ndCBzdG9wXG4vLyBnaXZpbmcgeW91IHdhcm5pbmdzIGlmIHlvdSB1c2UgcHJvZHVjdGlvbiBhcGlzLlxuXG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvblN0YXRpYyh0eXBlLCBwcm9wcywga2V5KSB7XG4gIHtcbiAgICByZXR1cm4ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgdHJ1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uRHluYW1pYyh0eXBlLCBwcm9wcywga2V5KSB7XG4gIHtcbiAgICByZXR1cm4ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgZmFsc2UpO1xuICB9XG59XG5cbnZhciBqc3ggPSAganN4V2l0aFZhbGlkYXRpb25EeW5hbWljIDsgLy8gd2UgbWF5IHdhbnQgdG8gc3BlY2lhbCBjYXNlIGpzeHMgaW50ZXJuYWxseSB0byB0YWtlIGFkdmFudGFnZSBvZiBzdGF0aWMgY2hpbGRyZW4uXG4vLyBmb3Igbm93IHdlIGNhbiBzaGlwIGlkZW50aWNhbCBwcm9kIGZ1bmN0aW9uc1xuXG52YXIganN4cyA9ICBqc3hXaXRoVmFsaWRhdGlvblN0YXRpYyA7XG5cbmV4cG9ydHMuRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xuZXhwb3J0cy5qc3ggPSBqc3g7XG5leHBvcnRzLmpzeHMgPSBqc3hzO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQgfSBmcm9tICdAcmVtb3RlLXVpL3JlYWN0JztcbmV4cG9ydCBjb25zdCBjcmVhdGVSZW1vdGVDb21wb25lbnRSZWdpc3RyeSA9ICgpID0+IHtcbiAgICBjb25zdCBjb21wb25lbnRNZXRhZGF0YUxvb2t1cCA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBjb21wb25lbnROYW1lQnlDb21wb25lbnRNYXAgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgcmVnaXN0ZXJDb21wb25lbnQgPSAoY29tcG9uZW50LCBjb21wb25lbnROYW1lLCBmcmFnbWVudFByb3BzKSA9PiB7XG4gICAgICAgIGNvbXBvbmVudE5hbWVCeUNvbXBvbmVudE1hcC5zZXQoY29tcG9uZW50LCBjb21wb25lbnROYW1lKTtcbiAgICAgICAgY29tcG9uZW50TWV0YWRhdGFMb29rdXAuc2V0KGNvbXBvbmVudE5hbWUsIHtcbiAgICAgICAgICAgIGZyYWdtZW50UHJvcHNTZXQ6IG5ldyBTZXQoZnJhZ21lbnRQcm9wcyksXG4gICAgICAgICAgICBmcmFnbWVudFByb3BzQXJyYXk6IGZyYWdtZW50UHJvcHMsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0Q29tcG9uZW50TmFtZTogKGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWVCeUNvbXBvbmVudE1hcC5nZXQoY29tcG9uZW50KTtcbiAgICAgICAgICAgIGlmICghY29tcG9uZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudE5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIGlzQWxsb3dlZENvbXBvbmVudE5hbWU6IChjb21wb25lbnROYW1lKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50TWV0YWRhdGFMb29rdXAuaGFzKGNvbXBvbmVudE5hbWUpO1xuICAgICAgICB9LFxuICAgICAgICBpc0NvbXBvbmVudEZyYWdtZW50UHJvcDogKGNvbXBvbmVudE5hbWUsIHByb3BOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnRNZXRhZGF0YSA9IGNvbXBvbmVudE1ldGFkYXRhTG9va3VwLmdldChjb21wb25lbnROYW1lKTtcbiAgICAgICAgICAgIGlmICghY29tcG9uZW50TWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50TWV0YWRhdGEuZnJhZ21lbnRQcm9wc1NldC5oYXMocHJvcE5hbWUpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRDb21wb25lbnRGcmFnbWVudFByb3BOYW1lczogKGNvbXBvbmVudE5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudE1ldGFkYXRhID0gY29tcG9uZW50TWV0YWRhdGFMb29rdXAuZ2V0KGNvbXBvbmVudE5hbWUpO1xuICAgICAgICAgICAgaWYgKCFjb21wb25lbnRNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgZnJhZ21lbnRQcm9wc0FycmF5IH0gPSBjb21wb25lbnRNZXRhZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBmcmFnbWVudFByb3BzQXJyYXk7XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQ6IChjb21wb25lbnROYW1lLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZnJhZ21lbnRQcm9wcyA9IFtdIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgY29uc3QgcmVtb3RlUmVhY3RDb21wb25lbnQgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudChjb21wb25lbnROYW1lLCB7XG4gICAgICAgICAgICAgICAgZnJhZ21lbnRQcm9wczogZnJhZ21lbnRQcm9wcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlZ2lzdGVyQ29tcG9uZW50KHJlbW90ZVJlYWN0Q29tcG9uZW50LCBjb21wb25lbnROYW1lLCBmcmFnbWVudFByb3BzKTtcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVDb21wb3VuZFJlYWN0Q29tcG9uZW50OiAoY29tcG9uZW50TmFtZSwgb3B0aW9ucykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBmcmFnbWVudFByb3BzID0gW10gfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCBSZW1vdGVDb21wb25lbnRUeXBlID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoY29tcG9uZW50TmFtZSwge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50UHJvcHMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFdlIGNhbiBvbmx5IGF0dGFjaCBwcm9wZXJ0aWVzIHRvIGEgZnVuY3Rpb24gY29tcG9uZW50IHR5cGUsIHNvIHdlIG5lZWQgdG8gY2hlY2sgaWYgdGhlIHJlbW90ZSBjb21wb25lbnQgdHlwZSBpcyBhIGZ1bmN0aW9uLlxuICAgICAgICAgICAgLy8gSWYgdGhlIHJlbW90ZSBjb21wb25lbnQgdHlwZSBpcyBub3QgYSBmdW5jdGlvbiwgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgZnVuY3Rpb24gY29tcG9uZW50LlxuICAgICAgICAgICAgY29uc3QgQ29tcG91bmRGdW5jdGlvbkNvbXBvbmVudFR5cGUgPSB0eXBlb2YgUmVtb3RlQ29tcG9uZW50VHlwZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgID8gUmVtb3RlQ29tcG9uZW50VHlwZVxuICAgICAgICAgICAgICAgIDogKHByb3BzKSA9PiAoX2pzeChSZW1vdGVDb21wb25lbnRUeXBlLCB7IC4uLnByb3BzIH0pKTtcbiAgICAgICAgICAgIC8vIEF0dGFjaCB0aGUgY29tcG91bmQgY29tcG9uZW50IHByb3BlcnRpZXMgdG8gdGhlIGZ1bmN0aW9uIGNvbXBvbmVudCB0aGF0IHdlIHdpbGwgYmUgcmV0dXJuaW5nLlxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihDb21wb3VuZEZ1bmN0aW9uQ29tcG9uZW50VHlwZSwgb3B0aW9ucy5jb21wb3VuZENvbXBvbmVudFByb3BlcnRpZXMpO1xuICAgICAgICAgICAgLy8gUmVnaXN0ZXIgdGhlIGNvbXBvdW5kIGZ1bmN0aW9uIGNvbXBvbmVudCB3aXRoIHRoZSByZWdpc3RyeSBhbmQgcmV0dXJuIGl0LlxuICAgICAgICAgICAgcmV0dXJuIHJlZ2lzdGVyQ29tcG9uZW50KENvbXBvdW5kRnVuY3Rpb25Db21wb25lbnRUeXBlLCBjb21wb25lbnROYW1lLCBmcmFnbWVudFByb3BzKTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZVJlbW90ZUNvbXBvbmVudFJlZ2lzdHJ5IH0gZnJvbSBcIi4vdXRpbHMvcmVtb3RlLWNvbXBvbmVudC1yZWdpc3RyeS5qc1wiO1xuLyoqXG4gKiBSZXByZXNlbnRzIGEgcmVnaXN0cnkgb2YgSHViU3BvdC1wcm92aWRlZCBSZWFjdCBjb21wb25lbnRzIHRoYXQgc2hvdWxkIG9ubHkgYmUgdXNlZCAqKmludGVybmFsbHkqKiBieSB0aGUgVUkgZXh0ZW5zaW9uIFNESy5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNvbnN0IF9faHViU3BvdENvbXBvbmVudFJlZ2lzdHJ5ID0gY3JlYXRlUmVtb3RlQ29tcG9uZW50UmVnaXN0cnkoKTtcbmNvbnN0IHsgY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCwgY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVDb21wb3VuZFJlYWN0Q29tcG9uZW50LCB9ID0gX19odWJTcG90Q29tcG9uZW50UmVnaXN0cnk7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFNUQU5EQVJEIENPTVBPTkVOVFNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLyoqXG4gKiBUaGUgYEFsZXJ0YCBjb21wb25lbnQgcmVuZGVycyBhbiBhbGVydCB3aXRoaW4gYSBjYXJkLiBVc2UgdGhpcyBjb21wb25lbnQgdG8gZ2l2ZSB1c2FnZSBndWlkYW5jZSwgbm90aWZ5IHVzZXJzIG9mIGFjdGlvbiByZXN1bHRzLCBvciB3YXJuIHRoZW0gYWJvdXQgcG90ZW50aWFsIGlzc3VlcyBvciBmYWlsdXJlcy5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9hbGVydCBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9hcHAuaHVic3BvdC5jb20vZG9jcy80ODAwODkxNi9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2FsZXJ0I3ZhcmlhbnRzIFZhcmlhbnRzfVxuICovXG5leHBvcnQgY29uc3QgQWxlcnQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdBbGVydCcpO1xuLyoqXG4gKiBUaGUgYEJ1dHRvbmAgY29tcG9uZW50IHJlbmRlcnMgYSBzaW5nbGUgYnV0dG9uLiBVc2UgdGhpcyBjb21wb25lbnQgdG8gZW5hYmxlIHVzZXJzIHRvIHBlcmZvcm0gYWN0aW9ucywgc3VjaCBhcyBzdWJtaXR0aW5nIGEgZm9ybSwgc2VuZGluZyBkYXRhIHRvIGFuIGV4dGVybmFsIHN5c3RlbSwgb3IgZGVsZXRpbmcgZGF0YS5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9idXR0b24gRG9jc31cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvYnV0dG9uI3VzYWdlLWV4YW1wbGVzIEV4YW1wbGVzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0h1YlNwb3QvdWktZXh0ZW5zaW9ucy1leGFtcGxlcy90cmVlL21haW4vZGVzaWduLXBhdHRlcm5zI2J1dHRvbiBEZXNpZ24gUGF0dGVybiBFeGFtcGxlc31cbiAqL1xuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0J1dHRvbicsIHtcbiAgICBmcmFnbWVudFByb3BzOiBbJ292ZXJsYXknXSxcbn0pO1xuLyoqXG4gKiBUaGUgYEJ1dHRvblJvd2AgY29tcG9uZW50IHJlbmRlcnMgYSByb3cgb2Ygc3BlY2lmaWVkIGBCdXR0b25gIGNvbXBvbmVudHMuIFVzZSB0aGlzIGNvbXBvbmVudCB3aGVuIHlvdSB3YW50IHRvIGluY2x1ZGUgbXVsdGlwbGUgYnV0dG9ucyBpbiBhIHJvdy5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9idXR0b24tcm93IERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBCdXR0b25Sb3cgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdCdXR0b25Sb3cnKTtcbmV4cG9ydCBjb25zdCBDYXJkID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ2FyZCcpO1xuLyoqXG4gKiBUaGUgYERlc2NyaXB0aW9uTGlzdGAgY29tcG9uZW50IHJlbmRlcnMgcGFpcnMgb2YgbGFiZWxzIGFuZCB2YWx1ZXMuIFVzZSB0aGlzIGNvbXBvbmVudCB0byBkaXNwbGF5IHBhaXJzIG9mIGxhYmVscyBhbmQgdmFsdWVzIGluIGEgd2F5IHRoYXQncyBlYXN5IHRvIHJlYWQgYXQgYSBnbGFuY2UuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvZGVzY3JpcHRpb24tbGlzdCBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb25MaXN0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRGVzY3JpcHRpb25MaXN0Jyk7XG4vKipcbiAqIFRoZSBgRGVzY3JpcHRpb25MaXN0SXRlbWAgY29tcG9uZW50IHJlbmRlcnMgYSBzaW5nbGUgc2V0IG9mIGEgbGFiZWwgYW5kIHZhbHVlLiBVc2UgdGhpcyBjb21wb25lbnQgd2l0aGluIGEgYERlc2NyaXB0aW9uTGlzdGAgY29tcG9uZW50LlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2Rlc2NyaXB0aW9uLWxpc3QgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uTGlzdEl0ZW0gPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdEZXNjcmlwdGlvbkxpc3RJdGVtJyk7XG4vKipcbiAqIFRoZSBgRGl2aWRlcmAgY29tcG9uZW50IHJlbmRlcnMgYSBncmV5LCBob3Jpem9udGFsIGxpbmUgZm9yIHNwYWNpbmcgb3V0IGNvbXBvbmVudHMgdmVydGljYWxseSBvciBjcmVhdGluZyBzZWN0aW9ucyBpbiBhbiBleHRlbnNpb24uIFVzZSB0aGlzIGNvbXBvbmVudCB0byBzcGFjZSBvdXQgb3RoZXIgY29tcG9uZW50cyB3aGVuIHRoZSBjb250ZW50IG5lZWRzIG1vcmUgc2VwYXJhdGlvbiB0aGFuIHdoaXRlIHNwYWNlLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2RpdmlkZXIgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IERpdmlkZXIgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdEaXZpZGVyJyk7XG4vKipcbiAqIFRoZSBgU3BhY2VyYCBjb21wb25lbnQgcmVuZGVycyB2ZXJ0aWNhbCBzcGFjZSBiZXR3ZWVuIGNvbXBvbmVudHMuIFVzZSB0aGlzIGNvbXBvbmVudFxuICogdG8gYWRkIGNvbnNpc3RlbnQgc3BhY2luZyB3aXRob3V0IHVzaW5nIGVtcHR5IHdyYXBwZXIgY29tcG9uZW50cy5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9zcGFjZXIgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFNwYWNlciA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1NwYWNlcicpO1xuLyoqXG4gKiBUaGUgYEVtcHR5U3RhdGVgIGNvbXBvbmVudCBzZXRzIHRoZSBjb250ZW50IHRoYXQgYXBwZWFycyB3aGVuIHRoZSBleHRlbnNpb24gaXMgaW4gYW4gZW1wdHkgc3RhdGUuIFVzZSB0aGlzIGNvbXBvbmVudCB3aGVuIHRoZXJlJ3Mgbm8gY29udGVudCBvciBkYXRhIHRvIGhlbHAgZ3VpZGUgdXNlcnMuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvZW1wdHktc3RhdGUgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IEVtcHR5U3RhdGUgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdFbXB0eVN0YXRlJyk7XG4vKipcbiAqIFRoZSBgRXJyb3JTdGF0ZWAgY29tcG9uZW50IHNldHMgdGhlIGNvbnRlbnQgb2YgYW4gZXJyb3JpbmcgZXh0ZW5zaW9uLiBVc2UgdGhpcyBjb21wb25lbnQgdG8gZ3VpZGUgdXNlcnMgdGhyb3VnaCByZXNvbHZpbmcgZXJyb3JzIHRoYXQgeW91ciBleHRlbnNpb24gbWlnaHQgZW5jb3VudGVyLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2Vycm9yLXN0YXRlIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBFcnJvclN0YXRlID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRXJyb3JTdGF0ZScpO1xuLyoqXG4gKiBUaGUgYEZvcm1gIGNvbXBvbmVudCByZW5kZXJzIGEgZm9ybSB0aGF0IGNhbiBjb250YWluIG90aGVyIHN1YmNvbXBvbmVudHMsIHN1Y2ggYXMgYElucHV0YCwgYFNlbGVjdGAsIGFuZCBgQnV0dG9uYC4gVXNlIHRoaXMgY29tcG9uZW50IHRvIGVuYWJsZSB1c2VycyB0byBzdWJtaXQgZGF0YSB0byBIdWJTcG90IG9yIGFuIGV4dGVybmFsIHN5c3RlbS5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9mb3JtIERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9kZXNpZ24tcGF0dGVybnMjZm9ybSBEZXNpZ24gUGF0dGVybiBFeGFtcGxlc31cbiAqL1xuZXhwb3J0IGNvbnN0IEZvcm0gPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdGb3JtJyk7XG4vKipcbiAqIFRoZSBgSGVhZGluZ2AgY29tcG9uZW50IHJlbmRlcnMgbGFyZ2UgaGVhZGluZyB0ZXh0LiBVc2UgdGhpcyBjb21wb25lbnQgdG8gaW50cm9kdWNlIG9yIGRpZmZlcmVudGlhdGUgc2VjdGlvbnMgb2YgeW91ciBjb21wb25lbnQuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvaGVhZGluZyBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgSGVhZGluZyA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0hlYWRpbmcnKTtcbi8qKlxuICogVGhlIGBJbWFnZWAgY29tcG9uZW50IHJlbmRlcnMgYW4gaW1hZ2UuIFVzZSB0aGlzIGNvbXBvbmVudCB0byBhZGQgYSBsb2dvIG9yIG90aGVyIHZpc3VhbCBicmFuZCBpZGVudGl0eSBhc3NldCwgb3IgdG8gYWNjZW50dWF0ZSBvdGhlciBjb250ZW50IGluIHRoZSBleHRlbnNpb24uXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvaW1hZ2UgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IEltYWdlID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnSW1hZ2UnLCB7XG4gICAgZnJhZ21lbnRQcm9wczogWydvdmVybGF5J10sXG59KTtcbi8qKlxuICogVGhlIGBJbnB1dGAgY29tcG9uZW50IHJlbmRlcnMgYSB0ZXh0IGlucHV0IGZpZWxkIHdoZXJlIGEgdXNlciBjYW4gZW50ZXIgYSBjdXN0b20gdGV4dCB2YWx1ZS4gTGlrZSBvdGhlciBpbnB1dHMsIHRoaXMgY29tcG9uZW50IHNob3VsZCBiZSB1c2VkIHdpdGhpbiBhIGBGb3JtYCB0aGF0IGhhcyBhIHN1Ym1pdCBidXR0b24uXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvaW5wdXQgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IElucHV0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnSW5wdXQnKTtcbi8qKlxuICogVGhlIGBMaW5rYCBjb21wb25lbnQgcmVuZGVycyBhIGNsaWNrYWJsZSBoeXBlcmxpbmsuIFVzZSBsaW5rcyB0byBkaXJlY3QgdXNlcnMgdG8gYW4gZXh0ZXJuYWwgd2ViIHBhZ2Ugb3IgYW5vdGhlciBwYXJ0IG9mIHRoZSBIdWJTcG90IGFwcC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9saW5rIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBMaW5rID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnTGluaycsIHtcbiAgICBmcmFnbWVudFByb3BzOiBbJ292ZXJsYXknXSxcbn0pO1xuLyoqXG4gKiBUaGUgYFRleHRBcmVhYCBjb21wb25lbnQgcmVuZGVycyBhIGZpbGxhYmxlIHRleHQgZmllbGQuIExpa2Ugb3RoZXIgaW5wdXRzLCB0aGlzIGNvbXBvbmVudCBzaG91bGQgYmUgdXNlZCB3aXRoaW4gYSBgRm9ybWAgdGhhdCBoYXMgYSBzdWJtaXQgYnV0dG9uLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3RleHQtYXJlYSBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgVGV4dEFyZWEgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUZXh0QXJlYScpO1xuLy8gVGV4dGFyZWEgd2FzIGNoYW5nZWQgdG8gVGV4dEFyZWFcbi8vIEV4cG9ydGluZyBib3RoIGZvciBiYWNrd2FyZHMgY29tcGF0XG4vKiogQGRlcHJlY2F0ZWQgdXNlIFRleHRBcmVhIGluc3RlYWQuIFdpdGggYSBjYXBpdGFsIEEuKi9cbmV4cG9ydCBjb25zdCBUZXh0YXJlYSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RleHRhcmVhJyk7XG4vKipcbiAqIFRoZSBgTG9hZGluZ1NwaW5uZXJgIGNvbXBvbmVudCByZW5kZXJzIGEgdmlzdWFsIGluZGljYXRvciBmb3Igd2hlbiBhbiBleHRlbnNpb24gaXMgbG9hZGluZyBvciBwcm9jZXNzaW5nIGRhdGEuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvbG9hZGluZy1zcGlubmVyIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBMb2FkaW5nU3Bpbm5lciA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0xvYWRpbmdTcGlubmVyJyk7XG4vKipcbiAqIFRoZSBgUHJvZ3Jlc3NCYXJgIGNvbXBvbmVudCByZW5kZXJzIGEgdmlzdWFsIGluZGljYXRvciBzaG93aW5nIGEgbnVtZXJpYyBhbmQvb3IgcGVyY2VudGFnZS1iYXNlZCByZXByZXNlbnRhdGlvbiBvZiBwcm9ncmVzcy4gVGhlIHBlcmNlbnRhZ2UgaXMgY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgbWF4aW11bSBwb3NzaWJsZSB2YWx1ZSBzcGVjaWZpZWQgaW4gdGhlIGNvbXBvbmVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9wcm9ncmVzcy1iYXIgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFByb2dyZXNzQmFyID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnUHJvZ3Jlc3NCYXInKTtcbi8qKlxuICogVGhlIGBTZWxlY3RgIGNvbXBvbmVudCByZW5kZXJzIGEgZHJvcGRvd24gbWVudSBzZWxlY3QgZmllbGQgd2hlcmUgYSB1c2VyIGNhbiBzZWxlY3QgYSBzaW5nbGUgdmFsdWUuIEEgc2VhcmNoIGJhciB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgaW5jbHVkZWQgd2hlbiB0aGVyZSBhcmUgbW9yZSB0aGFuIHNldmVuIG9wdGlvbnMuIExpa2Ugb3RoZXIgaW5wdXRzLCB0aGlzIGNvbXBvbmVudCBzaG91bGQgYmUgdXNlZCB3aXRoaW4gYSBgRm9ybWAgdGhhdCBoYXMgYSBzdWJtaXQgYnV0dG9uLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3NlbGVjdCBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgU2VsZWN0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnU2VsZWN0Jyk7XG4vKipcbiAqIFRoZSBgVGFnYCBjb21wb25lbnQgcmVuZGVycyBhIHRhZyB0byBsYWJlbCBvciBjYXRlZ29yaXplIGluZm9ybWF0aW9uIG9yIG90aGVyIGNvbXBvbmVudHMuIFRhZ3MgY2FuIGJlIHN0YXRpYyBvciBjbGlja2FibGUgZm9yIGludm9raW5nIGZ1bmN0aW9ucy5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy90YWcgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFRhZyA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RhZycsIHtcbiAgICBmcmFnbWVudFByb3BzOiBbJ292ZXJsYXknXSxcbn0pO1xuLyoqXG4gKiBUaGUgYFRleHRgIGNvbXBvbmVudCByZW5kZXJzIHRleHQgd2l0aCBmb3JtYXR0aW5nIG9wdGlvbnMuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdGV4dCBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgVGV4dCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RleHQnKTtcbi8qKlxuICogVGhlIGBUaWxlYCBjb21wb25lbnQgcmVuZGVycyBhIHNxdWFyZSB0aWxlIHRoYXQgY2FuIGNvbnRhaW4gb3RoZXIgY29tcG9uZW50cy4gVXNlIHRoaXMgY29tcG9uZW50IHRvIGNyZWF0ZSBncm91cHMgb2YgcmVsYXRlZCBjb21wb25lbnRzLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3RpbGUgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFRpbGUgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUaWxlJyk7XG4vKiogQGRlcHJlY2F0ZWQgdXNlIEZsZXggaW5zdGVhZC4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IHJlbGVhc2UuICovXG5leHBvcnQgY29uc3QgU3RhY2sgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdTdGFjaycpO1xuLyoqXG4gKiBUaGUgYFRvZ2dsZUdyb3VwYCBjb21wb25lbnQgcmVuZGVycyBhIGxpc3Qgb2Ygc2VsZWN0YWJsZSBvcHRpb25zLCBlaXRoZXIgaW4gcmFkaW8gYnV0dG9uIG9yIGNoZWNrYm94IGZvcm0uXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdG9nZ2xlLWdyb3VwIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBUb2dnbGVHcm91cCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RvZ2dsZUdyb3VwJyk7XG4vKipcbiAqIFRoZSBgU3RhdGlzdGljc0l0ZW1gIGNvbXBvbmVudCByZW5kZXJzIGEgc2luZ2xlIGRhdGEgcG9pbnQgd2l0aGluIGEgYFN0YXRpc3RpY3NgIGNvbXBvbmVudC4gVXNlIHRoaXMgY29tcG9uZW50IHRvIGRpc3BsYXkgYSBzaW5nbGUgZGF0YSBwb2ludCwgc3VjaCBhcyBhIG51bWJlciBvciBwZXJjZW50YWdlLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3N0YXRpc3RpY3MgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFN0YXRpc3RpY3NJdGVtID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnU3RhdGlzdGljc0l0ZW0nKTtcbi8qKlxuICogVGhlIGBTdGF0aXN0aWNzYCBjb21wb25lbnQgcmVuZGVycyBhIHZpc3VhbCBzcG90bGlnaHQgb2Ygb25lIG9yIG1vcmUgZGF0YSBwb2ludHMuIEluY2x1ZGVzIHRoZSBgU3RhdGlzdGljc0l0ZW1gIGFuZCBgU3RhdGlzdGljc1RyZW5kYCBzdWJjb21wb25lbnRzLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3N0YXRpc3RpY3MgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFN0YXRpc3RpY3MgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdTdGF0aXN0aWNzJyk7XG4vKipcbiAqIFRoZSBgU3RhdGlzdGljc1RyZW5kYCBjb21wb25lbnQgcmVuZGVycyBhIHBlcmNlbnRhZ2UgdHJlbmQgdmFsdWUgYW5kIGRpcmVjdGlvbiBhbG9uc2lkZSBhIGBTdGF0aXN0aWNzSXRlbWAgY29tcG9uZW50LiBVc2UgdGhpcyBjb21wb25lbnQgd2l0aGluIHRoZSBgU3RhdGlzdGljc0l0ZW1gIGNvbXBvbmVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9zdGF0aXN0aWNzIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBTdGF0aXN0aWNzVHJlbmQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdTdGF0aXN0aWNzVHJlbmQnKTtcbi8qKlxuICogVGhlIGBUYWJsZWAgY29tcG9uZW50IHJlbmRlcnMgYSB0YWJsZS4gVG8gZm9ybWF0IHRoZSB0YWJsZSwgdXNlIHRoZSBzdWJjb21wb25lbnRzIGBUYWJsZUhlYWRgLCBgVGFibGVSb3dgLCBgVGFibGVIZWFkZXJgLCBgVGFibGVCb2R5YCwgYFRhYmxlQ2VsbGBhbmQgYFRhYmxlRm9vdGVyYC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy90YWJsZSBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0h1YlNwb3QvdWktZXh0ZW5zaW9ucy1leGFtcGxlcy90cmVlL21haW4vZGVzaWduLXBhdHRlcm5zI3RhYmxlIERlc2lnbiBQYXR0ZXJuIEV4YW1wbGV9XG4gKi9cbmV4cG9ydCBjb25zdCBUYWJsZSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RhYmxlJyk7XG4vKipcbiAqIFRoZSBgVGFibGVGb290ZXJgIGNvbXBvbmVudCByZW5kZXJzIGEgZm9vdGVyIHdpdGhpbiBhIGBUYWJsZWAgY29tcG9uZW50LiBVc2UgdGhpcyBjb21wb25lbnQgdG8gZGlzcGxheSB0b3RhbHMgb3Igb3RoZXIgc3VtbWFyeSBpbmZvcm1hdGlvbi5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy90YWJsZSBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgVGFibGVGb290ZXIgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUYWJsZUZvb3RlcicpO1xuLyoqXG4gKiBUaGUgYFRhYmxlQ2VsbGAgY29tcG9uZW50IHJlbmRlcnMgaW5kaXZpZHVhbCBjZWxscyB3aXRoaW4gdGhlIGBUYWJsZUJvZHlgIGNvbXBvbmVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy90YWJsZSBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgVGFibGVDZWxsID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnVGFibGVDZWxsJyk7XG4vKipcbiAqIFRoZSBgVGFibGVSb3dgIGNvbXBvbmVudCByZW5kZXJzIGEgcm93IHdpdGhpbiB0aGUgYFRhYmxlQm9keWAgb3IgYFRhYmxlSGVhZGAgY29tcG9uZW50LlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3RhYmxlIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBUYWJsZVJvdyA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RhYmxlUm93Jyk7XG4vKipcbiAqIFRoZSBgVGFibGVCb2R5YCBjb21wb25lbnQgcmVuZGVycyB0aGUgYm9keSAocm93cyBhbmQgY2VsbHMpIG9mIGEgdGFibGUgd2l0aGluIHRoZSBgVGFibGVgIGNvbXBvbmVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy90YWJsZSBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgVGFibGVCb2R5ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnVGFibGVCb2R5Jyk7XG4vKipcbiAqIFRoZSBgVGFibGVIZWFkZXJgIGNvbXBvbmVudCByZW5kZXJzIGluZGl2aWR1YWwgY2VsbHMgY29udGFpbmluZyBib2xkZWQgY29sdW1uIGxhYmVscywgd2l0aGluIGBUYWJsZUhlYWRgLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3RhYmxlIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBUYWJsZUhlYWRlciA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RhYmxlSGVhZGVyJyk7XG4vKipcbiAqIFRoZSBgVGFibGVIZWFkYCBjb21wb25lbnQgcmVuZGVycyB0aGUgaGVhZGVyIHNlY3Rpb24gb2YgdGhlIGBUYWJsZWAgY29tcG9uZW50LCBjb250YWluaW5nIGNvbHVtbiBsYWJlbHMuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdGFibGUgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFRhYmxlSGVhZCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RhYmxlSGVhZCcpO1xuLyoqXG4gKiBUaGUgYE51bWJlcklucHV0YCBjb21wb25lbnQgcmVuZGVycyBhIG51bWJlciBpbnB1dCBmaWVsZC4gTGlrZSBvdGhlciBpbnB1dHMsIHRoaXMgY29tcG9uZW50IHNob3VsZCBiZSB1c2VkIHdpdGhpbiBhIGBGb3JtYCB0aGF0IGhhcyBhIHN1Ym1pdCBidXR0b24uXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvbnVtYmVyLWlucHV0IERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBOdW1iZXJJbnB1dCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ051bWJlcklucHV0Jyk7XG4vKipcbiAqIFRoZSBgQm94YCBjb21wb25lbnQgcmVuZGVycyBhbiBlbXB0eSBkaXYgY29udGFpbmVyIGZvciBmaW5lIHR1bmluZyB0aGUgc3BhY2luZyBvZiBjb21wb25lbnRzLiBDb21tb25seSB1c2VkIHdpdGggdGhlIGBGbGV4YCBjb21wb25lbnQuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvYm94IERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9mbGV4LWFuZC1ib3ggRmxleCBhbmQgQm94IEV4YW1wbGV9XG4gKi9cbmV4cG9ydCBjb25zdCBCb3ggPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdCb3gnKTtcbi8qKlxuICogVGhlIGBTdGVwSW5kaWNhdG9yYCBjb21wb25lbnQgcmVuZGVycyBhbiBpbmRpY2F0b3IgdG8gc2hvdyB0aGUgY3VycmVudCBzdGVwIG9mIGEgbXVsdGktc3RlcCBwcm9jZXNzLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3N0ZXAtaW5kaWNhdG9yIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBTdGVwSW5kaWNhdG9yID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnU3RlcEluZGljYXRvcicpO1xuLyoqXG4gKiBUaGUgYEFjY29yZGlvbmAgY29tcG9uZW50IHJlbmRlcnMgYW4gZXhwYW5kYWJsZSBhbmQgY29sbGFwc2FibGUgc2VjdGlvbiB0aGF0IGNhbiBjb250YWluIG90aGVyIGNvbXBvbmVudHMuIFRoaXMgY29tcG9uZW50IGNhbiBiZSBoZWxwZnVsIGZvciBzYXZpbmcgc3BhY2UgYW5kIGJyZWFraW5nIHVwIGV4dGVuc2lvbiBjb250ZW50LlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2FjY29yZGlvbiBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgQWNjb3JkaW9uID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQWNjb3JkaW9uJyk7XG4vKipcbiAqIFRoZSBNdWx0aVNlbGVjdCBjb21wb25lbnQgcmVuZGVycyBhIGRyb3Bkb3duIG1lbnUgc2VsZWN0IGZpZWxkIHdoZXJlIGEgdXNlciBjYW4gc2VsZWN0IG11bHRpcGxlIHZhbHVlcy4gQ29tbW9ubHkgdXNlZCB3aXRoaW4gdGhlIGBGb3JtYCBjb21wb25lbnQuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvbXVsdGktc2VsZWN0IERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBNdWx0aVNlbGVjdCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ011bHRpU2VsZWN0Jyk7XG4vKipcbiAqIFRoZSBgRmxleGAgY29tcG9uZW50IHJlbmRlcnMgYSBmbGV4IGNvbnRhaW5lciB0aGF0IGNhbiBjb250YWluIG90aGVyIGNvbXBvbmVudHMsIGFuZCBhcnJhbmdlIHRoZW0gd2l0aCBwcm9wcy4gVXNlIHRoaXMgY29tcG9uZW50IHRvIGNyZWF0ZSBhIGZsZXhpYmxlIGFuZCByZXNwb25zaXZlIGxheW91dC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9mbGV4IERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9mbGV4LWFuZC1ib3ggRmxleCBhbmQgQm94IEV4YW1wbGV9XG4gKi9cbmV4cG9ydCBjb25zdCBGbGV4ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRmxleCcpO1xuLyoqXG4gKiBUaGUgYERhdGVJbnB1dGAgY29tcG9uZW50IHJlbmRlcnMgYW4gaW5wdXQgZmllbGQgd2hlcmUgYSB1c2VyIGNhbiBzZWxlY3QgYSBkYXRlLiBDb21tb25seSB1c2VkIHdpdGhpbiB0aGUgYEZvcm1gIGNvbXBvbmVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9kYXRlLWlucHV0IERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBEYXRlSW5wdXQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdEYXRlSW5wdXQnKTtcbi8qKlxuICogVGhlIGBDaGVja2JveGAgY29tcG9uZW50IHJlbmRlcnMgYSBzaW5nbGUgY2hlY2tib3ggaW5wdXQuIENvbW1vbmx5IHVzZWQgd2l0aGluIHRoZSBgRm9ybWAgY29tcG9uZW50LiBJZiB5b3Ugd2FudCB0byBkaXNwbGF5IG11bHRpcGxlIGNoZWNrYm94ZXMsIHlvdSBzaG91bGQgdXNlIGBUb2dnbGVHcm91cGAgaW5zdGVhZCwgYXMgaXQgY29tZXMgd2l0aCBleHRyYSBsb2dpYyBmb3IgaGFuZGxpbmcgbXVsdGlwbGUgY2hlY2tib3hlcy5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9jaGVja2JveCBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgQ2hlY2tib3ggPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdDaGVja2JveCcpO1xuLyoqXG4gKiBUaGUgYFJhZGlvQnV0dG9uYCBjb21wb25lbnQgcmVuZGVycyBhIHNpbmdsZSByYWRpbyBpbnB1dC4gQ29tbW9ubHkgdXNlZCB3aXRoaW4gdGhlIGBGb3JtYCBjb21wb25lbnQuIElmIHlvdSB3YW50IHRvIGRpc3BsYXkgbXVsdGlwbGUgcmFkaW8gaW5wdXRzLCB5b3Ugc2hvdWxkIHVzZSBgVG9nZ2xlR3JvdXBgIGluc3RlYWQsIGFzIGl0IGNvbWVzIHdpdGggZXh0cmEgbG9naWMgZm9yIGhhbmRsaW5nIG11bHRpcGxlIGlucHV0cy5cbiAqL1xuZXhwb3J0IGNvbnN0IFJhZGlvQnV0dG9uID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnUmFkaW9CdXR0b24nKTtcbi8qKlxuICogVGhlIGBMaXN0YCBjb21wb25lbnQgcmVuZGVycyBhIGxpc3Qgb2YgaXRlbXMuIFVzZSB0aGlzIGNvbXBvbmVudCB0byBkaXNwbGF5IGEgbGlzdCBvZiBpdGVtcywgc3VjaCBhcyBhIGxpc3Qgb2YgY29udGFjdHMsIHRhc2tzLCBvciBvdGhlciBkYXRhLiBBIGxpc3QgY2FuIGJlIHN0eWxlZCBhcyBhIGJ1bGxldGVkIGxpc3Qgb3IgYSBudW1iZXJlZCBsaXN0LlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2xpc3QgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IExpc3QgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdMaXN0Jyk7XG4vKipcbiAqIFRoZSBgVG9nZ2xlYCBjb21wb25lbnQgcmVuZGVycyBhIGJvb2xlYW4gdG9nZ2xlIHN3aXRjaCB0aGF0IGNhbiBiZSBjb25maWd1cmVkIHdpdGggc2l6aW5nLCBsYWJlbCBwb3NpdGlvbiwgcmVhZC1vbmx5LCBhbmQgbW9yZS5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy90b2dnbGUgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFRvZ2dsZSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RvZ2dsZScpO1xuLyoqXG4gKiBUaGUgYERyb3Bkb3duYCBjb21wb25lbnQgcmVuZGVycyBhIGRyb3Bkb3duIG1lbnUgdGhhdCBjYW4gYXBwZWFyIGFzIGEgYnV0dG9uIG9yIGh5cGVybGluay4gVXNlIHRoaXMgY29tcG9uZW50IHRvIGVuYWJsZSB1c2VycyB0byBzZWxlY3QgZnJvbSBtdWx0aXBsZSBvcHRpb25zIGluIGEgY29tcGFjdCBsaXN0LlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2Ryb3Bkb3duIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBEcm9wZG93biA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlQ29tcG91bmRSZWFjdENvbXBvbmVudCgnRHJvcGRvd24nLCB7XG4gICAgY29tcG91bmRDb21wb25lbnRQcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYERyb3Bkb3duLkJ1dHRvbkl0ZW1gIGNvbXBvbmVudCByZXByZXNlbnRzIGEgc2luZ2xlIG9wdGlvbiB3aXRoaW4gYSBgRHJvcGRvd25gIG1lbnUuIFVzZSB0aGlzIGNvbXBvbmVudCBhcyBhIGNoaWxkIG9mIHRoZSBgRHJvcGRvd25gIGNvbXBvbmVudC5cbiAgICAgICAgICpcbiAgICAgICAgICogKipMaW5rczoqKlxuICAgICAgICAgKlxuICAgICAgICAgKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2Ryb3Bkb3duIERvY3N9XG4gICAgICAgICAqL1xuICAgICAgICBCdXR0b25JdGVtOiBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdEcm9wZG93bkJ1dHRvbkl0ZW0nLCB7XG4gICAgICAgICAgICBmcmFnbWVudFByb3BzOiBbJ292ZXJsYXknXSxcbiAgICAgICAgfSksXG4gICAgfSxcbn0pO1xuLyoqXG4gKiBUaGUgUGFuZWwgY29tcG9uZW50IHJlbmRlcnMgYSBwYW5lbCBvdmVybGF5IG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBwYWdlIGFuZCBjb250YWlucyBvdGhlciBjb21wb25lbnRzLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3BhbmVsIERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9vdmVybGF5LWV4YW1wbGUgT3ZlcmxheSBFeGFtcGxlfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0h1YlNwb3QvdWktZXh0ZW5zaW9ucy1leGFtcGxlcy90cmVlL21haW4vZGVzaWduLXBhdHRlcm5zI3BhbmVsIERlc2lnbiBQYXR0ZXJuIEV4YW1wbGVzfVxuICovXG5leHBvcnQgY29uc3QgUGFuZWwgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdQYW5lbCcpO1xuLyoqXG4gKiBUaGUgYFBhbmVsRm9vdGVyYCBpcyBhIHN0aWNreSBmb290ZXIgY29tcG9uZW50IGRpc3BsYXllZCBhdCB0aGUgYm90dG9tIG9mIGEgYFBhbmVsYCBjb21wb25lbnQuIFVzZSB0aGlzIGNvbXBvbmVudCB0byBkaXNwbGF5IGFjdGlvbnMgb3Igb3RoZXIgY29udGVudCB0aGF0IHNob3VsZCBiZSB2aXNpYmxlIGF0IGFsbCB0aW1lcy4gSW5jbHVkZSBvbmx5IG9uZSBgUGFuZWxGb290ZXJgIGNvbXBvbmVudCBwZXIgYFBhbmVsYC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9wYW5lbC1mb290ZXIgRG9jc31cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9IdWJTcG90L3VpLWV4dGVuc2lvbnMtZXhhbXBsZXMvdHJlZS9tYWluL292ZXJsYXktZXhhbXBsZSBPdmVybGF5IEV4YW1wbGV9XG4gKi9cbmV4cG9ydCBjb25zdCBQYW5lbEZvb3RlciA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1BhbmVsRm9vdGVyJyk7XG4vKipcbiAqIFRoZSBgUGFuZWxCb2R5YCBjb21wb25lbnQgaXMgYSBjb250YWluZXIgdGhhdCB3cmFwcyB0aGUgcGFuZWwncyBjb250ZW50IGFuZCBtYWtlcyBpdCBzY3JvbGxhYmxlLiBJbmNsdWRlIG9ubHkgb25lIGBQYW5lbEJvZHlgIGNvbXBvbmVudCBwZXIgYFBhbmVsYC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9wYW5lbC1mb290ZXIgRG9jc31cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9IdWJTcG90L3VpLWV4dGVuc2lvbnMtZXhhbXBsZXMvdHJlZS9tYWluL292ZXJsYXktZXhhbXBsZSBPdmVybGF5IEV4YW1wbGV9XG4gKi9cbmV4cG9ydCBjb25zdCBQYW5lbEJvZHkgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdQYW5lbEJvZHknKTtcbi8qKlxuICogVGhlIGBQYW5lbFNlY3Rpb25gIGNvbXBvbmVudCBpcyBhIGNvbnRhaW5lciB0aGF0IGFkZHMgcGFkZGluZyBhbmQgYm90dG9tIG1hcmdpbiB0byBwcm92aWRlIHNwYWNpbmcgYmV0d2VlbiBjb250ZW50LiBVc2UgdGhlIGBQYW5lbFNlY3Rpb25gIGNvbXBvbmVudCB0byBzZXBhcmF0ZSBjb250ZW50IHdpdGhpbiBhIGBQYW5lbEJvZHlgLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3BhbmVsLWZvb3RlciBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0h1YlNwb3QvdWktZXh0ZW5zaW9ucy1leGFtcGxlcy90cmVlL21haW4vb3ZlcmxheS1leGFtcGxlIE92ZXJsYXkgRXhhbXBsZX1cbiAqL1xuZXhwb3J0IGNvbnN0IFBhbmVsU2VjdGlvbiA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1BhbmVsU2VjdGlvbicpO1xuLyoqXG4gKiBUaGUgYFN0ZXBwZXJJbnB1dGAgY29tcG9uZW50IHJlbmRlcnMgYSBudW1iZXIgaW5wdXQgZmllbGQgdGhhdCBjYW4gYmUgaW5jcmVhc2VkIG9yIGRlY3JlYXNlZCBieSBhIHNldCBudW1iZXIuIENvbW1vbmx5IHVzZWQgd2l0aGluIHRoZSBgRm9ybWAgY29tcG9uZW50LlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3N0ZXBwZXItaW5wdXQgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFN0ZXBwZXJJbnB1dCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1N0ZXBwZXJJbnB1dCcpO1xuLyoqXG4gKiBUaGUgTW9kYWwgY29tcG9uZW50IHJlbmRlcnMgYSBwb3AtdXAgb3ZlcmxheSB0aGF0IGNhbiBjb250YWluIG90aGVyIGNvbXBvbmVudHMuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvbW9kYWwgRG9jc31cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9IdWJTcG90L3VpLWV4dGVuc2lvbnMtZXhhbXBsZXMvdHJlZS9tYWluL292ZXJsYXktZXhhbXBsZSBPdmVybGF5IEV4YW1wbGV9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9kZXNpZ24tcGF0dGVybnMjbW9kYWwgRGVzaWduIFBhdHRlcm4gRXhhbXBsZXN9XG4gKi9cbmV4cG9ydCBjb25zdCBNb2RhbCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ01vZGFsJyk7XG4vKipcbiAqIFRoZSBgTW9kYWxCb2R5YCBjb21wb25lbnQgY29udGFpbnMgdGhlIG1haW4gY29udGVudCBvZiB0aGUgbW9kYWwuIE9uZSBgTW9kYWxCb2R5YCBpcyByZXF1aXJlZCBwZXIgYE1vZGFsYC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9tb2RhbCBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0h1YlNwb3QvdWktZXh0ZW5zaW9ucy1leGFtcGxlcy90cmVlL21haW4vb3ZlcmxheS1leGFtcGxlIE92ZXJsYXkgRXhhbXBsZX1cbiAqL1xuZXhwb3J0IGNvbnN0IE1vZGFsQm9keSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ01vZGFsQm9keScpO1xuLyoqXG4gKiBUaGUgYE1vZGFsRm9vdGVyYCBjb21wb25lbnQgaXMgYW4gb3B0aW9uYWwgY29tcG9uZW50IHRvIGZvcm1hdCB0aGUgZm9vdGVyIHNlY3Rpb24gb2YgdGhlIG1vZGFsLiBVc2Ugb25lIGBNb2RhbEZvb3RlcmAgcGVyIGBNb2RhbGAuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvbW9kYWwgRG9jc31cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9IdWJTcG90L3VpLWV4dGVuc2lvbnMtZXhhbXBsZXMvdHJlZS9tYWluL292ZXJsYXktZXhhbXBsZSBPdmVybGF5IEV4YW1wbGV9XG4gKi9cbmV4cG9ydCBjb25zdCBNb2RhbEZvb3RlciA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ01vZGFsRm9vdGVyJyk7XG4vKipcbiAqIFVzZSB0aGUgYEljb25gIGNvbXBvbmVudCB0byByZW5kZXIgYSB2aXN1YWwgaWNvbiB3aXRoaW4gb3RoZXIgY29tcG9uZW50cy4gSXQgY2FuIGdlbmVyYWxseSBiZSB1c2VkIGluc2lkZSBtb3N0IGNvbXBvbmVudHMsIGV4Y2x1ZGluZyBvbmVzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBjaGlsZCBjb21wb25lbnRzLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2ljb24gRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IEljb24gPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdJY29uJyk7XG4vKipcbiAqIFRoZSBgU3RhdHVzVGFnYCBjb21wb25lbnQgcmVuZGVycyBhIHZpc3VhbCBpbmRpY2F0b3IgdG8gZGlzcGxheSB0aGUgY3VycmVudCBzdGF0dXMgb2YgYW4gaXRlbS4gU3RhdHVzIHRhZ3MgY2FuIGJlIHN0YXRpYyBvciBjbGlja2FibGUuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvc3RhdHVzLXRhZyBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9zdGF0dXMtdGFnI3ZhcmlhbnRzIFZhcmlhbnRzfVxuICovXG5leHBvcnQgY29uc3QgU3RhdHVzVGFnID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnU3RhdHVzVGFnJyk7XG4vKipcbiAqIFRoZSBgTG9hZGluZ0J1dHRvbmAgY29tcG9uZW50IHJlbmRlcnMgYSBidXR0b24gd2l0aCBsb2FkaW5nIHN0YXRlIG9wdGlvbnMuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvbG9hZGluZy1idXR0b24gRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IExvYWRpbmdCdXR0b24gPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdMb2FkaW5nQnV0dG9uJywge1xuICAgIGZyYWdtZW50UHJvcHM6IFsnb3ZlcmxheSddLFxufSk7XG4vKipcbiAqIFRoZSBgQmFyQ2hhcnRgIGNvbXBvbmVudCByZW5kZXJzIGEgYmFyIGNoYXJ0IGZvciB2aXN1YWxpemluZyBkYXRhLiBUaGlzIHR5cGUgb2YgY2hhcnQgaXMgYmVzdCBzdWl0ZWQgZm9yIGNvbXBhcmluZyBjYXRlZ29yaWNhbCBkYXRhLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2Jhci1jaGFydCBCYXJDaGFydCBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9jaGFydHMgQ2hhcnRzIERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9jaGFydHMtZXhhbXBsZSBDaGFydHMgRXhhbXBsZX1cbiAqL1xuZXhwb3J0IGNvbnN0IEJhckNoYXJ0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQmFyQ2hhcnQnKTtcbi8qKlxuICogVGhlIGBMaW5lQ2hhcnRgIGNvbXBvbmVudCByZW5kZXJzIGEgbGluZSBjaGFydCBmb3IgdmlzdWFsaXppbmcgZGF0YS4gVGhpcyB0eXBlIG9mIGNoYXJ0IGlzIGJlc3Qgc3VpdGVkIGZvciB0aW1lIHNlcmllcyBwbG90cyBvciB0cmVuZCBkYXRhLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2xpbmUtY2hhcnQgTGluZUNoYXJ0IERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2NoYXJ0cyBDaGFydHMgRG9jc31cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9IdWJTcG90L3VpLWV4dGVuc2lvbnMtZXhhbXBsZXMvdHJlZS9tYWluL2NoYXJ0cy1leGFtcGxlIENoYXJ0cyBFeGFtcGxlfVxuICovXG5leHBvcnQgY29uc3QgTGluZUNoYXJ0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnTGluZUNoYXJ0Jyk7XG4vKipcbiAqIFRoZSBgU2NvcmVDaXJjbGVgIGNvbXBvbmVudCBkaXNwbGF5cyBhIHNjb3JlIHZhbHVlICgwLTEwMCkgYXMgYSBjaXJjdWxhciBwcm9ncmVzcyBpbmRpY2F0b3Igd2l0aCBjb2xvci1jb2RlZCBiYW5kcy5cbiAqIFNjb3JlcyBhcmUgY29sb3ItY29kZWQ6IDAtMzIgKGFsZXJ0L3JlZCksIDMzLTY1ICh3YXJuaW5nL3llbGxvdyksIDY2LTEwMCAoc3VjY2Vzcy9ncmVlbikuXG4gKiBAZXhhbXBsZVxuICogYGBgdHN4XG4gKiAgIDxTY29yZUNpcmNsZSBzY29yZT17NzV9IC8+XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IFNjb3JlQ2lyY2xlID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnU2NvcmVDaXJjbGUnKTtcbi8qKlxuICogYFRhYnNgIGFsbG93IHlvdSB0byBncm91cCByZWxhdGVkIGNvbnRlbnQgaW4gYSBjb21wYWN0IHNwYWNlLCBhbGxvd2luZyB1c2VycyB0byBzd2l0Y2ggYmV0d2VlbiB2aWV3cyB3aXRob3V0IGxlYXZpbmcgdGhlIHBhZ2UuXG4gKiBAZXhhbXBsZVxuICogYGBgdHN4XG4gKiA8VGFicyBkZWZhdWx0U2VsZWN0ZWQ9XCIxXCI+XG4gKiAgIDxUYWIgdGFiSWQ9XCIxXCI+Rmlyc3QgdGFiIGNvbnRlbnQ8L1RhYj5cbiAqICAgPFRhYiB0YWJJZD1cIjJcIj5TZWNvbmQgdGFiIGNvbnRlbnQ8L1RhYj5cbiAqIDwvVGFicz5cbiAqIGBgYFxuICpcbiAqICoqTGlua3M6KipcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdGFicyBEb2N1bWVudGF0aW9ufVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2h1YnNwb3RkZXYvdWllLXRhYmJlZC1wcm9kdWN0LWNhcm91c2VsIFRhYnMgRXhhbXBsZX1cbiAqL1xuZXhwb3J0IGNvbnN0IFRhYnMgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUYWJzJyk7XG4vKipcbiAqIEVhY2ggYFRhYmAgcmVwcmVzZW50cyBhIHNpbmdsZSB0YWIgKG9yIFwidmlld1wiKSB3aXRoaW4gdGhlIHBhcmVudCBgVGFic2AgY29tcG9uZW50LlxuICogQGV4YW1wbGVcbiAqIGBgYHRzeFxuICogPFRhYnMgZGVmYXVsdFNlbGVjdGVkPVwiMVwiPlxuICogICA8VGFiIHRhYklkPVwiMVwiPkZpcnN0IHRhYiBjb250ZW50PC9UYWI+XG4gKiAgIDxUYWIgdGFiSWQ9XCIyXCI+U2Vjb25kIHRhYiBjb250ZW50PC9UYWI+XG4gKiA8L1RhYnM+XG4gKiBgYGBcbiAqXG4gKiAqKkxpbmtzOioqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3RhYnMgRG9jdW1lbnRhdGlvbn1cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9odWJzcG90ZGV2L3VpZS10YWJiZWQtcHJvZHVjdC1jYXJvdXNlbCBUYWJzIEV4YW1wbGV9XG4gKi9cbmV4cG9ydCBjb25zdCBUYWIgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUYWInKTtcbi8qKlxuICogVGhlIGBJbGx1c3RyYXRpb25gIGNvbXBvbmVudCByZW5kZXJzIGFuIGlsbHVzdHJhdGlvbi5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9pbGx1c3RyYXRpb24gSWxsdXN0cmF0aW9uIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBJbGx1c3RyYXRpb24gPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdJbGx1c3RyYXRpb24nKTtcbi8qKlxuICogVGhlIGBUb29sdGlwYCBjb21wb25lbnQgcmVuZGVycyBhIHRvb2x0aXAgZm9yIGEgY29tcG9uZW50LlxuICpcbiAqICoqTGlua3M6KipcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdG9vbHRpcCBEb2N1bWVudGF0aW9ufVxuICovXG5leHBvcnQgY29uc3QgVG9vbHRpcCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1Rvb2x0aXAnKTtcbi8qKlxuICogVGhlIGBTZWFyY2hJbnB1dGAgY29tcG9uZW50IHJlbmRlcnMgYSBzZWFyY2ggaW5wdXQgZmllbGQuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvc2VhcmNoLWlucHV0IFNlYXJjaElucHV0IERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBTZWFyY2hJbnB1dCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1NlYXJjaElucHV0Jyk7XG4vKipcbiAqIFRoZSBgVGltZUlucHV0YCBjb21wb25lbnQgcmVuZGVycyBhbiBpbnB1dCBmaWVsZCB3aGVyZSBhIHVzZXIgY2FuIHNlbGVjdCBhIHRpbWUuIENvbW1vbmx5IHVzZWQgd2l0aGluIHRoZSBgRm9ybWAgY29tcG9uZW50LlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3RpbWUtaW5wdXQgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFRpbWVJbnB1dCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RpbWVJbnB1dCcpO1xuLyoqXG4gKiBUaGUgYEN1cnJlbmN5SW5wdXRgIGNvbXBvbmVudCByZW5kZXJzIGEgY3VycmVuY3kgaW5wdXQgZmllbGQgd2l0aCBwcm9wZXIgZm9ybWF0dGluZyxcbiAqIGN1cnJlbmN5IHN5bWJvbHMsIGFuZCBsb2NhbGUtc3BlY2lmaWMgZGlzcGxheSBwYXR0ZXJucy4gQ29tbW9ubHkgdXNlZCB3aXRoaW4gdGhlIGBGb3JtYCBjb21wb25lbnQuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvY3VycmVuY3ktaW5wdXQgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IEN1cnJlbmN5SW5wdXQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdDdXJyZW5jeUlucHV0Jyk7XG4vKipcbiAqIFRoZSBgSW5saW5lYCBjb21wb25lbnQgc3ByZWFkcyBhbGlnbnMgaXRzIGNoaWxkcmVuIGhvcml6b250YWxseSAoYWxvbmcgdGhlIHgtYXhpcykuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvaW5saW5lIERvY3N9XG4gKi8gZXhwb3J0IGNvbnN0IElubGluZSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0lubGluZScpO1xuLyoqXG4gKiBUaGUgYEF1dG9HcmlkYCBjb21wb25lbnQgcmVuZGVycyBhIHJlc3BvbnNpdmUgZ3JpZCBsYXlvdXQgdGhhdCBhdXRvbWF0aWNhbGx5IGFkanVzdHMgdGhlIG51bWJlciBvZiBjb2x1bW5zIGJhc2VkIG9uIGF2YWlsYWJsZSBzcGFjZS4gVXNlIHRoaXMgY29tcG9uZW50IHRvIGNyZWF0ZSBmbGV4aWJsZSBncmlkIGxheW91dHMgZm9yIGNhcmRzLCB0aWxlcywgb3Igb3RoZXIgY29udGVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9zaW1wbGUtZ3JpZCBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgQXV0b0dyaWQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdBdXRvR3JpZCcpO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIENSTSBDT01QT05FTlRTXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuZXhwb3J0IGNvbnN0IENybVByb3BlcnR5TGlzdCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0NybVByb3BlcnR5TGlzdCcpO1xuZXhwb3J0IGNvbnN0IENybUFzc29jaWF0aW9uVGFibGUgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdDcm1Bc3NvY2lhdGlvblRhYmxlJyk7XG5leHBvcnQgY29uc3QgQ3JtRGF0YUhpZ2hsaWdodCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0NybURhdGFIaWdobGlnaHQnKTtcbmV4cG9ydCBjb25zdCBDcm1SZXBvcnQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdDcm1SZXBvcnQnKTtcbmV4cG9ydCBjb25zdCBDcm1Bc3NvY2lhdGlvblBpdm90ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ3JtQXNzb2NpYXRpb25QaXZvdCcpO1xuZXhwb3J0IGNvbnN0IENybUFzc29jaWF0aW9uUHJvcGVydHlMaXN0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ3JtQXNzb2NpYXRpb25Qcm9wZXJ0eUxpc3QnKTtcbmV4cG9ydCBjb25zdCBDcm1Bc3NvY2lhdGlvblN0YWdlVHJhY2tlciA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0NybUFzc29jaWF0aW9uU3RhZ2VUcmFja2VyJyk7XG5leHBvcnQgY29uc3QgQ3JtU2ltcGxlRGVhZGxpbmUgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdDcm1TaW1wbGVEZWFkbGluZScpO1xuZXhwb3J0IGNvbnN0IENybVN0YWdlVHJhY2tlciA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0NybVN0YWdlVHJhY2tlcicpO1xuZXhwb3J0IGNvbnN0IENybVN0YXRpc3RpY3MgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdDcm1TdGF0aXN0aWNzJyk7XG5leHBvcnQgY29uc3QgQ3JtQWN0aW9uQnV0dG9uID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ3JtQWN0aW9uQnV0dG9uJyk7XG5leHBvcnQgY29uc3QgQ3JtQWN0aW9uTGluayA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0NybUFjdGlvbkxpbmsnKTtcbmV4cG9ydCBjb25zdCBDcm1DYXJkQWN0aW9ucyA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0NybUNhcmRBY3Rpb25zJyk7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gQVBQIEhPTUUgQ09NUE9ORU5UU1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8qKlxuICogVGhlIGBIZWFkZXJBY3Rpb25zYCBjb21wb25lbnQgcmVuZGVycyBhIGNvbnRhaW5lciBmb3IgYWN0aW9uIGJ1dHRvbnMgaW4gdGhlIGFwcCBob21lIGhlYWRlci4gSXQgYWNjZXB0cyBgUHJpbWFyeUhlYWRlckFjdGlvbkJ1dHRvbmAgYW5kIGBTZWNvbmRhcnlIZWFkZXJBY3Rpb25CdXR0b25gIGFzIGNoaWxkcmVuLlxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IEhlYWRlckFjdGlvbnMgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdIZWFkZXJBY3Rpb25zJyk7XG4vKipcbiAqIFRoZSBgUHJpbWFyeUhlYWRlckFjdGlvbkJ1dHRvbmAgY29tcG9uZW50IHJlbmRlcnMgYSBwcmltYXJ5IGFjdGlvbiBidXR0b24gaW4gdGhlIGFwcCBob21lIGhlYWRlci4gVGhpcyBidXR0b24gaXMgc3R5bGVkIGFzIHRoZSBtYWluIGNhbGwtdG8tYWN0aW9uIGFuZCBvbmx5IG9uZSBzaG91bGQgYmUgdXNlZCBwZXIgYEhlYWRlckFjdGlvbnNgIGNvbnRhaW5lci5cbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBQcmltYXJ5SGVhZGVyQWN0aW9uQnV0dG9uID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnUHJpbWFyeUhlYWRlckFjdGlvbkJ1dHRvbicsIHtcbiAgICBmcmFnbWVudFByb3BzOiBbJ292ZXJsYXknXSxcbn0pO1xuLyoqXG4gKiBUaGUgYFNlY29uZGFyeUhlYWRlckFjdGlvbkJ1dHRvbmAgY29tcG9uZW50IHJlbmRlcnMgYSBzZWNvbmRhcnkgYWN0aW9uIGJ1dHRvbiBpbiB0aGUgYXBwIGhvbWUgaGVhZGVyLiBNdWx0aXBsZSBzZWNvbmRhcnkgYWN0aW9ucyBjYW4gYmUgdXNlZCBhbmQgdGhleSB3aWxsIGJlIGdyb3VwZWQgYXBwcm9wcmlhdGVseSBpbiB0aGUgaGVhZGVyLlxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IFNlY29uZGFyeUhlYWRlckFjdGlvbkJ1dHRvbiA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1NlY29uZGFyeUhlYWRlckFjdGlvbkJ1dHRvbicsIHtcbiAgICBmcmFnbWVudFByb3BzOiBbJ292ZXJsYXknXSxcbn0pO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEFQUCBQQUdFIENPTVBPTkVOVFNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vKipcbiAqIFRoZSBgUGFnZUhlYWRlcmAgY29tcG9uZW50IHJlbmRlcnMgdGhlIGFjdGlvbnMgd2l0aGluIHRoZSBoZWFkZXIgb2YgdGhlIHBhZ2UuIEl0IGFjY2VwdHMgYFByaW1hcnlBY3Rpb25gIGFuZCBgU2Vjb25kYXJ5QWN0aW9uc2AgYXMgY2hpbGRyZW4uXG4gKlxuICogKipMaW5rczoqKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvYXBwLXBhZ2UtY29tcG9uZW50cy9wYWdlLWhlYWRlciBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgUGFnZUhlYWRlciA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlQ29tcG91bmRSZWFjdENvbXBvbmVudCgnUGFnZUhlYWRlcicsIHtcbiAgICBjb21wb3VuZENvbXBvbmVudFByb3BlcnRpZXM6IHtcbiAgICAgICAgUHJpbWFyeUFjdGlvbjogY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnUGFnZUhlYWRlclByaW1hcnlBY3Rpb24nKSxcbiAgICAgICAgU2Vjb25kYXJ5QWN0aW9uczogY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnUGFnZUhlYWRlclNlY29uZGFyeUFjdGlvbnMnKSxcbiAgICAgICAgTGluazogY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnUGFnZUhlYWRlckxpbmsnKSxcbiAgICAgICAgUGFnZUxpbms6IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1BhZ2VIZWFkZXJQYWdlTGluaycpLFxuICAgIH0sXG59KTtcbi8qKlxuICogVGhlICdQYWdlQnJlYWRjcnVtYnMnIGNvbXBvbmVudCByZW5kZXJzIGEgbGlzdCBvZiBsaW5rcyB0byBzaG93IHRoZSB1c2VyJ3MgY3VycmVudCBsb2NhdGlvbiB3aXRoaW4gdGhlIGFwcCBhbmQgYWxsb3cgdGhlbSB0byBuYXZpZ2F0ZSBiYWNrIHRvIHByZXZpb3VzIHBhZ2VzLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9yZWZlcmVuY2UvdWktY29tcG9uZW50cy9hcHAtcGFnZS1jb21wb25lbnRzL3BhZ2UtYnJlYWRjcnVtYnMgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFBhZ2VCcmVhZGNydW1icyA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlQ29tcG91bmRSZWFjdENvbXBvbmVudCgnUGFnZUJyZWFkY3J1bWJzJywge1xuICAgIGNvbXBvdW5kQ29tcG9uZW50UHJvcGVydGllczoge1xuICAgICAgICBQYWdlTGluazogY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnUGFnZUJyZWFkY3J1bWJzUGFnZUxpbmsnKSxcbiAgICAgICAgQ3VycmVudDogY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnUGFnZUJyZWFkY3J1bWJzQ3VycmVudCcpLFxuICAgIH0sXG59KTtcbmV4cG9ydCBjb25zdCBQYWdlTGluayA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1BhZ2VMaW5rJyk7XG5leHBvcnQgY29uc3QgUGFnZVRpdGxlID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnUGFnZVRpdGxlJyk7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gRVhQRVJJTUVOVEFMIENPTVBPTkVOVFNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vKipcbiAqIEBleHBlcmltZW50YWwgVGhpcyBjb21wb25lbnQgaXMgZXhwZXJpbWVudGFsLiBBdm9pZCB1c2luZyBpdCBpbiBwcm9kdWN0aW9uIGR1ZSB0byBwb3RlbnRpYWwgYnJlYWtpbmcgY2hhbmdlcy4gWW91ciBmZWVkYmFjayBpcyB2YWx1YWJsZSBmb3IgaW1wcm92ZW1lbnRzLiBTdGF5IHR1bmVkIGZvciB1cGRhdGVzLlxuICovXG5leHBvcnQgY29uc3QgSWZyYW1lID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnSWZyYW1lJyk7XG4vKipcbiAqIEBleHBlcmltZW50YWwgVGhpcyBjb21wb25lbnQgaXMgZXhwZXJpbWVudGFsLiBBdm9pZCB1c2luZyBpdCBpbiBwcm9kdWN0aW9uIGR1ZSB0byBwb3RlbnRpYWwgYnJlYWtpbmcgY2hhbmdlcy4gWW91ciBmZWVkYmFjayBpcyB2YWx1YWJsZSBmb3IgaW1wcm92ZW1lbnRzLiBTdGF5IHR1bmVkIGZvciB1cGRhdGVzLlxuICovXG5leHBvcnQgY29uc3QgTWVkaWFPYmplY3QgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdNZWRpYU9iamVjdCcsIHtcbiAgICBmcmFnbWVudFByb3BzOiBbJ2l0ZW1SaWdodCcsICdpdGVtTGVmdCddLFxufSk7XG4vKipcbiAqIEBleHBlcmltZW50YWwgVGhpcyBjb21wb25lbnQgaXMgZXhwZXJpbWVudGFsLiBBdm9pZCB1c2luZyBpdCBpbiBwcm9kdWN0aW9uIGR1ZSB0byBwb3RlbnRpYWwgYnJlYWtpbmcgY2hhbmdlcy4gWW91ciBmZWVkYmFjayBpcyB2YWx1YWJsZSBmb3IgaW1wcm92ZW1lbnRzLiBTdGF5IHR1bmVkIGZvciB1cGRhdGVzLlxuICovXG5leHBvcnQgY29uc3QgU3RhY2syID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnU3RhY2syJyk7XG4vKipcbiAqIEBleHBlcmltZW50YWwgVGhpcyBjb21wb25lbnQgaXMgZXhwZXJpbWVudGFsLiBBdm9pZCB1c2luZyBpdCBpbiBwcm9kdWN0aW9uIGR1ZSB0byBwb3RlbnRpYWwgYnJlYWtpbmcgY2hhbmdlcy4gWW91ciBmZWVkYmFjayBpcyB2YWx1YWJsZSBmb3IgaW1wcm92ZW1lbnRzLiBTdGF5IHR1bmVkIGZvciB1cGRhdGVzLlxuICovXG5leHBvcnQgY29uc3QgQ2VudGVyID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ2VudGVyJyk7XG4vKipcbiAqIEBleHBlcmltZW50YWwgVGhpcyBjb21wb25lbnQgaXMgZXhwZXJpbWVudGFsLiBBdm9pZCB1c2luZyBpdCBpbiBwcm9kdWN0aW9uIGR1ZSB0byBwb3RlbnRpYWwgYnJlYWtpbmcgY2hhbmdlcy4gWW91ciBmZWVkYmFjayBpcyB2YWx1YWJsZSBmb3IgaW1wcm92ZW1lbnRzLiBTdGF5IHR1bmVkIGZvciB1cGRhdGVzLlxuICovXG5leHBvcnQgY29uc3QgR3JpZCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0dyaWQnKTtcbi8qKlxuICogQGV4cGVyaW1lbnRhbCBUaGlzIGNvbXBvbmVudCBpcyBleHBlcmltZW50YWwuIEF2b2lkIHVzaW5nIGl0IGluIHByb2R1Y3Rpb24gZHVlIHRvIHBvdGVudGlhbCBicmVha2luZyBjaGFuZ2VzLiBZb3VyIGZlZWRiYWNrIGlzIHZhbHVhYmxlIGZvciBpbXByb3ZlbWVudHMuIFN0YXkgdHVuZWQgZm9yIHVwZGF0ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBHcmlkSXRlbSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0dyaWRJdGVtJyk7XG4vKipcbiAqIEBleHBlcmltZW50YWwgVGhpcyBjb21wb25lbnQgaXMgZXhwZXJpbWVudGFsLiBBdm9pZCB1c2luZyBpdCBpbiBwcm9kdWN0aW9uIGR1ZSB0byBwb3RlbnRpYWwgYnJlYWtpbmcgY2hhbmdlcy4gWW91ciBmZWVkYmFjayBpcyB2YWx1YWJsZSBmb3IgaW1wcm92ZW1lbnRzLiBTdGF5IHR1bmVkIGZvciB1cGRhdGVzLlxuICovXG5leHBvcnQgY29uc3QgU2V0dGluZ3NWaWV3ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnU2V0dGluZ3NWaWV3Jyk7XG4vKipcbiAqIFRoZSBgRXhwYW5kYWJsZVRleHRgIGNvbXBvbmVudCByZW5kZXJzIGEgdGV4dCB0aGF0IGNhbiBiZSBleHBhbmRlZCBvciBjb2xsYXBzZWQgYmFzZWQgb24gYSBtYXhpbXVtIGhlaWdodC5cbiAqXG4gKiBAZXhwZXJpbWVudGFsIFRoaXMgY29tcG9uZW50IGlzIGV4cGVyaW1lbnRhbC4gQXZvaWQgdXNpbmcgaXQgaW4gcHJvZHVjdGlvbiBkdWUgdG8gcG90ZW50aWFsIGJyZWFraW5nIGNoYW5nZXMuIFlvdXIgZmVlZGJhY2sgaXMgdmFsdWFibGUgZm9yIGltcHJvdmVtZW50cy4gU3RheSB0dW5lZCBmb3IgdXBkYXRlcy5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvcmVmZXJlbmNlL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9leHBhbmRhYmxlLXRleHQgRXhwYW5kYWJsZVRleHQgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IEV4cGFuZGFibGVUZXh0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRXhwYW5kYWJsZVRleHQnKTtcbi8qKlxuICogVGhlIGBQb3BvdmVyYCBjb21wb25lbnQgcmVuZGVycyBhIHBvcG92ZXIgb3ZlcmxheSB0aGF0IGNhbiBjb250YWluIG90aGVyIGNvbXBvbmVudHMuXG4gKlxuICogQGV4cGVyaW1lbnRhbCBUaGlzIGNvbXBvbmVudCBpcyBleHBlcmltZW50YWwuIEF2b2lkIHVzaW5nIGl0IGluIHByb2R1Y3Rpb24gZHVlIHRvIHBvdGVudGlhbCBicmVha2luZyBjaGFuZ2VzLiBZb3VyIGZlZWRiYWNrIGlzIHZhbHVhYmxlIGZvciBpbXByb3ZlbWVudHMuIFN0YXkgdHVuZWQgZm9yIHVwZGF0ZXMuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL3JlZmVyZW5jZS91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvcG9wb3ZlciBQb3BvdmVyIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBQb3BvdmVyID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnUG9wb3ZlcicpO1xuLyoqXG4gKiBAZXhwZXJpbWVudGFsIFRoaXMgY29tcG9uZW50IGlzIGV4cGVyaW1lbnRhbC4gQXZvaWQgdXNpbmcgaXQgaW4gcHJvZHVjdGlvbiBkdWUgdG8gcG90ZW50aWFsIGJyZWFraW5nIGNoYW5nZXMuIFlvdXIgZmVlZGJhY2sgaXMgdmFsdWFibGUgZm9yIGltcHJvdmVtZW50cy4gU3RheSB0dW5lZCBmb3IgdXBkYXRlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IEZpbGVJbnB1dCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0ZpbGVJbnB1dCcpO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgUmVhY3RSZW5kZXJNb2Nrc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xuLyoqXG4gKiBDcmVhdGVzIGEgbW9jay1hd2FyZSBob29rIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gbW9jayB0aGUgb3JpZ2luYWwgaG9vayBmdW5jdGlvbi5cbiAqIFRoZSBtb2NrLWF3YXJlIGhvb2sgZnVuY3Rpb24gd2lsbCByZXR1cm4gdGhlIG1vY2tlZCBob29rIGZ1bmN0aW9uIGlmIGEgbW9jayBpcyBmb3VuZCwgb3RoZXJ3aXNlIGl0IHdpbGwgcmV0dXJuIHRoZSBvcmlnaW5hbCBob29rIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSBob29rTmFtZSBUaGUgbmFtZSBvZiB0aGUgaG9vayB0byBtb2NrIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIGtleSBpbiB0aGUgTW9ja3MgaW50ZXJmYWNlXG4gKiBAcGFyYW0gb3JpZ2luYWxIb29rRnVuY3Rpb24gVGhlIG9yaWdpbmFsIGhvb2sgZnVuY3Rpb24gdG8gY2FsbCBpZiBubyBtb2NrIGlzIGZvdW5kXG4gKiBAcmV0dXJucyBUaGUgbW9ja2VkIGhvb2sgZnVuY3Rpb24gb3IgdGhlIG9yaWdpbmFsIGhvb2sgZnVuY3Rpb24gaWYgbm8gbW9jayBpcyBmb3VuZFxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlTW9ja0F3YXJlSG9vayA9IChob29rTmFtZSwgb3JpZ2luYWxIb29rRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCB1c2VXcmFwcGVyID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgbW9ja3NDb250ZXh0ID0gdXNlTW9ja3NDb250ZXh0KCk7XG4gICAgICAgIGlmICghbW9ja3NDb250ZXh0KSB7XG4gICAgICAgICAgICAvLyBJZiBubyBtb2NrcyBhcmUgcHJvdmlkZWQsIGNhbGwgdGhlIG9yaWdpbmFsIGhvb2sgZnVuY3Rpb25cbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbEhvb2tGdW5jdGlvbiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IG1vY2tzIH0gPSBtb2Nrc0NvbnRleHQ7XG4gICAgICAgIGNvbnN0IG1vY2tIb29rID0gbW9ja3NbaG9va05hbWVdO1xuICAgICAgICBpZiAoIW1vY2tIb29rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYElsbGVnYWwgU3RhdGU6IE1vY2sgZm9yIGhvb2sgJHtob29rTmFtZX0gbm90IGZvdW5kLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb2NrSG9vayguLi5hcmdzKTtcbiAgICB9O1xuICAgIHJldHVybiB1c2VXcmFwcGVyO1xufTtcbi8qKlxuICogQSBob29rIHRoYXQgcHJvdmlkZXMgYWNjZXNzIHRvIHRoZSBNb2NrcyBjb250ZXh0LlxuICogUmV0dXJucyB0aGUgbW9ja3MgY29udGV4dCB2YWx1ZSBpZiBpbnNpZGUgYSBNb2Nrc0NvbnRleHRQcm92aWRlciwgb3RoZXJ3aXNlIHJldHVybnMgbnVsbC5cbiAqXG4gKiBAcmV0dXJucyBUaGUgbW9ja3MgY29udGV4dCB2YWx1ZSBvciBudWxsIGlmIG5vdCBpbiBhIHRlc3QgZW52aXJvbm1lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNb2Nrc0NvbnRleHQoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoUmVhY3RSZW5kZXJNb2Nrc0NvbnRleHQpO1xufVxuLyoqXG4gKiBBIFJlYWN0IGNvbXBvbmVudCB0aGF0IHByb3ZpZGVzIHRoZSBNb2NrcyBjb250ZXh0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcHJvdmlkZSBtb2NrcyB0byB0aGUgbW9jay1hd2FyZSBob29rIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcGFyYW0gY2hpbGRyZW4gVGhlIGNoaWxkcmVuIHRvIHJlbmRlci5cbiAqIEByZXR1cm5zIFRoZSBjaGlsZHJlbiB3cmFwcGVkIGluIHRoZSBNb2NrcyBjb250ZXh0IHByb3ZpZGVyLlxuICovXG5leHBvcnQgY29uc3QgTW9ja3NDb250ZXh0UHJvdmlkZXIgPSBSZWFjdFJlbmRlck1vY2tzQ29udGV4dC5Qcm92aWRlcjtcbi8qKlxuICogU3RhYmlsaXplcyBhIHZhbHVlJ3MgcmVmZXJlbmNlIGlkZW50aXR5IGFjcm9zcyByZS1yZW5kZXJzIHVzaW5nIGRlZXBcbiAqIGNvbXBhcmlzb24gdmlhIEpTT04uc3RyaW5naWZ5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhYmxlVmFsdWUodmFsdWUpIHtcbiAgICBjb25zdCBzdGFibGVSZWYgPSB1c2VSZWYoe1xuICAgICAgICBrZXk6IEpTT04uc3RyaW5naWZ5KHZhbHVlKSxcbiAgICAgICAgdmFsdWUsXG4gICAgfSk7XG4gICAgY29uc3Qga2V5ID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgIGlmIChrZXkgIT09IHN0YWJsZVJlZi5jdXJyZW50LmtleSkge1xuICAgICAgICBzdGFibGVSZWYuY3VycmVudCA9IHsga2V5LCB2YWx1ZSB9O1xuICAgIH1cbiAgICByZXR1cm4gc3RhYmxlUmVmLmN1cnJlbnQudmFsdWU7XG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5mdW5jdGlvbiBub3JtYWxpemVFcnJvcihlcnIsIGRlZmF1bHRNZXNzYWdlKSB7XG4gICAgcmV0dXJuIGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyIDogbmV3IEVycm9yKGRlZmF1bHRNZXNzYWdlKTtcbn1cbi8qKlxuICogU2hhcmVkIGZldGNoL3JlZmV0Y2gvY2xlYW51cC9hYm9ydCBsaWZlY3ljbGUgZm9yIGRhdGEgaG9va3MuXG4gKlxuICogTWFuYWdlczpcbiAqIC0gSW5pdGlhbCBmZXRjaCBvbiBtb3VudCBhbmQgd2hlbiBkZXBzIGNoYW5nZVxuICogLSBDYW5jZWxsYXRpb24gb2YgaW4tZmxpZ2h0IGZldGNoZXMgb24gdW5tb3VudCBvciBkZXBzIGNoYW5nZVxuICogLSBSZWZldGNoIHdpdGggYWJvcnQgc2lnbmFsIGFuZCBjbGVhbnVwIHRyYWNraW5nXG4gKiAtIEVycm9yIG5vcm1hbGl6YXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUZldGNoTGlmZWN5Y2xlKHsgZmV0Y2hGbiwgY2FsbGJhY2tzLCBkZXBzLCBkZWZhdWx0RXJyb3JNZXNzYWdlID0gJ0FuIGVycm9yIG9jY3VycmVkJywgfSkge1xuICAgIC8vIFN0b3JlIGxhdGVzdCB2ZXJzaW9ucyBpbiByZWZzIHRvIGF2b2lkIHN0YWxlIGNsb3N1cmVzIGluIHJlZmV0Y2hcbiAgICBjb25zdCBmZXRjaEZuUmVmID0gdXNlUmVmKGZldGNoRm4pO1xuICAgIGZldGNoRm5SZWYuY3VycmVudCA9IGZldGNoRm47XG4gICAgY29uc3QgY2FsbGJhY2tzUmVmID0gdXNlUmVmKGNhbGxiYWNrcyk7XG4gICAgY2FsbGJhY2tzUmVmLmN1cnJlbnQgPSBjYWxsYmFja3M7XG4gICAgY29uc3QgZGVmYXVsdEVycm9yTWVzc2FnZVJlZiA9IHVzZVJlZihkZWZhdWx0RXJyb3JNZXNzYWdlKTtcbiAgICBkZWZhdWx0RXJyb3JNZXNzYWdlUmVmLmN1cnJlbnQgPSBkZWZhdWx0RXJyb3JNZXNzYWdlO1xuICAgIC8vIFRyYWNrIGluLWZsaWdodCByZWZldGNoIHRvIHN1cHBvcnQgY2FuY2VsbGF0aW9uXG4gICAgY29uc3QgcmVmZXRjaEFib3J0UmVmID0gdXNlUmVmKG51bGwpO1xuICAgIC8vIFRyYWNrIHJlZmV0Y2ggY2xlYW51cCBmdW5jdGlvbiB0byBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuICAgIGNvbnN0IHJlZmV0Y2hDbGVhbnVwUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGNsZWFudXAgPSBudWxsO1xuICAgICAgICBjb25zdCBzaWduYWwgPSB7IGNhbmNlbGxlZDogZmFsc2UsIGlzUmVmZXRjaDogZmFsc2UgfTtcbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHsgaXNSZWZldGNoOiBmYWxzZSB9O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3NSZWYuY3VycmVudC5vblN0YXJ0KGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoRm5SZWYuY3VycmVudChzaWduYWwpO1xuICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrc1JlZi5jdXJyZW50Lm9uU3VjY2VzcyhyZXN1bHQuZGF0YSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFudXAgPSByZXN1bHQuY2xlYW51cCA/PyBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3NSZWYuY3VycmVudC5vbkVycm9yKG5vcm1hbGl6ZUVycm9yKGVyciwgZGVmYXVsdEVycm9yTWVzc2FnZVJlZi5jdXJyZW50KSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmZXRjaERhdGEoKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICBzaWduYWwuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIENhbGwgY2xlYW51cCBmdW5jdGlvbiB0byByZWxlYXNlIHJlc291cmNlc1xuICAgICAgICAgICAgaWYgKGNsZWFudXApIHtcbiAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDbGVhbiB1cCBhbnkgYWN0aXZlIHJlZmV0Y2ggc3Vic2NyaXB0aW9uXG4gICAgICAgICAgICBpZiAocmVmZXRjaENsZWFudXBSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIHJlZmV0Y2hDbGVhbnVwUmVmLmN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICByZWZldGNoQ2xlYW51cFJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBkZXBzKTtcbiAgICBjb25zdCByZWZldGNoID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAvLyBDYW5jZWwgYW55IGluLWZsaWdodCByZWZldGNoXG4gICAgICAgIGlmIChyZWZldGNoQWJvcnRSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgcmVmZXRjaEFib3J0UmVmLmN1cnJlbnQuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDbGVhbiB1cCBvbGQgcmVmZXRjaCBzdWJzY3JpcHRpb24gdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICAgICAgaWYgKHJlZmV0Y2hDbGVhbnVwUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJlZmV0Y2hDbGVhbnVwUmVmLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHJlZmV0Y2hDbGVhbnVwUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIENyZWF0ZSBuZXcgYWJvcnQgc2lnbmFsIGZvciB0aGlzIHJlZmV0Y2hcbiAgICAgICAgY29uc3QgYWJvcnRTaWduYWwgPSB7IGNhbmNlbGxlZDogZmFsc2UsIGlzUmVmZXRjaDogdHJ1ZSB9O1xuICAgICAgICByZWZldGNoQWJvcnRSZWYuY3VycmVudCA9IGFib3J0U2lnbmFsO1xuICAgICAgICBjb25zdCBjb250ZXh0ID0geyBpc1JlZmV0Y2g6IHRydWUgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNhbGxiYWNrc1JlZi5jdXJyZW50Lm9uU3RhcnQoY29udGV4dCk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaEZuUmVmLmN1cnJlbnQoYWJvcnRTaWduYWwpO1xuICAgICAgICAgICAgaWYgKCFhYm9ydFNpZ25hbC5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3NSZWYuY3VycmVudC5vblN1Y2Nlc3MocmVzdWx0LmRhdGEsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIC8vIFN0b3JlIGNsZWFudXAgZm9yIG5leHQgcmVmZXRjaCBvciB1bm1vdW50XG4gICAgICAgICAgICAgICAgcmVmZXRjaENsZWFudXBSZWYuY3VycmVudCA9IHJlc3VsdC5jbGVhbnVwID8/IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBjYW5jZWxsZWQsIGNsZWFuIHVwIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jbGVhbnVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5jbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmICghYWJvcnRTaWduYWwuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzUmVmLmN1cnJlbnQub25FcnJvcihub3JtYWxpemVFcnJvcihlcnIsIGRlZmF1bHRFcnJvck1lc3NhZ2VSZWYuY3VycmVudCksIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIGFib3J0IHJlZiBpZiB0aGlzIGlzIHN0aWxsIHRoZSBjdXJyZW50IHJlZmV0Y2hcbiAgICAgICAgICAgIGlmIChyZWZldGNoQWJvcnRSZWYuY3VycmVudCA9PT0gYWJvcnRTaWduYWwpIHtcbiAgICAgICAgICAgICAgICByZWZldGNoQWJvcnRSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHsgcmVmZXRjaCB9O1xufVxuIiwiZXhwb3J0IGNvbnN0IERFRkFVTFRfUEFHRV9TSVpFID0gMTA7XG4vKipcbiAqIENhbGN1bGF0ZSBwYWdpbmF0aW9uIGZsYWdzIGJhc2VkIG9uIGN1cnJlbnQgcGFnZSBhbmQgQVBJIGhhc01vcmUgZmxhZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlUGFnaW5hdGlvbkZsYWdzKGN1cnJlbnRQYWdlLCBoYXNNb3JlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGFzTmV4dFBhZ2U6IGhhc01vcmUsXG4gICAgICAgIGhhc1ByZXZpb3VzUGFnZTogY3VycmVudFBhZ2UgPiAxLFxuICAgIH07XG59XG4iLCJmdW5jdGlvbiBpc0Fzc29jaWF0aW9uc1Jlc3BvbnNlKGRhdGEpIHtcbiAgICBpZiAoZGF0YSA9PT0gbnVsbCB8fFxuICAgICAgICB0eXBlb2YgZGF0YSAhPT0gJ29iamVjdCcgfHxcbiAgICAgICAgIUFycmF5LmlzQXJyYXkoZGF0YS5yZXN1bHRzKSB8fFxuICAgICAgICB0eXBlb2YgZGF0YS5oYXNNb3JlICE9PSAnYm9vbGVhbicgfHxcbiAgICAgICAgdHlwZW9mIGRhdGEubmV4dE9mZnNldCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YS5yZXN1bHRzLmV2ZXJ5KChyZXN1bHQpID0+IHJlc3VsdCAhPT0gbnVsbCAmJlxuICAgICAgICB0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgICB0eXBlb2YgcmVzdWx0LnRvT2JqZWN0SWQgPT09ICdudW1iZXInICYmXG4gICAgICAgIEFycmF5LmlzQXJyYXkocmVzdWx0LmFzc29jaWF0aW9uVHlwZXMpICYmXG4gICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzICE9PSBudWxsICYmXG4gICAgICAgIHR5cGVvZiByZXN1bHQucHJvcGVydGllcyA9PT0gJ29iamVjdCcpO1xufVxuZXhwb3J0IGNvbnN0IGZldGNoQXNzb2NpYXRpb25zID0gYXN5bmMgKHJlcXVlc3QsIG9wdGlvbnMpID0+IHtcbiAgICBsZXQgcmVzcG9uc2U7XG4gICAgbGV0IHJlc3VsdDtcbiAgICB0cnkge1xuICAgICAgICByZXNwb25zZSA9IGF3YWl0IHNlbGYuZmV0Y2hBc3NvY2lhdGlvbnMocmVxdWVzdCwgb3B0aW9ucyk7XG4gICAgICAgIHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRocm93IGVycm9yIGluc3RhbmNlb2YgRXJyb3JcbiAgICAgICAgICAgID8gZXJyb3JcbiAgICAgICAgICAgIDogbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggYXNzb2NpYXRpb25zOiBVbmtub3duIGVycm9yJyk7XG4gICAgfVxuICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3VsdC5lcnJvcik7XG4gICAgfVxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggYXNzb2NpYXRpb25zOiAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XG4gICAgfVxuICAgIGlmICghaXNBc3NvY2lhdGlvbnNSZXNwb25zZShyZXN1bHQuZGF0YSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlc3BvbnNlIGZvcm1hdCcpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICAgICAgY2xlYW51cDogcmVzdWx0LmNsZWFudXAgfHwgKCgpID0+IHsgfSksXG4gICAgfTtcbn07XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZldGNoTGlmZWN5Y2xlIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3V0aWxzL3VzZUZldGNoTGlmZWN5Y2xlLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVNb2NrQXdhcmVIb29rLCB1c2VTdGFibGVWYWx1ZSwgfSBmcm9tIFwiLi4vLi4vaW50ZXJuYWwvaG9vay11dGlscy5qc1wiO1xuaW1wb3J0IHsgY2FsY3VsYXRlUGFnaW5hdGlvbkZsYWdzLCBERUZBVUxUX1BBR0VfU0laRSwgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcGFnaW5hdGlvbi5qc1wiO1xuaW1wb3J0IHsgZmV0Y2hBc3NvY2lhdGlvbnMgfSBmcm9tIFwiLi4vdXRpbHMvZmV0Y2hBc3NvY2lhdGlvbnMuanNcIjtcbmZ1bmN0aW9uIGNyZWF0ZUluaXRpYWxTdGF0ZShwYWdlU2l6ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3VsdHM6IFtdLFxuICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgICBpc1JlZmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBjdXJyZW50UGFnZTogMSxcbiAgICAgICAgcGFnZVNpemUsXG4gICAgICAgIGhhc01vcmU6IGZhbHNlLFxuICAgICAgICBjdXJyZW50T2Zmc2V0OiB1bmRlZmluZWQsXG4gICAgICAgIG5leHRPZmZzZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgb2Zmc2V0SGlzdG9yeTogW10sXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFzc29jaWF0aW9uc1JlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnRkVUQ0hfU1RBUlQnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdGRVRDSF9TVUNDRVNTJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZXN1bHRzOiBhY3Rpb24ucGF5bG9hZC5yZXN1bHRzLFxuICAgICAgICAgICAgICAgIGhhc01vcmU6IGFjdGlvbi5wYXlsb2FkLmhhc01vcmUsXG4gICAgICAgICAgICAgICAgY3VycmVudE9mZnNldDogYWN0aW9uLnBheWxvYWQuY3VycmVudE9mZnNldCxcbiAgICAgICAgICAgICAgICBuZXh0T2Zmc2V0OiBhY3Rpb24ucGF5bG9hZC5uZXh0T2Zmc2V0LFxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnRkVUQ0hfRVJST1InOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAgICAgICByZXN1bHRzOiBbXSxcbiAgICAgICAgICAgICAgICBoYXNNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50T2Zmc2V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgbmV4dE9mZnNldDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnTkVYVF9QQUdFJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2U6IHN0YXRlLmN1cnJlbnRQYWdlICsgMSxcbiAgICAgICAgICAgICAgICBvZmZzZXRIaXN0b3J5OiBzdGF0ZS5jdXJyZW50T2Zmc2V0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgPyBbLi4uc3RhdGUub2Zmc2V0SGlzdG9yeSwgc3RhdGUuY3VycmVudE9mZnNldF1cbiAgICAgICAgICAgICAgICAgICAgOiBzdGF0ZS5vZmZzZXRIaXN0b3J5LFxuICAgICAgICAgICAgICAgIGN1cnJlbnRPZmZzZXQ6IHN0YXRlLm5leHRPZmZzZXQsXG4gICAgICAgICAgICAgICAgbmV4dE9mZnNldDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnUFJFVklPVVNfUEFHRSc6IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1BhZ2UgPSBNYXRoLm1heCgxLCBzdGF0ZS5jdXJyZW50UGFnZSAtIDEpO1xuICAgICAgICAgICAgY29uc3QgbmV3SGlzdG9yeSA9IFsuLi5zdGF0ZS5vZmZzZXRIaXN0b3J5XTtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzT2Zmc2V0ID0gbmV3SGlzdG9yeS5wb3AoKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2U6IG5ld1BhZ2UsXG4gICAgICAgICAgICAgICAgb2Zmc2V0SGlzdG9yeTogbmV3SGlzdG9yeSxcbiAgICAgICAgICAgICAgICBjdXJyZW50T2Zmc2V0OiBwcmV2aW91c09mZnNldCxcbiAgICAgICAgICAgICAgICBuZXh0T2Zmc2V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ1JFU0VUJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2U6IDEsXG4gICAgICAgICAgICAgICAgcmVzdWx0czogW10sXG4gICAgICAgICAgICAgICAgaGFzTW9yZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICAgICAgY3VycmVudE9mZnNldDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIG5leHRPZmZzZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBvZmZzZXRIaXN0b3J5OiBbXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ1JFRkVUQ0hfU1RBUlQnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc1JlZmV0Y2hpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdSRUZFVENIX1NVQ0NFU1MnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc1JlZmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc3VsdHM6IGFjdGlvbi5wYXlsb2FkLnJlc3VsdHMsXG4gICAgICAgICAgICAgICAgaGFzTW9yZTogYWN0aW9uLnBheWxvYWQuaGFzTW9yZSxcbiAgICAgICAgICAgICAgICBuZXh0T2Zmc2V0OiBhY3Rpb24ucGF5bG9hZC5uZXh0T2Zmc2V0LFxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnUkVGRVRDSF9FUlJPUic6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzUmVmZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5jb25zdCBERUZBVUxUX09QVElPTlMgPSB7fTtcbi8qKlxuICogQSBob29rIHRvIGZldGNoIGFuZCBtYW5hZ2UgYXNzb2NpYXRpb25zIGJldHdlZW4gQ1JNIG9iamVjdHMgd2l0aCBwYWdpbmF0aW9uIHN1cHBvcnQuXG4gKi9cbmZ1bmN0aW9uIHVzZUFzc29jaWF0aW9uc0ludGVybmFsKGNvbmZpZywgb3B0aW9ucyA9IERFRkFVTFRfT1BUSU9OUykge1xuICAgIGNvbnN0IHBhZ2VTaXplID0gY29uZmlnPy5wYWdlTGVuZ3RoID8/IERFRkFVTFRfUEFHRV9TSVpFO1xuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihhc3NvY2lhdGlvbnNSZWR1Y2VyLCB1c2VNZW1vKCgpID0+IGNyZWF0ZUluaXRpYWxTdGF0ZShwYWdlU2l6ZSksIFtwYWdlU2l6ZV0pKTtcbiAgICBjb25zdCBzdGFibGVDb25maWcgPSB1c2VTdGFibGVWYWx1ZShjb25maWcpO1xuICAgIGNvbnN0IHN0YWJsZU9wdGlvbnMgPSB1c2VTdGFibGVWYWx1ZShvcHRpb25zKTtcbiAgICAvLyBQYWdpbmF0aW9uIGFjdGlvbnNcbiAgICBjb25zdCBuZXh0UGFnZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgcGFnaW5hdGlvbkZsYWdzID0gY2FsY3VsYXRlUGFnaW5hdGlvbkZsYWdzKHN0YXRlLmN1cnJlbnRQYWdlLCBzdGF0ZS5oYXNNb3JlKTtcbiAgICAgICAgaWYgKHBhZ2luYXRpb25GbGFncy5oYXNOZXh0UGFnZSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnTkVYVF9QQUdFJyB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtzdGF0ZS5jdXJyZW50UGFnZSwgc3RhdGUuaGFzTW9yZV0pO1xuICAgIGNvbnN0IHByZXZpb3VzUGFnZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgcGFnaW5hdGlvbkZsYWdzID0gY2FsY3VsYXRlUGFnaW5hdGlvbkZsYWdzKHN0YXRlLmN1cnJlbnRQYWdlLCBzdGF0ZS5oYXNNb3JlKTtcbiAgICAgICAgaWYgKHBhZ2luYXRpb25GbGFncy5oYXNQcmV2aW91c1BhZ2UpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1BSRVZJT1VTX1BBR0UnIH0pO1xuICAgICAgICB9XG4gICAgfSwgW3N0YXRlLmN1cnJlbnRQYWdlLCBzdGF0ZS5oYXNNb3JlXSk7XG4gICAgY29uc3QgcmVzZXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZ2luYXRpb25GbGFncyA9IGNhbGN1bGF0ZVBhZ2luYXRpb25GbGFncyhzdGF0ZS5jdXJyZW50UGFnZSwgc3RhdGUuaGFzTW9yZSk7XG4gICAgICAgIC8vIE9ubHkgcmVzZXQgdG8gZmlyc3QgcGFnZSBpZiB3ZSdyZSBub3QgYWxyZWFkeSBvbiB0aGUgZmlyc3QgcGFnZVxuICAgICAgICBpZiAocGFnaW5hdGlvbkZsYWdzLmhhc1ByZXZpb3VzUGFnZSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnUkVTRVQnIH0pO1xuICAgICAgICB9XG4gICAgfSwgW3N0YXRlLmN1cnJlbnRQYWdlLCBzdGF0ZS5oYXNNb3JlXSk7XG4gICAgY29uc3QgeyByZWZldGNoIH0gPSB1c2VGZXRjaExpZmVjeWNsZSh7XG4gICAgICAgIGZldGNoRm46ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgICAgICAgICAgICAgdG9PYmplY3RUeXBlOiBzdGFibGVDb25maWc/LnRvT2JqZWN0VHlwZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiBzdGFibGVDb25maWc/LnByb3BlcnRpZXMsXG4gICAgICAgICAgICAgICAgcGFnZUxlbmd0aDogcGFnZVNpemUsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBzdGF0ZS5jdXJyZW50T2Zmc2V0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaEFzc29jaWF0aW9ucyhyZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgcHJvcGVydGllc1RvRm9ybWF0OiBzdGFibGVPcHRpb25zLnByb3BlcnRpZXNUb0Zvcm1hdCxcbiAgICAgICAgICAgICAgICBmb3JtYXR0aW5nT3B0aW9uczogc3RhYmxlT3B0aW9ucy5mb3JtYXR0aW5nT3B0aW9ucyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgIG9uU3RhcnQ6ICh7IGlzUmVmZXRjaCB9KSA9PiBkaXNwYXRjaCh7IHR5cGU6IGlzUmVmZXRjaCA/ICdSRUZFVENIX1NUQVJUJyA6ICdGRVRDSF9TVEFSVCcgfSksXG4gICAgICAgICAgICBvblN1Y2Nlc3M6IChkYXRhLCB7IGlzUmVmZXRjaCB9KSA9PiBkaXNwYXRjaChpc1JlZmV0Y2hcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1JFRkVUQ0hfU1VDQ0VTUycsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHM6IGRhdGEucmVzdWx0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc01vcmU6IGRhdGEuaGFzTW9yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRPZmZzZXQ6IGRhdGEubmV4dE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdGRVRDSF9TVUNDRVNTJyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0czogZGF0YS5yZXN1bHRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzTW9yZTogZGF0YS5oYXNNb3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE9mZnNldDogZGF0YS5uZXh0T2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE9mZnNldDogc3RhdGUuY3VycmVudE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG9uRXJyb3I6IChlcnJvciwgeyBpc1JlZmV0Y2ggfSkgPT4gZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IGlzUmVmZXRjaCA/ICdSRUZFVENIX0VSUk9SJyA6ICdGRVRDSF9FUlJPUicsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogZXJyb3IsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSxcbiAgICAgICAgZGVwczogW1xuICAgICAgICAgICAgc3RhYmxlQ29uZmlnLFxuICAgICAgICAgICAgc3RhYmxlT3B0aW9ucyxcbiAgICAgICAgICAgIHN0YXRlLmN1cnJlbnRQYWdlLFxuICAgICAgICAgICAgc3RhdGUuY3VycmVudE9mZnNldCxcbiAgICAgICAgICAgIHBhZ2VTaXplLFxuICAgICAgICBdLFxuICAgICAgICBkZWZhdWx0RXJyb3JNZXNzYWdlOiAnRmFpbGVkIHRvIGZldGNoIGFzc29jaWF0aW9ucycsXG4gICAgfSk7XG4gICAgLy8gQ2FsY3VsYXRlIHBhZ2luYXRpb24gZmxhZ3NcbiAgICBjb25zdCBwYWdpbmF0aW9uRmxhZ3MgPSBjYWxjdWxhdGVQYWdpbmF0aW9uRmxhZ3Moc3RhdGUuY3VycmVudFBhZ2UsIHN0YXRlLmhhc01vcmUpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3VsdHM6IHN0YXRlLnJlc3VsdHMsXG4gICAgICAgIGVycm9yOiBzdGF0ZS5lcnJvcixcbiAgICAgICAgaXNMb2FkaW5nOiBzdGF0ZS5pc0xvYWRpbmcsXG4gICAgICAgIGlzUmVmZXRjaGluZzogc3RhdGUuaXNSZWZldGNoaW5nLFxuICAgICAgICByZWZldGNoLFxuICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICBoYXNOZXh0UGFnZTogcGFnaW5hdGlvbkZsYWdzLmhhc05leHRQYWdlLFxuICAgICAgICAgICAgaGFzUHJldmlvdXNQYWdlOiBwYWdpbmF0aW9uRmxhZ3MuaGFzUHJldmlvdXNQYWdlLFxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IHN0YXRlLmN1cnJlbnRQYWdlLFxuICAgICAgICAgICAgcGFnZVNpemU6IHN0YXRlLnBhZ2VTaXplLFxuICAgICAgICAgICAgbmV4dFBhZ2UsXG4gICAgICAgICAgICBwcmV2aW91c1BhZ2UsXG4gICAgICAgICAgICByZXNldCxcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0IGNvbnN0IHVzZUFzc29jaWF0aW9ucyA9IGNyZWF0ZU1vY2tBd2FyZUhvb2soJ3VzZUFzc29jaWF0aW9ucycsIHVzZUFzc29jaWF0aW9uc0ludGVybmFsKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBGbGV4LFxuICBTcGFjZXIsXG4gIFRleHQsXG4gIEJveCxcbiAgTG9hZGluZ1NwaW5uZXIsXG4gIEVycm9yU3RhdGUsXG4gIElubGluZSxcbiAgVGV4dEFyZWEsXG59IGZyb20gJ0BodWJzcG90L3VpLWV4dGVuc2lvbnMnO1xuaW1wb3J0IHsgaHVic3BvdCB9IGZyb20gJ0BodWJzcG90L3VpLWV4dGVuc2lvbnMnO1xuaW1wb3J0IHsgdXNlQXNzb2NpYXRpb25zIH0gZnJvbSAnQGh1YnNwb3QvdWktZXh0ZW5zaW9ucy9jcm0nO1xuXG4vLyDilIDilIDilIAgRXh0ZW5zaW9uIGVudHJ5IHBvaW50IOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG5odWJzcG90LmV4dGVuZDwnY3JtLnJlY29yZC50YWInPigoeyBjb250ZXh0LCBhY3Rpb25zIH0pID0+IChcbiAgPFNNU0hpc3RvcnkgY29udGV4dD17Y29udGV4dH0gYWN0aW9ucz17YWN0aW9uc30gLz5cbikpO1xuXG4vLyDilIDilIDilIAgVHlwZXMg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5cbmludGVyZmFjZSBTTVNIaXN0b3J5UHJvcHMge1xuICBjb250ZXh0OiB1bmtub3duO1xuICBhY3Rpb25zOiB1bmtub3duO1xufVxuXG5pbnRlcmZhY2UgTWVzc2FnZUJ1YmJsZVByb3BzIHtcbiAgYm9keTogc3RyaW5nO1xuICB0aW1lOiBzdHJpbmc7XG4gIGlzT3V0Z29pbmc6IGJvb2xlYW47XG59XG5cbi8vIOKUgOKUgOKUgCBIZWxwZXIgZnVuY3Rpb25zIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG5mdW5jdGlvbiBwYXJzZUh1YlNwb3REYXRlKHZhbDogdW5rbm93bik6IERhdGUge1xuICBpZiAoIXZhbCkgcmV0dXJuIG5ldyBEYXRlKCk7XG4gIGNvbnN0IG51bSA9IE51bWJlcih2YWwpO1xuICBpZiAoIWlzTmFOKG51bSkgJiYgU3RyaW5nKHZhbCkubGVuZ3RoID4gMTApIHJldHVybiBuZXcgRGF0ZShudW0pO1xuICBjb25zdCBkID0gbmV3IERhdGUoU3RyaW5nKHZhbCkpO1xuICByZXR1cm4gaXNOYU4oZC5nZXRUaW1lKCkpID8gbmV3IERhdGUoKSA6IGQ7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gIHJldHVybiBkYXRlLnRvTG9jYWxlVGltZVN0cmluZyhbXSwgeyBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnIH0pO1xufVxuXG5mdW5jdGlvbiBmb3JtYXREYXRlSGVhZGVyKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGlmIChkYXRlLnRvRGF0ZVN0cmluZygpID09PSB0b2RheS50b0RhdGVTdHJpbmcoKSkgcmV0dXJuICdUb2RheSc7XG5cbiAgY29uc3QgeWVzdGVyZGF5ID0gbmV3IERhdGUodG9kYXkpO1xuICB5ZXN0ZXJkYXkuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgLSAxKTtcbiAgaWYgKGRhdGUudG9EYXRlU3RyaW5nKCkgPT09IHllc3RlcmRheS50b0RhdGVTdHJpbmcoKSkgcmV0dXJuICdZZXN0ZXJkYXknO1xuXG4gIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhbXSwgeyB3ZWVrZGF5OiAnc2hvcnQnLCBtb250aDogJ3Nob3J0JywgZGF5OiAnbnVtZXJpYycgfSk7XG59XG5cbmZ1bmN0aW9uIHN0cmlwSFRNTChodG1sOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gaHRtbC5yZXBsYWNlKC88W14+XSo+L2csICcnKS50cmltKCk7XG59XG5cbmZ1bmN0aW9uIGdldFZpc3VhbFdpZHRoKHN0cjogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3Qgd2lkdGhzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge1xuICAgIEE6IDIuNTAsIEI6IDIuNTAsIEM6IDIuNTAsIEQ6IDIuNzgsIEU6IDIuMjcsIEY6IDIuMjcsIEc6IDIuOTQsIEg6IDIuNzgsIEk6IDEuMTksIEo6IDIuMDAsXG4gICAgSzogMi42MywgTDogMi4xNywgTTogMy4xMywgTjogMi45NCwgTzogMi45NCwgUDogMi4yNywgUTogMi45NCwgUjogMi41MCwgUzogMi4yNywgVDogMi4xNyxcbiAgICBVOiAyLjc4LCBWOiAyLjUwLCBXOiAzLjU3LCBYOiAyLjUwLCBZOiAyLjM4LCBaOiAyLjM4LFxuICAgIGE6IDIuMDAsIGI6IDIuMjcsIGM6IDIuMDAsIGQ6IDIuMzgsIGU6IDIuMTcsIGY6IDEuNDcsIGc6IDIuMTcsIGg6IDIuMTcsIGk6IDEuMDIsIGo6IDAuODgsXG4gICAgazogMi4wMCwgbDogMC44MywgbTogMy4zMywgbjogMi4xNywgbzogMi4yNywgcDogMi4yNywgcTogMi4yNywgcjogMS4zOSwgczogMS43OSwgdDogMS4zOSxcbiAgICB1OiAyLjE3LCB2OiAyLjE3LCB3OiAyLjk0LCB4OiAyLjAwLCB5OiAyLjA4LCB6OiAxLjcyLFxuICAgICcgJzogMS4wMCwgJy4nOiAwLjgwLCAnLCc6IDAuODAsICc6JzogMC45MCwgJzsnOiAwLjkwLCAnISc6IDEuMDAsICc/JzogMi4wMCwgXCInXCI6IDAuODAsXG4gICAgJ1wiJzogMS40MCwgJy0nOiAxLjMwLCAn4oCTJzogMi4wMCwgJ+KAlCc6IDIuODAsICcoJzogMS4zMCwgJyknOiAxLjMwLCAnWyc6IDEuMzAsICddJzogMS4zMCxcbiAgICAnLyc6IDEuNTAsICd8JzogMC43MCxcbiAgfTtcbiAgcmV0dXJuIFsuLi5zdHJdLnJlZHVjZSgoYWNjLCBjaGFyKSA9PiBhY2MgKyAod2lkdGhzW2NoYXJdID8/IDIuMjcpLCAwKSAqIDAuNTIgLSAyO1xufVxuXG4vLyDilIDilIDilIAgU3ViLWNvbXBvbmVudHMg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5cbmNvbnN0IE1lc3NhZ2VCdWJibGUgPSAoeyBib2R5LCB0aW1lLCBpc091dGdvaW5nIH06IE1lc3NhZ2VCdWJibGVQcm9wcykgPT4ge1xuICBjb25zdCBsaW5lcyA9IGJvZHkuc3BsaXQoJ1xcbicpO1xuICBjb25zdCBtYXhWaXN1YWxXaWR0aCA9IE1hdGgubWF4KC4uLmxpbmVzLm1hcChnZXRWaXN1YWxXaWR0aCkpO1xuICBjb25zdCBjb2xzID0gTWF0aC5taW4oTWF0aC5jZWlsKG1heFZpc3VhbFdpZHRoKSwgNTApIHx8IDE7XG4gIGNvbnN0IHJvd3MgPSBNYXRoLm1pbihcbiAgICBsaW5lcy5yZWR1Y2UoKGFjYywgbCkgPT4gYWNjICsgTWF0aC5tYXgoMSwgTWF0aC5jZWlsKGdldFZpc3VhbFdpZHRoKGwpIC8gY29scykpLCAwKSxcbiAgICAyMCxcbiAgKTtcblxuICBjb25zdCB0aW1lTGFiZWwgPSA8VGV4dCB2YXJpYW50PVwibWljcm9jb3B5XCI+e3RpbWV9PC9UZXh0PjtcblxuICByZXR1cm4gKFxuICAgIDxJbmxpbmUganVzdGlmeT17aXNPdXRnb2luZyA/ICdlbmQnIDogJ2JldHdlZW4nfSBhbGlnbj1cImVuZFwiPlxuICAgICAgPElubGluZSBhbGlnbj1cImVuZFwiIGdhcD1cImV4dHJhLXNtYWxsXCI+XG4gICAgICAgIDxUZXh0QXJlYSBsYWJlbD1cIlwiIG5hbWU9XCJcIiBjb2xzPXtjb2xzfSByb3dzPXtyb3dzfSByZXNpemU9XCJub25lXCIgcmVhZE9ubHkgdmFsdWU9e2JvZHl9IC8+XG4gICAgICAgIHt0aW1lTGFiZWx9XG4gICAgICA8L0lubGluZT5cbiAgICA8L0lubGluZT5cbiAgKTtcbn07XG5cbi8vIOKUgOKUgOKUgCBNYWluIGNvbXBvbmVudCDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuY29uc3QgU01TSGlzdG9yeSA9ICh7IGNvbnRleHQsIGFjdGlvbnMgfTogU01TSGlzdG9yeVByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVzdWx0cywgaXNMb2FkaW5nLCBlcnJvciB9ID0gdXNlQXNzb2NpYXRpb25zKHtcbiAgICB0b09iamVjdFR5cGU6ICcwLTE4JyxcbiAgICBwYWdlTGVuZ3RoOiAxMDAsXG4gICAgcHJvcGVydGllczogW1xuICAgICAgJ2hzX2NvbW11bmljYXRpb25fYm9keScsXG4gICAgICAnaHNfY29tbXVuaWNhdGlvbl9jaGFubmVsX3R5cGUnLFxuICAgICAgJ2hzX3RpbWVzdGFtcCcsXG4gICAgICAnY29tbXVuaWNhdGlvbl9kaXJlY3Rpb24nLFxuICAgICAgJ2h1YnNwb3Rfb3duZXJfaWQnLFxuICAgIF0sXG4gIH0pO1xuXG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8TG9hZGluZ1NwaW5uZXIgbGFiZWw9XCJMb2FkaW5nIG1lc3NhZ2VzLi4uXCIgLz47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxFcnJvclN0YXRlIHRpdGxlPVwiRXJyb3JcIj48VGV4dD57ZXJyb3IubWVzc2FnZX08L1RleHQ+PC9FcnJvclN0YXRlPjtcblxuICBjb25zdCBzbXNNZXNzYWdlcyA9IChyZXN1bHRzID8/IFtdKVxuICAgIC5maWx0ZXIoKHIpID0+IHIucHJvcGVydGllcy5oc19jb21tdW5pY2F0aW9uX2NoYW5uZWxfdHlwZSA9PT0gJ1NNUycpXG4gICAgLnNvcnQoKGEsIGIpID0+XG4gICAgICBwYXJzZUh1YlNwb3REYXRlKGIucHJvcGVydGllcy5oc190aW1lc3RhbXApLmdldFRpbWUoKSAtXG4gICAgICBwYXJzZUh1YlNwb3REYXRlKGEucHJvcGVydGllcy5oc190aW1lc3RhbXApLmdldFRpbWUoKSxcbiAgICApO1xuXG4gIGlmIChzbXNNZXNzYWdlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHBhZGRpbmc9XCJtZWRpdW1cIj5cbiAgICAgICAgPFRleHQ+Tm8gU01TIGhpc3RvcnkgZm91bmQuPC9UZXh0PlxuICAgICAgPC9GbGV4PlxuICAgICk7XG4gIH1cblxuICBsZXQgbGFzdERhdGVIZWFkZXIgPSAnJztcblxuICByZXR1cm4gKFxuICAgIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiIGdhcD1cImV4dHJhLXNtYWxsXCI+XG4gICAgICB7c21zTWVzc2FnZXMubWFwKChtc2cpID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IHBhcnNlSHViU3BvdERhdGUobXNnLnByb3BlcnRpZXMuaHNfdGltZXN0YW1wKTtcbiAgICAgICAgY29uc3QgZGF0ZUhlYWRlciA9IGZvcm1hdERhdGVIZWFkZXIoZGF0ZSk7XG4gICAgICAgIGNvbnN0IHNob3dTZXBhcmF0b3IgPSBkYXRlSGVhZGVyICE9PSBsYXN0RGF0ZUhlYWRlcjtcbiAgICAgICAgaWYgKHNob3dTZXBhcmF0b3IpIGxhc3REYXRlSGVhZGVyID0gZGF0ZUhlYWRlcjtcblxuICAgICAgICBjb25zdCBpc091dGdvaW5nID0gbXNnLnByb3BlcnRpZXMuY29tbXVuaWNhdGlvbl9kaXJlY3Rpb24gPT09ICdPVVRCT1VORCc7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBzdHJpcEhUTUwoXG4gICAgICAgICAgKG1zZy5wcm9wZXJ0aWVzLmhzX2NvbW11bmljYXRpb25fYm9keSA/PyAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlQWxsKCc8L3A+PHAgc3R5bGU9XCJtYXJnaW46MDtcIj4nLCAnXFxuJyksXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Qm94IGtleT17bXNnLnRvT2JqZWN0SWR9PlxuICAgICAgICAgICAge3Nob3dTZXBhcmF0b3IgJiYgKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8U3BhY2VyIHNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgICAgIDxJbmxpbmUganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxUZXh0PntkYXRlSGVhZGVyfTwvVGV4dD5cbiAgICAgICAgICAgICAgPC9JbmxpbmU+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxNZXNzYWdlQnViYmxlIGJvZHk9e2JvZHl9IHRpbWU9e2Zvcm1hdFRpbWUoZGF0ZSl9IGlzT3V0Z29pbmc9e2lzT3V0Z29pbmd9IC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L0ZsZXg+XG4gICk7XG59OyJdLCJuYW1lcyI6WyJTZXJ2ZXJsZXNzRXhlY3V0aW9uU3RhdHVzIiwiUmVhY3QiLCJyZXF1aXJlJCQwIiwiUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSIsInNlbGYiLCJqc3hSdW50aW1lTW9kdWxlIiwiY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQiLCJfanN4IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsInVzZVJlZHVjZXIiLCJ1c2VNZW1vIiwicGFnaW5hdGlvbkZsYWdzIl0sIm1hcHBpbmdzIjoiOztBQUlBLFFBQU0sb0JBQW9CLE1BQU0sT0FBTyxTQUFTLGVBQzVDLEtBQUssaUNBQWlDO0FBSTFDLFFBQU0sb0JBQW9CO0FBQUEsSUFDdEIsUUFBUTtBQUFBLE1BQ0osT0FBTyxDQUFDLFNBQVM7QUFDYixnQkFBUSxJQUFJLElBQUk7QUFBQSxNQUNwQjtBQUFBLE1BQ0EsTUFBTSxDQUFDLFNBQVM7QUFDWixnQkFBUSxLQUFLLElBQUk7QUFBQSxNQUNyQjtBQUFBLE1BQ0EsTUFBTSxDQUFDLFNBQVM7QUFDWixnQkFBUSxLQUFLLElBQUk7QUFBQSxNQUNyQjtBQUFBLE1BQ0EsT0FBTyxDQUFDLFNBQVM7QUFDYixnQkFBUSxNQUFNLElBQUk7QUFBQSxNQUN0QjtBQUFBLElBQ1I7QUFBQSxJQUNJLFdBQVcsTUFBTTtBQUFBLElBRWpCO0FBQUE7QUFBQSxJQUVBLHVCQUF1QixNQUFNO0FBQUEsSUFFN0I7QUFBQSxFQUNKO0FBS08sUUFBTSxtQkFBbUIsTUFBTTtBQUNsQyxXQUFPLGtCQUFpQixJQUNsQixPQUNBO0FBQUEsRUFDVjtBQ3ZDQSxRQUFNLFlBQVksaUJBQWdCLEVBQUc7QUFDOUIsV0FBUyxXQUFXLE1BQU0sU0FB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
