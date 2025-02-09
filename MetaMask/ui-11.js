LavaPack.loadBundle([[6820, {
    "../../../../app/scripts/lib/util": 135,
    "../../../../shared/constants/metametrics": 5260,
    "../../../../shared/constants/network": 5264,
    "../../../../shared/lib/ui-utils": 5293,
    "../../../../shared/modules/selectors/networks": 5320,
    "../../../components/app/incoming-trasaction-toggle/incoming-transaction-toggle": 5468,
    "../../../components/component-library": 5806,
    "../../../components/ui/button": 6083,
    "../../../contexts/metametrics": 6214,
    "../../../ducks/app/app": 6223,
    "../../../helpers/constants/design-system": 6248,
    "../../../helpers/constants/routes": 6254,
    "../../../hooks/metamask-notifications/useProfileSyncing": 6308,
    "../../../hooks/useI18nContext": 6334,
    "../../../selectors": 6985,
    "../../../selectors/metamask-notifications/profile-syncing": 6988,
    "../../../store/actions": 7e3,
    "./setting": 6821,
    "@metamask/snaps-sdk": 2518,
    classnames: 3584,
    react: 4776,
    "react-redux": 4734,
    "react-router-dom": 4761
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = function() {
                        const e = (0,
                        y.useI18nContext)()
                          , t = (0,
                        s.useDispatch)()
                          , n = (0,
                        o.useHistory)()
                          , [C,S] = (0,
                        a.useState)(!1)
                          , [M,O] = (0,
                        a.useState)(null)
                          , [I,R] = (0,
                        a.useState)(!0)
                          , P = (0,
                        s.useSelector)((e => e.metamask))
                          , {incomingTransactionsPreferences: D, use4ByteResolution: A, useTokenDetection: B, useCurrencyRateCheck: j, useMultiAccountBalanceChecker: F, ipfsGateway: L, useAddressBarEnsResolution: U, useTransactionSimulations: W} = P
                          , $ = (0,
                        s.useSelector)(_.getPetnamesEnabled)
                          , [q,V] = (0,
                        a.useState)(A)
                          , [z,H] = (0,
                        a.useState)(B)
                          , [G,K] = (0,
                        a.useState)(j)
                          , [J,Q] = (0,
                        a.useState)(F)
                          , [Y,Z] = (0,
                        a.useState)(W)
                          , [X,ee] = (0,
                        a.useState)(L)
                          , [te,ne] = (0,
                        a.useState)(null)
                          , [ae,se] = (0,
                        a.useState)(U)
                          , [oe,re] = (0,
                        a.useState)($)
                          , ie = (0,
                        a.useContext)(m.MetaMetricsContext)
                          , le = (0,
                        s.useSelector)(v.getNetworkConfigurationsByChainId)
                          , ce = (0,
                        s.useSelector)(_.getExternalServicesOnboardingToggleState)
                          , ue = function(e) {
                            const {setIsProfileSyncingEnabled: t, error: n} = (0,
                            c.useSetIsProfileSyncingEnabled)()
                              , {enableProfileSyncing: o, error: r} = (0,
                            c.useEnableProfileSyncing)()
                              , i = n || r
                              , l = (0,
                            s.useSelector)(b.selectIsProfileSyncingEnabled);
                            return (0,
                            a.useEffect)(( () => {
                                t(!0 === e)
                            }
                            ), [e, t]),
                            {
                                setIsProfileSyncingEnabled: t,
                                enableProfileSyncing: o,
                                profileSyncingError: i,
                                isProfileSyncingEnabled: l
                            }
                        }(ce)
                          , de = e => {
                            O(e),
                            S(!0),
                            setTimeout(( () => {
                                R(!1)
                            }
                            ), N)
                        }
                          , pe = [{
                            id: 1,
                            title: e("general"),
                            subtitle: e("generalDescription")
                        }, {
                            id: 2,
                            title: e("assets"),
                            subtitle: e("assetsDescription")
                        }, {
                            id: 3,
                            title: e("security"),
                            subtitle: e("securityDescription")
                        }];
                        return a.default.createElement(a.default.Fragment, null, a.default.createElement("div", {
                            className: "privacy-settings",
                            "data-testid": "privacy-settings"
                        }, a.default.createElement("div", {
                            className: (0,
                            r.default)("container", {
                                "show-detail": C,
                                "show-list": !C
                            })
                        }, a.default.createElement("div", {
                            className: "list-view"
                        }, a.default.createElement(f.Box, {
                            className: "privacy-settings__header",
                            marginTop: 6,
                            marginBottom: 6,
                            display: g.Display.Flex,
                            flexDirection: g.FlexDirection.Column,
                            justifyContent: g.JustifyContent.flexStart
                        }, a.default.createElement(f.Box, {
                            display: g.Display.Flex,
                            alignItems: g.AlignItems.center,
                            flexDirection: g.FlexDirection.Row,
                            justifyContent: g.JustifyContent.flexStart
                        }, a.default.createElement(p.default, {
                            type: "inline",
                            icon: a.default.createElement(f.Icon, {
                                name: f.IconName.ArrowLeft,
                                size: f.IconSize.Lg,
                                color: g.IconColor.iconDefault
                            }),
                            "data-testid": "privacy-settings-back-button",
                            onClick: () => {
                                if (t((0,
                                E.setUse4ByteResolution)(q)),
                                t((0,
                                E.setUseTokenDetection)(z)),
                                t((0,
                                E.setUseMultiAccountBalanceChecker)(J)),
                                t((0,
                                E.setUseCurrencyRateCheck)(G)),
                                t((0,
                                E.setUseAddressBarEnsResolution)(ae)),
                                (0,
                                E.setUseTransactionSimulations)(Y),
                                t((0,
                                E.setPetnamesEnabled)(oe)),
                                ce || ue.setIsProfileSyncingEnabled(!1),
                                X && !te) {
                                    const {host: e} = new URL((0,
                                    l.addUrlProtocolPrefix)(X));
                                    t((0,
                                    E.setIpfsGateway)(e))
                                }
                                ie({
                                    category: u.MetaMetricsEventCategory.Onboarding,
                                    event: u.MetaMetricsEventName.OnboardingWalletAdvancedSettings,
                                    properties: {
                                        settings_group: "onboarding_advanced_configuration",
                                        is_profile_syncing_enabled: ue.isProfileSyncingEnabled,
                                        is_basic_functionality_enabled: ce,
                                        show_incoming_tx: D,
                                        turnon_token_detection: z
                                    }
                                }),
                                n.push(h.ONBOARDING_COMPLETION_ROUTE)
                            }
                        }), a.default.createElement(f.Box, {
                            display: g.Display.Flex,
                            alignItems: g.AlignItems.center,
                            justifyContent: g.JustifyContent.center,
                            width: g.BlockSize.Full
                        }, a.default.createElement(f.Text, {
                            variant: g.TextVariant.headingLg,
                            as: "h2"
                        }, e("defaultSettingsTitle")))), a.default.createElement(f.Text, {
                            variant: g.TextVariant.bodyLgMedium,
                            marginTop: 5
                        }, e("defaultSettingsSubTitle")), a.default.createElement("a", {
                            href: "https://support.metamask.io/privacy-and-security/privacy-best-practices",
                            target: "_blank",
                            rel: "noreferrer",
                            key: "learnMoreAboutPrivacy",
                            style: {
                                fontSize: "var(--font-size-5)"
                            }
                        }, e("learnMoreAboutPrivacy"))), a.default.createElement(f.Box, null, a.default.createElement(f.Box, {
                            as: "ul",
                            marginTop: 4,
                            marginBottom: 4,
                            style: {
                                listStyleType: "none"
                            },
                            className: "privacy-settings__categories-list"
                        }, pe.map((e => a.default.createElement(f.Box, {
                            marginTop: 5,
                            marginBottom: 5,
                            key: e.id,
                            className: "categories-item",
                            onClick: () => de(e)
                        }, a.default.createElement(f.Box, {
                            display: g.Display.Flex,
                            alignItems: g.AlignItems.flexStart,
                            justifyContent: g.JustifyContent.spaceBetween,
                            "data-testid": `category-item-${e.title}`
                        }, a.default.createElement(f.Text, {
                            variant: g.TextVariant.bodyLgMedium
                        }, e.title), a.default.createElement(p.default, {
                            type: "inline",
                            icon: a.default.createElement(f.Icon, {
                                name: f.IconName.ArrowRight,
                                color: g.IconColor.iconDefault
                            }),
                            onClick: () => de(e)
                        })), a.default.createElement(f.Text, {
                            className: "description",
                            variant: g.TextVariant.bodyMd,
                            color: g.TextColor.textAlternative
                        }, e.subtitle))))))), a.default.createElement("div", {
                            className: (0,
                            r.default)("detail-view", {
                                hidden: !C && I
                            })
                        }, a.default.createElement(f.Box, {
                            className: "privacy-settings__header",
                            marginTop: 6,
                            marginBottom: 5,
                            display: g.Display.Flex,
                            flexDirection: g.FlexDirection.Row,
                            justifyContent: g.JustifyContent.flexStart
                        }, a.default.createElement(p.default, {
                            "data-testid": "category-back-button",
                            type: "inline",
                            icon: a.default.createElement(f.Icon, {
                                name: f.IconName.ArrowLeft,
                                size: f.IconSize.Lg,
                                color: g.IconColor.iconDefault
                            }),
                            onClick: () => {
                                S(!1),
                                setTimeout(( () => {
                                    R(!0)
                                }
                                ), N)
                            }
                        }), a.default.createElement(f.Box, {
                            display: g.Display.Flex,
                            alignItems: g.AlignItems.center,
                            justifyContent: g.JustifyContent.center,
                            width: g.BlockSize.Full
                        }, a.default.createElement(f.Text, {
                            variant: g.TextVariant.headingLg,
                            as: "h2"
                        }, null == M ? void 0 : M.title))), a.default.createElement("div", {
                            className: "privacy-settings__settings",
                            "data-testid": "privacy-settings-settings"
                        }, 1 === (null == M ? void 0 : M.id) ? a.default.createElement(a.default.Fragment, null, a.default.createElement(k.Setting, {
                            dataTestId: "basic-functionality-toggle",
                            value: ce,
                            setValue: e => {
                                e ? (t((0,
                                T.onboardingToggleBasicFunctionalityOn)()),
                                ie({
                                    category: u.MetaMetricsEventCategory.Onboarding,
                                    event: u.MetaMetricsEventName.SettingsUpdated,
                                    properties: {
                                        settings_group: "onboarding_advanced_configuration",
                                        settings_type: "basic_functionality",
                                        old_value: !1,
                                        new_value: !0,
                                        was_profile_syncing_on: !1
                                    }
                                })) : t((0,
                                T.openBasicFunctionalityModal)())
                            }
                            ,
                            title: e("basicConfigurationLabel"),
                            description: e("basicConfigurationDescription", [a.default.createElement("a", {
                                href: "https://consensys.io/privacy-policy",
                                key: "link",
                                target: "_blank",
                                rel: "noreferrer noopener"
                            }, e("privacyMsg"))])
                        }), a.default.createElement(k.Setting, {
                            dataTestId: "profile-sync-toggle",
                            disabled: !ce,
                            value: ue.isProfileSyncingEnabled,
                            setValue: async () => {
                                ue.isProfileSyncingEnabled ? t((0,
                                E.showModal)({
                                    name: "CONFIRM_TURN_OFF_PROFILE_SYNCING",
                                    turnOffProfileSyncing: () => {
                                        ue.setIsProfileSyncingEnabled(!1)
                                    }
                                })) : ue.setIsProfileSyncingEnabled(!0)
                            }
                            ,
                            title: e("profileSync"),
                            description: e("profileSyncDescription", [a.default.createElement("a", {
                                href: "https://support.metamask.io/privacy-and-security/profile-privacy",
                                key: "link",
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, e("profileSyncPrivacyLink"))])
                        }), ue.profileSyncingError && a.default.createElement(f.Box, {
                            paddingBottom: 4
                        }, a.default.createElement(f.Text, {
                            as: "p",
                            color: g.TextColor.errorDefault,
                            variant: g.TextVariant.bodySm
                        }, e("notificationsSettingsBoxError"))), a.default.createElement(k.Setting, {
                            title: e("onboardingAdvancedPrivacyNetworkTitle"),
                            showToggle: !1,
                            description: a.default.createElement(a.default.Fragment, null, e("onboardingAdvancedPrivacyNetworkDescription", [a.default.createElement("a", {
                                href: "https://consensys.io/privacy-policy/",
                                key: "link",
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, e("privacyMsg"))]), a.default.createElement(f.Box, {
                                paddingTop: 4
                            }, a.default.createElement(f.Box, {
                                display: g.Display.Flex,
                                flexDirection: g.FlexDirection.Column,
                                gap: 5
                            }, Object.values(le).filter(( ({chainId: e}) => !x.TEST_CHAINS.includes(e))).map((e => {
                                var n, s;
                                return a.default.createElement(f.Box, {
                                    key: e.chainId,
                                    className: "privacy-settings__customizable-network",
                                    onClick: () => {
                                        t((0,
                                        E.setEditedNetwork)({
                                            chainId: e.chainId
                                        })),
                                        t((0,
                                        E.toggleNetworkMenu)())
                                    }
                                    ,
                                    display: g.Display.Flex,
                                    alignItems: g.AlignItems.center,
                                    justifyContent: g.JustifyContent.spaceBetween
                                }, a.default.createElement(f.Box, {
                                    display: g.Display.Flex,
                                    alignItems: g.AlignItems.center
                                }, a.default.createElement(f.AvatarNetwork, {
                                    src: x.CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP[e.chainId]
                                }), a.default.createElement(f.Box, {
                                    textAlign: g.TextAlign.Left,
                                    marginLeft: 3
                                }, a.default.createElement(f.Text, {
                                    variant: g.TextVariant.bodySmMedium
                                }, e.name), a.default.createElement(f.Text, {
                                    variant: g.TextVariant.bodyXs,
                                    color: g.TextColor.textAlternative
                                }, null === (n = new URL(null == e || null === (s = e.rpcEndpoints[null == e ? void 0 : e.defaultRpcEndpointIndex]) || void 0 === s ? void 0 : s.url)) || void 0 === n ? void 0 : n.origin))), a.default.createElement(f.ButtonIcon, {
                                    iconName: f.IconName.ArrowRight,
                                    size: f.IconSize.Md
                                }))
                            }
                            )), a.default.createElement(f.ButtonLink, {
                                onClick: () => {
                                    t((0,
                                    E.toggleNetworkMenu)({
                                        isAddingNewNetwork: !0
                                    }))
                                }
                                ,
                                justifyContent: g.JustifyContent.Left,
                                variant: i.ButtonVariant.link
                            }, a.default.createElement(f.Box, {
                                display: g.Display.Flex,
                                alignItems: g.AlignItems.center
                            }, a.default.createElement(f.Icon, {
                                name: f.IconName.Add,
                                marginRight: 3
                            }), a.default.createElement(f.Text, {
                                color: g.TextColor.primaryDefault
                            }, e("addANetwork")))))))
                        })) : null, 2 === (null == M ? void 0 : M.id) ? a.default.createElement(a.default.Fragment, null, a.default.createElement(k.Setting, {
                            value: z,
                            setValue: H,
                            title: e("turnOnTokenDetection"),
                            description: e("useTokenDetectionPrivacyDesc")
                        }), a.default.createElement(k.Setting, {
                            value: Y,
                            setValue: Z,
                            title: e("simulationsSettingSubHeader"),
                            description: e("simulationsSettingDescription", [a.default.createElement("a", {
                                key: "learn_more_link",
                                href: d.TRANSACTION_SIMULATIONS_LEARN_MORE_LINK,
                                rel: "noreferrer",
                                target: "_blank"
                            }, e("learnMoreUpperCase"))])
                        }), a.default.createElement(k.Setting, {
                            title: e("onboardingAdvancedPrivacyIPFSTitle"),
                            showToggle: !1,
                            description: a.default.createElement(a.default.Fragment, null, e("onboardingAdvancedPrivacyIPFSDescription"), a.default.createElement(f.Box, {
                                paddingTop: 2
                            }, a.default.createElement(f.TextField, {
                                value: X,
                                style: {
                                    width: "100%"
                                },
                                inputProps: {
                                    "data-testid": "ipfs-input"
                                },
                                onChange: t => {
                                    (t => {
                                        ee(t);
                                        try {
                                            const {host: e} = new URL((0,
                                            l.addUrlProtocolPrefix)(t));
                                            if (!e || "gateway.ipfs.io" === e)
                                                throw new Error;
                                            ne(null)
                                        } catch (t) {
                                            ne(e("onboardingAdvancedPrivacyIPFSInvalid"))
                                        }
                                    }
                                    )(t.target.value)
                                }
                            }), X ? a.default.createElement(f.Text, {
                                variant: g.TextVariant.bodySm,
                                color: te ? g.TextColor.errorDefault : g.TextColor.successDefault
                            }, te || e("onboardingAdvancedPrivacyIPFSValid")) : null))
                        }), a.default.createElement(w.default, {
                            networkConfigurations: le,
                            setIncomingTransactionsPreferences: (e, n) => t((0,
                            E.setIncomingTransactionsPreferences)(e, n)),
                            incomingTransactionsPreferences: D
                        }), a.default.createElement(k.Setting, {
                            value: G,
                            setValue: K,
                            title: e("currencyRateCheckToggle"),
                            dataTestId: "currency-rate-check-toggle",
                            description: e("currencyRateCheckToggleDescription", [a.default.createElement("a", {
                                key: "coingecko_link",
                                href: d.COINGECKO_LINK,
                                rel: "noreferrer",
                                target: "_blank"
                            }, e("coingecko")), a.default.createElement("a", {
                                key: "cryptocompare_link",
                                href: d.CRYPTOCOMPARE_LINK,
                                rel: "noreferrer",
                                target: "_blank"
                            }, e("cryptoCompare")), a.default.createElement("a", {
                                key: "privacy_policy_link",
                                href: d.PRIVACY_POLICY_LINK,
                                rel: "noreferrer",
                                target: "_blank"
                            }, e("privacyMsg"))])
                        }), a.default.createElement(k.Setting, {
                            value: ae,
                            setValue: se,
                            title: e("ensDomainsSettingTitle"),
                            description: a.default.createElement(a.default.Fragment, null, a.default.createElement(f.Text, {
                                variant: g.TextVariant.inherit
                            }, e("ensDomainsSettingDescriptionIntroduction")), a.default.createElement(f.Box, {
                                as: "ul",
                                marginTop: 4,
                                marginBottom: 4,
                                paddingInlineStart: 4,
                                style: {
                                    listStyleType: "circle"
                                }
                            }, a.default.createElement(f.Text, {
                                variant: g.TextVariant.inherit,
                                as: "li"
                            }, e("ensDomainsSettingDescriptionPart1")), a.default.createElement(f.Text, {
                                variant: g.TextVariant.inherit,
                                as: "li"
                            }, e("ensDomainsSettingDescriptionPart2"))), a.default.createElement(f.Text, {
                                variant: g.TextVariant.inherit
                            }, e("ensDomainsSettingDescriptionOutroduction")))
                        }), a.default.createElement(k.Setting, {
                            value: J,
                            setValue: Q,
                            title: e("useMultiAccountBalanceChecker"),
                            description: e("useMultiAccountBalanceCheckerSettingDescription")
                        })) : null, 3 === (null == M ? void 0 : M.id) ? a.default.createElement(a.default.Fragment, null, a.default.createElement(k.Setting, {
                            value: q,
                            setValue: V,
                            title: e("use4ByteResolution"),
                            description: e("use4ByteResolutionDescription")
                        }), a.default.createElement(k.Setting, {
                            value: oe,
                            setValue: re,
                            title: e("petnamesEnabledToggle"),
                            description: e("petnamesEnabledToggleDescription")
                        })) : null)))))
                    }
                    ;
                    var a = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = S(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , s = e("react-redux")
                      , o = e("react-router-dom")
                      , r = C(e("classnames"))
                      , i = e("@metamask/snaps-sdk")
                      , l = e("../../../../app/scripts/lib/util")
                      , c = e("../../../hooks/metamask-notifications/useProfileSyncing")
                      , u = e("../../../../shared/constants/metametrics")
                      , d = e("../../../../shared/lib/ui-utils")
                      , p = C(e("../../../components/ui/button"))
                      , f = e("../../../components/component-library")
                      , m = e("../../../contexts/metametrics")
                      , g = e("../../../helpers/constants/design-system")
                      , h = e("../../../helpers/constants/routes")
                      , y = e("../../../hooks/useI18nContext")
                      , _ = e("../../../selectors")
                      , v = e("../../../../shared/modules/selectors/networks")
                      , b = e("../../../selectors/metamask-notifications/profile-syncing")
                      , E = e("../../../store/actions")
                      , T = e("../../../ducks/app/app")
                      , w = C(e("../../../components/app/incoming-trasaction-toggle/incoming-transaction-toggle"))
                      , x = e("../../../../shared/constants/network")
                      , k = e("./setting");
                    function C(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function S(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (S = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    const N = 500
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/onboarding-flow/privacy-settings/privacy-settings.js"
}], [6821, {
    "../../../components/component-library": 5806,
    "../../../components/ui/toggle-button": 6193,
    "../../../helpers/constants/design-system": 6248,
    "../../../hooks/useI18nContext": 6334,
    "prop-types": 4528,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.Setting = void 0;
                    var a = c(e("react"))
                      , s = c(e("prop-types"))
                      , o = e("../../../components/component-library")
                      , r = c(e("../../../components/ui/toggle-button"))
                      , i = e("../../../helpers/constants/design-system")
                      , l = e("../../../hooks/useI18nContext");
                    function c(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    const u = ({value: e, setValue: t, title: n, description: s, showToggle: c=!0, dataTestId: u, disabled: d=!1}) => {
                        const p = (0,
                        l.useI18nContext)();
                        return a.default.createElement(o.Box, {
                            display: i.Display.Flex,
                            justifyContent: i.JustifyContent.spaceBetween,
                            alignItems: i.AlignItems.flexStart,
                            marginTop: 3,
                            marginBottom: 3,
                            className: "privacy-settings__setting__wrapper",
                            "data-testid": u
                        }, a.default.createElement("div", {
                            className: "privacy-settings__setting"
                        }, a.default.createElement(o.Text, {
                            variant: i.TextVariant.bodyMdMedium
                        }, n), a.default.createElement(o.Text, {
                            variant: i.TextVariant.bodySm,
                            color: i.TextColor.textAlternative,
                            as: "div"
                        }, s)), c ? a.default.createElement("div", {
                            className: "privacy-settings__setting__toggle"
                        }, a.default.createElement(r.default, {
                            value: e,
                            onToggle: e => t(!e),
                            offLabel: p("off"),
                            onLabel: p("on"),
                            disabled: d
                        })) : null)
                    }
                    ;
                    n.Setting = u,
                    u.propTypes = {
                        value: s.default.bool,
                        setValue: s.default.func,
                        title: s.default.string,
                        description: s.default.oneOfType([s.default.object, s.default.string]),
                        showToggle: s.default.bool,
                        dataTestId: s.default.string,
                        disabled: s.default.bool
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/onboarding-flow/privacy-settings/setting.js"
}], [6822, {
    "../../../../shared/constants/metametrics": 5260,
    "../../../components/app/step-progress-bar": 5695,
    "../../../components/component-library": 5806,
    "../../../components/ui/box": 6079,
    "../../../components/ui/button": 6083,
    "../../../contexts/metametrics": 6214,
    "../../../helpers/constants/design-system": 6248,
    "../../../helpers/constants/routes": 6254,
    "../../../hooks/useI18nContext": 6334,
    "../../../store/actions": 7e3,
    "./recovery-phrase-chips": 6823,
    lodash: 4380,
    "prop-types": 4528,
    react: 4776,
    "react-redux": 4734,
    "react-router-dom": 4761
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = E;
                    var a = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = b(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , s = e("react-router-dom")
                      , o = e("react-redux")
                      , r = e("lodash")
                      , i = v(e("prop-types"))
                      , l = v(e("../../../components/ui/box"))
                      , c = v(e("../../../components/ui/button"))
                      , u = e("../../../components/component-library")
                      , d = e("../../../helpers/constants/design-system")
                      , p = e("../../../components/app/step-progress-bar")
                      , f = e("../../../helpers/constants/routes")
                      , m = e("../../../hooks/useI18nContext")
                      , g = e("../../../store/actions")
                      , h = e("../../../contexts/metametrics")
                      , y = e("../../../../shared/constants/metametrics")
                      , _ = v(e("./recovery-phrase-chips"));
                    function v(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function b(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (b = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function E({secretRecoveryPhrase: e=""}) {
                        const t = (0,
                        s.useHistory)()
                          , n = (0,
                        m.useI18nContext)()
                          , i = (0,
                        o.useDispatch)()
                          , v = e.split(" ")
                          , b = [2, 3, 7]
                          , [E,T] = (0,
                        a.useState)(!1)
                          , w = (0,
                        a.useContext)(h.MetaMetricsContext)
                          , [x,k] = (0,
                        a.useState)(( () => {
                            const e = {
                                ...v
                            };
                            return b.forEach((t => {
                                e[t] = ""
                            }
                            )),
                            e
                        }
                        )())
                          , C = (0,
                        a.useMemo)(( () => (0,
                        r.debounce)((t => {
                            T(Object.values(t).join(" ") === e)
                        }
                        ), 500)), [T, e]);
                        return a.default.createElement("div", {
                            className: "recovery-phrase__confirm",
                            "data-testid": "confirm-recovery-phrase"
                        }, a.default.createElement(p.ThreeStepProgressBar, {
                            stage: p.threeStepStages.RECOVERY_PHRASE_CONFIRM,
                            marginBottom: 4
                        }), a.default.createElement(l.default, {
                            justifyContent: d.JustifyContent.center,
                            textAlign: d.TextAlign.Center,
                            marginBottom: 4
                        }, a.default.createElement(u.Text, {
                            variant: d.TextVariant.headingLg,
                            fontWeight: d.FontWeight.Bold
                        }, n("seedPhraseConfirm"))), a.default.createElement(l.default, {
                            justifyContent: d.JustifyContent.center,
                            textAlign: d.TextAlign.Center,
                            marginBottom: 4
                        }, a.default.createElement(u.Text, {
                            variant: d.TextVariant.headingSm,
                            fontWeight: d.FontWeight.Normal
                        }, n("seedPhraseEnterMissingWords"))), a.default.createElement(_.default, {
                            secretRecoveryPhrase: v,
                            confirmPhase: !0,
                            setInputValue: e => {
                                k(e),
                                C(e)
                            }
                            ,
                            inputValue: x,
                            indicesToCheck: b
                        }), a.default.createElement("div", {
                            className: "recovery-phrase__footer__confirm"
                        }, a.default.createElement(c.default, {
                            "data-testid": "recovery-phrase-confirm",
                            type: "primary",
                            large: !0,
                            className: "recovery-phrase__footer__confirm--button",
                            onClick: async () => {
                                await i((0,
                                g.setSeedPhraseBackedUp)(!0)),
                                w({
                                    category: y.MetaMetricsEventCategory.Onboarding,
                                    event: y.MetaMetricsEventName.OnboardingWalletSecurityPhraseConfirmed
                                }),
                                t.push(f.ONBOARDING_COMPLETION_ROUTE)
                            }
                            ,
                            disabled: !E
                        }, n("confirm"))))
                    }
                    E.propTypes = {
                        secretRecoveryPhrase: i.default.string
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/onboarding-flow/recovery-phrase/confirm-recovery-phrase.js"
}], [6823, {
    "../../../components/component-library": 5806,
    "../../../components/ui/box": 6079,
    "../../../components/ui/chip": 6090,
    "../../../components/ui/chip/chip-with-input": 6088,
    "../../../helpers/constants/design-system": 6248,
    "../../../hooks/useI18nContext": 6334,
    classnames: 3584,
    "prop-types": 4528,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = f;
                    var a = p(e("react"))
                      , s = p(e("classnames"))
                      , o = p(e("prop-types"))
                      , r = p(e("../../../components/ui/chip"))
                      , i = p(e("../../../components/ui/box"))
                      , l = e("../../../components/component-library")
                      , c = e("../../../components/ui/chip/chip-with-input")
                      , u = e("../../../hooks/useI18nContext")
                      , d = e("../../../helpers/constants/design-system");
                    function p(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function f({secretRecoveryPhrase: e, phraseRevealed: t, confirmPhase: n, setInputValue: o, inputValue: p, indicesToCheck: f, hiddenPhrase: m}) {
                        const g = (0,
                        u.useI18nContext)()
                          , h = !1 === t;
                        return a.default.createElement(i.default, {
                            borderColor: d.BorderColor.borderMuted,
                            borderStyle: d.BorderStyle.solid,
                            padding: 4,
                            borderWidth: 1,
                            borderRadius: d.Size.MD,
                            display: d.DISPLAY.GRID,
                            marginBottom: 4,
                            className: "recovery-phrase__secret"
                        }, a.default.createElement("div", {
                            "data-testid": "recovery-phrase-chips",
                            className: (0,
                            s.default)("recovery-phrase__chips", {
                                "recovery-phrase__chips--hidden": h
                            })
                        }, e.map(( (e, t) => n && f && f.includes(t) ? a.default.createElement("div", {
                            className: "recovery-phrase__chip-item",
                            key: t
                        }, a.default.createElement("div", {
                            className: "recovery-phrase__chip-item__number"
                        }, `${t + 1}.`), a.default.createElement(c.ChipWithInput, {
                            dataTestId: `recovery-phrase-input-${t}`,
                            borderColor: d.BorderColor.primaryDefault,
                            className: "recovery-phrase__chip--with-input",
                            inputValue: p[t],
                            setInputValue: e => {
                                o({
                                    ...p,
                                    [t]: e
                                })
                            }
                        })) : a.default.createElement("div", {
                            className: "recovery-phrase__chip-item",
                            key: t
                        }, a.default.createElement("div", {
                            className: "recovery-phrase__chip-item__number"
                        }, `${t + 1}.`), a.default.createElement(r.default, {
                            dataTestId: `recovery-phrase-chip-${t}`,
                            className: "recovery-phrase__chip",
                            borderColor: d.BorderColor.borderDefault
                        }, e))))), h && a.default.createElement("div", {
                            className: "recovery-phrase__secret-blocker"
                        }, !m && a.default.createElement(a.default.Fragment, null, a.default.createElement("i", {
                            className: "far fa-eye",
                            color: "white"
                        }), a.default.createElement(l.Text, {
                            variant: d.TextVariant.bodySm,
                            color: d.Color.overlayInverse,
                            className: "recovery-phrase__secret-blocker--text"
                        }, g("makeSureNoOneWatching")))))
                    }
                    f.propTypes = {
                        secretRecoveryPhrase: o.default.array,
                        phraseRevealed: o.default.bool,
                        confirmPhase: o.default.bool,
                        setInputValue: o.default.func,
                        inputValue: o.default.object,
                        indicesToCheck: o.default.array,
                        hiddenPhrase: o.default.bool
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/onboarding-flow/recovery-phrase/recovery-phrase-chips.js"
}], [6824, {
    "../../../../shared/constants/metametrics": 5260,
    "../../../components/app/step-progress-bar": 5695,
    "../../../components/component-library": 5806,
    "../../../components/ui/button": 6083,
    "../../../contexts/metametrics": 6214,
    "../../../helpers/constants/design-system": 6248,
    "../../../helpers/constants/routes": 6254,
    "../../../hooks/useCopyToClipboard": 6323,
    "../../../hooks/useI18nContext": 6334,
    "./recovery-phrase-chips": 6823,
    "prop-types": 4528,
    react: 4776,
    "react-router-dom": 4761
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = _;
                    var a = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = y(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , s = e("react-router-dom")
                      , o = h(e("prop-types"))
                      , r = h(e("../../../components/ui/button"))
                      , i = e("../../../hooks/useCopyToClipboard")
                      , l = e("../../../hooks/useI18nContext")
                      , c = e("../../../helpers/constants/routes")
                      , u = e("../../../components/component-library")
                      , d = e("../../../helpers/constants/design-system")
                      , p = e("../../../components/app/step-progress-bar")
                      , f = e("../../../../shared/constants/metametrics")
                      , m = e("../../../contexts/metametrics")
                      , g = h(e("./recovery-phrase-chips"));
                    function h(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function y(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (y = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function _({secretRecoveryPhrase: e}) {
                        const t = (0,
                        s.useHistory)()
                          , n = (0,
                        l.useI18nContext)()
                          , {search: o} = (0,
                        s.useLocation)()
                          , [h,y] = (0,
                        i.useCopyToClipboard)()
                          , [_,v] = (0,
                        a.useState)(!1)
                          , [b,E] = (0,
                        a.useState)(!1)
                          , T = new URLSearchParams(o).get("isFromReminder") ? "/?isFromReminder=true" : ""
                          , w = (0,
                        a.useContext)(m.MetaMetricsContext);
                        return a.default.createElement("div", {
                            className: "recovery-phrase",
                            "data-testid": "recovery-phrase"
                        }, a.default.createElement(p.ThreeStepProgressBar, {
                            stage: p.threeStepStages.RECOVERY_PHRASE_REVIEW
                        }), a.default.createElement(u.Box, {
                            justifyContent: d.JustifyContent.center,
                            textAlign: d.TextAlign.Center,
                            marginBottom: 4
                        }, a.default.createElement(u.Text, {
                            variant: d.TextVariant.headingLg,
                            fontWeight: d.FontWeight.Bold,
                            className: "recovery-phrase__header"
                        }, n("seedPhraseWriteDownHeader"))), a.default.createElement(u.Box, {
                            justifyContent: d.JustifyContent.center,
                            textAlign: d.TextAlign.Center,
                            marginBottom: 4
                        }, a.default.createElement(u.Text, {
                            variant: d.TextVariant.headingSm,
                            fontWeight: d.FontWeight.Normal
                        }, n("seedPhraseWriteDownDetails"))), a.default.createElement(u.Box, {
                            textAlign: d.TextAlign.Left,
                            marginBottom: 4,
                            className: "recovery-phrase__tips"
                        }, a.default.createElement(u.Text, {
                            variant: d.TextVariant.headingSm
                        }, n("tips"), ":"), a.default.createElement("ul", null, a.default.createElement("li", null, a.default.createElement(u.Text, {
                            variant: d.TextVariant.headingSm,
                            fontWeight: d.FontWeight.Normal
                        }, n("seedPhraseIntroSidebarBulletOne"))), a.default.createElement("li", null, a.default.createElement(u.Text, {
                            variant: d.TextVariant.headingSm,
                            fontWeight: d.FontWeight.Normal
                        }, n("seedPhraseIntroSidebarBulletTwo"))))), a.default.createElement(g.default, {
                            secretRecoveryPhrase: e.split(" "),
                            phraseRevealed: _ && !b,
                            hiddenPhrase: b
                        }), a.default.createElement("div", {
                            className: "recovery-phrase__footer"
                        }, _ ? a.default.createElement("div", {
                            className: "recovery-phrase__footer__copy-and-hide"
                        }, a.default.createElement("div", {
                            className: "recovery-phrase__footer__copy-and-hide__area"
                        }, a.default.createElement(r.default, {
                            type: "link",
                            icon: a.default.createElement("i", {
                                className: "far fa-eye" + (b ? "" : "-slash"),
                                color: "var(--color-primary-default)"
                            }),
                            className: "recovery-phrase__footer__copy-and-hide__button recovery-phrase__footer__copy-and-hide__button__hide-seed",
                            onClick: () => {
                                E(!b)
                            }
                        }, n(b ? "revealTheSeedPhrase" : "hideSeedPhrase")), a.default.createElement(r.default, {
                            onClick: () => {
                                y(e)
                            }
                            ,
                            icon: a.default.createElement(u.Icon, {
                                name: h ? u.IconName.CopySuccess : u.IconName.Copy,
                                color: d.IconColor.primaryDefault
                            }),
                            className: "recovery-phrase__footer__copy-and-hide__button recovery-phrase__footer__copy-and-hide__button__copy-to-clipboard",
                            type: "link"
                        }, n(h ? "copiedExclamation" : "copyToClipboard"))), a.default.createElement(r.default, {
                            "data-testid": "recovery-phrase-next",
                            type: "primary",
                            className: "recovery-phrase__footer--button",
                            onClick: () => {
                                w({
                                    category: f.MetaMetricsEventCategory.Onboarding,
                                    event: f.MetaMetricsEventName.OnboardingWalletSecurityPhraseWrittenDown
                                }),
                                t.push(`${c.ONBOARDING_CONFIRM_SRP_ROUTE}${T}`)
                            }
                        }, n("next"))) : a.default.createElement(r.default, {
                            "data-testid": "recovery-phrase-reveal",
                            type: "primary",
                            className: "recovery-phrase__footer--button",
                            onClick: () => {
                                w({
                                    category: f.MetaMetricsEventCategory.Onboarding,
                                    event: f.MetaMetricsEventName.OnboardingWalletSecurityPhraseRevealed
                                }),
                                v(!0)
                            }
                        }, n("revealSeedWords"))))
                    }
                    _.propTypes = {
                        secretRecoveryPhrase: o.default.string
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/onboarding-flow/recovery-phrase/review-recovery-phrase.js"
}], [6825, {
    "../../../../shared/constants/metametrics": 5260,
    "../../../components/app/step-progress-bar": 5695,
    "../../../components/component-library": 5806,
    "../../../contexts/metametrics": 6214,
    "../../../ducks/locale/locale": 6235,
    "../../../helpers/constants/design-system": 6248,
    "../../../helpers/constants/routes": 6254,
    "../../../hooks/useI18nContext": 6334,
    "./skip-srp-backup-popover": 6826,
    react: 4776,
    "react-redux": 4734,
    "react-router-dom": 4761
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = function() {
                        const e = (0,
                        o.useHistory)()
                          , t = (0,
                        c.useI18nContext)()
                          , {search: n} = (0,
                        o.useLocation)()
                          , a = (0,
                        r.useSelector)(p.getCurrentLocale)
                          , [h,y] = (0,
                        s.useState)(!1)
                          , _ = new URLSearchParams(n).get("isFromReminder") ? "/?isFromReminder=true" : ""
                          , v = (0,
                        s.useContext)(u.MetaMetricsContext)
                          , b = {
                            en: "English",
                            es: "Spanish",
                            hi: "Hindi",
                            id: "Indonesian",
                            ja: "Japanese",
                            ko: "Korean",
                            pt: "Portuguese",
                            ru: "Russian",
                            tl: "Tagalog",
                            vi: "Vietnamese",
                            de: "German",
                            el: "Greek",
                            fr: "French",
                            tr: "Turkish",
                            zh: "Chinese - China"
                        }
                          , E = b[a] ? a : "en";
                        return s.default.createElement(m.Box, {
                            display: i.Display.Flex,
                            justifyContent: i.JustifyContent.center,
                            alignItems: i.AlignItems.center,
                            flexDirection: i.FlexDirection.Column,
                            className: "secure-your-wallet",
                            "data-testid": "secure-your-wallet"
                        }, h && s.default.createElement(g.default, {
                            handleClose: () => y(!1)
                        }), s.default.createElement(l.ThreeStepProgressBar, {
                            stage: l.threeStepStages.RECOVERY_PHRASE_VIDEO,
                            marginBottom: 4
                        }), s.default.createElement(m.Text, {
                            variant: i.TextVariant.headingLg,
                            as: "h2",
                            marginBottom: 4,
                            textAlign: i.TextAlign.Center
                        }, t("seedPhraseIntroTitle")), s.default.createElement(m.Text, {
                            variant: i.TextVariant.bodyLgMedium,
                            marginBottom: 6,
                            className: "secure-your-wallet__details"
                        }, t("seedPhraseIntroTitleCopy")), s.default.createElement(m.Box, {
                            as: "video",
                            borderRadius: i.BorderRadius.LG,
                            marginBottom: 8,
                            className: "secure-your-wallet__video",
                            onPlay: () => {
                                v({
                                    category: f.MetaMetricsEventCategory.Onboarding,
                                    event: f.MetaMetricsEventName.OnboardingWalletVideoPlay
                                })
                            }
                            ,
                            controls: !0
                        }, s.default.createElement("source", {
                            type: "video/webm",
                            src: "./images/videos/recovery-onboarding/video.webm"
                        }), Object.keys(b).map((e => s.default.createElement("track", {
                            default: Boolean(e === E),
                            srcLang: e,
                            label: b[e],
                            key: `${e}-subtitles`,
                            kind: "subtitles",
                            src: `./images/videos/recovery-onboarding/subtitles/${e}.vtt`
                        })))), s.default.createElement(m.Box, {
                            className: "secure-your-wallet__actions",
                            marginBottom: 8,
                            width: i.BlockSize.Full,
                            display: i.Display.Flex,
                            flexDirection: [i.FlexDirection.Column, i.FlexDirection.Row],
                            justifyContent: i.JustifyContent.spaceBetween,
                            gap: 4
                        }, s.default.createElement(m.Button, {
                            "data-testid": "secure-wallet-later",
                            variant: m.BUTTON_VARIANT.SECONDARY,
                            size: m.BUTTON_SIZES.LG,
                            block: !0,
                            onClick: () => {
                                v({
                                    category: f.MetaMetricsEventCategory.Onboarding,
                                    event: f.MetaMetricsEventName.OnboardingWalletSecuritySkipInitiated
                                }),
                                y(!0)
                            }
                        }, t("seedPhraseIntroNotRecommendedButtonCopy")), s.default.createElement(m.Button, {
                            "data-testid": "secure-wallet-recommended",
                            size: m.BUTTON_SIZES.LG,
                            block: !0,
                            onClick: () => {
                                v({
                                    category: f.MetaMetricsEventCategory.Onboarding,
                                    event: f.MetaMetricsEventName.OnboardingWalletSecurityStarted
                                }),
                                e.push(`${d.ONBOARDING_REVIEW_SRP_ROUTE}${_}`)
                            }
                        }, t("seedPhraseIntroRecommendedButtonCopy"))), s.default.createElement(m.Box, {
                            className: "secure-your-wallet__desc"
                        }, s.default.createElement(m.Text, {
                            as: "h3",
                            variant: i.TextVariant.headingSm
                        }, t("seedPhraseIntroSidebarTitleOne")), s.default.createElement(m.Text, {
                            marginBottom: 4
                        }, t("seedPhraseIntroSidebarCopyOne")), s.default.createElement(m.Text, {
                            as: "h3",
                            variant: i.TextVariant.headingSm
                        }, t("seedPhraseIntroSidebarTitleTwo")), s.default.createElement(m.Box, {
                            as: "ul",
                            className: "secure-your-wallet__list",
                            marginBottom: 4
                        }, s.default.createElement(m.Text, {
                            as: "li"
                        }, t("seedPhraseIntroSidebarBulletOne")), s.default.createElement(m.Text, {
                            as: "li"
                        }, t("seedPhraseIntroSidebarBulletTwo"))), s.default.createElement(m.Text, {
                            as: "h3",
                            variant: i.TextVariant.headingSm
                        }, t("seedPhraseIntroSidebarTitleThree")), s.default.createElement(m.Text, {
                            as: "p",
                            marginBottom: 4
                        }, t("seedPhraseIntroSidebarCopyTwo")), s.default.createElement(m.Text, {
                            as: "h3",
                            variant: i.TextVariant.headingSm,
                            backgroundColor: i.BackgroundColor.primaryMuted,
                            padding: 4,
                            borderRadius: i.BorderRadius.LG
                        }, t("seedPhraseIntroSidebarCopyThree"))))
                    }
                    ;
                    var a, s = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = h(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react")), o = e("react-router-dom"), r = e("react-redux"), i = e("../../../helpers/constants/design-system"), l = e("../../../components/app/step-progress-bar"), c = e("../../../hooks/useI18nContext"), u = e("../../../contexts/metametrics"), d = e("../../../helpers/constants/routes"), p = e("../../../ducks/locale/locale"), f = e("../../../../shared/constants/metametrics"), m = e("../../../components/component-library"), g = (a = e("./skip-srp-backup-popover")) && a.__esModule ? a : {
                        default: a
                    };
                    function h(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (h = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/onboarding-flow/secure-your-wallet/secure-your-wallet.js"
}], [6826, {
    "../../../../shared/constants/metametrics": 5260,
    "../../../components/component-library": 5806,
    "../../../components/ui/box": 6079,
    "../../../components/ui/button": 6083,
    "../../../components/ui/check-box": 6087,
    "../../../components/ui/popover": 6166,
    "../../../contexts/metametrics": 6214,
    "../../../helpers/constants/design-system": 6248,
    "../../../helpers/constants/routes": 6254,
    "../../../hooks/useI18nContext": 6334,
    "../../../store/actions": 7e3,
    "prop-types": 4528,
    react: 4776,
    "react-redux": 4734,
    "react-router-dom": 4761
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = b;
                    var a = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = v(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , s = _(e("prop-types"))
                      , o = e("react-router-dom")
                      , r = e("react-redux")
                      , i = e("../../../hooks/useI18nContext")
                      , l = _(e("../../../components/ui/button"))
                      , c = _(e("../../../components/ui/popover"))
                      , u = _(e("../../../components/ui/box"))
                      , d = e("../../../components/component-library")
                      , p = e("../../../helpers/constants/design-system")
                      , f = e("../../../store/actions")
                      , m = _(e("../../../components/ui/check-box"))
                      , g = e("../../../helpers/constants/routes")
                      , h = e("../../../../shared/constants/metametrics")
                      , y = e("../../../contexts/metametrics");
                    function _(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function v(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (v = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function b({handleClose: e}) {
                        const [t,n] = (0,
                        a.useState)(!1)
                          , s = (0,
                        i.useI18nContext)()
                          , _ = (0,
                        o.useHistory)()
                          , v = (0,
                        r.useDispatch)()
                          , b = (0,
                        a.useContext)(y.MetaMetricsContext);
                        return a.default.createElement(c.default, {
                            className: "skip-srp-backup-popover",
                            footer: a.default.createElement(u.default, {
                                className: "skip-srp-backup-popover__footer",
                                justifyContent: p.JustifyContent.center,
                                alignItems: p.AlignItems.center
                            }, a.default.createElement(l.default, {
                                onClick: () => {
                                    b({
                                        category: h.MetaMetricsEventCategory.Onboarding,
                                        event: h.MetaMetricsEventName.OnboardingWalletSecuritySkipCanceled
                                    }),
                                    e()
                                }
                                ,
                                type: "secondary",
                                rounded: !0
                            }, s("goBack")), a.default.createElement(l.default, {
                                "data-testid": "skip-srp-backup",
                                disabled: !t,
                                type: "primary",
                                rounded: !0,
                                onClick: async () => {
                                    await v((0,
                                    f.setSeedPhraseBackedUp)(!1)),
                                    b({
                                        category: h.MetaMetricsEventCategory.Onboarding,
                                        event: h.MetaMetricsEventName.OnboardingWalletSecuritySkipConfirmed
                                    }),
                                    _.push(g.ONBOARDING_COMPLETION_ROUTE)
                                }
                            }, s("skip")))
                        }, a.default.createElement(u.default, {
                            flexDirection: p.FLEX_DIRECTION.COLUMN,
                            alignItems: p.AlignItems.center,
                            justifyContent: p.JustifyContent.center,
                            margin: 4
                        }, a.default.createElement(d.Icon, {
                            name: d.IconName.Danger,
                            size: d.IconSize.Xl,
                            className: "skip-srp-backup-popover__icon",
                            color: p.IconColor.errorDefault
                        }), a.default.createElement(d.Text, {
                            variant: p.TextVariant.headingMd
                        }, s("skipAccountSecurity")), a.default.createElement(u.default, {
                            justifyContent: p.JustifyContent.center,
                            margin: 3
                        }, a.default.createElement("label", {
                            className: "skip-srp-backup-popover__label"
                        }, a.default.createElement(m.default, {
                            className: "skip-srp-backup-popover__checkbox",
                            onClick: () => n(!t),
                            checked: t,
                            dataTestId: "skip-srp-backup-popover-checkbox"
                        }), a.default.createElement(d.Text, {
                            className: "skip-srp-backup-popover__details"
                        }, s("skipAccountSecurityDetails"))))))
                    }
                    b.propTypes = {
                        handleClose: s.default.func
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/onboarding-flow/secure-your-wallet/skip-srp-backup-popover.js"
}], [6827, {
    "../../../../shared/constants/metametrics": 5260,
    "../../../../shared/constants/onboarding": 5267,
    "../../../components/component-library": 5806,
    "../../../components/ui/box": 6079,
    "../../../components/ui/button": 6083,
    "../../../components/ui/check-box": 6087,
    "../../../components/ui/mascot": 6148,
    "../../../contexts/metametrics": 6214,
    "../../../helpers/constants/design-system": 6248,
    "../../../helpers/constants/routes": 6254,
    "../../../hooks/useI18nContext": 6334,
    "../../../selectors": 6985,
    "../../../store/actions": 7e3,
    events: 3868,
    react: 4776,
    "react-redux": 4734,
    "react-responsive-carousel": 4753,
    "react-router-dom": 4761
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = function() {
                        const e = (0,
                        m.useI18nContext)()
                          , t = (0,
                        o.useDispatch)()
                          , n = (0,
                        r.useHistory)()
                          , [E] = (0,
                        s.useState)(new a.default)
                          , T = (0,
                        o.useSelector)(v.getCurrentKeyring)
                          , w = (0,
                        o.useSelector)(v.getFirstTimeFlowType)
                          , [x,k] = (0,
                        s.useState)(!1)
                          , [C,S] = (0,
                        s.useState)(!1);
                        (0,
                        s.useEffect)(( () => {
                            T && !C && (w === b.FirstTimeFlowType.import && n.replace(_.ONBOARDING_COMPLETION_ROUTE),
                            w === b.FirstTimeFlowType.restore ? n.replace(_.ONBOARDING_COMPLETION_ROUTE) : n.replace(_.ONBOARDING_SECURE_YOUR_WALLET_ROUTE))
                        }
                        ), [T, n, w, C]);
                        const N = (0,
                        s.useContext)(g.MetaMetricsContext)
                          , M = e("agreeTermsOfUse", [s.default.createElement("a", {
                            className: "create-new-vault__terms-link",
                            key: "create-new-vault__link-text",
                            href: "https://metamask.io/terms.html",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, e("terms"))]);
                        return s.default.createElement("div", {
                            className: "onboarding-welcome",
                            "data-testid": "onboarding-welcome"
                        }, s.default.createElement(i.Carousel, {
                            showThumbs: !1,
                            showStatus: !1,
                            showArrows: !0
                        }, s.default.createElement("div", null, s.default.createElement(u.Text, {
                            variant: f.TextVariant.headingLg,
                            as: "h2",
                            textAlign: f.TextAlign.Center,
                            fontWeight: f.FontWeight.Bold
                        }, e("welcomeToMetaMask")), s.default.createElement(u.Text, {
                            textAlign: f.TextAlign.Center,
                            marginLeft: 6,
                            marginRight: 6
                        }, e("welcomeToMetaMaskIntro")), s.default.createElement("div", {
                            className: "onboarding-welcome__mascot"
                        }, s.default.createElement(l.default, {
                            animationEventEmitter: E,
                            width: "250",
                            height: "250"
                        }))), s.default.createElement("div", null, s.default.createElement(u.Text, {
                            variant: f.TextVariant.headingLg,
                            as: "h2",
                            textAlign: f.TextAlign.Center,
                            fontWeight: f.FontWeight.Bold
                        }, e("welcomeExploreTitle")), s.default.createElement(u.Text, {
                            textAlign: f.TextAlign.Center
                        }, e("welcomeExploreDescription")), s.default.createElement("div", {
                            className: "onboarding-welcome__image"
                        }, s.default.createElement("img", {
                            src: "/images/onboarding-welcome-say-hello.svg",
                            width: "169",
                            height: "237",
                            alt: ""
                        }))), s.default.createElement("div", null, s.default.createElement(u.Text, {
                            variant: f.TextVariant.headingLg,
                            as: "h2",
                            textAlign: f.TextAlign.Center,
                            fontWeight: f.FontWeight.Bold
                        }, e("welcomeLoginTitle")), s.default.createElement(u.Text, {
                            textAlign: f.TextAlign.Center
                        }, e("welcomeLoginDescription")), s.default.createElement("div", {
                            className: "onboarding-welcome__image"
                        }, s.default.createElement("img", {
                            src: "/images/onboarding-welcome-decentralised-apps.svg",
                            width: "327",
                            height: "256",
                            alt: ""
                        })))), s.default.createElement("ul", {
                            className: "onboarding-welcome__buttons"
                        }, s.default.createElement("li", null, s.default.createElement(p.default, {
                            alignItems: f.AlignItems.center,
                            className: "onboarding__terms-of-use"
                        }, s.default.createElement(d.default, {
                            id: "onboarding__terms-checkbox",
                            className: "onboarding__terms-checkbox",
                            dataTestId: "onboarding-terms-checkbox",
                            checked: x,
                            onClick: () => {
                                k((e => !e))
                            }
                        }), s.default.createElement("label", {
                            className: "onboarding__terms-label",
                            htmlFor: "onboarding__terms-checkbox"
                        }, s.default.createElement(u.Text, {
                            variant: f.TextVariant.bodyMd,
                            marginLeft: 2,
                            as: "span"
                        }, M)))), s.default.createElement("li", null, s.default.createElement(c.default, {
                            "data-testid": "onboarding-create-wallet",
                            type: "primary",
                            onClick: async () => {
                                S(!0),
                                t((0,
                                y.setFirstTimeFlowType)(b.FirstTimeFlowType.create)),
                                N({
                                    category: h.MetaMetricsEventCategory.Onboarding,
                                    event: h.MetaMetricsEventName.OnboardingWalletCreationStarted,
                                    properties: {
                                        account_type: "metamask"
                                    }
                                }),
                                t((0,
                                y.setTermsOfUseLastAgreed)((new Date).getTime())),
                                n.push(_.ONBOARDING_METAMETRICS)
                            }
                            ,
                            disabled: !x
                        }, e("onboardingCreateWallet"))), s.default.createElement("li", null, s.default.createElement(c.default, {
                            "data-testid": "onboarding-import-wallet",
                            type: "secondary",
                            onClick: async () => {
                                await t((0,
                                y.setFirstTimeFlowType)(b.FirstTimeFlowType.import)),
                                N({
                                    category: h.MetaMetricsEventCategory.Onboarding,
                                    event: h.MetaMetricsEventName.OnboardingWalletImportStarted,
                                    properties: {
                                        account_type: "imported"
                                    }
                                }),
                                t((0,
                                y.setTermsOfUseLastAgreed)((new Date).getTime())),
                                n.push(_.ONBOARDING_METAMETRICS)
                            }
                            ,
                            disabled: !x
                        }, e("onboardingImportWallet")))))
                    }
                    ;
                    var a = T(e("events"))
                      , s = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = E(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , o = e("react-redux")
                      , r = e("react-router-dom")
                      , i = e("react-responsive-carousel")
                      , l = T(e("../../../components/ui/mascot"))
                      , c = T(e("../../../components/ui/button"))
                      , u = e("../../../components/component-library")
                      , d = T(e("../../../components/ui/check-box"))
                      , p = T(e("../../../components/ui/box"))
                      , f = e("../../../helpers/constants/design-system")
                      , m = e("../../../hooks/useI18nContext")
                      , g = e("../../../contexts/metametrics")
                      , h = e("../../../../shared/constants/metametrics")
                      , y = e("../../../store/actions")
                      , _ = e("../../../helpers/constants/routes")
                      , v = e("../../../selectors")
                      , b = e("../../../../shared/constants/onboarding");
                    function E(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (E = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function T(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/onboarding-flow/welcome/welcome.js"
}], [6828, {
    "../../../components/app/permissions-connect-footer": 5549,
    "../../../components/component-library": 5806,
    "../../../components/ui/account-list": 6073,
    "../../../components/ui/page-container": 6160,
    "../../../helpers/constants/design-system": 6248,
    "../../../hooks/useI18nContext": 6334,
    "@metamask/keyring-api": 1843,
    "@metamask/permission-controller": 2133,
    "prop-types": 4528,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a = m(e("prop-types"))
                      , s = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = f(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , o = e("@metamask/permission-controller")
                      , r = e("@metamask/keyring-api")
                      , i = e("../../../hooks/useI18nContext")
                      , l = m(e("../../../components/app/permissions-connect-footer"))
                      , c = m(e("../../../components/ui/account-list"))
                      , u = e("../../../components/ui/page-container")
                      , d = e("../../../helpers/constants/design-system")
                      , p = e("../../../components/component-library");
                    function f(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (f = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function m(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    const g = ({selectedAccountAddresses: e, addressLastConnectedMap: t={}, accounts: n, selectAccounts: a, selectNewAccountViaModal: f, cancelPermissionsRequest: m, permissionsRequestId: g, targetSubjectMetadata: h, nativeCurrency: y}) => {
                        const [_,v] = (0,
                        s.useState)(e)
                          , b = n.filter((e => (0,
                        r.isEvmAccountType)(e.type)))
                          , E = (0,
                        i.useI18nContext)()
                          , T = Object.keys(e).length > b.length
                          , w = 0 === n.length ? E("connectAccountOrCreate") : (null == h ? void 0 : h.subjectType) === o.SubjectType.Snap ? E("selectAccountsForSnap") : E("selectAccounts");
                        return s.default.createElement(s.default.Fragment, null, s.default.createElement(p.Box, {
                            className: "permissions-connect-choose-account__content",
                            display: d.Display.Flex,
                            flexDirection: d.FlexDirection.Column,
                            backgroundColor: d.BackgroundColor.backgroundAlternative,
                            width: d.BlockSize.Full,
                            height: d.BlockSize.Full,
                            paddingLeft: 6,
                            paddingRight: 6
                        }, s.default.createElement(p.Box, {
                            display: d.Display.Flex,
                            flexDirection: d.FlexDirection.Column,
                            justifyContent: d.JustifyContent.center,
                            alignItems: d.AlignItems.center,
                            paddingTop: 4,
                            paddingBottom: 4
                        }, s.default.createElement(p.Text, {
                            variant: d.TextVariant.headingMd
                        }, E("connectWithMetaMask")), s.default.createElement(p.Text, {
                            variant: d.TextVariant.bodyMd
                        }, w)), s.default.createElement(c.default, {
                            accounts: n,
                            selectNewAccountViaModal: f,
                            addressLastConnectedMap: t,
                            nativeCurrency: y,
                            selectedAccounts: _,
                            allAreSelected: () => b.length === _.size,
                            deselectAll: () => {
                                v(new Set)
                            }
                            ,
                            selectAll: () => {
                                const e = new Set(b.map((e => e.address)));
                                v(e)
                            }
                            ,
                            handleAccountClick: e => {
                                const t = new Set(_);
                                t.has(e) ? t.delete(e) : t.add(e),
                                v(t)
                            }
                        })), s.default.createElement(p.Box, {
                            backgroundColor: d.BackgroundColor.backgroundAlternative,
                            className: "permissions-connect-choose-account__footer",
                            paddingTop: 4
                        }, (null == h ? void 0 : h.subjectType) !== o.SubjectType.Snap && s.default.createElement(l.default, null), s.default.createElement(u.PageContainerFooter, {
                            cancelButtonType: "default",
                            onCancel: () => m(g),
                            cancelText: E("cancel"),
                            onSubmit: () => a(_),
                            submitText: E("next"),
                            disabled: T || 0 === _.size
                        })))
                    }
                    ;
                    g.propTypes = {
                        accounts: a.default.arrayOf(a.default.shape({
                            address: a.default.string,
                            addressLabel: a.default.string,
                            lastConnectedDate: a.default.string,
                            balance: a.default.string
                        })).isRequired,
                        selectAccounts: a.default.func.isRequired,
                        selectNewAccountViaModal: a.default.func.isRequired,
                        nativeCurrency: a.default.string.isRequired,
                        addressLastConnectedMap: a.default.object,
                        cancelPermissionsRequest: a.default.func.isRequired,
                        permissionsRequestId: a.default.string.isRequired,
                        selectedAccountAddresses: a.default.object.isRequired,
                        targetSubjectMetadata: a.default.shape({
                            extensionId: a.default.string,
                            iconUrl: a.default.string,
                            name: a.default.string,
                            origin: a.default.string.isRequired,
                            subjectType: a.default.string
                        })
                    };
                    n.default = g
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/permissions-connect/choose-account/choose-account.js"
}], [6829, {
    "./choose-account": 6828
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./choose-account")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/permissions-connect/choose-account/index.js"
}], [6830, {
    "../../../../shared/constants/network": 5264,
    "../../../../shared/constants/permissions": 5268,
    "../../../../shared/modules/selectors/networks": 5320,
    "../../../components/app/permissions-connect-footer": 5549,
    "../../../components/component-library": 5806,
    "../../../components/multichain/account-list-menu/account-list-menu": 5880,
    "../../../components/multichain/pages/page": 6032,
    "../../../components/multichain/pages/review-permissions-page/site-cell/site-cell": 6039,
    "../../../helpers/constants/design-system": 6248,
    "../../../hooks/useI18nContext": 6334,
    "../../../selectors": 6985,
    "../../../selectors/multichain": 6990,
    "@metamask/keyring-api": 1843,
    react: 4776,
    "react-redux": 4734
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.ConnectPage = void 0;
                    var a, s = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = v(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react")), o = e("react-redux"), r = e("@metamask/keyring-api"), i = e("../../../hooks/useI18nContext"), l = e("../../../selectors"), c = e("../../../../shared/modules/selectors/networks"), u = e("../../../components/component-library"), d = e("../../../components/multichain/pages/page"), p = e("../../../components/multichain/pages/review-permissions-page/site-cell/site-cell"), f = e("../../../helpers/constants/design-system"), m = e("../../../components/multichain/account-list-menu/account-list-menu"), g = e("../../../../shared/constants/network"), h = (a = e("../../../components/app/permissions-connect-footer")) && a.__esModule ? a : {
                        default: a
                    }, y = e("../../../../shared/constants/permissions"), _ = e("../../../selectors/multichain");
                    function v(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (v = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    n.ConnectPage = ({request: e, permissionsRequestId: t, rejectPermissionsRequest: n, approveConnection: a}) => {
                        var v, b, E, T;
                        const w = (0,
                        i.useI18nContext)()
                          , x = null == e || null === (v = e.permissions) || void 0 === v ? void 0 : v[y.RestrictedMethods.eth_accounts]
                          , k = (null == x || null === (b = x.caveats) || void 0 === b || null === (b = b.find((e => e.type === y.CaveatTypes.restrictReturnedAccounts))) || void 0 === b ? void 0 : b.value) || []
                          , C = null == e || null === (E = e.permissions) || void 0 === E ? void 0 : E[y.EndowmentTypes.permittedChains]
                          , S = (null == C || null === (T = C.caveats) || void 0 === T || null === (T = T.find((e => e.type === y.CaveatTypes.restrictNetworkSwitching))) || void 0 === T ? void 0 : T.value) || []
                          , N = (0,
                        o.useSelector)(c.getNetworkConfigurationsByChainId)
                          , [M,O] = (0,
                        s.useMemo)(( () => Object.entries(N).reduce(( ([e,t], [n,a]) => ((g.TEST_CHAINS.includes(n) ? t : e).push(a),
                        [e, t])), [[], []])), [N])
                          , I = (0,
                        o.useSelector)(_.getMultichainNetwork).network.chainId
                          , R = O.find((e => e.chainId === I))
                          , P = R ? [...M, R] : M
                          , D = S.length > 0 ? S : P.map(( ({chainId: e}) => e))
                          , [A,B] = (0,
                        s.useState)(D)
                          , j = (0,
                        o.useSelector)(l.getUpdatedAndSortedAccounts)
                          , F = (0,
                        o.useSelector)(l.getInternalAccounts)
                          , L = (0,
                        s.useMemo)(( () => (0,
                        m.mergeAccounts)(j, F).filter((e => (0,
                        r.isEvmAccountType)(e.type)))), [j, F])
                          , U = (0,
                        o.useSelector)(l.getSelectedInternalAccount)
                          , W = (0,
                        r.isEvmAccountType)(U.type) ? [U.address] : []
                          , $ = k.length > 0 ? k : W
                          , [q,V] = (0,
                        s.useState)($);
                        return s.default.createElement(d.Page, {
                            "data-testid": "connect-page",
                            className: "main-container connect-page",
                            backgroundColor: f.BackgroundColor.backgroundAlternative
                        }, s.default.createElement(d.Header, {
                            paddingBottom: 0
                        }, s.default.createElement(u.Text, {
                            variant: f.TextVariant.headingLg
                        }, w("connectWithMetaMask")), s.default.createElement(u.Text, null, w("connectionDescription"), ": ")), s.default.createElement(d.Content, {
                            paddingLeft: 4,
                            paddingRight: 4
                        }, s.default.createElement(p.SiteCell, {
                            nonTestNetworks: M,
                            testNetworks: O,
                            accounts: L,
                            onSelectAccountAddresses: V,
                            onSelectChainIds: B,
                            selectedAccountAddresses: q,
                            selectedChainIds: A,
                            isConnectFlow: !0
                        })), s.default.createElement(d.Footer, null, s.default.createElement(u.Box, {
                            display: f.Display.Flex,
                            flexDirection: f.FlexDirection.Column,
                            gap: 4,
                            width: f.BlockSize.Full
                        }, s.default.createElement(h.default, null), s.default.createElement(u.Box, {
                            display: f.Display.Flex,
                            gap: 4,
                            width: f.BlockSize.Full
                        }, s.default.createElement(u.Button, {
                            block: !0,
                            variant: u.ButtonVariant.Secondary,
                            size: u.ButtonSize.Lg,
                            "data-testid": "cancel-btn",
                            onClick: () => n(t)
                        }, w("cancel")), s.default.createElement(u.Button, {
                            block: !0,
                            "data-testid": "confirm-btn",
                            size: u.ButtonSize.Lg,
                            onClick: () => {
                                const t = {
                                    ...e,
                                    approvedAccounts: q,
                                    approvedChainIds: A
                                };
                                a(t)
                            }
                            ,
                            disabled: 0 === q.length || 0 === A.length
                        }, w("connect"))))))
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/permissions-connect/connect-page/connect-page.tsx"
}], [6831, {
    "./permissions-connect.container": 6833
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./permissions-connect.container")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/permissions-connect/index.js"
}], [6832, {
    "../../../app/scripts/controllers/permissions": 30,
    "../../../app/scripts/lib/multichain/address": 87,
    "../../../shared/constants/permissions": 5268,
    "../../../shared/constants/time": 5276,
    "../../components/app/permission-connect-header": 5542,
    "../../components/app/permission-page-container": 5544,
    "../../components/app/snaps/snap-authorship-header/snap-authorship-header": 5582,
    "../../components/component-library": 5806,
    "../../helpers/constants/routes": 6254,
    "../../helpers/utils/snaps": 6292,
    "./choose-account": 6829,
    "./connect-page/connect-page": 6830,
    "./redirect": 6834,
    "./snaps/snap-install": 6836,
    "./snaps/snap-result": 6838,
    "./snaps/snap-update": 6840,
    "./snaps/snaps-connect": 6842,
    "@metamask/permission-controller": 2133,
    "@metamask/rpc-errors": 2304,
    "prop-types": 4528,
    react: 4776,
    "react-router-dom": 4761
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a = C(e("prop-types"))
                      , s = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = k(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , o = e("react-router-dom")
                      , r = e("@metamask/rpc-errors")
                      , i = e("@metamask/permission-controller")
                      , l = e("../../../app/scripts/lib/multichain/address")
                      , c = e("../../../shared/constants/time")
                      , u = e("../../helpers/constants/routes")
                      , d = C(e("../../components/app/permission-page-container"))
                      , p = e("../../components/component-library")
                      , f = C(e("../../components/app/snaps/snap-authorship-header/snap-authorship-header"))
                      , m = C(e("../../components/app/permission-connect-header"))
                      , g = e("../../../shared/constants/permissions")
                      , h = e("../../../app/scripts/controllers/permissions")
                      , y = e("../../helpers/utils/snaps")
                      , _ = C(e("./choose-account"))
                      , v = C(e("./redirect"))
                      , b = C(e("./snaps/snaps-connect"))
                      , E = C(e("./snaps/snap-install"))
                      , T = C(e("./snaps/snap-update"))
                      , w = C(e("./snaps/snap-result"))
                      , x = e("./connect-page/connect-page");
                    function k(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (k = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function C(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function S(e, t, n) {
                        return (t = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e)
                                    return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var a = n.call(e, t || "default");
                                    if ("object" != typeof a)
                                        return a;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(t))in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n,
                        e
                    }
                    const N = 1200 * c.MILLISECOND;
                    function M(e, t) {
                        var n, a;
                        const s = null == t || null === (n = t.permissions) || void 0 === n ? void 0 : n[g.RestrictedMethods.eth_accounts]
                          , o = null == s || null === (a = s.caveats) || void 0 === a || null === (a = a.find((e => e.type === g.CaveatTypes.restrictReturnedAccounts))) || void 0 === a ? void 0 : a.value;
                        return o ? new Set(o.map((e => e.toLowerCase())).filter(l.isEthAddress)) : new Set((0,
                        l.isEthAddress)(e) ? [e] : [])
                    }
                    class O extends s.Component {
                        constructor(...e) {
                            super(...e),
                            S(this, "state", {
                                redirecting: !1,
                                selectedAccountAddresses: M(this.props.currentAddress, this.props.permissionsRequest),
                                permissionsApproved: null,
                                origin: this.props.origin,
                                targetSubjectMetadata: this.props.targetSubjectMetadata || {},
                                snapsInstallPrivacyWarningShown: this.props.snapsInstallPrivacyWarningShown
                            }),
                            S(this, "selectAccounts", (e => {
                                const {confirmPermissionPath: t, requestType: n, snapsConnectPath: a, snapInstallPath: s, snapUpdatePath: o, snapResultPath: r} = this.props;
                                this.setState({
                                    selectedAccountAddresses: e
                                }, ( () => {
                                    switch (n) {
                                    case "wallet_installSnap":
                                        this.props.history.push(s);
                                        break;
                                    case "wallet_updateSnap":
                                        this.props.history.push(o);
                                        break;
                                    case "wallet_installSnapResult":
                                        this.props.history.push(r);
                                        break;
                                    case "wallet_connectSnaps":
                                        this.props.history.replace(a);
                                        break;
                                    default:
                                        this.props.history.push(t)
                                    }
                                }
                                ))
                            }
                            )),
                            S(this, "cancelPermissionsRequest", (async e => {
                                const {rejectPermissionsRequest: t} = this.props;
                                e && (await t(e),
                                this.redirect(!1))
                            }
                            )),
                            S(this, "approveConnection", ( (...e) => {
                                const {approvePermissionsRequest: t} = this.props;
                                t(...e),
                                this.redirect(!0)
                            }
                            ))
                        }
                        componentDidMount() {
                            var e;
                            const {connectPath: t, confirmPermissionPath: n, snapsConnectPath: a, snapInstallPath: s, snapUpdatePath: o, snapResultPath: r, requestType: i, getRequestAccountTabIds: l, permissionsRequest: c, history: d, isRequestingAccounts: p} = this.props;
                            if (l(),
                            c) {
                                if (null != c && null !== (e = c.diff) && void 0 !== e && null !== (e = e.permissionDiffMap) && void 0 !== e && e[h.PermissionNames.permittedChains] && d.replace(n),
                                d.location.pathname === t && !p)
                                    switch (i) {
                                    case "wallet_installSnap":
                                        d.replace(s);
                                        break;
                                    case "wallet_updateSnap":
                                        d.replace(o);
                                        break;
                                    case "wallet_installSnapResult":
                                        d.replace(r);
                                        break;
                                    case "wallet_connectSnaps":
                                        d.replace(a);
                                        break;
                                    default:
                                        d.replace(n)
                                    }
                            } else
                                d.replace(u.DEFAULT_ROUTE)
                        }
                        componentDidUpdate(e) {
                            const {permissionsRequest: t, lastConnectedInfo: n} = this.props
                              , {redirecting: a, origin: s} = this.state;
                            if (!t && e.permissionsRequest && !a) {
                                var o, r;
                                const t = ((null === (o = n[s]) || void 0 === o ? void 0 : o.lastApproved) || 0) > ((null === (r = e.lastConnectedInfo[s]) || void 0 === r ? void 0 : r.lastApproved) || 0);
                                this.redirect(t)
                            }
                        }
                        redirect(e) {
                            const {history: t, permissionsRequest: n} = this.props;
                            let a = !0;
                            a = !((null == n ? void 0 : n.permissions) && Object.keys(n.permissions).includes("wallet_snap")),
                            this.setState({
                                redirecting: a,
                                permissionsApproved: e
                            }),
                            a && e ? setTimeout(( () => t.push(u.DEFAULT_ROUTE)), N) : t.push(u.DEFAULT_ROUTE)
                        }
                        goBack() {
                            const {history: e, connectPath: t} = this.props;
                            e.push(t)
                        }
                        renderTopBar(e) {
                            const {targetSubjectMetadata: t} = this.state;
                            return s.default.createElement(p.Box, {
                                style: {
                                    boxShadow: t.subjectType === i.SubjectType.Snap && "var(--shadow-size-lg) var(--color-shadow-default)"
                                }
                            }, t.subjectType === i.SubjectType.Snap ? s.default.createElement(f.default, {
                                snapId: t.origin,
                                boxShadow: "none",
                                onCancel: () => {
                                    this.cancelPermissionsRequest(e)
                                }
                            }) : s.default.createElement(m.default, {
                                origin: t.origin,
                                iconUrl: t.iconUrl
                            }))
                        }
                        render() {
                            var e;
                            const {accounts: t, showNewAccountModal: n, newAccountNumber: a, nativeCurrency: i, permissionsRequest: l, addressLastConnectedMap: c, permissionsRequestId: u, connectPath: p, confirmPermissionPath: f, hideTopBar: m, targetSubjectMetadata: g, snapsConnectPath: h, snapInstallPath: k, snapUpdatePath: C, snapResultPath: S, requestState: N, approvePendingApproval: M, rejectPendingApproval: O, setSnapsInstallPrivacyWarningShownStatus: I, approvePermissionsRequest: R} = this.props
                              , {selectedAccountAddresses: P, permissionsApproved: D, redirecting: A, snapsInstallPrivacyWarningShown: B} = this.state
                              , j = (0,
                            y.isSnapId)(null == l || null === (e = l.metadata) || void 0 === e ? void 0 : e.origin);
                            return s.default.createElement("div", {
                                className: "permissions-connect"
                            }, !m && this.renderTopBar(u), A && D ? s.default.createElement(v.default, {
                                subjectMetadata: g
                            }) : s.default.createElement(o.Switch, null, s.default.createElement(o.Route, {
                                path: p,
                                exact: !0,
                                render: () => j ? s.default.createElement(_.default, {
                                    accounts: t,
                                    nativeCurrency: i,
                                    selectAccounts: e => this.selectAccounts(e),
                                    selectNewAccountViaModal: e => {
                                        n({
                                            onCreateNewAccount: t => e(t),
                                            newAccountNumber: a
                                        })
                                    }
                                    ,
                                    addressLastConnectedMap: c,
                                    cancelPermissionsRequest: e => this.cancelPermissionsRequest(e),
                                    permissionsRequestId: u,
                                    selectedAccountAddresses: P,
                                    targetSubjectMetadata: g
                                }) : s.default.createElement(x.ConnectPage, {
                                    rejectPermissionsRequest: e => this.cancelPermissionsRequest(e),
                                    activeTabOrigin: this.state.origin,
                                    request: l,
                                    permissionsRequestId: u,
                                    approveConnection: this.approveConnection
                                })
                            }), s.default.createElement(o.Route, {
                                path: f,
                                exact: !0,
                                render: () => s.default.createElement(d.default, {
                                    request: l || {},
                                    approvePermissionsRequest: (...e) => {
                                        R(...e),
                                        this.redirect(!0)
                                    }
                                    ,
                                    rejectPermissionsRequest: e => this.cancelPermissionsRequest(e),
                                    selectedAccounts: t.filter((e => P.has(e.address))),
                                    targetSubjectMetadata: g,
                                    history: this.props.history,
                                    connectPath: p,
                                    snapsInstallPrivacyWarningShown: B,
                                    setSnapsInstallPrivacyWarningShownStatus: I
                                })
                            }), s.default.createElement(o.Route, {
                                path: h,
                                exact: !0,
                                render: () => s.default.createElement(b.default, {
                                    request: l || {},
                                    approveConnection: this.approveConnection,
                                    rejectConnection: e => this.cancelPermissionsRequest(e),
                                    targetSubjectMetadata: g,
                                    snapsInstallPrivacyWarningShown: B,
                                    setSnapsInstallPrivacyWarningShownStatus: I
                                })
                            }), s.default.createElement(o.Route, {
                                path: k,
                                exact: !0,
                                render: () => s.default.createElement(E.default, {
                                    request: l || {},
                                    requestState: N || {},
                                    approveSnapInstall: e => {
                                        M(e, {
                                            ...l,
                                            permissions: N.permissions,
                                            approvedAccounts: [...P]
                                        }),
                                        this.setState({
                                            permissionsApproved: !0
                                        })
                                    }
                                    ,
                                    rejectSnapInstall: e => {
                                        O(e, (0,
                                        r.serializeError)(r.providerErrors.userRejectedRequest())),
                                        this.setState({
                                            permissionsApproved: !0
                                        })
                                    }
                                    ,
                                    targetSubjectMetadata: g
                                })
                            }), s.default.createElement(o.Route, {
                                path: C,
                                exact: !0,
                                render: () => s.default.createElement(T.default, {
                                    request: l || {},
                                    requestState: N || {},
                                    approveSnapUpdate: e => {
                                        M(e, {
                                            ...l,
                                            permissions: N.permissions,
                                            approvedAccounts: [...P]
                                        }),
                                        this.setState({
                                            permissionsApproved: !0
                                        })
                                    }
                                    ,
                                    rejectSnapUpdate: e => {
                                        O(e, (0,
                                        r.serializeError)(r.providerErrors.userRejectedRequest())),
                                        this.setState({
                                            permissionsApproved: !1
                                        })
                                    }
                                    ,
                                    targetSubjectMetadata: g
                                })
                            }), s.default.createElement(o.Route, {
                                path: S,
                                exact: !0,
                                render: () => s.default.createElement(w.default, {
                                    request: l || {},
                                    requestState: N || {},
                                    approveSnapResult: e => {
                                        M(e),
                                        this.setState({
                                            permissionsApproved: !0
                                        })
                                    }
                                    ,
                                    targetSubjectMetadata: g
                                })
                            })))
                        }
                    }
                    n.default = O,
                    S(O, "propTypes", {
                        approvePermissionsRequest: a.default.func.isRequired,
                        rejectPermissionsRequest: a.default.func.isRequired,
                        getRequestAccountTabIds: a.default.func.isRequired,
                        accounts: a.default.arrayOf(a.default.shape({
                            id: a.default.string.isRequired,
                            address: a.default.string.isRequired,
                            metadata: a.default.shape({
                                name: a.default.string.isRequired,
                                snap: a.default.shape({
                                    id: a.default.string.isRequired,
                                    name: a.default.string,
                                    enabled: a.default.bool
                                }),
                                keyring: a.default.shape({
                                    type: a.default.string.isRequired
                                }).isRequired
                            }).isRequired,
                            addressLabel: a.default.string.isRequired,
                            label: a.default.string.isRequired,
                            balance: a.default.string.isRequired
                        })).isRequired,
                        currentAddress: a.default.string.isRequired,
                        origin: a.default.string,
                        showNewAccountModal: a.default.func.isRequired,
                        newAccountNumber: a.default.number.isRequired,
                        nativeCurrency: a.default.string,
                        permissionsRequest: a.default.object,
                        addressLastConnectedMap: a.default.object.isRequired,
                        lastConnectedInfo: a.default.object.isRequired,
                        permissionsRequestId: a.default.string,
                        history: a.default.object.isRequired,
                        connectPath: a.default.string.isRequired,
                        confirmPermissionPath: a.default.string.isRequired,
                        requestType: a.default.string.isRequired,
                        snapsConnectPath: a.default.string.isRequired,
                        snapInstallPath: a.default.string.isRequired,
                        snapUpdatePath: a.default.string.isRequired,
                        snapResultPath: a.default.string.isRequired,
                        requestState: a.default.object.isRequired,
                        approvePendingApproval: a.default.func.isRequired,
                        rejectPendingApproval: a.default.func.isRequired,
                        setSnapsInstallPrivacyWarningShownStatus: a.default.func.isRequired,
                        snapsInstallPrivacyWarningShown: a.default.bool.isRequired,
                        hideTopBar: a.default.bool,
                        targetSubjectMetadata: a.default.shape({
                            extensionId: a.default.string,
                            iconUrl: a.default.string,
                            name: a.default.string,
                            origin: a.default.string,
                            subjectType: a.default.string
                        }),
                        isRequestingAccounts: a.default.bool.isRequired
                    }),
                    S(O, "defaultProps", {
                        origin: "",
                        nativeCurrency: "",
                        permissionsRequest: undefined,
                        permissionsRequestId: ""
                    }),
                    S(O, "contextTypes", {
                        t: a.default.func
                    })
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/permissions-connect/permissions-connect.component.js"
}], [6833, {
    "../../ducks/metamask/metamask": 6236,
    "../../helpers/constants/routes": 6254,
    "../../helpers/utils/util": 6297,
    "../../selectors": 6985,
    "../../store/actions": 7e3,
    "./permissions-connect.component": 6832,
    "@metamask/keyring-api": 1843,
    "@metamask/permission-controller": 2133,
    "@metamask/snaps-rpc-methods": 2479,
    "prop-types": 4528,
    "react-redux": 4734
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a = e("@metamask/permission-controller")
                      , s = e("@metamask/snaps-rpc-methods")
                      , o = e("react-redux")
                      , r = m(e("prop-types"))
                      , i = e("@metamask/keyring-api")
                      , l = e("../../selectors")
                      , c = e("../../ducks/metamask/metamask")
                      , u = e("../../helpers/utils/util")
                      , d = e("../../store/actions")
                      , p = e("../../helpers/constants/routes")
                      , f = m(e("./permissions-connect.component"));
                    function m(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    const g = (0,
                    o.connect)(( (e, t) => {
                        var n, o, r;
                        const {match: {params: {id: d}}, location: {pathname: f}} = t;
                        let m = (0,
                        l.getPermissionsRequests)(e);
                        m = [...m, ...(0,
                        l.getSnapInstallOrUpdateRequests)(e)];
                        const {address: g} = (0,
                        l.getSelectedInternalAccount)(e)
                          , h = m.find((e => e.metadata.id === d))
                          , y = Boolean(null == h || null === (n = h.permissions) || void 0 === n ? void 0 : n.eth_accounts)
                          , {metadata: _={}} = h || {}
                          , {origin: v} = _
                          , b = (0,
                        c.getNativeCurrency)(e)
                          , E = (0,
                        l.getTargetSubjectMetadata)(e, v) ?? {
                            name: (0,
                            u.getURLHostName)(v) || v,
                            origin: v,
                            iconUrl: null,
                            extensionId: null,
                            subjectType: a.SubjectType.Unknown
                        };
                        let T = (0,
                        l.getRequestType)(e, d);
                        h && 1 === Object.keys(h.permissions || {}).length && null !== (o = h.permissions) && void 0 !== o && o[s.WALLET_SNAP_PERMISSION_KEY] && (T = "wallet_connectSnaps");
                        const w = (0,
                        l.getRequestState)(e, d) || {}
                          , x = (0,
                        l.getAccountsWithLabels)(e).filter((e => (0,
                        i.isEvmAccountType)(e.type)))
                          , k = (0,
                        l.getLastConnectedInfo)(e) || {}
                          , C = (null === (r = k[v]) || void 0 === r ? void 0 : r.accounts) || {};
                        Object.keys(C).forEach((e => {
                            C[e] = (0,
                            u.formatDate)(C[e], "yyyy-MM-dd")
                        }
                        ));
                        const S = `${p.CONNECT_ROUTE}/${d}`
                          , N = `${p.CONNECT_ROUTE}/${d}${p.CONNECT_CONFIRM_PERMISSIONS_ROUTE}`
                          , M = `${p.CONNECT_ROUTE}/${d}${p.CONNECT_SNAPS_CONNECT_ROUTE}`
                          , O = `${p.CONNECT_ROUTE}/${d}${p.CONNECT_SNAP_INSTALL_ROUTE}`
                          , I = `${p.CONNECT_ROUTE}/${d}${p.CONNECT_SNAP_UPDATE_ROUTE}`
                          , R = `${p.CONNECT_ROUTE}/${d}${p.CONNECT_SNAP_RESULT_ROUTE}`
                          , P = f === O || f === I || f === R;
                        let D = 1 + y;
                        D += P,
                        D = D.toString();
                        let A = "";
                        if (f === S)
                            A = "1";
                        else if (f === N)
                            A = y ? "2" : "1";
                        else if (P)
                            A = y ? "3" : "2";
                        else {
                            if (f !== M)
                                throw new Error("Incorrect path for permissions-connect component");
                            A = 1
                        }
                        return {
                            isRequestingAccounts: y,
                            requestType: T,
                            snapsConnectPath: M,
                            snapInstallPath: O,
                            snapUpdatePath: I,
                            snapResultPath: R,
                            requestState: w,
                            hideTopBar: P,
                            snapsInstallPrivacyWarningShown: (0,
                            l.getSnapsInstallPrivacyWarningShown)(e),
                            permissionsRequest: h,
                            permissionsRequestId: d,
                            accounts: x,
                            currentAddress: g,
                            origin: v,
                            newAccountNumber: x.length + 1,
                            nativeCurrency: b,
                            addressLastConnectedMap: C,
                            lastConnectedInfo: k,
                            connectPath: S,
                            confirmPermissionPath: N,
                            totalPages: D,
                            page: A,
                            targetSubjectMetadata: E
                        }
                    }
                    ), (e => ({
                        approvePermissionsRequest: t => e((0,
                        d.approvePermissionsRequest)(t)),
                        rejectPermissionsRequest: t => e((0,
                        d.rejectPermissionsRequest)(t)),
                        approvePendingApproval: (t, n) => e((0,
                        d.resolvePendingApproval)(t, n)),
                        rejectPendingApproval: (t, n) => e((0,
                        d.rejectPendingApproval)(t, n)),
                        setSnapsInstallPrivacyWarningShownStatus: t => {
                            e((0,
                            d.setSnapsInstallPrivacyWarningShownStatus)(t))
                        }
                        ,
                        showNewAccountModal: ({onCreateNewAccount: t, newAccountNumber: n}) => e((0,
                        d.showModal)({
                            name: "NEW_ACCOUNT",
                            onCreateNewAccount: t,
                            newAccountNumber: n
                        })),
                        getRequestAccountTabIds: () => e((0,
                        d.getRequestAccountTabIds)())
                    })))(f.default);
                    g.propTypes = {
                        history: r.default.object.isRequired,
                        match: r.default.shape({
                            params: r.default.shape({
                                id: r.default.string
                            }).isRequired
                        }).isRequired
                    };
                    n.default = g
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/permissions-connect/permissions-connect.container.js"
}], [6834, {
    "./permissions-redirect.component": 6835
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./permissions-redirect.component")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/permissions-connect/redirect/index.js"
}], [6835, {
    "../../../components/app/permissions-connect-footer": 5549,
    "../../../components/component-library": 5806,
    "../../../contexts/i18n": 6211,
    "../../../helpers/constants/design-system": 6248,
    "prop-types": 4528,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = d;
                    var a = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = u(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , s = c(e("prop-types"))
                      , o = e("../../../helpers/constants/design-system")
                      , r = e("../../../contexts/i18n")
                      , i = e("../../../components/component-library")
                      , l = c(e("../../../components/app/permissions-connect-footer"));
                    function c(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function u(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (u = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function d({subjectMetadata: e}) {
                        const t = (0,
                        a.useContext)(r.I18nContext)
                          , [n,s] = (0,
                        a.useState)(e);
                        return (0,
                        a.useEffect)(( () => {
                            e && e.origin && s(e)
                        }
                        ), [e]),
                        a.default.createElement(i.Box, {
                            display: o.Display.Flex,
                            flexDirection: o.FlexDirection.Column,
                            width: o.BlockSize.Full,
                            height: o.BlockSize.Full,
                            justifyContent: o.JustifyContent.spaceBetween
                        }, a.default.createElement(i.Box, {
                            display: o.Display.Flex,
                            flexDirection: o.FlexDirection.Column,
                            alignItems: o.AlignItems.center,
                            justifyContent: o.JustifyContent.center,
                            width: o.BlockSize.Full,
                            height: o.BlockSize.Full,
                            backgroundColor: o.BackgroundColor.backgroundAlternative
                        }, a.default.createElement(i.Box, {
                            display: o.Display.Flex,
                            marginBottom: 4
                        }, a.default.createElement(i.Text, {
                            variant: o.TextVariant.headingMd
                        }, t("connecting"))), a.default.createElement(i.Box, {
                            display: o.Display.Flex,
                            backgroundColor: o.BackgroundColor.infoMuted,
                            borderRadius: o.BorderRadius.pill,
                            padding: 2
                        }, a.default.createElement(i.AvatarToken, {
                            src: n.iconUrl,
                            name: n.name,
                            size: i.AvatarTokenSize.Lg
                        }), a.default.createElement(i.Box, {
                            display: o.Display.Flex,
                            alignItems: o.AlignItems.center,
                            justifyContent: o.JustifyContent.center,
                            paddingLeft: 4,
                            paddingRight: 4
                        }, a.default.createElement(i.Icon, {
                            name: i.IconName.Confirmation,
                            size: i.IconSize.Xl,
                            color: o.IconColor.infoDefault
                        })), a.default.createElement(i.AvatarToken, {
                            src: "/images/logo/metamask-fox.svg",
                            size: i.AvatarTokenSize.Lg,
                            name: "metamask-fox"
                        }))), a.default.createElement(i.Box, {
                            backgroundColor: o.BackgroundColor.backgroundAlternative,
                            padding: 4
                        }, a.default.createElement(i.Box, {
                            display: o.Display.Flex,
                            flexDirection: o.FlexDirection.Column
                        }, a.default.createElement(l.default, null), a.default.createElement(i.Box, {
                            display: o.Display.Flex,
                            paddingTop: 4,
                            width: o.BlockSize.Full,
                            justifyContent: o.JustifyContent.center,
                            alignItems: o.AlignItems.center
                        }, a.default.createElement(i.Button, {
                            variant: i.ButtonVariant.Secondary,
                            size: i.ButtonSize.Lg,
                            width: o.BlockSize.Full,
                            marginRight: 2,
                            disabled: !0
                        }, t("back")), a.default.createElement(i.Button, {
                            variant: i.ButtonVariant.Primary,
                            size: i.ButtonSize.Lg,
                            width: o.BlockSize.Full,
                            marginLeft: 2,
                            disabled: !0,
                            loading: !0
                        }, a.default.createElement(i.Icon, {
                            name: i.IconName.Loading,
                            size: i.IconSize.Lg,
                            color: o.IconColor.infoDefault
                        }))))))
                    }
                    d.propTypes = {
                        subjectMetadata: s.default.shape({
                            extensionId: s.default.string,
                            iconUrl: s.default.string,
                            subjectType: s.default.string,
                            name: s.default.string.isRequired,
                            origin: s.default.string.isRequired
                        })
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/permissions-connect/redirect/permissions-redirect.component.js"
}], [6836, {
    "./snap-install": 6837
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./snap-install")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/permissions-connect/snaps/snap-install/index.js"
}], [6837, {
    "../../../../components/app/permission-connect-header": 5542,
    "../../../../components/app/snaps/install-error/install-error": 5573,
    "../../../../components/app/snaps/snap-authorship-header": 5581,
    "../../../../components/app/snaps/snap-install-warning": 5595,
    "../../../../components/app/snaps/snap-permissions-list": 5609,
    "../../../../components/component-library": 5806,
    "../../../../components/ui/page-container": 6160,
    "../../../../components/ui/pulse-loader/pulse-loader": 6169,
    "../../../../helpers/constants/design-system": 6248,
    "../../../../helpers/utils/snaps": 6292,
    "../../../../helpers/utils/util": 6297,
    "../../../../hooks/useI18nContext": 6334,
    "../../../../hooks/useOriginMetadata": 6345,
    "../../../../hooks/useScrollRequired": 6349,
    "../../../../selectors": 6985,
    "../util": 6844,
    "prop-types": 4528,
    react: 4776,
    "react-redux": 4734
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = x;
                    var a = w(e("prop-types"))
                      , s = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = T(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , o = e("react-redux")
                      , r = e("../../../../components/ui/page-container")
                      , i = e("../../../../hooks/useI18nContext")
                      , l = w(e("../../../../components/app/snaps/snap-install-warning"))
                      , c = e("../../../../helpers/constants/design-system")
                      , u = e("../util")
                      , d = w(e("../../../../components/ui/pulse-loader/pulse-loader"))
                      , p = w(e("../../../../components/app/snaps/snap-authorship-header"))
                      , f = e("../../../../components/component-library")
                      , m = w(e("../../../../components/app/snaps/snap-permissions-list"))
                      , g = e("../../../../hooks/useScrollRequired")
                      , h = w(e("../../../../components/app/snaps/install-error/install-error"))
                      , y = e("../../../../hooks/useOriginMetadata")
                      , _ = e("../../../../selectors")
                      , v = e("../../../../helpers/utils/util")
                      , b = w(e("../../../../components/app/permission-connect-header"))
                      , E = e("../../../../helpers/utils/snaps");
                    function T(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (T = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function w(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function x({request: e, requestState: t, approveSnapInstall: n, rejectSnapInstall: a, targetSubjectMetadata: T}) {
                        var w, x, k;
                        const C = (0,
                        i.useI18nContext)()
                          , S = (0,
                        y.useOriginMetadata)(null == e || null === (w = e.metadata) || void 0 === w ? void 0 : w.dappOrigin) || {}
                          , {origin: N, iconUrl: M} = S
                          , [O,I] = (0,
                        s.useState)(!1)
                          , R = (0,
                        o.useSelector)(_.getSnapsMetadata)
                          , [P,D] = (0,
                        s.useState)(!1)
                          , {isScrollable: A, hasScrolledToBottom: B, scrollToBottom: j, ref: F, onScroll: L} = (0,
                        g.useScrollRequired)([t])
                          , U = (0,
                        s.useCallback)(( () => a(e.metadata.id)), [e, a])
                          , W = (0,
                        s.useCallback)(( () => n(e.metadata.id)), [e, n])
                          , {name: $} = (0,
                        o.useSelector)((e => (0,
                        _.getSnapMetadata)(e, T.origin)))
                          , q = !t.loading && t.error
                          , V = t.loading
                          , z = (0,
                        E.isSnapId)(null == e || null === (x = e.metadata) || void 0 === x ? void 0 : x.dappOrigin)
                          , H = (0,
                        u.getSnapInstallWarnings)((null == t ? void 0 : t.permissions) ?? {}, C, $, (0,
                        v.getSnapName)(R))
                          , G = H.length > 0;
                        return s.default.createElement(f.Box, {
                            className: "snap-install",
                            display: c.Display.Flex,
                            justifyContent: c.JustifyContent.spaceBetween,
                            height: c.BlockSize.Full,
                            borderStyle: c.BorderStyle.none,
                            flexDirection: c.FlexDirection.Column,
                            backgroundColor: c.BackgroundColor.backgroundAlternative
                        }, !V && !q || z ? s.default.createElement(p.default, {
                            snapId: V && z ? null == e || null === (k = e.metadata) || void 0 === k ? void 0 : k.dappOrigin : T.origin,
                            onCancel: U
                        }) : s.default.createElement(b.default, {
                            origin: N,
                            iconUrl: M
                        }), s.default.createElement(f.Box, {
                            ref: V || q ? undefined : F,
                            onScroll: L,
                            className: "snap-install__content",
                            style: {
                                overflowY: "auto",
                                flex: !V && !q && "1"
                            },
                            paddingLeft: 4,
                            paddingRight: 4
                        }, V && s.default.createElement(f.Box, {
                            display: c.Display.Flex,
                            className: "snap-install__content__loader-container",
                            flexDirection: c.FlexDirection.Column,
                            alignItems: c.AlignItems.center,
                            justifyContent: c.JustifyContent.center
                        }, s.default.createElement(d.default, null)), q && s.default.createElement(h.default, {
                            iconName: f.IconName.Warning,
                            title: C("connectionFailed"),
                            description: C("connectionFailedDescription", [s.default.createElement(f.Text, {
                                as: "span",
                                key: "1",
                                fontWeight: c.FontWeight.Medium
                            }, $)]),
                            error: t.error
                        }), !q && !V && s.default.createElement(s.default.Fragment, null, s.default.createElement(f.Text, {
                            variant: c.TextVariant.headingMd,
                            paddingTop: 4,
                            paddingBottom: 2,
                            textAlign: "center"
                        }, C("installRequest")), s.default.createElement(f.Text, {
                            className: "snap-install__content__permission-description",
                            paddingBottom: 4,
                            paddingLeft: 4,
                            paddingRight: 4,
                            textAlign: c.TextAlign.Center
                        }, C("snapInstallRequest", [s.default.createElement(f.Text, {
                            as: "span",
                            key: "2",
                            variant: c.TextVariant.bodyMd,
                            fontWeight: c.FontWeight.Medium
                        }, $)])), s.default.createElement(f.Box, {
                            display: c.Display.Flex,
                            backgroundColor: c.BackgroundColor.backgroundDefault,
                            paddingLeft: 4,
                            paddingRight: 4,
                            paddingTop: 2,
                            paddingBottom: 2,
                            borderRadius: c.BorderRadius.XL
                        }, s.default.createElement(m.default, {
                            snapId: T.origin,
                            snapName: $,
                            permissions: t.permissions || {},
                            connections: t.connections || {},
                            onShowAllPermissions: () => {
                                D(!0)
                            }
                        })), s.default.createElement(f.Box, {
                            className: "snap-install__scroll-button-area"
                        }, !A || B || P ? null : s.default.createElement(f.AvatarIcon, {
                            className: "snap-install__scroll-button",
                            "data-testid": "snap-install-scroll",
                            iconName: f.IconName.Arrow2Down,
                            backgroundColor: c.BackgroundColor.infoDefault,
                            color: c.IconColor.primaryInverse,
                            onClick: j,
                            style: {
                                cursor: "pointer"
                            }
                        })))), s.default.createElement(f.Box, {
                            className: "snap-install__footer",
                            display: c.Display.Flex,
                            alignItems: c.AlignItems.center,
                            flexDirection: c.FlexDirection.Column,
                            backgroundColor: c.BackgroundColor.backgroundAlternative
                        }, s.default.createElement(r.PageContainerFooter, {
                            cancelButtonType: "default",
                            hideCancel: q,
                            disabled: V || !q && A && !B,
                            onCancel: U,
                            cancelText: C("cancel"),
                            onSubmit: () => {
                                !q && G ? I(!0) : q ? U() : W()
                            }
                            ,
                            submitText: C(q ? "ok" : V ? "connect" : "confirm")
                        })), O && s.default.createElement(l.default, {
                            onCancel: () => I(!1),
                            onSubmit: W,
                            warnings: H,
                            snapName: $
                        }))
                    }
                    x.propTypes = {
                        request: a.default.object.isRequired,
                        requestState: a.default.object.isRequired,
                        approveSnapInstall: a.default.func.isRequired,
                        rejectSnapInstall: a.default.func.isRequired,
                        targetSubjectMetadata: a.default.shape({
                            iconUrl: a.default.string,
                            name: a.default.string,
                            origin: a.default.string.isRequired,
                            sourceCode: a.default.string,
                            version: a.default.string
                        }).isRequired
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/permissions-connect/snaps/snap-install/snap-install.js"
}], [6838, {
    "./snap-result": 6839
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./snap-result")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/permissions-connect/snaps/snap-result/index.js"
}], [6839, {
    "../../../../components/app/snaps/install-error/install-error": 5573,
    "../../../../components/app/snaps/snap-authorship-header": 5581,
    "../../../../components/component-library": 5806,
    "../../../../components/ui/box/box": 6078,
    "../../../../components/ui/page-container": 6160,
    "../../../../components/ui/pulse-loader/pulse-loader": 6169,
    "../../../../helpers/constants/design-system": 6248,
    "../../../../hooks/useI18nContext": 6334,
    "../../../../selectors": 6985,
    "prop-types": 4528,
    react: 4776,
    "react-redux": 4734
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = y;
                    var a = h(e("prop-types"))
                      , s = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = g(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , o = e("react-redux")
                      , r = e("../../../../components/ui/page-container")
                      , i = e("../../../../hooks/useI18nContext")
                      , l = h(e("../../../../components/ui/box/box"))
                      , c = e("../../../../helpers/constants/design-system")
                      , u = e("../../../../components/component-library")
                      , d = h(e("../../../../components/ui/pulse-loader/pulse-loader"))
                      , p = h(e("../../../../components/app/snaps/install-error/install-error"))
                      , f = h(e("../../../../components/app/snaps/snap-authorship-header"))
                      , m = e("../../../../selectors");
                    function g(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (g = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function h(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function y({request: e, requestState: t, approveSnapResult: n, targetSubjectMetadata: a}) {
                        const g = (0,
                        i.useI18nContext)()
                          , h = (0,
                        s.useCallback)(( () => n(e.metadata.id)), [e, n])
                          , y = !t.loading && t.error
                          , _ = t.loading
                          , {name: v} = (0,
                        o.useSelector)((e => (0,
                        m.getSnapMetadata)(e, a.origin)));
                        return s.default.createElement(l.default, {
                            className: "page-container snap-result",
                            justifyContent: c.JustifyContent.spaceBetween,
                            height: c.BlockSize.Full,
                            borderStyle: c.BorderStyle.none,
                            flexDirection: c.FlexDirection.Column,
                            backgroundColor: c.BackgroundColor.backgroundAlternative
                        }, s.default.createElement(f.default, {
                            snapId: a.origin,
                            onCancel: h
                        }), s.default.createElement(l.default, {
                            className: "snap-result__content",
                            paddingLeft: 4,
                            paddingRight: 4,
                            alignItems: c.AlignItems.center,
                            flexDirection: c.FlexDirection.Column,
                            style: {
                                overflowY: "auto"
                            },
                            backgroundColor: c.BackgroundColor.backgroundAlternative,
                            height: c.BlockSize.Full
                        }, _ && s.default.createElement(l.default, {
                            className: "snap-result__content__loader-container",
                            display: c.Display.Flex,
                            flexDirection: c.FlexDirection.Column,
                            alignItems: c.AlignItems.center,
                            justifyContent: c.JustifyContent.center,
                            height: c.BlockSize.Full
                        }, s.default.createElement(d.default, null)), !_ && !y && function(e, t) {
                            let n;
                            switch (e) {
                            case "wallet_installSnap":
                                n = g("snapInstallSuccess");
                                break;
                            case "wallet_updateSnap":
                                n = g("snapUpdateSuccess");
                                break;
                            default:
                                n = g("snapResultSuccess")
                            }
                            return s.default.createElement(l.default, {
                                flexDirection: c.FlexDirection.Column,
                                alignItems: c.AlignItems.center,
                                justifyContent: c.JustifyContent.center,
                                height: c.BlockSize.Full,
                                paddingTop: 2,
                                paddingBottom: 2,
                                backgroundColor: c.BackgroundColor.backgroundAlternative
                            }, s.default.createElement(u.AvatarIcon, {
                                className: "snap-result__header__icon",
                                iconName: u.IconName.Confirmation,
                                size: u.AvatarIconSize.Xl,
                                color: c.IconColor.successDefault,
                                backgroundColor: c.BackgroundColor.successMuted
                            }), s.default.createElement(u.Text, {
                                fontWeight: c.FontWeight.Bold,
                                variant: c.TextVariant.headingLg,
                                paddingBottom: 2,
                                marginTop: 4
                            }, n), s.default.createElement(u.Text, {
                                textAlign: c.TextAlign.Center
                            }, g("snapResultSuccessDescription", [s.default.createElement(u.Text, {
                                as: "span",
                                key: "1",
                                fontWeight: c.FontWeight.Medium
                            }, t)])))
                        }(t.type, v), y && function(e, n) {
                            let a, o;
                            switch (e) {
                            case "wallet_installSnap":
                                a = g("snapInstallationErrorTitle"),
                                o = g("snapInstallationErrorDescription", [s.default.createElement(u.Text, {
                                    as: "span",
                                    key: "1",
                                    fontWeight: c.FontWeight.Medium
                                }, n)]);
                                break;
                            case "wallet_updateSnap":
                                a = g("snapUpdateErrorTitle"),
                                o = g("snapUpdateErrorDescription", [s.default.createElement(u.Text, {
                                    as: "span",
                                    key: "1",
                                    fontWeight: c.FontWeight.Medium
                                }, n)]);
                                break;
                            default:
                                a = g("snapResultError")
                            }
                            return s.default.createElement(p.default, {
                                error: t.error,
                                title: a,
                                description: o,
                                iconName: u.IconName.Warning
                            })
                        }(t.type, v)), s.default.createElement(l.default, {
                            className: "snap-result__footer",
                            alignItems: c.AlignItems.center,
                            flexDirection: c.FlexDirection.Column,
                            backgroundColor: c.BackgroundColor.backgroundAlternative
                        }, s.default.createElement(r.PageContainerFooter, {
                            hideCancel: !0,
                            disabled: _,
                            onSubmit: h,
                            submitText: g("ok").toUpperCase()
                        })))
                    }
                    y.propTypes = {
                        request: a.default.object.isRequired,
                        requestState: a.default.object.isRequired,
                        approveSnapResult: a.default.func.isRequired,
                        targetSubjectMetadata: a.default.shape({
                            iconUrl: a.default.string,
                            name: a.default.string,
                            origin: a.default.string.isRequired,
                            sourceCode: a.default.string,
                            version: a.default.string
                        }).isRequired
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/permissions-connect/snaps/snap-result/snap-result.js"
}], [6840, {
    "./snap-update": 6841
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./snap-update")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/permissions-connect/snaps/snap-update/index.js"
}], [6841, {
    "../../../../components/app/snaps/install-error/install-error": 5573,
    "../../../../components/app/snaps/snap-authorship-header": 5581,
    "../../../../components/app/snaps/snap-install-warning": 5595,
    "../../../../components/app/snaps/update-snap-permission-list": 5685,
    "../../../../components/component-library": 5806,
    "../../../../components/ui/page-container": 6160,
    "../../../../components/ui/pulse-loader/pulse-loader": 6169,
    "../../../../helpers/constants/design-system": 6248,
    "../../../../helpers/utils/util": 6297,
    "../../../../hooks/useI18nContext": 6334,
    "../../../../hooks/useScrollRequired": 6349,
    "../../../../selectors": 6985,
    "../util": 6844,
    "prop-types": 4528,
    react: 4776,
    "react-redux": 4734
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = E;
                    var a = b(e("prop-types"))
                      , s = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = v(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , o = e("react-redux")
                      , r = e("../../../../components/ui/page-container")
                      , i = e("../../../../hooks/useI18nContext")
                      , l = b(e("../../../../components/app/snaps/snap-install-warning"))
                      , c = e("../../../../helpers/constants/design-system")
                      , u = b(e("../../../../components/app/snaps/update-snap-permission-list"))
                      , d = e("../util")
                      , p = b(e("../../../../components/ui/pulse-loader/pulse-loader"))
                      , f = b(e("../../../../components/app/snaps/install-error/install-error"))
                      , m = b(e("../../../../components/app/snaps/snap-authorship-header"))
                      , g = e("../../../../components/component-library")
                      , h = e("../../../../hooks/useScrollRequired")
                      , y = e("../../../../selectors")
                      , _ = e("../../../../helpers/utils/util");
                    function v(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (v = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function b(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function E({request: e, requestState: t, approveSnapUpdate: n, rejectSnapUpdate: a, targetSubjectMetadata: v}) {
                        const b = (0,
                        i.useI18nContext)()
                          , [E,T] = (0,
                        s.useState)(!1)
                          , [w,x] = (0,
                        s.useState)(!1)
                          , {isScrollable: k, hasScrolledToBottom: C, scrollToBottom: S, ref: N, onScroll: M} = (0,
                        h.useScrollRequired)([t])
                          , O = (0,
                        o.useSelector)(y.getSnapsMetadata)
                          , I = (0,
                        s.useCallback)(( () => a(e.metadata.id)), [e, a])
                          , R = (0,
                        s.useCallback)(( () => n(e.metadata.id)), [e, n])
                          , {name: P} = (0,
                        o.useSelector)((e => (0,
                        y.getSnapMetadata)(e, v.origin)))
                          , D = t.approvedPermissions ?? {}
                          , A = t.unusedPermissions ?? {}
                          , B = t.newPermissions ?? {}
                          , j = t.approvedConnections ?? {}
                          , F = t.unusedConnections ?? {}
                          , L = t.newConnections ?? {}
                          , {newVersion: U} = t
                          , W = t.loading
                          , $ = !W && t.error
                          , q = (0,
                        d.getSnapInstallWarnings)(B, b, P, (0,
                        _.getSnapName)(O))
                          , V = q.length > 0;
                        return s.default.createElement(g.Box, {
                            className: "snap-update",
                            display: c.Display.Flex,
                            justifyContent: c.JustifyContent.spaceBetween,
                            height: c.BlockSize.Full,
                            borderStyle: c.BorderStyle.none,
                            flexDirection: c.FlexDirection.Column,
                            backgroundColor: c.BackgroundColor.backgroundAlternative
                        }, s.default.createElement(m.default, {
                            snapId: v.origin,
                            onCancel: I
                        }), s.default.createElement(g.Box, {
                            ref: N,
                            onScroll: M,
                            className: "snap-update__content",
                            style: {
                                overflowY: "auto",
                                flex: !W && "1"
                            },
                            paddingLeft: 4,
                            paddingRight: 4
                        }, !W && !$ && s.default.createElement(g.Text, {
                            paddingTop: 4,
                            paddingBottom: 2,
                            variant: c.TextVariant.headingMd,
                            textAlign: "center"
                        }, b("updateRequest")), W && s.default.createElement(g.Box, {
                            className: "snap-update__content__loader-container",
                            display: c.Display.Flex,
                            flexDirection: c.FlexDirection.Column,
                            alignItems: c.AlignItems.center,
                            justifyContent: c.JustifyContent.center
                        }, s.default.createElement(p.default, null)), $ && s.default.createElement(f.default, {
                            iconName: g.IconName.Warning,
                            error: t.error,
                            title: b("snapUpdateErrorTitle"),
                            description: b("snapUpdateErrorDescription", [s.default.createElement(g.Text, {
                                as: "span",
                                key: "1",
                                fontWeight: c.FontWeight.Medium
                            }, P)])
                        }), !$ && !W && s.default.createElement(s.default.Fragment, null, s.default.createElement(g.Text, {
                            className: "snap-update__content__permission-description",
                            paddingBottom: 4,
                            paddingLeft: 4,
                            paddingRight: 4,
                            textAlign: c.TextAlign.Center
                        }, b("snapUpdateRequest", [s.default.createElement(g.Text, {
                            as: "span",
                            key: "2",
                            variant: c.TextVariant.bodyMd,
                            fontWeight: c.FontWeight.Medium
                        }, P), s.default.createElement(g.Text, {
                            as: "span",
                            key: "3",
                            variant: c.TextVariant.bodyMd,
                            fontWeight: c.FontWeight.Medium
                        }, U)])), s.default.createElement(g.Box, {
                            display: c.Display.Flex,
                            backgroundColor: c.BackgroundColor.backgroundDefault,
                            paddingLeft: 4,
                            paddingRight: 4,
                            paddingTop: 2,
                            paddingBottom: 2,
                            borderRadius: c.BorderRadius.XL
                        }, s.default.createElement(u.default, {
                            approvedPermissions: D,
                            revokedPermissions: A,
                            newPermissions: B,
                            approvedConnections: j,
                            revokedConnections: F,
                            newConnections: L,
                            targetSubjectMetadata: v,
                            showAllPermissions: () => {
                                x(!0)
                            }
                        })), s.default.createElement(g.Box, {
                            className: "snap-update__scroll-button-area"
                        }, !k || C || w ? null : s.default.createElement(g.AvatarIcon, {
                            className: "snap-install__scroll-button",
                            "data-testid": "snap-update-scroll",
                            iconName: g.IconName.Arrow2Down,
                            backgroundColor: c.BackgroundColor.infoDefault,
                            color: c.IconColor.primaryInverse,
                            onClick: S,
                            style: {
                                cursor: "pointer"
                            }
                        })))), s.default.createElement(g.Box, {
                            className: "snap-update__footer",
                            display: c.Display.Flex,
                            alignItems: c.AlignItems.center,
                            flexDirection: c.FlexDirection.Column,
                            backgroundColor: c.BackgroundColor.backgroundAlternative
                        }, s.default.createElement(r.PageContainerFooter, {
                            cancelButtonType: "default",
                            hideCancel: $,
                            disabled: W || !$ && k && !C,
                            onCancel: I,
                            cancelText: b("cancel"),
                            onSubmit: () => {
                                !$ && V ? T(!0) : $ ? I() : R()
                            }
                            ,
                            submitText: b($ ? "ok" : "confirm")
                        })), E && s.default.createElement(l.default, {
                            onCancel: () => T(!1),
                            onSubmit: R,
                            snapName: P,
                            warnings: q
                        }))
                    }
                    E.propTypes = {
                        request: a.default.object.isRequired,
                        requestState: a.default.object.isRequired,
                        approveSnapUpdate: a.default.func.isRequired,
                        rejectSnapUpdate: a.default.func.isRequired,
                        targetSubjectMetadata: a.default.shape({
                            iconUrl: a.default.string,
                            name: a.default.string,
                            origin: a.default.string.isRequired,
                            sourceCode: a.default.string,
                            version: a.default.string
                        }).isRequired
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/permissions-connect/snaps/snap-update/snap-update.js"
}], [6842, {
    "./snaps-connect": 6843
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./snaps-connect")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/permissions-connect/snaps/snaps-connect/index.js"
}], [6843, {
    "../../../../components/app/snaps/snap-connect-cell/snap-connect-cell": 5585,
    "../../../../components/app/snaps/snap-icon": 5592,
    "../../../../components/app/snaps/snap-privacy-warning/snap-privacy-warning": 5612,
    "../../../../components/component-library": 5806,
    "../../../../components/ui/page-container": 6160,
    "../../../../components/ui/pulse-loader/pulse-loader": 6169,
    "../../../../helpers/constants/design-system": 6248,
    "../../../../helpers/utils/snaps": 6292,
    "../../../../helpers/utils/util": 6297,
    "../../../../hooks/useI18nContext": 6334,
    "../../../../hooks/useOriginMetadata": 6345,
    "../../../../selectors": 6985,
    "prop-types": 4528,
    react: 4776,
    "react-redux": 4734
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = b;
                    var a = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = v(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , s = e("react-redux")
                      , o = _(e("prop-types"))
                      , r = e("../../../../hooks/useI18nContext")
                      , i = e("../../../../components/component-library")
                      , l = e("../../../../helpers/constants/design-system")
                      , c = e("../../../../components/ui/page-container")
                      , u = _(e("../../../../components/app/snaps/snap-connect-cell/snap-connect-cell"))
                      , d = e("../../../../helpers/utils/util")
                      , p = _(e("../../../../components/ui/pulse-loader/pulse-loader"))
                      , f = _(e("../../../../components/app/snaps/snap-privacy-warning/snap-privacy-warning"))
                      , m = e("../../../../selectors")
                      , g = e("../../../../hooks/useOriginMetadata")
                      , h = e("../../../../helpers/utils/snaps")
                      , y = e("../../../../components/app/snaps/snap-icon");
                    function _(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function v(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (v = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function b({request: e, approveConnection: t, rejectConnection: n, targetSubjectMetadata: o, snapsInstallPrivacyWarningShown: _, setSnapsInstallPrivacyWarningShownStatus: v}) {
                        const b = (0,
                        r.useI18nContext)()
                          , {origin: E} = o
                          , [T,w] = (0,
                        a.useState)(!1)
                          , x = (0,
                        s.useSelector)((t => {
                            var n;
                            return (0,
                            m.getPermissions)(t, null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.origin)
                        }
                        ))
                          , k = (0,
                        s.useSelector)(m.getPreinstalledSnaps)
                          , C = (0,
                        d.getDedupedSnaps)(e, x)
                          , S = C[0]
                          , {name: N} = (0,
                        s.useSelector)((e => (0,
                        m.getSnapMetadata)(e, S)))
                          , M = Object.keys(k).includes(S)
                          , [O,I] = (0,
                        a.useState)(!M && !_)
                          , R = (0,
                        a.useCallback)(( () => {
                            n(e.metadata.id)
                        }
                        ), [e, n])
                          , P = (0,
                        a.useCallback)(( () => {
                            try {
                                w(!0),
                                t(e)
                            } finally {
                                w(!1)
                            }
                        }
                        ), [e, t])
                          , D = () => {
                            var e;
                            let t = null === (e = (0,
                            g.useOriginMetadata)(E) || {}) || void 0 === e ? void 0 : e.hostname;
                            const {name: n} = (0,
                            s.useSelector)((e => (0,
                            m.getSnapMetadata)(e, (0,
                            h.isSnapId)(E) ? E : `npm:${E}`)));
                            return (0,
                            h.isSnapId)(E) && (t = n),
                            T ? a.default.createElement(i.Box, {
                                display: l.Display.Flex,
                                flexDirection: l.FlexDirection.Column,
                                alignItems: l.AlignItems.center,
                                justifyContent: l.JustifyContent.center,
                                width: l.BlockSize.Full,
                                height: l.BlockSize.Full
                            }, a.default.createElement(p.default, null)) : (null == C ? void 0 : C.length) > 1 ? a.default.createElement(i.Box, {
                                flexDirection: l.FlexDirection.Column,
                                justifyContent: l.JustifyContent.center,
                                alignItems: l.AlignItems.center,
                                paddingTop: 4,
                                width: l.BlockSize.Full,
                                style: {
                                    overflowY: "hidden"
                                },
                                backgroundColor: l.BackgroundColor.backgroundAlternative
                            }, a.default.createElement(i.Text, {
                                paddingBottom: 2,
                                variant: l.TextVariant.headingMd,
                                textAlign: l.TextAlign.Center
                            }, b("connectionRequest")), a.default.createElement(i.Text, {
                                variant: l.TextVariant.bodyMd,
                                textAlign: l.TextAlign.Center
                            }, b("multipleSnapConnectionWarning", [a.default.createElement(i.Text, {
                                as: "span",
                                key: "1",
                                variant: l.TextVariant.bodyMd,
                                fontWeight: l.FontWeight.Medium
                            }, t), a.default.createElement(i.Text, {
                                as: "span",
                                key: "2",
                                variant: l.TextVariant.bodyMd,
                                fontWeight: l.FontWeight.Medium
                            }, null == C ? void 0 : C.length)])), a.default.createElement(i.Box, {
                                flexDirection: l.FlexDirection.Column,
                                display: l.Display.Flex,
                                marginTop: 4,
                                width: l.BlockSize.Full,
                                style: {
                                    overflowY: "auto",
                                    flex: 1
                                }
                            }, C.map((e => a.default.createElement(u.default, {
                                key: `snaps-connect-${e}`,
                                snapId: e,
                                origin: t
                            }))))) : 1 === (null == C ? void 0 : C.length) ? a.default.createElement(i.Box, {
                                display: l.Display.Flex,
                                flexDirection: l.FlexDirection.Column,
                                justifyContent: l.JustifyContent.center,
                                alignItems: l.AlignItems.center,
                                width: l.BlockSize.Full,
                                height: l.BlockSize.Full,
                                paddingLeft: 4,
                                paddingRight: 4,
                                backgroundColor: l.BackgroundColor.backgroundAlternative
                            }, a.default.createElement(i.Box, {
                                paddingBottom: 2
                            }, a.default.createElement(y.SnapIcon, {
                                snapId: C[0],
                                avatarSize: i.IconSize.Xl
                            })), a.default.createElement(i.Text, {
                                paddingBottom: 2,
                                variant: l.TextVariant.headingMd
                            }, b("connectionRequest")), a.default.createElement(i.Text, {
                                variant: l.TextVariant.bodyMd,
                                textAlign: l.TextAlign.Center,
                                padding: [0, 4],
                                overflowWrap: l.OverflowWrap.Anywhere
                            }, b("snapConnectionWarning", [a.default.createElement(i.Text, {
                                as: "span",
                                key: "1",
                                variant: l.TextVariant.bodyMd,
                                fontWeight: l.FontWeight.Medium
                            }, t), a.default.createElement(i.Text, {
                                as: "span",
                                key: "2",
                                variant: l.TextVariant.bodyMd,
                                fontWeight: l.FontWeight.Medium
                            }, N)]))) : null
                        }
                        ;
                        return a.default.createElement(i.Box, {
                            className: "snaps-connect",
                            display: l.Display.Flex,
                            flexDirection: l.FlexDirection.Column,
                            alignItems: l.AlignItems.center,
                            height: l.BlockSize.Full,
                            width: l.BlockSize.Full,
                            backgroundColor: l.BackgroundColor.backgroundAlternative
                        }, O && a.default.createElement(f.default, {
                            onAccepted: () => {
                                I(!1),
                                v(!0)
                            }
                            ,
                            onCanceled: R
                        }), a.default.createElement(i.Box, {
                            display: l.Display.Flex,
                            height: l.BlockSize.Full,
                            width: l.BlockSize.Full,
                            paddingLeft: 4,
                            paddingRight: 4
                        }, a.default.createElement(D, null)), a.default.createElement(c.PageContainerFooter, {
                            cancelButtonType: "default",
                            hideCancel: !1,
                            disabled: T,
                            onCancel: R,
                            cancelText: b("cancel"),
                            onSubmit: P,
                            submitText: b("connect")
                        }))
                    }
                    b.propTypes = {
                        request: o.default.object.isRequired,
                        approveConnection: o.default.func.isRequired,
                        rejectConnection: o.default.func.isRequired,
                        targetSubjectMetadata: o.default.shape({
                            extensionId: o.default.string,
                            iconUrl: o.default.string,
                            name: o.default.string,
                            origin: o.default.string,
                            subjectType: o.default.string
                        }),
                        snapsInstallPrivacyWarningShown: o.default.bool.isRequired,
                        setSnapsInstallPrivacyWarningShownStatus: o.default.func
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/permissions-connect/snaps/snaps-connect/snaps-connect.js"
}], [6844, {
    "../../../helpers/utils/permission": 6288
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.getSnapInstallWarnings = function(e, t, n, s) {
                        return Object.entries(e).reduce(( (e, [o,r]) => {
                            const i = (0,
                            a.getPermissionDescription)({
                                t: t,
                                permissionName: o,
                                permissionValue: r,
                                subjectName: n,
                                getSubjectName: s
                            });
                            return e.concat(i.filter((e => e.weight <= 2)))
                        }
                        ), [])
                    }
                    ;
                    var a = e("../../../helpers/utils/permission")
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/permissions-connect/snaps/util.js"
}], [6845, {
    "./remove-snap-account": 6846,
    "./snap-account-card": 6847
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    });
                    var a = {
                        RemoveSnapAccount: !0
                    };
                    Object.defineProperty(n, "RemoveSnapAccount", {
                        enumerable: !0,
                        get: function() {
                            return o.default
                        }
                    });
                    var s, o = (s = e("./remove-snap-account")) && s.__esModule ? s : {
                        default: s
                    }, r = e("./snap-account-card");
                    Object.keys(r).forEach((function(e) {
                        "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(a, e) || e in n && n[e] === r[e] || Object.defineProperty(n, e, {
                            enumerable: !0,
                            get: function() {
                                return r[e]
                            }
                        }))
                    }
                    ))
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/remove-snap-account/index.ts"
}], [6846, {
    "../../components/app/snaps/snap-authorship-header": 5581,
    "../../components/component-library": 5806,
    "../../helpers/constants/design-system": 6248,
    "../../hooks/useI18nContext": 6334,
    "./snap-account-card": 6847,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a = c(e("react"))
                      , s = e("../../components/component-library")
                      , o = e("../../helpers/constants/design-system")
                      , r = e("../../hooks/useI18nContext")
                      , i = c(e("../../components/app/snaps/snap-authorship-header"))
                      , l = e("./snap-account-card");
                    function c(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    n.default = ({snapId: e, publicAddress: t, onCancel: n}) => {
                        const c = (0,
                        r.useI18nContext)();
                        return a.default.createElement(s.Box, {
                            className: "remove-snap-account-page",
                            height: o.BlockSize.Full,
                            width: o.BlockSize.Full,
                            display: o.Display.Flex,
                            borderStyle: o.BorderStyle.none,
                            flexDirection: o.FlexDirection.Column,
                            alignItems: o.AlignItems.center,
                            marginBottom: 0
                        }, a.default.createElement(i.default, {
                            snapId: e,
                            onCancel: n
                        }), a.default.createElement(s.Box, {
                            display: o.Display.Flex,
                            flexDirection: o.FlexDirection.Column,
                            alignItems: o.AlignItems.center,
                            justifyContent: o.JustifyContent.center,
                            paddingLeft: 4,
                            paddingRight: 4,
                            style: {
                                flexGrow: 1
                            }
                        }, a.default.createElement(s.Box, {
                            display: o.Display.Flex,
                            flexDirection: o.FlexDirection.Row,
                            justifyContent: o.JustifyContent.spaceBetween
                        }, a.default.createElement(s.Box, {
                            display: o.Display.Flex,
                            flexDirection: o.FlexDirection.Column,
                            alignItems: o.AlignItems.center
                        }, a.default.createElement(s.Box, {
                            paddingBottom: 2
                        }, a.default.createElement(s.AvatarIcon, {
                            iconName: s.IconName.UserCircleRemove,
                            color: o.IconColor.errorDefault,
                            backgroundColor: o.BackgroundColor.errorMuted,
                            size: s.AvatarIconSize.Xl
                        })), a.default.createElement(s.Text, {
                            textAlign: o.TextAlign.Center,
                            variant: o.TextVariant.headingLg
                        }, c("removeSnapAccountTitle")), a.default.createElement(l.SnapAccountCard, {
                            address: t,
                            remove: !0
                        }), a.default.createElement(s.Text, {
                            variant: o.TextVariant.bodyMd,
                            textAlign: o.TextAlign.Center,
                            overflowWrap: o.OverflowWrap.Anywhere
                        }, c("removeSnapAccountDescription"))))))
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/remove-snap-account/remove-snap-account.tsx"
}], [6847, {
    "../../components/component-library": 5806,
    "../../components/multichain": 5964,
    "../../components/multichain/account-list-menu/account-list-menu": 5880,
    "../../helpers/constants/design-system": 6248,
    "../../selectors": 6985,
    react: 4776,
    "react-redux": 4734
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.SnapAccountCard = void 0;
                    var a, s = (a = e("react")) && a.__esModule ? a : {
                        default: a
                    }, o = e("react-redux"), r = e("../../selectors"), i = e("../../helpers/constants/design-system"), l = e("../../components/component-library"), c = e("../../components/multichain"), u = e("../../components/multichain/account-list-menu/account-list-menu");
                    n.SnapAccountCard = ({address: e, remove: t}) => {
                        const n = (0,
                        o.useSelector)(r.getMetaMaskAccountsOrdered)
                          , a = (0,
                        o.useSelector)(r.getInternalAccounts)
                          , d = (0,
                        u.mergeAccounts)(n, a).find((t => t.address === e));
                        return s.default.createElement(l.Box, {
                            className: t ? "snap-account-card-remove" : "snap-account-card",
                            borderRadius: i.BorderRadius.LG,
                            marginTop: 4,
                            marginBottom: 4,
                            width: i.BlockSize.Full,
                            style: {
                                boxShadow: "var(--shadow-size-lg) var(--color-shadow-default)"
                            }
                        }, s.default.createElement(c.AccountListItem, {
                            account: d,
                            selected: t || !1
                        }))
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/remove-snap-account/snap-account-card.tsx"
}], [6848, {
    "./routes.container": 6850
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./routes.container")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/routes/index.js"
}], [6849, {
    "../../../app/scripts/lib/util": 135,
    "../../../shared/constants/app": 5248,
    "../../../shared/lib/confirmation.utils": 5281,
    "../../components/app/alerts": 5359,
    "../../components/app/assets/nfts/nft-default-image/toggle-ipfs-modal": 5377,
    "../../components/app/assets/nfts/nft-details/nft-full-image": 5382,
    "../../components/app/basic-configuration-modal": 5400,
    "../../components/app/loading-network-screen": 5470,
    "../../components/app/modals": 5504,
    "../../components/app/modals/keyring-snap-removal-modal": 5505,
    "../../components/app/qr-hardware-popover": 5557,
    "../../components/app/toast-master/toast-master": 5702,
    "../../components/component-library": 5806,
    "../../components/multichain": 5964,
    "../../components/multichain/app-header/multichain-meta-fox-logo": 5903,
    "../../components/multichain/network-list-menu/network-confirmation-popover/network-confirmation-popover": 5975,
    "../../components/multichain/pages/connections": 6025,
    "../../components/multichain/pages/permissions-page/permissions-page": 6035,
    "../../components/multichain/pages/review-permissions-page/review-permissions-page": 6036,
    "../../components/multichain/pages/send": 6056,
    "../../components/ui/alert": 6077,
    "../../components/ui/deprecated-networks/deprecated-networks": 6101,
    "../../components/ui/loading-screen": 6142,
    "../../helpers/constants/routes": 6254,
    "../../helpers/higher-order-components/authenticated": 6264,
    "../../helpers/higher-order-components/initialized": 6266,
    "../../helpers/utils/mm-lazy": 6284,
    "../asset": 6380,
    "../bridge": 6389,
    "../confirm-add-suggested-nft": 6404,
    "../confirm-add-suggested-token": 6406,
    "../confirmations/confirm-transaction": 6664,
    "../confirmations/confirmation": 6674,
    "../create-account/create-account.component": 6767,
    "../home": 6773,
    "../keychains/restore-vault": 6775,
    "../keychains/reveal-seed": 6776,
    "../lock": 6777,
    "../notification-details": 6780,
    "../notifications": 6792,
    "../notifications-settings": 6786,
    "../onboarding-flow/onboarding-app-header/onboarding-app-header": 6815,
    "../onboarding-flow/onboarding-flow": 6817,
    "../permissions-connect": 6831,
    "../settings": 6876,
    "../settings/deprecated-network-modal/DeprecatedNetworkModal": 6867,
    "../snaps/snap-view": 6913,
    "../snaps/snaps-list": 6917,
    "../swaps": 6937,
    "../unlock-page": 6974,
    "./utils": 6851,
    classnames: 3584,
    "prop-types": 4528,
    react: 4776,
    "react-idle-timer": 4625,
    "react-router-dom": 4761
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a = D(e("classnames"))
                      , s = D(e("prop-types"))
                      , o = j(e("react"))
                      , r = e("react-router-dom")
                      , i = D(e("react-idle-timer"))
                      , l = D(e("../../helpers/higher-order-components/authenticated"))
                      , c = D(e("../../helpers/higher-order-components/initialized"))
                      , u = D(e("../permissions-connect"))
                      , d = D(e("../../components/ui/loading-screen"))
                      , p = D(e("../../components/app/loading-network-screen"))
                      , f = e("../../components/app/modals")
                      , m = D(e("../../components/ui/alert"))
                      , g = e("../../components/multichain")
                      , h = D(e("../../components/app/alerts"))
                      , y = D(e("../onboarding-flow/onboarding-app-header/onboarding-app-header"))
                      , _ = e("../../helpers/constants/routes")
                      , v = e("../../../shared/constants/app")
                      , b = e("../../../app/scripts/lib/util")
                      , E = D(e("../../components/app/qr-hardware-popover"))
                      , T = D(e("../../components/ui/deprecated-networks/deprecated-networks"))
                      , w = e("../../components/component-library")
                      , x = e("../../components/app/assets/nfts/nft-default-image/toggle-ipfs-modal")
                      , k = e("../../components/app/basic-configuration-modal")
                      , C = D(e("../../components/app/modals/keyring-snap-removal-modal"))
                      , S = e("../settings/deprecated-network-modal/DeprecatedNetworkModal")
                      , N = e("../../components/multichain/app-header/multichain-meta-fox-logo")
                      , M = D(e("../../components/multichain/network-list-menu/network-confirmation-popover/network-confirmation-popover"))
                      , O = e("../../components/app/toast-master/toast-master")
                      , I = e("../../helpers/utils/mm-lazy")
                      , R = e("../../../shared/lib/confirmation.utils")
                      , P = e("./utils");
                    function D(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function A(e, t, n) {
                        return (t = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e)
                                    return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var a = n.call(e, t || "default");
                                    if ("object" != typeof a)
                                        return a;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(t))in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n,
                        e
                    }
                    function B(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (B = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function j(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = B(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }
                    const F = (0,
                    I.mmLazy)(( () => Promise.resolve().then(( () => j(e("../onboarding-flow/onboarding-flow"))))))
                      , L = (0,
                    I.mmLazy)(( () => Promise.resolve().then(( () => j(e("../lock"))))))
                      , U = (0,
                    I.mmLazy)(( () => Promise.resolve().then(( () => j(e("../unlock-page"))))))
                      , W = (0,
                    I.mmLazy)(( () => Promise.resolve().then(( () => j(e("../keychains/restore-vault"))))))
                      , $ = (0,
                    I.mmLazy)(( () => Promise.resolve().then(( () => j(e("../keychains/reveal-seed"))))))
                      , q = (0,
                    I.mmLazy)(( () => Promise.resolve().then(( () => j(e("../settings"))))))
                      , V = (0,
                    I.mmLazy)(( () => Promise.resolve().then(( () => j(e("../notifications-settings"))))))
                      , z = (0,
                    I.mmLazy)(( () => Promise.resolve().then(( () => j(e("../notification-details"))))))
                      , H = (0,
                    I.mmLazy)(( () => Promise.resolve().then(( () => j(e("../notifications"))))))
                      , G = (0,
                    I.mmLazy)(( () => Promise.resolve().then(( () => j(e("../snaps/snaps-list"))))))
                      , K = (0,
                    I.mmLazy)(( () => Promise.resolve().then(( () => j(e("../snaps/snap-view"))))))
                      , J = (0,
                    I.mmLazy)(( () => Promise.resolve().then(( () => j(e("../confirmations/confirm-transaction"))))))
                      , Q = (0,
                    I.mmLazy)(( () => Promise.resolve().then(( () => j(e("../../components/multichain/pages/send"))))))
                      , Y = (0,
                    I.mmLazy)(( () => Promise.resolve().then(( () => j(e("../swaps"))))))
                      , Z = (0,
                    I.mmLazy)(( () => Promise.resolve().then(( () => j(e("../bridge"))))))
                      , X = (0,
                    I.mmLazy)(( () => Promise.resolve().then(( () => j(e("../confirm-add-suggested-token"))))))
                      , ee = (0,
                    I.mmLazy)(( () => Promise.resolve().then(( () => j(e("../confirm-add-suggested-nft"))))))
                      , te = (0,
                    I.mmLazy)(( () => Promise.resolve().then(( () => j(e("../confirmations/confirmation"))))))
                      , ne = (0,
                    I.mmLazy)(( () => Promise.resolve().then(( () => j(e("../create-account/create-account.component"))))))
                      , ae = (0,
                    I.mmLazy)(( () => Promise.resolve().then(( () => j(e("../../components/app/assets/nfts/nft-details/nft-full-image"))))))
                      , se = (0,
                    I.mmLazy)(( () => Promise.resolve().then(( () => j(e("../asset"))))))
                      , oe = (0,
                    I.mmLazy)(( () => Promise.resolve().then(( () => j(e("../../components/multichain/pages/permissions-page/permissions-page"))))))
                      , re = (0,
                    I.mmLazy)(( () => Promise.resolve().then(( () => j(e("../../components/multichain/pages/connections"))))))
                      , ie = (0,
                    I.mmLazy)(( () => Promise.resolve().then(( () => j(e("../../components/multichain/pages/review-permissions-page/review-permissions-page"))))))
                      , le = (0,
                    I.mmLazy)(( () => Promise.resolve().then(( () => j(e("../home"))))));
                    class ce extends o.Component {
                        componentDidUpdate(e) {
                            const {theme: t, networkToAutomaticallySwitchTo: n, activeTabOrigin: a, totalUnapprovedConfirmationCount: s, isUnlocked: o, useRequestQueue: r, currentExtensionPopupId: i} = this.props;
                            t !== e.theme && (0,
                            P.setTheme)(t),
                            n && 0 === s && (e.totalUnapprovedConfirmationCount > 0 || !1 === e.isUnlocked && o) && this.props.automaticallySwitchNetwork(n, a),
                            r && i !== undefined && global.metamask.id !== undefined && i !== global.metamask.id && window.close()
                        }
                        UNSAFE_componentWillMount() {
                            const {currentCurrency: e, pageChanged: t, setCurrentCurrencyToUSD: n, history: a, showExtensionInFullSizeView: s} = this.props
                              , o = (0,
                            b.getEnvironmentType)();
                            s && o === v.ENVIRONMENT_TYPE_POPUP && global.platform.openExtensionInBrowser(),
                            e || n(),
                            a.listen(( (e, n) => {
                                "PUSH" === n && t(e.pathname)
                            }
                            )),
                            (0,
                            P.setTheme)(this.props.theme)
                        }
                        renderRoutes() {
                            const {autoLockTimeLimit: e, setLastActiveTime: t, forgottenPassword: n} = this.props
                              , a = n ? r.Route : c.default
                              , s = o.default.createElement(o.Suspense, {
                                fallback: null
                            }, o.default.createElement(r.Switch, null, o.default.createElement(r.Route, {
                                path: _.ONBOARDING_ROUTE,
                                component: F
                            }), o.default.createElement(r.Route, {
                                path: _.LOCK_ROUTE,
                                component: L,
                                exact: !0
                            }), o.default.createElement(c.default, {
                                path: _.UNLOCK_ROUTE,
                                component: U,
                                exact: !0
                            }), o.default.createElement(a, {
                                path: _.RESTORE_VAULT_ROUTE,
                                component: W,
                                exact: !0
                            }), o.default.createElement(l.default, {
                                path: _.REVEAL_SEED_ROUTE,
                                component: $,
                                exact: !0
                            }), o.default.createElement(l.default, {
                                path: _.SETTINGS_ROUTE,
                                component: q
                            }), o.default.createElement(l.default, {
                                path: _.NOTIFICATIONS_SETTINGS_ROUTE,
                                component: V
                            }), o.default.createElement(l.default, {
                                path: `${_.NOTIFICATIONS_ROUTE}/:uuid`,
                                component: z
                            }), o.default.createElement(l.default, {
                                path: _.NOTIFICATIONS_ROUTE,
                                component: H
                            }), o.default.createElement(l.default, {
                                exact: !0,
                                path: _.SNAPS_ROUTE,
                                component: G
                            }), o.default.createElement(l.default, {
                                path: _.SNAPS_VIEW_ROUTE,
                                component: K
                            }), o.default.createElement(l.default, {
                                path: `${_.CONFIRM_TRANSACTION_ROUTE}/:id?`,
                                component: J
                            }), o.default.createElement(l.default, {
                                path: _.SEND_ROUTE,
                                component: Q,
                                exact: !0
                            }), o.default.createElement(l.default, {
                                path: _.SWAPS_ROUTE,
                                component: Y
                            }), o.default.createElement(l.default, {
                                path: _.CROSS_CHAIN_SWAP_ROUTE,
                                component: Z
                            }), o.default.createElement(l.default, {
                                path: _.CONFIRM_ADD_SUGGESTED_TOKEN_ROUTE,
                                component: X,
                                exact: !0
                            }), o.default.createElement(l.default, {
                                path: _.CONFIRM_ADD_SUGGESTED_NFT_ROUTE,
                                component: ee,
                                exact: !0
                            }), o.default.createElement(l.default, {
                                path: `${_.CONFIRMATION_V_NEXT_ROUTE}/:id?`,
                                component: te
                            }), o.default.createElement(l.default, {
                                path: _.NEW_ACCOUNT_ROUTE,
                                component: ne
                            }), o.default.createElement(l.default, {
                                path: `${_.CONNECT_ROUTE}/:id`,
                                component: u.default
                            }), o.default.createElement(l.default, {
                                path: `${_.ASSET_ROUTE}/image/:asset/:id`,
                                component: ae
                            }), o.default.createElement(l.default, {
                                path: `${_.ASSET_ROUTE}/:chainId/:asset/:id`,
                                component: se
                            }), o.default.createElement(l.default, {
                                path: `${_.ASSET_ROUTE}/:chainId/:asset/`,
                                component: se
                            }), o.default.createElement(l.default, {
                                path: `${_.ASSET_ROUTE}/:chainId`,
                                component: se
                            }), o.default.createElement(l.default, {
                                path: `${_.CONNECTIONS}/:origin`,
                                component: re
                            }), o.default.createElement(l.default, {
                                path: _.PERMISSIONS,
                                component: oe,
                                exact: !0
                            }), o.default.createElement(l.default, {
                                path: `${_.REVIEW_PERMISSIONS}/:origin`,
                                component: ie,
                                exact: !0
                            }), o.default.createElement(l.default, {
                                path: _.DEFAULT_ROUTE,
                                component: le
                            })));
                            return e > 0 ? o.default.createElement(i.default, {
                                onAction: t,
                                throttle: 1e3
                            }, s) : s
                        }
                        render() {
                            var e;
                            const {isLoading: t, isUnlocked: n, alertMessage: s, textDirection: r, loadingMessage: i, isNetworkLoading: l, browserEnvironmentOs: c, browserEnvironmentBrowser: u, shouldShowSeedPhraseReminder: _, completedOnboarding: I, isAccountMenuOpen: D, toggleAccountMenu: A, isNetworkMenuOpen: B, toggleNetworkMenu: j, accountDetailsAddress: F, isImportTokensModalOpen: L, isDeprecatedNetworkModalOpen: U, location: W, isImportNftsModalOpen: $, hideImportNftsModal: q, isIpfsModalOpen: V, isBasicConfigurationModalOpen: z, hideIpfsModal: H, hideImportTokensModal: G, hideDeprecatedNetworkModal: K, clearSwitchedNetworkDetails: J, clearEditedNetwork: Q, privacyMode: Y, oldestPendingApproval: Z, pendingApprovals: X, transactionsMetadata: ee, isShowKeyringSnapRemovalResultModal: te, hideShowKeyringSnapRemovalResultModal: ne, pendingConfirmations: ae} = this.props
                              , se = i || l ? (0,
                            P.getConnectingLabel)(i, this.props, this.context) : null
                              , oe = (0,
                            b.getEnvironmentType)() !== v.ENVIRONMENT_TYPE_NOTIFICATION && n && !_
                              , re = W.pathname.split("/confirm-transaction/")[1] ?? (null == Z ? void 0 : Z.id)
                              , ie = X.find((e => e.id === re))
                              , le = (0,
                            R.isCorrectSignatureApprovalType)(null == ie ? void 0 : ie.type)
                              , ce = (0,
                            R.isCorrectDeveloperTransactionType)(null === (e = ee[re]) || void 0 === e ? void 0 : e.type);
                            let ue = t && I && !le && !ce;
                            return ue = t && I && !ae.some((e => e.type === v.SNAP_MANAGE_ACCOUNTS_CONFIRMATION_TYPES.showSnapAccountRedirect)) && !le && !ce,
                            o.default.createElement("div", {
                                className: (0,
                                a.default)("app", {
                                    [`os-${c}`]: c,
                                    [`browser-${u}`]: u
                                }),
                                dir: r,
                                onMouseUp: (de = this.props,
                                de.switchedNetworkDetails && !de.switchedNetworkNeverShowMessage ? () => J() : undefined)
                            }, oe ? o.default.createElement(T.default, null) : null, o.default.createElement(E.default, null), o.default.createElement(f.Modal, null), o.default.createElement(m.default, {
                                visible: this.props.alertOpen,
                                msg: s
                            }), !(0,
                            P.hideAppHeader)(this.props) && o.default.createElement(g.AppHeader, {
                                location: W
                            }), (0,
                            P.isConfirmTransactionRoute)(this.pathname) && o.default.createElement(N.MultichainMetaFoxLogo, null), (0,
                            P.showOnboardingHeader)(W) && o.default.createElement(y.default, null), D ? o.default.createElement(g.AccountListMenu, {
                                onClose: () => A(),
                                privacyMode: Y
                            }) : null, B ? o.default.createElement(g.NetworkListMenu, {
                                onClose: () => {
                                    j(),
                                    Q()
                                }
                            }) : null, o.default.createElement(M.default, null), F ? o.default.createElement(g.AccountDetails, {
                                address: F
                            }) : null, $ ? o.default.createElement(g.ImportNftsModal, {
                                onClose: () => q()
                            }) : null, V ? o.default.createElement(x.ToggleIpfsModal, {
                                onClose: () => H()
                            }) : null, z ? o.default.createElement(k.BasicConfigurationModal, null) : null, L ? o.default.createElement(g.ImportTokensModal, {
                                onClose: () => G()
                            }) : null, U ? o.default.createElement(S.DeprecatedNetworkModal, {
                                onClose: () => K()
                            }) : null, te && o.default.createElement(C.default, {
                                isOpen: te,
                                onClose: () => ne()
                            }), o.default.createElement(w.Box, {
                                className: "main-container-wrapper"
                            }, ue ? o.default.createElement(d.default, {
                                loadingMessage: se
                            }) : null, !t && l && I ? o.default.createElement(p.default, null) : null, this.renderRoutes()), n ? o.default.createElement(h.default, {
                                history: this.props.history
                            }) : null, o.default.createElement(O.ToastMaster, null));
                            var de
                        }
                    }
                    n.default = ce,
                    A(ce, "propTypes", {
                        currentCurrency: s.default.string,
                        activeTabOrigin: s.default.string,
                        setCurrentCurrencyToUSD: s.default.func,
                        isLoading: s.default.bool,
                        loadingMessage: s.default.string,
                        alertMessage: s.default.string,
                        textDirection: s.default.string,
                        isNetworkLoading: s.default.bool,
                        alertOpen: s.default.bool,
                        isUnlocked: s.default.bool,
                        setLastActiveTime: s.default.func,
                        history: s.default.object,
                        location: s.default.object,
                        autoLockTimeLimit: s.default.number,
                        privacyMode: s.default.bool,
                        pageChanged: s.default.func.isRequired,
                        browserEnvironmentOs: s.default.string,
                        browserEnvironmentBrowser: s.default.string,
                        theme: s.default.string,
                        showExtensionInFullSizeView: s.default.bool,
                        shouldShowSeedPhraseReminder: s.default.bool,
                        forgottenPassword: s.default.bool,
                        completedOnboarding: s.default.bool,
                        isAccountMenuOpen: s.default.bool,
                        toggleAccountMenu: s.default.func,
                        isNetworkMenuOpen: s.default.bool,
                        toggleNetworkMenu: s.default.func,
                        accountDetailsAddress: s.default.string,
                        isImportNftsModalOpen: s.default.bool.isRequired,
                        hideImportNftsModal: s.default.func.isRequired,
                        isIpfsModalOpen: s.default.bool.isRequired,
                        isBasicConfigurationModalOpen: s.default.bool.isRequired,
                        hideIpfsModal: s.default.func.isRequired,
                        isImportTokensModalOpen: s.default.bool.isRequired,
                        hideImportTokensModal: s.default.func.isRequired,
                        isDeprecatedNetworkModalOpen: s.default.bool.isRequired,
                        hideDeprecatedNetworkModal: s.default.func.isRequired,
                        clearSwitchedNetworkDetails: s.default.func.isRequired,
                        networkToAutomaticallySwitchTo: s.default.object,
                        automaticallySwitchNetwork: s.default.func.isRequired,
                        totalUnapprovedConfirmationCount: s.default.number.isRequired,
                        currentExtensionPopupId: s.default.number,
                        useRequestQueue: s.default.bool,
                        clearEditedNetwork: s.default.func.isRequired,
                        oldestPendingApproval: s.default.object.isRequired,
                        pendingApprovals: s.default.arrayOf(s.default.object).isRequired,
                        transactionsMetadata: s.default.arrayOf(s.default.object).isRequired,
                        isShowKeyringSnapRemovalResultModal: s.default.bool.isRequired,
                        hideShowKeyringSnapRemovalResultModal: s.default.func.isRequired,
                        pendingConfirmations: s.default.array.isRequired
                    }),
                    A(ce, "contextTypes", {
                        t: s.default.func,
                        metricsEvent: s.default.func
                    })
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/routes/routes.component.js"
}], [6850, {
    "../../../shared/constants/preferences": 5269,
    "../../../shared/modules/selectors/networks": 5320,
    "../../components/app/toast-master/selectors": 5701,
    "../../ducks/history/history": 6233,
    "../../ducks/metamask/metamask": 6236,
    "../../ducks/send": 6241,
    "../../ducks/swaps/swaps": 6244,
    "../../selectors": 6985,
    "../../store/actions": 7e3,
    "./routes.component": 6849,
    "react-redux": 4734,
    "react-router-dom": 4761,
    redux: 4794
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a, s = e("react-redux"), o = e("react-router-dom"), r = e("redux"), i = e("../../../shared/modules/selectors/networks"), l = e("../../selectors"), c = e("../../store/actions"), u = e("../../ducks/history/history"), d = e("../../ducks/swaps/swaps"), p = e("../../ducks/send"), f = e("../../ducks/metamask/metamask"), m = e("../../../shared/constants/preferences"), g = e("../../components/app/toast-master/selectors"), h = (a = e("./routes.component")) && a.__esModule ? a : {
                        default: a
                    };
                    n.default = (0,
                    r.compose)(o.withRouter, (0,
                    s.connect)((function(e) {
                        var t, n;
                        const {activeTab: a, appState: s} = e
                          , {alertOpen: o, alertMessage: r, isLoading: c, loadingMessage: u} = s
                          , {autoLockTimeLimit: d=m.DEFAULT_AUTO_LOCK_TIME_LIMIT, privacyMode: h} = (0,
                        l.getPreferences)(e)
                          , {completedOnboarding: y} = e.metamask
                          , _ = (0,
                        l.getSelectedInternalAccount)(e)
                          , v = null == a ? void 0 : a.origin
                          , b = (0,
                        l.getCurrentNetwork)(e)
                          , E = (0,
                        l.getNetworkToAutomaticallySwitchTo)(e)
                          , T = (0,
                        l.getSwitchedNetworkDetails)(e)
                          , w = (0,
                        l.oldestPendingConfirmationSelector)(e)
                          , x = (0,
                        l.getPendingApprovals)(e)
                          , k = (0,
                        l.getUnapprovedTransactions)(e);
                        return {
                            alertOpen: o,
                            alertMessage: r,
                            account: _,
                            activeTabOrigin: v,
                            textDirection: e.metamask.textDirection,
                            isLoading: c,
                            loadingMessage: u,
                            isUnlocked: (0,
                            f.getIsUnlocked)(e),
                            isNetworkLoading: (0,
                            i.isNetworkLoading)(e),
                            currentCurrency: e.metamask.currentCurrency,
                            autoLockTimeLimit: d,
                            privacyMode: h,
                            browserEnvironmentOs: null === (t = e.metamask.browserEnvironment) || void 0 === t ? void 0 : t.os,
                            browserEnvironmentContainter: null === (n = e.metamask.browserEnvironment) || void 0 === n ? void 0 : n.browser,
                            providerId: (0,
                            l.getNetworkIdentifier)(e),
                            providerType: (0,
                            i.getProviderConfig)(e).type,
                            theme: (0,
                            l.getTheme)(e),
                            sendStage: (0,
                            p.getSendStage)(e),
                            isNetworkUsed: (0,
                            l.getIsNetworkUsed)(e),
                            allAccountsOnNetworkAreEmpty: (0,
                            l.getAllAccountsOnNetworkAreEmpty)(e),
                            isTestNet: (0,
                            l.getIsTestnet)(e),
                            showExtensionInFullSizeView: (0,
                            l.getShowExtensionInFullSizeView)(e),
                            currentChainId: (0,
                            i.getCurrentChainId)(e),
                            shouldShowSeedPhraseReminder: (0,
                            l.getShouldShowSeedPhraseReminder)(e),
                            forgottenPassword: e.metamask.forgottenPassword,
                            isCurrentProviderCustom: (0,
                            l.isCurrentProviderCustom)(e),
                            completedOnboarding: y,
                            isAccountMenuOpen: e.metamask.isAccountMenuOpen,
                            isNetworkMenuOpen: e.metamask.isNetworkMenuOpen,
                            isImportTokensModalOpen: e.appState.importTokensModalOpen,
                            isBasicConfigurationModalOpen: e.appState.showBasicFunctionalityModal,
                            isDeprecatedNetworkModalOpen: e.appState.deprecatedNetworkModalOpen,
                            accountDetailsAddress: e.appState.accountDetailsAddress,
                            isImportNftsModalOpen: e.appState.importNftsModal.open,
                            isIpfsModalOpen: e.appState.showIpfsModalOpen,
                            switchedNetworkDetails: T,
                            networkToAutomaticallySwitchTo: E,
                            currentNetwork: b,
                            totalUnapprovedConfirmationCount: (0,
                            l.getNumberOfAllUnapprovedTransactionsAndMessages)(e),
                            switchedNetworkNeverShowMessage: (0,
                            g.selectSwitchedNetworkNeverShowMessage)(e),
                            currentExtensionPopupId: e.metamask.currentExtensionPopupId,
                            useRequestQueue: (0,
                            l.getUseRequestQueue)(e),
                            oldestPendingApproval: w,
                            pendingApprovals: x,
                            transactionsMetadata: k,
                            isShowKeyringSnapRemovalResultModal: e.appState.showKeyringRemovalSnapModal,
                            pendingConfirmations: (0,
                            l.getUnapprovedConfirmations)(e)
                        }
                    }
                    ), (function(e) {
                        return {
                            lockMetaMask: () => e((0,
                            c.lockMetamask)(!1)),
                            setCurrentCurrencyToUSD: () => e((0,
                            c.setCurrentCurrency)("usd")),
                            setLastActiveTime: () => e((0,
                            c.setLastActiveTime)()),
                            pageChanged: t => e((0,
                            u.pageChanged)(t)),
                            prepareToLeaveSwaps: () => e((0,
                            d.prepareToLeaveSwaps)()),
                            toggleAccountMenu: () => e((0,
                            c.toggleAccountMenu)()),
                            toggleNetworkMenu: () => e((0,
                            c.toggleNetworkMenu)()),
                            hideImportNftsModal: () => e((0,
                            c.hideImportNftsModal)()),
                            hideIpfsModal: () => e((0,
                            c.hideIpfsModal)()),
                            hideImportTokensModal: () => e((0,
                            c.hideImportTokensModal)()),
                            hideDeprecatedNetworkModal: () => e((0,
                            c.hideDeprecatedNetworkModal)()),
                            addPermittedAccount: (t, n) => e((0,
                            c.addPermittedAccount)(t, n)),
                            clearSwitchedNetworkDetails: () => e((0,
                            c.clearSwitchedNetworkDetails)()),
                            automaticallySwitchNetwork: (t, n) => e((0,
                            c.automaticallySwitchNetwork)(t, n)),
                            clearEditedNetwork: () => e((0,
                            c.setEditedNetwork)()),
                            hideShowKeyringSnapRemovalResultModal: () => e((0,
                            c.hideKeyringRemovalResultModal)())
                        }
                    }
                    )))(h.default)
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/routes/routes.container.js"
}], [6851, {
    "../../../app/scripts/lib/util": 135,
    "../../../shared/constants/app": 5248,
    "../../../shared/constants/network": 5264,
    "../../../shared/constants/preferences": 5269,
    "../../helpers/constants/routes": 6254,
    "react-router-dom": 4761
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.getConnectingLabel = function(e, t, n) {
                        if (e)
                            return e;
                        const {providerType: a, providerId: s} = t
                          , {t: o} = n;
                        switch (a) {
                        case r.NETWORK_TYPES.MAINNET:
                            return o("connectingToMainnet");
                        case r.NETWORK_TYPES.GOERLI:
                            return o("connectingToGoerli");
                        case r.NETWORK_TYPES.SEPOLIA:
                            return o("connectingToSepolia");
                        case r.NETWORK_TYPES.LINEA_GOERLI:
                            return o("connectingToLineaGoerli");
                        case r.NETWORK_TYPES.LINEA_SEPOLIA:
                            return o("connectingToLineaSepolia");
                        case r.NETWORK_TYPES.LINEA_MAINNET:
                            return o("connectingToLineaMainnet");
                        default:
                            return o("connectingTo", [s])
                        }
                    }
                    ,
                    n.hideAppHeader = function(e) {
                        const {location: t} = e;
                        if (Boolean((0,
                        a.matchPath)(t.pathname, {
                            path: `${l.NOTIFICATIONS_ROUTE}`,
                            exact: !1
                        })))
                            return !0;
                        if (Boolean((0,
                        a.matchPath)(t.pathname, {
                            path: l.ONBOARDING_ROUTE,
                            exact: !1
                        })) && !function(e) {
                            const {location: t} = e;
                            return Boolean((0,
                            a.matchPath)(t.pathname, {
                                path: l.ONBOARDING_UNLOCK_ROUTE,
                                exact: !0
                            }))
                        }(e))
                            return !0;
                        const n = (0,
                        s.getEnvironmentType)();
                        if (n === o.ENVIRONMENT_TYPE_NOTIFICATION)
                            return !0;
                        if (Boolean((0,
                        a.matchPath)(t.pathname, {
                            path: l.PERMISSIONS,
                            exact: !1
                        })))
                            return !0;
                        if (Boolean((0,
                        a.matchPath)(t.pathname, {
                            path: l.CONNECTIONS,
                            exact: !1
                        })))
                            return !0;
                        if (Boolean((0,
                        a.matchPath)(t.pathname, {
                            path: l.REVIEW_PERMISSIONS,
                            exact: !1
                        })))
                            return !0;
                        if (n === o.ENVIRONMENT_TYPE_POPUP && function(e) {
                            const {location: t} = e;
                            return Boolean((0,
                            a.matchPath)(t.pathname, {
                                path: l.CONFIRM_TRANSACTION_ROUTE,
                                exact: !1
                            }))
                        }(e))
                            return !0;
                        const r = Boolean((0,
                        a.matchPath)(t.pathname, {
                            path: l.CONNECT_ROUTE,
                            exact: !1
                        }));
                        if (Boolean((0,
                        a.matchPath)(t.pathname, {
                            path: l.SEND_ROUTE,
                            exact: !1
                        })))
                            return !0;
                        if (Boolean((0,
                        a.matchPath)(t.pathname, {
                            path: l.SNAPS_VIEW_ROUTE,
                            exact: !1
                        })))
                            return !0;
                        if (Boolean((0,
                        a.matchPath)(t.pathname, {
                            path: `${l.CROSS_CHAIN_SWAP_ROUTE}`,
                            exact: !1
                        })))
                            return !0;
                        const i = Boolean((0,
                        a.matchPath)(t.pathname, {
                            path: l.CONFIRMATION_V_NEXT_ROUTE,
                            exact: !1
                        }));
                        return r || i || c(t.pathname)
                    }
                    ,
                    n.isConfirmTransactionRoute = c,
                    n.setTheme = function(e) {
                        document.documentElement.setAttribute("data-theme", function(e) {
                            if (e === i.ThemeType.os) {
                                var t;
                                return null !== (t = window) && void 0 !== t && null !== (t = t.matchMedia("(prefers-color-scheme: dark)")) && void 0 !== t && t.matches ? i.ThemeType.dark : i.ThemeType.light
                            }
                            return e
                        }(e))
                    }
                    ,
                    n.showOnboardingHeader = function(e) {
                        return Boolean((0,
                        a.matchPath)(e.pathname, {
                            path: l.ONBOARDING_ROUTE,
                            exact: !1
                        }))
                    }
                    ;
                    var a = e("react-router-dom")
                      , s = e("../../../app/scripts/lib/util")
                      , o = e("../../../shared/constants/app")
                      , r = e("../../../shared/constants/network")
                      , i = e("../../../shared/constants/preferences")
                      , l = e("../../helpers/constants/routes");
                    function c(e) {
                        return Boolean((0,
                        a.matchPath)(e, {
                            path: l.CONFIRM_TRANSACTION_ROUTE,
                            exact: !1
                        }))
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/routes/utils.js"
}], [6852, {
    "../../../../app/scripts/lib/util": 135,
    "../../../../shared/constants/app": 5248,
    "../../../../shared/constants/metametrics": 5260,
    "../../../../shared/constants/preferences": 5269,
    "../../../../shared/constants/smartTransactions": 5272,
    "../../../components/component-library": 5806,
    "../../../components/ui/button": 6083,
    "../../../components/ui/text-field": 6189,
    "../../../components/ui/toggle-button": 6193,
    "../../../helpers/constants/design-system": 6248,
    "../../../helpers/utils/export-utils": 6276,
    "../../../helpers/utils/settings-search": 6291,
    "prop-types": 4528,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a = _(e("prop-types"))
                      , s = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = y(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , o = e("../../../../shared/constants/metametrics")
                      , r = e("../../../../shared/constants/preferences")
                      , i = e("../../../../shared/constants/smartTransactions")
                      , l = e("../../../components/component-library")
                      , c = _(e("../../../components/ui/button"))
                      , u = _(e("../../../components/ui/text-field"))
                      , d = _(e("../../../components/ui/toggle-button"))
                      , p = e("../../../helpers/constants/design-system")
                      , f = e("../../../helpers/utils/export-utils")
                      , m = e("../../../helpers/utils/settings-search")
                      , g = e("../../../../app/scripts/lib/util")
                      , h = e("../../../../shared/constants/app");
                    function y(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (y = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function _(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function v(e, t, n) {
                        return (t = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e)
                                    return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var a = n.call(e, t || "default");
                                    if ("object" != typeof a)
                                        return a;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(t))in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n,
                        e
                    }
                    class b extends s.PureComponent {
                        constructor(...e) {
                            super(...e),
                            v(this, "state", {
                                autoLockTimeLimit: this.props.autoLockTimeLimit,
                                autoLockTimeLimitBeforeNormalization: this.props.autoLockTimeLimit,
                                lockTimeError: ""
                            }),
                            v(this, "settingsRefs", Array((0,
                            m.getNumberOfSettingRoutesInTab)(this.context.t, this.context.t("advanced"))).fill(undefined).map(( () => s.default.createRef()))),
                            v(this, "backupUserData", (async () => {
                                const {fileName: e, data: t} = await this.props.backupUserData();
                                (0,
                                f.exportAsFile)(e, t, f.ExportableContentType.JSON),
                                this.context.trackEvent({
                                    event: "User Data Exported",
                                    category: "Backup",
                                    properties: {}
                                })
                            }
                            ))
                        }
                        componentDidUpdate() {
                            const {t: e} = this.context;
                            (0,
                            m.handleSettingsRefs)(e, e("advanced"), this.settingsRefs)
                        }
                        componentDidMount() {
                            const {t: e} = this.context
                              , {hideErrorInSettings: t} = this.props;
                            (0,
                            m.handleSettingsRefs)(e, e("advanced"), this.settingsRefs),
                            t()
                        }
                        async getTextFromFile(e) {
                            return new Promise(( (t, n) => {
                                const a = new window.FileReader;
                                a.onload = e => {
                                    const n = e.target.result;
                                    t(n)
                                }
                                ,
                                a.onerror = e => {
                                    n(e)
                                }
                                ,
                                a.readAsText(e)
                            }
                            ))
                        }
                        renderStateLogs() {
                            const {t: e} = this.context
                              , {displayErrorInSettings: t} = this.props;
                            return s.default.createElement(l.Box, {
                                className: "settings-page__content-row",
                                display: p.Display.Flex,
                                flexDirection: p.FlexDirection.Column,
                                ref: this.settingsRefs[0],
                                "data-testid": "advanced-setting-state-logs"
                            }, s.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, s.default.createElement("span", null, e("stateLogs")), s.default.createElement("span", {
                                className: "settings-page__content-description"
                            }, e("stateLogsDescription"))), s.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, s.default.createElement("div", {
                                className: "settings-page__content-item-col"
                            }, s.default.createElement(c.default, {
                                type: "secondary",
                                large: !0,
                                "data-testid": "advanced-setting-state-logs-button",
                                onClick: () => {
                                    window.logStateString((async (n, a) => {
                                        if (n)
                                            t(e("stateLogError"));
                                        else
                                            try {
                                                await (0,
                                                f.exportAsFile)(`${e("stateLogFileName")}.json`, a, f.ExportableContentType.JSON)
                                            } catch (e) {
                                                t(e.message)
                                            }
                                    }
                                    ))
                                }
                            }, e("downloadStateLogs")))))
                        }
                        renderResetAccount() {
                            const {t: e} = this.context
                              , {showResetAccountConfirmationModal: t} = this.props;
                            return s.default.createElement(l.Box, {
                                ref: this.settingsRefs[1],
                                className: "settings-page__content-row",
                                display: p.Display.Flex,
                                flexDirection: p.FlexDirection.Column,
                                "data-testid": "advanced-setting-reset-account"
                            }, s.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, s.default.createElement("span", null, e("clearActivity")), s.default.createElement("span", {
                                className: "settings-page__content-description"
                            }, e("clearActivityDescription"))), s.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, s.default.createElement("div", {
                                className: "settings-page__content-item-col"
                            }, s.default.createElement(c.default, {
                                type: "danger",
                                large: !0,
                                className: "settings-tab__button--red",
                                onClick: e => {
                                    e.preventDefault(),
                                    this.context.trackEvent({
                                        category: o.MetaMetricsEventCategory.Settings,
                                        event: o.MetaMetricsEventName.AccountReset,
                                        properties: {}
                                    }),
                                    t()
                                }
                            }, e("clearActivityButton")))))
                        }
                        renderToggleStxOptIn() {
                            const {t: e} = this.context
                              , {smartTransactionsEnabled: t, setSmartTransactionsEnabled: n} = this.props
                              , a = s.default.createElement(l.ButtonLink, {
                                size: l.ButtonLinkSize.Inherit,
                                textProps: {
                                    variant: p.TextVariant.bodyMd,
                                    alignItems: p.AlignItems.flexStart
                                },
                                as: "a",
                                href: i.SMART_TRANSACTIONS_LEARN_MORE_URL,
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, e("learnMoreUpperCase"));
                            return s.default.createElement(l.Box, {
                                ref: this.settingsRefs[2],
                                className: "settings-page__content-row",
                                "data-testid": "advanced-setting-enable-smart-transactions",
                                display: p.Display.Flex,
                                flexDirection: p.FlexDirection.Row,
                                justifyContent: p.JustifyContent.spaceBetween,
                                gap: 4
                            }, s.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, s.default.createElement("span", null, e("smartTransactions")), s.default.createElement("div", {
                                className: "settings-page__content-description"
                            }, e("stxOptInDescription", [a]))), s.default.createElement("div", {
                                className: "settings-page__content-item-col"
                            }, s.default.createElement(d.default, {
                                value: t,
                                onToggle: e => {
                                    n(!e)
                                }
                                ,
                                offLabel: e("off"),
                                onLabel: e("on"),
                                dataTestId: "settings-page-stx-opt-in-toggle"
                            })))
                        }
                        renderHexDataOptIn() {
                            const {t: e} = this.context
                              , {sendHexData: t, setHexDataFeatureFlag: n} = this.props;
                            return s.default.createElement(l.Box, {
                                ref: this.settingsRefs[3],
                                className: "settings-page__content-row",
                                display: p.Display.Flex,
                                flexDirection: p.FlexDirection.Row,
                                justifyContent: p.JustifyContent.spaceBetween,
                                gap: 4,
                                "data-testid": "advanced-setting-hex-data"
                            }, s.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, s.default.createElement("span", null, e("showHexData")), s.default.createElement("div", {
                                className: "settings-page__content-description"
                            }, e("showHexDataDescription"))), s.default.createElement("div", {
                                className: "settings-page__content-item-col"
                            }, s.default.createElement(d.default, {
                                value: t,
                                onToggle: e => n(!e),
                                offLabel: e("off"),
                                onLabel: e("on"),
                                className: "hex-data-toggle"
                            })))
                        }
                        renderShowConversionInTestnets() {
                            const {t: e} = this.context
                              , {showFiatInTestnets: t, setShowFiatConversionOnTestnetsPreference: n} = this.props;
                            return s.default.createElement(l.Box, {
                                ref: this.settingsRefs[4],
                                className: "settings-page__content-row",
                                display: p.Display.Flex,
                                flexDirection: p.FlexDirection.Row,
                                justifyContent: p.JustifyContent.spaceBetween,
                                gap: 4,
                                "data-testid": "advanced-setting-show-testnet-conversion"
                            }, s.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, s.default.createElement("span", null, e("showFiatConversionInTestnets")), s.default.createElement("div", {
                                className: "settings-page__content-description"
                            }, e("showFiatConversionInTestnetsDescription"))), s.default.createElement("div", {
                                className: "settings-page__content-item-col"
                            }, s.default.createElement(d.default, {
                                value: t,
                                onToggle: e => n(!e),
                                offLabel: e("off"),
                                onLabel: e("on"),
                                className: "show-fiat-on-testnets-toggle"
                            })))
                        }
                        renderToggleTestNetworks() {
                            const {t: e} = this.context
                              , {showTestNetworks: t, setShowTestNetworks: n} = this.props;
                            return s.default.createElement(l.Box, {
                                ref: this.settingsRefs[5],
                                className: "settings-page__content-row",
                                "data-testid": "advanced-setting-show-testnet-conversion",
                                display: p.Display.Flex,
                                flexDirection: p.FlexDirection.Row,
                                justifyContent: p.JustifyContent.spaceBetween,
                                gap: 4
                            }, s.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, s.default.createElement("span", null, e("showTestnetNetworks")), s.default.createElement("div", {
                                className: "settings-page__content-description"
                            }, e("showTestnetNetworksDescription"))), s.default.createElement("div", {
                                className: "settings-page__content-item-col"
                            }, s.default.createElement(d.default, {
                                value: t,
                                onToggle: e => n(!e),
                                offLabel: e("off"),
                                onLabel: e("on")
                            })))
                        }
                        renderToggleExtensionInFullSizeView() {
                            const {t: e} = this.context
                              , {showExtensionInFullSizeView: t, setShowExtensionInFullSizeView: n} = this.props;
                            return s.default.createElement(l.Box, {
                                ref: this.settingsRefs[8],
                                className: "settings-page__content-row",
                                "data-testid": "advanced-setting-show-extension-in-full-size-view",
                                display: p.Display.Flex,
                                flexDirection: p.FlexDirection.Row,
                                justifyContent: p.JustifyContent.spaceBetween,
                                gap: 4
                            }, s.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, s.default.createElement("span", null, e("showExtensionInFullSizeView")), s.default.createElement("div", {
                                className: "settings-page__content-description"
                            }, e("showExtensionInFullSizeViewDescription"))), s.default.createElement("div", {
                                className: "settings-page__content-item-col"
                            }, s.default.createElement(d.default, {
                                value: t,
                                onToggle: e => n(!e),
                                offLabel: e("off"),
                                onLabel: e("on")
                            })))
                        }
                        renderUseNonceOptIn() {
                            const {t: e} = this.context
                              , {useNonceField: t, setUseNonceField: n} = this.props;
                            return s.default.createElement(l.Box, {
                                ref: this.settingsRefs[6],
                                className: "settings-page__content-row",
                                "data-testid": "advanced-setting-custom-nonce",
                                display: p.Display.Flex,
                                flexDirection: p.FlexDirection.Row,
                                justifyContent: p.JustifyContent.spaceBetween,
                                gap: 4
                            }, s.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, s.default.createElement("span", null, e("nonceField")), s.default.createElement("div", {
                                className: "settings-page__content-description"
                            }, e("nonceFieldDesc"))), s.default.createElement("div", {
                                className: "settings-page__content-item-col"
                            }, s.default.createElement(d.default, {
                                className: "custom-nonce-toggle",
                                value: t,
                                onToggle: e => n(!e),
                                offLabel: e("off"),
                                onLabel: e("on")
                            })))
                        }
                        renderAutoLockTimeLimit() {
                            const {t: e} = this.context
                              , {lockTimeError: t} = this.state
                              , {setAutoLockTimeLimit: n} = this.props;
                            return s.default.createElement(l.Box, {
                                ref: this.settingsRefs[7],
                                className: "settings-page__content-row",
                                "data-testid": "advanced-setting-auto-lock",
                                display: p.Display.Flex,
                                flexDirection: p.FlexDirection.Column
                            }, s.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, s.default.createElement("span", null, e("autoLockTimeLimit")), s.default.createElement("div", {
                                className: "settings-page__content-description"
                            }, e("autoLockTimeLimitDescription"))), s.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, s.default.createElement("div", {
                                className: "settings-page__content-item-col"
                            }, s.default.createElement(u.default, {
                                id: "autoTimeout",
                                "data-testid": "auto-lockout-time",
                                placeholder: "0",
                                value: this.state.autoLockTimeLimitBeforeNormalization,
                                onChange: e => this.handleLockChange(e.target.value),
                                error: t,
                                fullWidth: !0,
                                margin: "dense",
                                min: 0
                            }), s.default.createElement(c.default, {
                                type: "primary",
                                "data-testid": "auto-lockout-button",
                                className: "settings-tab__rpc-save-button",
                                disabled: "" !== t,
                                onClick: () => {
                                    n(this.state.autoLockTimeLimit)
                                }
                            }, e("save")))))
                        }
                        renderDismissSeedBackupReminderControl() {
                            const {t: e} = this.context
                              , {dismissSeedBackUpReminder: t, setDismissSeedBackUpReminder: n} = this.props;
                            return s.default.createElement(l.Box, {
                                ref: this.settingsRefs[9],
                                className: "settings-page__content-row",
                                "data-testid": "advanced-setting-dismiss-reminder",
                                display: p.Display.Flex,
                                flexDirection: p.FlexDirection.Row,
                                justifyContent: p.JustifyContent.spaceBetween,
                                gap: 4
                            }, s.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, s.default.createElement("span", null, e("dismissReminderField")), s.default.createElement("div", {
                                className: "settings-page__content-description"
                            }, e("dismissReminderDescriptionField"))), s.default.createElement("div", {
                                className: "settings-page__content-item-col"
                            }, s.default.createElement(d.default, {
                                value: t,
                                onToggle: e => n(!e),
                                offLabel: e("off"),
                                onLabel: e("on")
                            })))
                        }
                        handleLockChange(e) {
                            const {t: t} = this.context;
                            if ("" === e)
                                return void this.setState({
                                    autoLockTimeLimitBeforeNormalization: e,
                                    autoLockTimeLimit: r.DEFAULT_AUTO_LOCK_TIME_LIMIT,
                                    lockTimeError: ""
                                });
                            const n = Number(e);
                            if (Number.isNaN(n) || n < 0 || n > 10080)
                                return void this.setState({
                                    autoLockTimeLimitBeforeNormalization: e,
                                    autoLockTimeLimit: null,
                                    lockTimeError: t("lockTimeInvalid")
                                });
                            const a = n;
                            this.setState({
                                autoLockTimeLimitBeforeNormalization: e,
                                autoLockTimeLimit: a,
                                lockTimeError: ""
                            })
                        }
                        renderUserDataBackup() {
                            const {t: e} = this.context;
                            return s.default.createElement(l.Box, {
                                ref: this.settingsRefs[10],
                                className: "settings-page__content-row",
                                "data-testid": "advanced-setting-data-backup",
                                display: p.Display.Flex,
                                flexDirection: p.FlexDirection.Column
                            }, s.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, s.default.createElement("span", null, e("exportYourData")), s.default.createElement("span", {
                                className: "settings-page__content-description"
                            }, e("exportYourDataDescription"))), s.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, s.default.createElement("div", {
                                className: "settings-page__content-item-col"
                            }, s.default.createElement(c.default, {
                                "data-testid": "export-data-button",
                                type: "secondary",
                                large: !0,
                                onClick: this.backupUserData
                            }, e("exportYourDataButton")))))
                        }
                        renderOverrideContentSecurityPolicyHeader() {
                            const {t: e} = this.context
                              , {overrideContentSecurityPolicyHeader: t, setOverrideContentSecurityPolicyHeader: n} = this.props;
                            return s.default.createElement(l.Box, {
                                ref: this.settingsRefs[11],
                                className: "settings-page__content-row",
                                "data-testid": "advanced-setting-override-content-security-policy-header",
                                display: p.Display.Flex,
                                flexDirection: p.FlexDirection.Row,
                                justifyContent: p.JustifyContent.spaceBetween,
                                gap: 4
                            }, s.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, s.default.createElement("span", null, e("overrideContentSecurityPolicyHeader")), s.default.createElement("div", {
                                className: "settings-page__content-description"
                            }, e("overrideContentSecurityPolicyHeaderDescription"))), s.default.createElement("div", {
                                className: "settings-page__content-item-col"
                            }, s.default.createElement(d.default, {
                                value: t,
                                onToggle: e => n(!e),
                                offLabel: e("off"),
                                onLabel: e("on")
                            })))
                        }
                        render() {
                            const {errorInSettings: e} = this.props;
                            return s.default.createElement("div", {
                                className: "settings-page__body"
                            }, e ? s.default.createElement("div", {
                                className: "settings-tab__error"
                            }, e) : null, this.renderStateLogs(), this.renderResetAccount(), this.renderToggleStxOptIn(), this.renderHexDataOptIn(), this.renderShowConversionInTestnets(), this.renderToggleTestNetworks(), this.renderToggleExtensionInFullSizeView(), this.renderUseNonceOptIn(), this.renderAutoLockTimeLimit(), this.renderUserDataBackup(), this.renderDismissSeedBackupReminderControl(), (0,
                            g.getPlatform)() === h.PLATFORM_FIREFOX ? this.renderOverrideContentSecurityPolicyHeader() : null)
                        }
                    }
                    n.default = b,
                    v(b, "contextTypes", {
                        t: a.default.func,
                        trackEvent: a.default.func
                    }),
                    v(b, "propTypes", {
                        setUseNonceField: a.default.func,
                        useNonceField: a.default.bool,
                        setHexDataFeatureFlag: a.default.func,
                        displayErrorInSettings: a.default.func,
                        hideErrorInSettings: a.default.func,
                        showResetAccountConfirmationModal: a.default.func,
                        errorInSettings: a.default.string,
                        sendHexData: a.default.bool,
                        showFiatInTestnets: a.default.bool,
                        showTestNetworks: a.default.bool,
                        smartTransactionsEnabled: a.default.bool,
                        autoLockTimeLimit: a.default.number,
                        setAutoLockTimeLimit: a.default.func.isRequired,
                        setShowFiatConversionOnTestnetsPreference: a.default.func.isRequired,
                        setShowTestNetworks: a.default.func.isRequired,
                        setSmartTransactionsEnabled: a.default.func.isRequired,
                        setDismissSeedBackUpReminder: a.default.func.isRequired,
                        dismissSeedBackUpReminder: a.default.bool.isRequired,
                        backupUserData: a.default.func.isRequired,
                        showExtensionInFullSizeView: a.default.bool,
                        setShowExtensionInFullSizeView: a.default.func.isRequired,
                        overrideContentSecurityPolicyHeader: a.default.bool,
                        setOverrideContentSecurityPolicyHeader: a.default.func.isRequired
                    })
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/advanced-tab/advanced-tab.component.js"
}], [6853, {
    "../../../../shared/constants/preferences": 5269,
    "../../../../shared/modules/selectors": 5319,
    "../../../ducks/app/app": 6223,
    "../../../selectors": 6985,
    "../../../store/actions": 7e3,
    "./advanced-tab.component": 6852,
    "react-redux": 4734,
    "react-router-dom": 4761,
    redux: 4794
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.mapStateToProps = n.mapDispatchToProps = n.default = void 0;
                    var a, s = e("react-redux"), o = e("react-router-dom"), r = e("redux"), i = e("../../../../shared/constants/preferences"), l = e("../../../selectors"), c = e("../../../store/actions"), u = e("../../../../shared/modules/selectors"), d = e("../../../ducks/app/app"), p = (a = e("./advanced-tab.component")) && a.__esModule ? a : {
                        default: a
                    };
                    const f = e => {
                        const {appState: {errorInSettings: t}, metamask: n} = e
                          , {featureFlags: {sendHexData: a}={}, useNonceField: s, dismissSeedBackUpReminder: o, overrideContentSecurityPolicyHeader: r} = n
                          , {showFiatInTestnets: c, showTestNetworks: d, showExtensionInFullSizeView: p, autoLockTimeLimit: f=i.DEFAULT_AUTO_LOCK_TIME_LIMIT} = (0,
                        l.getPreferences)(e);
                        return {
                            errorInSettings: t,
                            sendHexData: a,
                            showFiatInTestnets: c,
                            showTestNetworks: d,
                            showExtensionInFullSizeView: p,
                            smartTransactionsEnabled: (0,
                            u.getSmartTransactionsPreferenceEnabled)(e),
                            autoLockTimeLimit: f,
                            useNonceField: s,
                            dismissSeedBackUpReminder: o,
                            overrideContentSecurityPolicyHeader: r
                        }
                    }
                    ;
                    n.mapStateToProps = f;
                    const m = e => ({
                        backupUserData: () => (0,
                        c.backupUserData)(),
                        setHexDataFeatureFlag: t => e((0,
                        c.setFeatureFlag)("sendHexData", t)),
                        displayErrorInSettings: t => e((0,
                        d.displayErrorInSettings)(t)),
                        hideErrorInSettings: () => e((0,
                        d.hideErrorInSettings)()),
                        showResetAccountConfirmationModal: () => e((0,
                        c.showModal)({
                            name: "CONFIRM_RESET_ACCOUNT"
                        })),
                        setUseNonceField: t => e((0,
                        c.setUseNonceField)(t)),
                        setShowFiatConversionOnTestnetsPreference: t => e((0,
                        c.setShowFiatConversionOnTestnetsPreference)(t)),
                        setShowTestNetworks: t => e((0,
                        c.setShowTestNetworks)(t)),
                        setShowExtensionInFullSizeView: t => e((0,
                        c.setShowExtensionInFullSizeView)(t)),
                        setSmartTransactionsEnabled: t => e((0,
                        c.setSmartTransactionsPreferenceEnabled)(t)),
                        setAutoLockTimeLimit: t => e((0,
                        c.setAutoLockTimeLimit)(t)),
                        setDismissSeedBackUpReminder: t => e((0,
                        c.setDismissSeedBackUpReminder)(t)),
                        setOverrideContentSecurityPolicyHeader: t => e((0,
                        c.setOverrideContentSecurityPolicyHeader)(t))
                    });
                    n.mapDispatchToProps = m;
                    n.default = (0,
                    r.compose)(o.withRouter, (0,
                    s.connect)(f, m))(p.default)
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/advanced-tab/advanced-tab.container.js"
}], [6854, {
    "./advanced-tab.container": 6853
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./advanced-tab.container")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/advanced-tab/index.js"
}], [6855, {
    "../../../../../shared/modules/hexstring-utils": 5307,
    "../../../../components/app/contact-list/utils": 5441,
    "../../../../components/multichain/pages/send/components": 6044,
    "../../../../components/ui/page-container/page-container-footer": 6161,
    "../../../../components/ui/text-field": 6189,
    "../../../../helpers/constants/routes": 6254,
    "../../../../helpers/utils/util": 6297,
    "../../../confirmations/send/send-content/add-recipient/domain-input": 6751,
    "../../../confirmations/send/send.constants": 6752,
    lodash: 4380,
    "prop-types": 4528,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = h(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , s = g(e("prop-types"))
                      , o = e("lodash")
                      , r = g(e("../../../../components/ui/text-field"))
                      , i = e("../../../../helpers/constants/routes")
                      , l = e("../../../../helpers/utils/util")
                      , c = g(e("../../../confirmations/send/send-content/add-recipient/domain-input"))
                      , u = g(e("../../../../components/ui/page-container/page-container-footer"))
                      , d = e("../../../../../shared/modules/hexstring-utils")
                      , p = e("../../../confirmations/send/send.constants")
                      , f = e("../../../../components/multichain/pages/send/components")
                      , m = e("../../../../components/app/contact-list/utils");
                    function g(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function h(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (h = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function y(e, t, n) {
                        return (t = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e)
                                    return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var a = n.call(e, t || "default");
                                    if ("object" != typeof a)
                                        return a;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(t))in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n,
                        e
                    }
                    class _ extends a.PureComponent {
                        constructor(e) {
                            super(e),
                            y(this, "state", {
                                newName: "",
                                selectedAddress: "",
                                addressInputError: "",
                                nameInputError: "",
                                input: ""
                            }),
                            y(this, "validate", (e => {
                                const t = !(0,
                                d.isBurnAddress)(e) && (0,
                                d.isValidHexAddress)(e, {
                                    mixedCaseUseChecksum: !0
                                });
                                (0,
                                l.isValidDomainName)(e) || t ? this.setState({
                                    addressInputError: null
                                }) : this.setState({
                                    addressInputError: p.INVALID_RECIPIENT_ADDRESS_ERROR
                                })
                            }
                            )),
                            y(this, "onChange", (e => {
                                this.setState({
                                    input: e
                                }),
                                this.dValidate(e)
                            }
                            )),
                            y(this, "validateName", (e => {
                                const {addressBook: t, internalAccounts: n} = this.props;
                                return !(0,
                                m.isDuplicateContact)(t, n, e)
                            }
                            )),
                            y(this, "handleNameChange", (e => {
                                const t = this.validateName(e);
                                this.setState({
                                    nameInputError: t ? null : this.context.t("nameAlreadyInUse")
                                }),
                                this.setState({
                                    newName: e
                                })
                            }
                            )),
                            this.dValidate = (0,
                            o.debounce)(this.validate, 500)
                        }
                        UNSAFE_componentWillReceiveProps(e) {
                            if (e.qrCodeData && "address" === e.qrCodeData.type) {
                                const {domainResolutions: t} = this.props
                                  , n = e.qrCodeData.values.address.toLowerCase();
                                [...t.map(( ({resolvedAddress: e}) => e)), this.state.ethAddress].map((e => e.toLowerCase())).some((e => e === n)) || (this.setState({
                                    input: n
                                }),
                                this.validate(n),
                                this.props.qrCodeDetected(null))
                            }
                        }
                        renderInput() {
                            return a.default.createElement(c.default, {
                                scanQrCode: e => {
                                    this.props.scanQrCode()
                                }
                                ,
                                onChange: this.onChange,
                                onPaste: e => {
                                    this.setState({
                                        input: e
                                    }),
                                    this.validate(e)
                                }
                                ,
                                onReset: () => {
                                    this.props.resetDomainResolution(),
                                    this.setState({
                                        input: "",
                                        selectedAddress: ""
                                    })
                                }
                                ,
                                userInput: this.state.selectedAddress || this.state.input
                            })
                        }
                        render() {
                            const {t: e} = this.context
                              , {history: t, addToAddressBook: n, domainError: s, domainResolutions: o} = this.props
                              , l = s || this.state.addressInputError
                              , c = this.state.selectedAddress || this.state.input
                              , p = !(0,
                            d.isBurnAddress)(c) && (0,
                            d.isValidHexAddress)(c, {
                                mixedCaseUseChecksum: !0
                            });
                            return a.default.createElement("div", {
                                className: "settings-page__content-row address-book__add-contact"
                            }, a.default.createElement("div", {
                                className: "address-book__add-contact__content"
                            }, a.default.createElement("div", {
                                className: "address-book__view-contact__group address-book__add-contact__content__username"
                            }, a.default.createElement("div", {
                                className: "address-book__view-contact__group__label"
                            }, e("userName")), a.default.createElement(r.default, {
                                type: "text",
                                id: "nickname",
                                placeholder: this.context.t("addAlias"),
                                value: this.state.newName,
                                onChange: e => this.handleNameChange(e.target.value),
                                fullWidth: !0,
                                margin: "dense",
                                error: this.state.nameInputError
                            })), a.default.createElement("div", {
                                className: "address-book__view-contact__group"
                            }, a.default.createElement("div", {
                                className: "address-book__view-contact__group__label"
                            }, e("ethereumPublicAddress")), this.renderInput(), a.default.createElement("div", {
                                className: `address-book__view-contact__group__${1 === (null == o ? void 0 : o.length) ? "single-" : ""}resolution-list`
                            }, null == o ? void 0 : o.map((e => {
                                const {resolvedAddress: t, resolvingSnap: n, addressBookEntryName: s, protocol: o, domainName: r} = e;
                                return a.default.createElement(f.DomainInputResolutionCell, {
                                    key: `${t}${n}${o}`,
                                    address: t,
                                    domainName: s ?? r,
                                    onClick: () => {
                                        this.handleNameChange(r),
                                        this.setState({
                                            input: t
                                        }),
                                        this.props.resetDomainResolution()
                                    }
                                    ,
                                    protocol: o,
                                    resolvingSnap: n
                                })
                            }
                            ))), l && a.default.createElement("div", {
                                className: "address-book__add-contact__error"
                            }, e(l)))), a.default.createElement(u.default, {
                                cancelText: this.context.t("cancel"),
                                disabled: Boolean(this.state.addressInputError || this.state.nameInputError || !p || !this.state.newName.trim()),
                                onSubmit: async () => {
                                    await n(c, this.state.newName),
                                    t.push(i.CONTACT_LIST_ROUTE)
                                }
                                ,
                                onCancel: () => {
                                    t.push(i.CONTACT_LIST_ROUTE)
                                }
                                ,
                                submitText: this.context.t("save")
                            }))
                        }
                    }
                    n.default = _,
                    y(_, "contextTypes", {
                        t: s.default.func
                    }),
                    y(_, "propTypes", {
                        addressBook: s.default.array,
                        internalAccounts: s.default.array,
                        addToAddressBook: s.default.func,
                        history: s.default.object,
                        scanQrCode: s.default.func,
                        qrCodeData: s.default.object,
                        qrCodeDetected: s.default.func,
                        domainResolutions: s.default.arrayOf(s.default.object),
                        domainError: s.default.string,
                        resetDomainResolution: s.default.func
                    })
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/contact-list-tab/add-contact/add-contact.component.js"
}], [6856, {
    "../../../../ducks/app/app": 6223,
    "../../../../ducks/domains": 6230,
    "../../../../selectors": 6985,
    "../../../../store/actions": 7e3,
    "./add-contact.component": 6855,
    "react-redux": 4734,
    "react-router-dom": 4761,
    redux: 4794
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a, s = e("redux"), o = e("react-redux"), r = e("react-router-dom"), i = e("../../../../store/actions"), l = e("../../../../ducks/app/app"), c = e("../../../../ducks/domains"), u = e("../../../../selectors"), d = (a = e("./add-contact.component")) && a.__esModule ? a : {
                        default: a
                    };
                    n.default = (0,
                    s.compose)(r.withRouter, (0,
                    o.connect)((e => ({
                        addressBook: (0,
                        u.getAddressBook)(e),
                        internalAccounts: (0,
                        u.getInternalAccounts)(e),
                        qrCodeData: (0,
                        l.getQrCodeData)(e),
                        domainError: (0,
                        c.getDomainError)(e),
                        domainResolutions: (0,
                        c.getDomainResolutions)(e)
                    })), (e => ({
                        addToAddressBook: (t, n) => e((0,
                        i.addToAddressBook)(t, n)),
                        scanQrCode: () => e((0,
                        i.showQrScanner)()),
                        qrCodeDetected: t => e((0,
                        i.qrCodeDetected)(t)),
                        resetDomainResolution: () => e((0,
                        c.resetDomainResolution)())
                    }))))(d.default)
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/contact-list-tab/add-contact/add-contact.container.js"
}], [6857, {
    "./add-contact.container": 6856
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./add-contact.container")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/contact-list-tab/add-contact/index.js"
}], [6858, {
    "../../../components/app/contact-list": 5439,
    "../../../components/component-library": 5806,
    "../../../helpers/constants/design-system": 6248,
    "../../../helpers/constants/routes": 6254,
    "../../../helpers/utils/settings-search": 6291,
    "./add-contact": 6857,
    "./edit-contact": 6862,
    "./view-contact": 6864,
    classnames: 3584,
    "prop-types": 4528,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = g(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , s = m(e("prop-types"))
                      , o = m(e("classnames"))
                      , r = m(e("../../../components/app/contact-list"))
                      , i = e("../../../helpers/constants/routes")
                      , l = e("../../../helpers/utils/settings-search")
                      , c = e("../../../components/component-library")
                      , u = e("../../../helpers/constants/design-system")
                      , d = m(e("./edit-contact"))
                      , p = m(e("./add-contact"))
                      , f = m(e("./view-contact"));
                    function m(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function g(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (g = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function h(e, t, n) {
                        return (t = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e)
                                    return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var a = n.call(e, t || "default");
                                    if ("object" != typeof a)
                                        return a;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(t))in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n,
                        e
                    }
                    class y extends a.Component {
                        constructor(...e) {
                            super(...e),
                            h(this, "settingsRefs", Array((0,
                            l.getNumberOfSettingRoutesInTab)(this.context.t, this.context.t("contacts"))).fill(undefined).map(( () => a.default.createRef())))
                        }
                        componentDidUpdate() {
                            const {t: e} = this.context;
                            (0,
                            l.handleSettingsRefs)(e, e("contacts"), this.settingsRefs)
                        }
                        componentDidMount() {
                            const {t: e} = this.context;
                            (0,
                            l.handleSettingsRefs)(e, e("contacts"), this.settingsRefs)
                        }
                        renderAddresses() {
                            const {addressBook: e, internalAccounts: t, history: n, selectedAddress: s} = this.props
                              , o = e.filter(( ({name: e}) => Boolean(e)))
                              , l = e.filter(( ({name: e}) => !e))
                              , {t: d} = this.context;
                            return e.length ? a.default.createElement("div", null, a.default.createElement(r.default, {
                                addressBook: e,
                                internalAccounts: t,
                                searchForContacts: () => o,
                                searchForRecents: () => l,
                                selectRecipient: e => {
                                    n.push(`${i.CONTACT_VIEW_ROUTE}/${e}`)
                                }
                                ,
                                selectedAddress: s
                            })) : a.default.createElement("div", {
                                className: "address-book__container"
                            }, a.default.createElement("div", null, a.default.createElement(c.Icon, {
                                name: c.IconName.Book,
                                color: u.IconColor.iconMuted,
                                className: "address-book__icon",
                                size: c.IconSize.Xl
                            }), a.default.createElement("h4", {
                                className: "address-book__title"
                            }, d("buildContactList")), a.default.createElement("p", {
                                className: "address-book__sub-title"
                            }, d("addFriendsAndAddresses")), a.default.createElement("button", {
                                className: "address-book__link",
                                onClick: () => {
                                    n.push(i.CONTACT_ADD_ROUTE)
                                }
                            }, "+ ", d("addContact"))))
                        }
                        renderAddButton() {
                            const {history: e, viewingContact: t, editingContact: n} = this.props;
                            return a.default.createElement(c.ButtonPrimary, {
                                className: (0,
                                o.default)("address-book-add-button__button", {
                                    "address-book-add-button__button--hidden": t || n
                                }),
                                onClick: () => {
                                    e.push(i.CONTACT_ADD_ROUTE)
                                }
                                ,
                                margin: 4,
                                size: u.Size.LG
                            }, this.context.t("addContact"))
                        }
                        renderContactContent() {
                            const {viewingContact: e, editingContact: t, addingContact: n} = this.props;
                            let s = null;
                            return e ? s = f.default : t ? s = d.default : n && (s = p.default),
                            s && a.default.createElement("div", {
                                className: "address-book-contact-content"
                            }, a.default.createElement(s, null))
                        }
                        renderAddressBookContent() {
                            const {hideAddressBook: e} = this.props;
                            return e ? null : a.default.createElement("div", {
                                ref: this.settingsRefs[0],
                                className: "address-book"
                            }, this.renderAddresses())
                        }
                        render() {
                            const {addingContact: e, addressBook: t, currentPath: n} = this.props;
                            return a.default.createElement("div", {
                                className: "address-book-wrapper"
                            }, this.renderAddressBookContent(), this.renderContactContent(), n === i.CONTACT_LIST_ROUTE && !e && t.length > 0 ? this.renderAddButton() : null)
                        }
                    }
                    n.default = y,
                    h(y, "contextTypes", {
                        t: s.default.func
                    }),
                    h(y, "propTypes", {
                        addressBook: s.default.array,
                        internalAccounts: s.default.array,
                        history: s.default.object,
                        selectedAddress: s.default.string,
                        viewingContact: s.default.bool,
                        editingContact: s.default.bool,
                        addingContact: s.default.bool,
                        hideAddressBook: s.default.bool,
                        currentPath: s.default.string
                    })
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/contact-list-tab/contact-list-tab.component.js"
}], [6859, {
    "../../../helpers/constants/routes": 6254,
    "../../../selectors": 6985,
    "./contact-list-tab.component": 6858,
    "react-redux": 4734,
    "react-router-dom": 4761,
    redux: 4794
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a, s = e("redux"), o = e("react-redux"), r = e("react-router-dom"), i = e("../../../selectors"), l = e("../../../helpers/constants/routes"), c = (a = e("./contact-list-tab.component")) && a.__esModule ? a : {
                        default: a
                    };
                    n.default = (0,
                    s.compose)(r.withRouter, (0,
                    o.connect)(( (e, t) => {
                        const {location: n} = t
                          , {pathname: a} = n
                          , s = a.match(/[^/]+$/u)[0]
                          , o = s.includes("0x")
                          , r = Boolean(a.match(l.CONTACT_VIEW_ROUTE))
                          , c = Boolean(a.match(l.CONTACT_EDIT_ROUTE))
                          , u = Boolean(a.match(l.CONTACT_ADD_ROUTE))
                          , d = r || c || u;
                        return {
                            viewingContact: r,
                            editingContact: c,
                            addingContact: u,
                            addressBook: (0,
                            i.getAddressBook)(e),
                            internalAccounts: (0,
                            i.getInternalAccounts)(e),
                            selectedAddress: o ? s : "",
                            hideAddressBook: d,
                            currentPath: a
                        }
                    }
                    )))(c.default)
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/contact-list-tab/contact-list-tab.container.js"
}], [6860, {
    "../../../../../shared/modules/hexstring-utils": 5307,
    "../../../../components/app/contact-list/utils": 5441,
    "../../../../components/component-library": 5806,
    "../../../../components/ui/button/button.component": 6082,
    "../../../../components/ui/page-container/page-container-footer": 6161,
    "../../../../components/ui/text-field": 6189,
    "../../../../helpers/constants/design-system": 6248,
    "prop-types": 4528,
    react: 4776,
    "react-router-dom": 4761
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = m(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , s = f(e("prop-types"))
                      , o = e("react-router-dom")
                      , r = f(e("../../../../components/ui/button/button.component"))
                      , i = f(e("../../../../components/ui/text-field"))
                      , l = f(e("../../../../components/ui/page-container/page-container-footer"))
                      , c = e("../../../../../shared/modules/hexstring-utils")
                      , u = e("../../../../components/component-library")
                      , d = e("../../../../helpers/constants/design-system")
                      , p = e("../../../../components/app/contact-list/utils");
                    function f(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function m(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (m = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function g(e, t, n) {
                        return (t = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e)
                                    return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var a = n.call(e, t || "default");
                                    if ("object" != typeof a)
                                        return a;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(t))in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n,
                        e
                    }
                    class h extends a.PureComponent {
                        constructor(...e) {
                            super(...e),
                            g(this, "state", {
                                newName: this.props.name,
                                newAddress: this.props.address,
                                newMemo: this.props.memo,
                                nameError: "",
                                addressError: ""
                            }),
                            g(this, "validateName", (e => {
                                if (e === this.props.name)
                                    return !0;
                                const {addressBook: t, internalAccounts: n} = this.props;
                                return !(0,
                                p.isDuplicateContact)(t, n, e)
                            }
                            )),
                            g(this, "handleNameChange", (e => {
                                const t = e.target.value
                                  , n = this.validateName(t);
                                this.setState({
                                    nameError: n ? null : this.context.t("nameAlreadyInUse")
                                }),
                                this.setState({
                                    newName: t
                                })
                            }
                            ))
                        }
                        render() {
                            const {t: e} = this.context
                              , {address: t, addToAddressBook: n, chainId: s, history: p, listRoute: f, memo: m, name: g, removeFromAddressBook: h, viewRoute: y} = this.props;
                            return t ? a.default.createElement("div", {
                                className: "settings-page__content-row address-book__edit-contact"
                            }, a.default.createElement(u.Box, {
                                className: "settings-page__header address-book__header--edit",
                                paddingLeft: 6,
                                paddingRight: 6,
                                width: d.BlockSize.Full,
                                alignItems: d.AlignItems.center
                            }, a.default.createElement(u.Box, {
                                display: d.Display.Flex,
                                alignItems: d.AlignItems.center,
                                style: {
                                    overflow: "hidden"
                                },
                                paddingRight: 2
                            }, a.default.createElement(u.AvatarAccount, {
                                size: u.AvatarAccountSize.Lg,
                                address: t
                            }), a.default.createElement(u.Text, {
                                className: "address-book__header__name",
                                variant: d.TextVariant.bodyLgMedium,
                                marginInlineStart: 4,
                                style: {
                                    overflow: "hidden"
                                },
                                ellipsis: !0
                            }, g || t)), a.default.createElement(u.Box, {
                                className: "settings-page__address-book-button"
                            }, a.default.createElement(r.default, {
                                type: "link",
                                onClick: async () => {
                                    await h(s, t),
                                    p.push(f)
                                }
                                ,
                                style: {
                                    display: "contents"
                                }
                            }, e("deleteContact")))), a.default.createElement("div", {
                                className: "address-book__edit-contact__content"
                            }, a.default.createElement("div", {
                                className: "address-book__view-contact__group"
                            }, a.default.createElement("div", {
                                className: "address-book__view-contact__group__label"
                            }, e("userName")), a.default.createElement(i.default, {
                                type: "text",
                                id: "nickname",
                                placeholder: this.context.t("addAlias"),
                                value: this.state.newName,
                                onChange: this.handleNameChange,
                                fullWidth: !0,
                                margin: "dense",
                                error: this.state.nameError
                            })), a.default.createElement("div", {
                                className: "address-book__view-contact__group"
                            }, a.default.createElement("div", {
                                className: "address-book__view-contact__group__label"
                            }, e("ethereumPublicAddress")), a.default.createElement(i.default, {
                                type: "text",
                                id: "address",
                                value: this.state.newAddress,
                                error: this.state.addressError,
                                onChange: e => this.setState({
                                    newAddress: e.target.value
                                }),
                                fullWidth: !0,
                                multiline: !0,
                                rows: 4,
                                margin: "dense",
                                classes: {
                                    inputMultiline: "address-book__view-contact__address__text-area",
                                    inputRoot: "address-book__view-contact__address"
                                }
                            })), a.default.createElement("div", {
                                className: "address-book__view-contact__group"
                            }, a.default.createElement("div", {
                                className: "address-book__view-contact__group__label--capitalized"
                            }, e("memo")), a.default.createElement(i.default, {
                                type: "text",
                                id: "memo",
                                placeholder: m,
                                value: this.state.newMemo,
                                onChange: e => this.setState({
                                    newMemo: e.target.value
                                }),
                                fullWidth: !0,
                                margin: "dense",
                                multiline: !0,
                                rows: 3,
                                classes: {
                                    inputMultiline: "address-book__view-contact__text-area",
                                    inputRoot: "address-book__view-contact__text-area-wrapper"
                                }
                            }))), a.default.createElement(l.default, {
                                cancelText: this.context.t("cancel"),
                                onSubmit: async () => {
                                    "" !== this.state.newAddress && this.state.newAddress !== t ? !(0,
                                    c.isBurnAddress)(this.state.newAddress) && (0,
                                    c.isValidHexAddress)(this.state.newAddress, {
                                        mixedCaseUseChecksum: !0
                                    }) ? (await h(s, t),
                                    await n(this.state.newAddress, this.state.newName || g, this.state.newMemo || m),
                                    p.push(f)) : this.setState({
                                        addressError: this.context.t("invalidAddress")
                                    }) : (await n(t, this.state.newName || g, this.state.newMemo || m),
                                    p.push(f))
                                }
                                ,
                                onCancel: () => {
                                    p.push(`${y}/${t}`)
                                }
                                ,
                                submitText: this.context.t("save"),
                                disabled: Boolean(this.state.newName === g && this.state.newAddress === t && this.state.newMemo === m || !this.state.newName.trim() || this.state.nameError)
                            })) : a.default.createElement(o.Redirect, {
                                to: {
                                    pathname: f
                                }
                            })
                        }
                    }
                    n.default = h,
                    g(h, "contextTypes", {
                        t: s.default.func
                    }),
                    g(h, "propTypes", {
                        addressBook: s.default.array,
                        internalAccounts: s.default.array,
                        addToAddressBook: s.default.func,
                        removeFromAddressBook: s.default.func,
                        history: s.default.object,
                        name: s.default.string,
                        address: s.default.string,
                        chainId: s.default.string,
                        memo: s.default.string,
                        viewRoute: s.default.string,
                        listRoute: s.default.string
                    }),
                    g(h, "defaultProps", {
                        name: "",
                        memo: ""
                    })
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/contact-list-tab/edit-contact/edit-contact.component.js"
}], [6861, {
    "../../../../../shared/modules/selectors/networks": 5320,
    "../../../../helpers/constants/routes": 6254,
    "../../../../selectors": 6985,
    "../../../../store/actions": 7e3,
    "./edit-contact.component": 6860,
    "react-redux": 4734,
    "react-router-dom": 4761,
    redux: 4794
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a, s = e("redux"), o = e("react-redux"), r = e("react-router-dom"), i = e("../../../../selectors"), l = e("../../../../../shared/modules/selectors/networks"), c = e("../../../../helpers/constants/routes"), u = e("../../../../store/actions"), d = (a = e("./edit-contact.component")) && a.__esModule ? a : {
                        default: a
                    };
                    n.default = (0,
                    s.compose)(r.withRouter, (0,
                    o.connect)(( (e, t) => {
                        var n;
                        const {location: a} = t
                          , {pathname: s} = a
                          , o = s.match(/[^/]+$/u)[0]
                          , r = o.includes("0x") ? o.toLowerCase() : t.match.params.id
                          , u = (0,
                        i.getAddressBookEntry)(e, r)
                          , {memo: d} = u || {}
                          , p = (null == u ? void 0 : u.name) || (null === (n = (0,
                        i.getInternalAccountByAddress)(e, r)) || void 0 === n ? void 0 : n.metadata.name)
                          , {chainId: f} = (0,
                        l.getProviderConfig)(e);
                        return {
                            address: u ? r : null,
                            addressBook: (0,
                            i.getAddressBook)(e),
                            internalAccounts: (0,
                            i.getInternalAccounts)(e),
                            chainId: f,
                            name: p,
                            memo: d,
                            viewRoute: c.CONTACT_VIEW_ROUTE,
                            listRoute: c.CONTACT_LIST_ROUTE
                        }
                    }
                    ), (e => ({
                        addToAddressBook: (t, n, a) => e((0,
                        u.addToAddressBook)(t, n, a)),
                        removeFromAddressBook: (t, n) => e((0,
                        u.removeFromAddressBook)(t, n))
                    }))))(d.default)
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/contact-list-tab/edit-contact/edit-contact.container.js"
}], [6862, {
    "./edit-contact.container": 6861
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./edit-contact.container")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/contact-list-tab/edit-contact/index.js"
}], [6863, {
    "./contact-list-tab.container": 6859
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./contact-list-tab.container")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/contact-list-tab/index.js"
}], [6864, {
    "./view-contact.container": 6866
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./view-contact.container")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/contact-list-tab/view-contact/index.js"
}], [6865, {
    "../../../../components/component-library": 5806,
    "../../../../components/ui/button/button.component": 6082,
    "../../../../components/ui/tooltip": 6197,
    "../../../../helpers/constants/design-system": 6248,
    "../../../../hooks/useCopyToClipboard": 6323,
    "../../../../hooks/useI18nContext": 6334,
    "prop-types": 4528,
    react: 4776,
    "react-router-dom": 4761
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a = p(e("react"))
                      , s = p(e("prop-types"))
                      , o = e("react-router-dom")
                      , r = p(e("../../../../components/ui/button/button.component"))
                      , i = e("../../../../components/component-library")
                      , l = p(e("../../../../components/ui/tooltip"))
                      , c = e("../../../../hooks/useI18nContext")
                      , u = e("../../../../hooks/useCopyToClipboard")
                      , d = e("../../../../helpers/constants/design-system");
                    function p(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function f({history: e, name: t, address: n, checkSummedAddress: s, memo: p, editRoute: f, listRoute: m}) {
                        const g = (0,
                        c.useI18nContext)()
                          , [h,y] = (0,
                        u.useCopyToClipboard)();
                        return n ? a.default.createElement("div", {
                            className: "settings-page__content-row"
                        }, a.default.createElement("div", {
                            className: "settings-page__content-item"
                        }, a.default.createElement(i.Box, {
                            className: "settings-page__header address-book__header",
                            paddingLeft: 6,
                            paddingRight: 6
                        }, a.default.createElement(i.AvatarAccount, {
                            size: i.AvatarAccountSize.Lg,
                            address: n
                        }), a.default.createElement(i.Text, {
                            className: "address-book__header__name",
                            variant: d.TextVariant.bodyLgMedium,
                            marginInlineStart: 4,
                            style: {
                                overflow: "hidden"
                            },
                            ellipsis: !0
                        }, t || n)), a.default.createElement("div", {
                            className: "address-book__view-contact__group"
                        }, a.default.createElement(r.default, {
                            type: "secondary",
                            onClick: () => {
                                e.push(`${f}/${n}`)
                            }
                        }, g("edit"))), a.default.createElement("div", {
                            className: "address-book__view-contact__group"
                        }, a.default.createElement("div", {
                            className: "address-book__view-contact__group__label"
                        }, g("ethereumPublicAddress")), a.default.createElement("div", {
                            className: "address-book__view-contact__group__value"
                        }, a.default.createElement("div", {
                            className: "address-book__view-contact__group__static-address"
                        }, function(e) {
                            return `0x${e.slice(2).match(/.{1,4}/gu).join("")}`
                        }(s)), a.default.createElement(l.default, {
                            position: "bottom",
                            title: g(h ? "copiedExclamation" : "copyToClipboard")
                        }, a.default.createElement(i.ButtonIcon, {
                            ariaLabel: "copy",
                            className: "address-book__view-contact__group__static-address--copy-icon",
                            onClick: () => {
                                y(s)
                            }
                            ,
                            iconName: h ? i.IconName.CopySuccess : i.IconName.Copy,
                            size: i.ButtonIconSize.Lg,
                            color: d.IconColor.primaryDefault
                        })))), p.length > 0 ? a.default.createElement("div", {
                            className: "address-book__view-contact__group"
                        }, a.default.createElement("div", {
                            className: "address-book__view-contact__group__label--capitalized"
                        }, g("memo")), a.default.createElement("div", {
                            className: "address-book__view-contact__group__static-address"
                        }, p)) : null)) : a.default.createElement(o.Redirect, {
                            to: {
                                pathname: m
                            }
                        })
                    }
                    f.propTypes = {
                        name: s.default.string,
                        address: s.default.string,
                        history: s.default.object,
                        checkSummedAddress: s.default.string,
                        memo: s.default.string,
                        editRoute: s.default.string,
                        listRoute: s.default.string.isRequired
                    };
                    n.default = a.default.memo(f)
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/contact-list-tab/view-contact/view-contact.component.js"
}], [6866, {
    "../../../../../shared/modules/hexstring-utils": 5307,
    "../../../../helpers/constants/routes": 6254,
    "../../../../selectors": 6985,
    "./view-contact.component": 6865,
    "react-redux": 4734,
    "react-router-dom": 4761,
    redux: 4794
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a, s = e("redux"), o = e("react-redux"), r = e("react-router-dom"), i = e("../../../../selectors"), l = e("../../../../helpers/constants/routes"), c = e("../../../../../shared/modules/hexstring-utils"), u = (a = e("./view-contact.component")) && a.__esModule ? a : {
                        default: a
                    };
                    n.default = (0,
                    s.compose)(r.withRouter, (0,
                    o.connect)(( (e, t) => {
                        const {location: n} = t
                          , {pathname: a} = n
                          , s = a.match(/[^/]+$/u)[0]
                          , o = s.includes("0x") ? s.toLowerCase() : t.match.params.id
                          , r = (0,
                        i.getInternalAccountByAddress)(e, o)
                          , u = (0,
                        i.getAddressBookEntry)(e, o)
                          , {memo: d} = u || {};
                        return {
                            name: (null == u ? void 0 : u.name) || r.metadata.name,
                            address: u ? o : null,
                            checkSummedAddress: (0,
                            c.toChecksumHexAddress)(o),
                            memo: d,
                            editRoute: l.CONTACT_EDIT_ROUTE,
                            listRoute: l.CONTACT_LIST_ROUTE
                        }
                    }
                    )))(u.default)
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/contact-list-tab/view-contact/view-contact.container.js"
}], [6867, {
    "../../../components/component-library": 5806,
    "../../../helpers/constants/design-system": 6248,
    "../../../helpers/constants/zendesk-url": 6261,
    "../../../hooks/useI18nContext": 6334,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.DeprecatedNetworkModal = void 0;
                    var a = l(e("react"))
                      , s = e("../../../hooks/useI18nContext")
                      , o = e("../../../components/component-library")
                      , r = e("../../../helpers/constants/design-system")
                      , i = l(e("../../../helpers/constants/zendesk-url"));
                    function l(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    n.DeprecatedNetworkModal = ({onClose: e}) => {
                        const t = (0,
                        s.useI18nContext)();
                        return a.default.createElement(o.Modal, {
                            isOpen: !0,
                            isClosedOnOutsideClick: !1,
                            onClose: e
                        }, a.default.createElement(o.ModalOverlay, null), a.default.createElement(o.ModalContent, null, a.default.createElement(o.ModalHeader, {
                            paddingTop: 2,
                            paddingBottom: 2
                        }, t("deprecatedNetwork")), a.default.createElement(o.ModalBody, null, a.default.createElement(o.Box, {
                            paddingBottom: 2
                        }, a.default.createElement(o.Text, {
                            textAlign: r.TextAlign.Center,
                            variant: r.TextVariant.bodyMd,
                            fontWeight: r.FontWeight.Normal
                        }, t("deprecatedNetworkDescription", [a.default.createElement(o.ButtonLink, {
                            key: "import-token-fake-token-warning",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            href: i.default.NETWORK_DEPRECATED,
                            variant: r.TextVariant.bodySm,
                            fontWeight: r.FontWeight.Normal
                        }, t("learnMoreUpperCase"))])))), a.default.createElement(o.Box, {
                            display: r.Display.Flex,
                            paddingLeft: 4,
                            paddingRight: 4,
                            paddingBottom: 2
                        }, a.default.createElement(o.ButtonPrimary, {
                            block: !0,
                            size: o.ButtonPrimarySize.Lg,
                            onClick: e,
                            textProps: {
                                variant: r.TextVariant.bodyMdMedium
                            },
                            style: {
                                fontSize: "14px"
                            }
                        }, t("deprecatedNetworkButtonMsg")))))
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/deprecated-network-modal/DeprecatedNetworkModal.tsx"
}], [6868, {
    "../../../../app/scripts/lib/util": 135,
    "../../../../shared/constants/app": 5248,
    "../../../components/component-library": 5806,
    "../../../helpers/constants/design-system": 6248,
    "../../../helpers/constants/routes": 6254,
    "../../../helpers/utils/settings-search": 6291,
    "../../../hooks/useI18nContext": 6334,
    "../../../store/actions": 7e3,
    "../../confirmations/selectors/confirm": 6747,
    "./developer-options-toggle-row-component": 6869,
    "./profile-sync": 6871,
    "./sentry-test": 6872,
    react: 4776,
    "react-redux": 4734,
    "react-router-dom": 4761
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = v(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , s = e("react-redux")
                      , o = e("react-router-dom")
                      , r = e("../../../components/component-library")
                      , i = e("../../../helpers/constants/design-system")
                      , l = e("../../../helpers/constants/routes")
                      , c = e("../../../helpers/utils/settings-search")
                      , u = e("../../../hooks/useI18nContext")
                      , d = e("../../../store/actions")
                      , p = e("../../../../app/scripts/lib/util")
                      , f = e("../../../../shared/constants/app")
                      , m = e("../../confirmations/selectors/confirm")
                      , g = _(e("./developer-options-toggle-row-component"))
                      , h = _(e("./sentry-test"))
                      , y = e("./profile-sync");
                    function _(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function v(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (v = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    n.default = () => {
                        const e = (0,
                        u.useI18nContext)()
                          , t = (0,
                        s.useDispatch)()
                          , n = (0,
                        o.useHistory)()
                          , _ = (0,
                        s.useSelector)(m.getIsRedesignedConfirmationsDeveloperEnabled)
                          , [v,b] = (0,
                        a.useState)(!1)
                          , [E,T] = (0,
                        a.useState)(!1)
                          , [w,x] = (0,
                        a.useState)(!0)
                          , [k,C] = (0,
                        a.useState)(_)
                          , S = Array((0,
                        c.getNumberOfSettingRoutesInTab)(e, e("developerOptions"))).fill(undefined).map(( () => a.default.createRef()));
                        (0,
                        a.useEffect)(( () => {
                            (0,
                            c.handleSettingsRefs)(e, e("developerOptions"), S)
                        }
                        ), [e, S]);
                        const N = (0,
                        a.useCallback)(( () => {
                            (0,
                            d.resetViewedNotifications)(),
                            b(!0)
                        }
                        ), [])
                          , M = (0,
                        a.useCallback)((async () => {
                            await t((0,
                            d.resetOnboarding)()),
                            T(!0);
                            const e = `${l.ONBOARDING_SECURE_YOUR_WALLET_ROUTE}/?isFromReminder=true`;
                            if ((0,
                            p.getEnvironmentType)() === f.ENVIRONMENT_TYPE_POPUP) {
                                const {platform: t} = global;
                                null != t && t.openExtensionInBrowser && (null == t || t.openExtensionInBrowser(e, null, !0))
                            } else
                                n.push(e)
                        }
                        ), [t, n]);
                        return a.default.createElement("div", {
                            className: "settings-page__body"
                        }, a.default.createElement(r.Text, {
                            className: "settings-page__security-tab-sub-header__bold"
                        }, "States"), a.default.createElement(r.Text, {
                            className: "settings-page__security-tab-sub-header",
                            color: i.TextColor.textAlternative,
                            paddingTop: 6,
                            ref: S[0]
                        }, "Reset States"), a.default.createElement("div", {
                            className: "settings-page__content-padded"
                        }, a.default.createElement(r.Box, {
                            ref: S[1],
                            className: "settings-page__content-row",
                            display: i.Display.Flex,
                            flexDirection: i.FlexDirection.Row,
                            justifyContent: i.JustifyContent.spaceBetween,
                            gap: 4
                        }, a.default.createElement("div", {
                            className: "settings-page__content-item"
                        }, a.default.createElement("span", null, "Announcements"), a.default.createElement("div", {
                            className: "settings-page__content-description"
                        }, "Resets isShown boolean to false for all announcements. Announcements are the notifications shown in the What's New popup modal.")), a.default.createElement("div", {
                            className: "settings-page__content-item-col"
                        }, a.default.createElement(r.Button, {
                            variant: r.ButtonVariant.Primary,
                            onClick: N
                        }, "Reset")), a.default.createElement("div", {
                            className: "settings-page__content-item-col"
                        }, a.default.createElement(r.Box, {
                            display: i.Display.Flex,
                            alignItems: i.AlignItems.center,
                            paddingLeft: 2,
                            paddingRight: 2,
                            style: {
                                height: "40px",
                                width: "40px"
                            }
                        }, a.default.createElement(r.Icon, {
                            className: "settings-page-developer-options__icon-check",
                            name: r.IconName.Check,
                            color: i.IconColor.successDefault,
                            size: r.IconSize.Lg,
                            hidden: !v
                        })))), a.default.createElement(r.Box, {
                            ref: S[2],
                            className: "settings-page__content-row",
                            display: i.Display.Flex,
                            flexDirection: i.FlexDirection.Row,
                            justifyContent: i.JustifyContent.spaceBetween,
                            gap: 4
                        }, a.default.createElement("div", {
                            className: "settings-page__content-item",
                            style: {
                                flex: "1 1 auto"
                            }
                        }, a.default.createElement("span", null, "Onboarding"), a.default.createElement("div", {
                            className: "settings-page__content-description"
                        }, 'Resets various states related to onboarding and redirects to the "Secure Your Wallet" onboarding page.')), a.default.createElement("div", {
                            className: "settings-page__content-item-col"
                        }, a.default.createElement(r.Button, {
                            variant: r.ButtonVariant.Primary,
                            onClick: M
                        }, "Reset")), a.default.createElement("div", {
                            className: "settings-page__content-item-col"
                        }, a.default.createElement(r.Box, {
                            display: i.Display.Flex,
                            alignItems: i.AlignItems.center,
                            paddingLeft: 2,
                            paddingRight: 2,
                            style: {
                                height: "40px",
                                width: "40px"
                            }
                        }, a.default.createElement(r.Icon, {
                            className: "settings-page-developer-options__icon-check",
                            name: r.IconName.Check,
                            color: i.IconColor.successDefault,
                            size: r.IconSize.Lg,
                            hidden: !E
                        })))), a.default.createElement(g.default, {
                            title: "Service Worker Keep Alive",
                            description: "Results in a timestamp being continuously saved to session.storage",
                            isEnabled: w,
                            onToggle: e => (async e => {
                                await t((0,
                                d.setServiceWorkerKeepAlivePreference)(e)),
                                x(e)
                            }
                            )(!e),
                            dataTestId: "developer-options-service-worker-alive-toggle",
                            settingsRef: S[3]
                        }), a.default.createElement(g.default, {
                            title: "Confirmations Redesign",
                            description: "Enables or disables the confirmations redesign feature currently in development",
                            isEnabled: k,
                            onToggle: e => (async e => {
                                await t((0,
                                d.setRedesignedConfirmationsDeveloperEnabled)(e)),
                                await C(e)
                            }
                            )(!e),
                            dataTestId: "developer-options-enable-confirmations-redesign-toggle",
                            settingsRef: S[5]
                        })), a.default.createElement(y.ProfileSyncDevSettings, null), a.default.createElement(h.default, null))
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/developer-options-tab/developer-options-tab.tsx"
}], [6869, {
    "../../../components/component-library": 5806,
    "../../../components/ui/toggle-button": 6193,
    "../../../helpers/constants/design-system": 6248,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a = i(e("react"))
                      , s = e("../../../components/component-library")
                      , o = e("../../../helpers/constants/design-system")
                      , r = i(e("../../../components/ui/toggle-button"));
                    function i(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    n.default = ({title: e, description: t, isEnabled: n, onToggle: i, dataTestId: l, settingsRef: c}) => a.default.createElement(s.Box, {
                        ref: c,
                        className: "settings-page__content-row",
                        display: o.Display.Flex,
                        flexDirection: o.FlexDirection.Row,
                        justifyContent: o.JustifyContent.spaceBetween,
                        gap: 4
                    }, a.default.createElement("div", {
                        className: "settings-page__content-item"
                    }, a.default.createElement("div", {
                        className: "settings-page__content-description"
                    }, a.default.createElement("span", null, e), a.default.createElement("div", {
                        className: "settings-page__content-description"
                    }, t))), a.default.createElement("div", {
                        className: "settings-page__content-item-col"
                    }, a.default.createElement(r.default, {
                        value: n,
                        onToggle: i,
                        offLabel: "Off",
                        onLabel: "On",
                        dataTestId: l
                    })))
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/developer-options-tab/developer-options-toggle-row-component.tsx"
}], [6870, {
    "./developer-options-tab": 6868
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./developer-options-tab")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/developer-options-tab/index.tsx"
}], [6871, {
    "../../../components/component-library": 5806,
    "../../../helpers/constants/design-system": 6248,
    "../../../hooks/metamask-notifications/useProfileSyncing": 6308,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.ProfileSyncDevSettings = void 0;
                    var a = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = i(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , s = e("../../../components/component-library")
                      , o = e("../../../helpers/constants/design-system")
                      , r = e("../../../hooks/metamask-notifications/useProfileSyncing");
                    function i(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (i = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    const l = () => {
                        const [e,t] = (0,
                        a.useState)(!1)
                          , {dispatchDeleteAccountData: n} = (0,
                        r.useDeleteAccountSyncingDataFromUserStorage)()
                          , i = (0,
                        a.useCallback)((async () => {
                            await n(),
                            t(!0)
                        }
                        ), [n, t]);
                        return a.default.createElement("div", {
                            className: "settings-page__content-padded"
                        }, a.default.createElement(s.Box, {
                            className: "settings-page__content-row",
                            display: o.Display.Flex,
                            flexDirection: o.FlexDirection.Row,
                            justifyContent: o.JustifyContent.spaceBetween,
                            gap: 4
                        }, a.default.createElement("div", {
                            className: "settings-page__content-item"
                        }, a.default.createElement("span", null, "Account syncing"), a.default.createElement("div", {
                            className: "settings-page__content-description"
                        }, "Deletes all user storage entries for the current SRP. This can help if you tested Account Syncing early on and have corrupted data. This will not remove internal accounts already created and renamed. If you want to start from scratch with only the first account and restart syncing from this point on, you will need to reinstall the extension after this action.")), a.default.createElement("div", {
                            className: "settings-page__content-item-col"
                        }, a.default.createElement(s.Button, {
                            variant: s.ButtonVariant.Primary,
                            onClick: i
                        }, "Reset")), a.default.createElement("div", {
                            className: "settings-page__content-item-col"
                        }, a.default.createElement(s.Box, {
                            display: o.Display.Flex,
                            alignItems: o.AlignItems.center,
                            paddingLeft: 2,
                            paddingRight: 2,
                            style: {
                                height: "40px",
                                width: "40px"
                            }
                        }, a.default.createElement(s.Icon, {
                            className: "settings-page-developer-options__icon-check",
                            name: s.IconName.Check,
                            color: o.IconColor.successDefault,
                            size: s.IconSize.Lg,
                            hidden: !e
                        })))))
                    }
                    ;
                    n.ProfileSyncDevSettings = () => a.default.createElement(a.default.Fragment, null, a.default.createElement(s.Text, {
                        className: "settings-page__security-tab-sub-header__bold"
                    }, "Profile Sync"), a.default.createElement(l, null))
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/developer-options-tab/profile-sync.tsx"
}], [6872, {
    "../../../../shared/lib/trace": 5291,
    "../../../../shared/modules/i18n": 5308,
    "../../../components/component-library": 5806,
    "../../../components/component-library/button/button.types": 5786,
    "../../../ducks/locale/locale": 6235,
    "../../../helpers/constants/design-system": 6248,
    "../../../store/actions": 7e3,
    react: 4776,
    "react-redux": 4734
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = p(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , s = e("react-redux")
                      , o = e("../../../components/component-library")
                      , r = e("../../../helpers/constants/design-system")
                      , i = e("../../../../shared/lib/trace")
                      , l = e("../../../components/component-library/button/button.types")
                      , c = e("../../../store/actions")
                      , u = e("../../../../shared/modules/i18n")
                      , d = e("../../../ducks/locale/locale");
                    function p(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (p = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function f(e) {
                        return new Promise((t => setTimeout(t, e)))
                    }
                    function m() {
                        const e = (0,
                        a.useCallback)((async () => {
                            var e, t;
                            await (null === (e = (t = window.stateHooks).throwTestError) || void 0 === e ? void 0 : e.call(t, "Developer Options"))
                        }
                        ), []);
                        return a.default.createElement(_, {
                            name: "Generate UI Error",
                            description: a.default.createElement("span", null, "Generate an unhandled ", a.default.createElement("b", null, "TestError"), " in this window."),
                            onClick: e,
                            expectError: !0
                        })
                    }
                    function g() {
                        const e = (0,
                        a.useCallback)((async () => {
                            var e, t;
                            await (null === (e = (t = window.stateHooks).throwTestBackgroundError) || void 0 === e ? void 0 : e.call(t, "Developer Options"))
                        }
                        ), []);
                        return a.default.createElement(_, {
                            name: "Generate Background Error",
                            description: a.default.createElement("span", null, "Generate an unhandled ", a.default.createElement("b", null, "TestError"), " in the service worker."),
                            onClick: e,
                            expectError: !0
                        })
                    }
                    function h() {
                        const e = (0,
                        a.useCallback)((async () => {
                            await (0,
                            i.trace)({
                                name: i.TraceName.DeveloperTest,
                                data: {
                                    "test.data.number": 123
                                },
                                tags: {
                                    "test.tag.number": 123
                                }
                            }, (async e => {
                                await (0,
                                i.trace)({
                                    name: i.TraceName.NestedTest1,
                                    data: {
                                        "test.data.boolean": !0
                                    },
                                    tags: {
                                        "test.tag.boolean": !0
                                    },
                                    parentContext: e
                                }, ( () => f(1e3))),
                                await (0,
                                i.trace)({
                                    name: i.TraceName.NestedTest2,
                                    data: {
                                        "test.data.string": "test"
                                    },
                                    tags: {
                                        "test.tag.string": "test"
                                    },
                                    parentContext: e
                                }, ( () => f(500)))
                            }
                            ))
                        }
                        ), []);
                        return a.default.createElement(_, {
                            name: "Generate Trace",
                            description: a.default.createElement("span", null, "Generate a ", a.default.createElement("b", null, "Developer Test"), " Sentry trace."),
                            onClick: e
                        })
                    }
                    function y({currentLocale: e}) {
                        const t = (0,
                        s.useDispatch)();
                        return a.default.createElement(_, {
                            name: "Generate A Page Crash",
                            description: a.default.createElement("span", null, 'Trigger the crash on extension to send user feedback to sentry. You can click "Try again" to reload extension'),
                            onClick: async () => {
                                const n = await (0,
                                u.fetchLocale)(e);
                                await t((0,
                                c.setCurrentLocale)(e, {
                                    ...n,
                                    developerOptions: undefined
                                })),
                                await (0,
                                c.forceUpdateMetamaskState)(t)
                            }
                            ,
                            expectError: !0,
                            testId: "developer-options-generate-page-crash-button"
                        })
                    }
                    function _({name: e, description: t, onClick: n, expectError: s, testId: i}) {
                        const [c,u] = (0,
                        a.useState)(!1)
                          , d = (0,
                        a.useCallback)((async () => {
                            let e = !1;
                            try {
                                await n()
                            } catch (t) {
                                throw e = !0,
                                t
                            } finally {
                                !s && e || u(!0)
                            }
                        }
                        ), [n]);
                        return a.default.createElement(o.Box, {
                            className: "settings-page__content-row",
                            display: r.Display.Flex,
                            flexDirection: r.FlexDirection.Row,
                            justifyContent: r.JustifyContent.spaceBetween,
                            gap: 4
                        }, a.default.createElement("div", {
                            className: "settings-page__content-item"
                        }, a.default.createElement("div", {
                            className: "settings-page__content-description"
                        }, t)), a.default.createElement("div", {
                            className: "settings-page__content-item-col"
                        }, a.default.createElement(o.Button, {
                            variant: o.ButtonVariant.Primary,
                            onClick: d,
                            size: l.ButtonSize.Lg,
                            "data-testid": i
                        }, e)), a.default.createElement("div", {
                            className: "settings-page__content-item-col"
                        }, a.default.createElement(o.Box, {
                            display: r.Display.Flex,
                            alignItems: r.AlignItems.center,
                            paddingLeft: 2,
                            paddingRight: 2,
                            style: {
                                height: "40px",
                                width: "40px"
                            }
                        }, a.default.createElement(o.Icon, {
                            className: "settings-page-developer-options__icon-check",
                            name: o.IconName.Check,
                            color: r.IconColor.successDefault,
                            size: o.IconSize.Lg,
                            hidden: !c
                        }))))
                    }
                    n.default = () => {
                        const e = (0,
                        s.useSelector)(d.getCurrentLocale) || u.FALLBACK_LOCALE;
                        return a.default.createElement(a.default.Fragment, null, a.default.createElement(o.Text, {
                            className: "settings-page__security-tab-sub-header__bold"
                        }, "Sentry"), a.default.createElement("div", {
                            className: "settings-page__content-padded"
                        }, a.default.createElement(m, null), a.default.createElement(g, null), a.default.createElement(h, null), a.default.createElement(y, {
                            currentLocale: e
                        })))
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/developer-options-tab/sentry-test.tsx"
}], [6873, {
    "../../../../shared/constants/metametrics": 5260,
    "../../../components/component-library": 5806,
    "../../../components/ui/toggle-button": 6193,
    "../../../helpers/constants/design-system": 6248,
    "../../../helpers/utils/settings-search": 6291,
    "prop-types": 4528,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = d(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , s = u(e("prop-types"))
                      , o = u(e("../../../components/ui/toggle-button"))
                      , r = e("../../../helpers/utils/settings-search")
                      , i = e("../../../../shared/constants/metametrics")
                      , l = e("../../../components/component-library")
                      , c = e("../../../helpers/constants/design-system");
                    function u(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function d(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (d = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function p(e, t, n) {
                        return (t = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e)
                                    return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var a = n.call(e, t || "default");
                                    if ("object" != typeof a)
                                        return a;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(t))in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n,
                        e
                    }
                    class f extends a.PureComponent {
                        constructor(...e) {
                            super(...e),
                            p(this, "settingsRefs", Array((0,
                            r.getNumberOfSettingRoutesInTab)(this.context.t, this.context.t("experimental"))).fill(undefined).map(( () => a.default.createRef())))
                        }
                        componentDidUpdate() {
                            const {t: e} = this.context;
                            (0,
                            r.handleSettingsRefs)(e, e("experimental"), this.settingsRefs)
                        }
                        componentDidMount() {
                            const {t: e} = this.context;
                            (0,
                            r.handleSettingsRefs)(e, e("experimental"), this.settingsRefs)
                        }
                        renderToggleSection({title: e, description: t, toggleValue: n, toggleCallback: s, toggleDataTestId: r, toggleContainerDataTestId: i, toggleOffLabel: c, toggleOnLabel: u}) {
                            return a.default.createElement(l.Box, {
                                ref: this.settingsRefs[0],
                                className: "settings-page__content-row settings-page__content-row-experimental"
                            }, a.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, a.default.createElement("span", null, e), a.default.createElement("div", {
                                className: "settings-page__content-description"
                            }, t)), a.default.createElement("div", {
                                className: "settings-page__content-item-col",
                                "data-testid": i
                            }, a.default.createElement(o.default, {
                                value: n,
                                onToggle: s,
                                offLabel: c,
                                onLabel: u,
                                dataTestId: r
                            })))
                        }
                        renderTogglePetnames() {
                            const {t: e} = this.context
                              , {petnamesEnabled: t, setPetnamesEnabled: n} = this.props;
                            return this.renderToggleSection({
                                title: e("petnamesEnabledToggle"),
                                description: e("petnamesEnabledToggleDescription"),
                                toggleValue: t,
                                toggleCallback: e => n(!e),
                                toggleDataTestId: "toggle-petnames",
                                toggleOffLabel: e("off"),
                                toggleOnLabel: e("on")
                            })
                        }
                        renderToggleRedesignedSignatures() {
                            const {t: e} = this.context
                              , {redesignedConfirmationsEnabled: t, setRedesignedConfirmationsEnabled: n} = this.props;
                            return this.renderToggleSection({
                                title: e("redesignedConfirmationsEnabledToggle"),
                                description: e("redesignedConfirmationsToggleDescription"),
                                toggleValue: t,
                                toggleCallback: e => n(!e),
                                toggleContainerDataTestId: "toggle-redesigned-confirmations-container",
                                toggleDataTestId: "toggle-redesigned-confirmations",
                                toggleOffLabel: e("off"),
                                toggleOnLabel: e("on")
                            })
                        }
                        renderToggleRedesignedTransactions() {
                            const {t: e} = this.context
                              , {redesignedTransactionsEnabled: t, setRedesignedTransactionsEnabled: n} = this.props;
                            return this.renderToggleSection({
                                title: e("redesignedTransactionsEnabledToggle"),
                                description: e("redesignedTransactionsToggleDescription"),
                                toggleValue: t,
                                toggleCallback: e => n(!e),
                                toggleContainerDataTestId: "toggle-redesigned-transactions-container",
                                toggleDataTestId: "toggle-redesigned-transactions",
                                toggleOffLabel: e("off"),
                                toggleOnLabel: e("on")
                            })
                        }
                        renderKeyringSnapsToggle() {
                            const {t: e, trackEvent: t} = this.context
                              , {addSnapAccountEnabled: n, setAddSnapAccountEnabled: s} = this.props;
                            return a.default.createElement(a.default.Fragment, null, a.default.createElement(l.Text, {
                                variant: c.TextVariant.headingSm,
                                as: "h4",
                                color: c.TextColor.textAlternative,
                                marginBottom: 2,
                                fontWeight: c.FontWeight.Bold
                            }, e("snaps")), a.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, a.default.createElement("span", null, e("snapAccounts")), a.default.createElement("div", {
                                className: "settings-page__content-description"
                            }, a.default.createElement(l.Text, {
                                variant: c.TextVariant.bodySm,
                                as: "h6",
                                color: c.TextColor.textAlternative
                            }, e("snapAccountsDescription")))), this.renderToggleSection({
                                title: e("addSnapAccountToggle"),
                                description: e("addSnapAccountsDescription"),
                                toggleValue: n,
                                toggleCallback: e => {
                                    t({
                                        event: i.MetaMetricsEventName.AddSnapAccountEnabled,
                                        category: i.MetaMetricsEventCategory.Settings,
                                        properties: {
                                            enabled: !e
                                        }
                                    }),
                                    s(!e)
                                }
                                ,
                                toggleContainerDataTestId: "add-account-snap-toggle-div",
                                toggleDataTestId: "add-account-snap-toggle-button",
                                toggleOffLabel: e("off"),
                                toggleOnLabel: e("on")
                            }))
                        }
                        renderToggleRequestQueue() {
                            const {t: e} = this.context
                              , {useRequestQueue: t, setUseRequestQueue: n} = this.props;
                            return this.renderToggleSection({
                                title: e("toggleRequestQueueField"),
                                description: e("toggleRequestQueueDescription"),
                                toggleValue: t || !1,
                                toggleCallback: e => n(!e),
                                toggleContainerDataTestId: "experimental-setting-toggle-request-queue",
                                toggleDataTestId: "experimental-setting-toggle-request-queue",
                                toggleOffLabel: e("toggleRequestQueueOff"),
                                toggleOnLabel: e("toggleRequestQueueOn")
                            })
                        }
                        renderNotificationsToggle() {
                            const {t: e} = this.context
                              , {featureNotificationsEnabled: t, setFeatureNotificationsEnabled: n} = this.props;
                            return this.renderToggleSection({
                                title: e("notificationsFeatureToggle"),
                                description: e("notificationsFeatureToggleDescription"),
                                toggleValue: t,
                                toggleCallback: e => n(!e),
                                toggleDataTestId: "toggle-notifications",
                                toggleOffLabel: e("off"),
                                toggleOnLabel: e("on")
                            })
                        }
                        render() {
                            return a.default.createElement("div", {
                                className: "settings-page__body"
                            }, this.renderTogglePetnames(), this.renderToggleRedesignedSignatures(), this.renderToggleRedesignedTransactions(), null, this.renderToggleRequestQueue(), this.renderKeyringSnapsToggle())
                        }
                    }
                    n.default = f,
                    p(f, "contextTypes", {
                        t: s.default.func,
                        trackEvent: s.default.func
                    })
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/experimental-tab/experimental-tab.component.tsx"
}], [6874, {
    "../../../selectors": 6985,
    "../../../store/actions": 7e3,
    "./experimental-tab.component": 6873,
    "react-redux": 4734,
    "react-router-dom": 4761,
    redux: 4794
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a, s = e("redux"), o = e("react-redux"), r = e("react-router-dom"), i = e("../../../store/actions"), l = e("../../../selectors"), c = (a = e("./experimental-tab.component")) && a.__esModule ? a : {
                        default: a
                    };
                    n.default = (0,
                    s.compose)(r.withRouter, (0,
                    o.connect)((e => {
                        const t = (0,
                        l.getPetnamesEnabled)(e)
                          , n = (0,
                        l.getFeatureNotificationsEnabled)(e);
                        return {
                            watchAccountEnabled: (0,
                            l.getIsWatchEthereumAccountEnabled)(e),
                            bitcoinSupportEnabled: (0,
                            l.getIsBitcoinSupportEnabled)(e),
                            bitcoinTestnetSupportEnabled: (0,
                            l.getIsBitcoinTestnetSupportEnabled)(e),
                            addSnapAccountEnabled: (0,
                            l.getIsAddSnapAccountEnabled)(e),
                            useRequestQueue: (0,
                            l.getUseRequestQueue)(e),
                            petnamesEnabled: t,
                            featureNotificationsEnabled: n,
                            redesignedConfirmationsEnabled: (0,
                            l.getRedesignedConfirmationsEnabled)(e),
                            redesignedTransactionsEnabled: (0,
                            l.getRedesignedTransactionsEnabled)(e)
                        }
                    }
                    ), (e => ({
                        setWatchAccountEnabled: e => (0,
                        i.setWatchEthereumAccountEnabled)(e),
                        setBitcoinSupportEnabled: e => (0,
                        i.setBitcoinSupportEnabled)(e),
                        setBitcoinTestnetSupportEnabled: e => (0,
                        i.setBitcoinTestnetSupportEnabled)(e),
                        setAddSnapAccountEnabled: e => (0,
                        i.setAddSnapAccountEnabled)(e),
                        setUseRequestQueue: e => (0,
                        i.setUseRequestQueue)(e),
                        setPetnamesEnabled: t => e((0,
                        i.setPetnamesEnabled)(t)),
                        setFeatureNotificationsEnabled: t => e((0,
                        i.setFeatureNotificationsEnabled)(t)),
                        setRedesignedConfirmationsEnabled: t => e((0,
                        i.setRedesignedConfirmationsEnabled)(t)),
                        setRedesignedTransactionsEnabled: t => e((0,
                        i.setRedesignedTransactionsEnabled)(t))
                    }))))(c.default)
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/experimental-tab/experimental-tab.container.ts"
}], [6875, {
    "./experimental-tab.container": 6874
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./experimental-tab.container")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/experimental-tab/index.js"
}], [6876, {
    "./settings.container": 6900
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./settings.container")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/index.js"
}], [6877, {
    "./info-tab.component": 6878
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./info-tab.component")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/info-tab/index.js"
}], [6878, {
    "../../../../shared/constants/metametrics": 5260,
    "../../../../shared/lib/ui-utils": 5293,
    "../../../components/component-library": 5806,
    "../../../components/ui/button": 6083,
    "../../../helpers/constants/common": 6246,
    "../../../helpers/utils/build-types": 6273,
    "../../../helpers/utils/settings-search": 6291,
    "prop-types": 4528,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = f(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , s = p(e("prop-types"))
                      , o = p(e("../../../components/ui/button"))
                      , r = e("../../../components/component-library")
                      , i = e("../../../helpers/constants/common")
                      , l = e("../../../helpers/utils/build-types")
                      , c = e("../../../helpers/utils/settings-search")
                      , u = e("../../../../shared/constants/metametrics")
                      , d = e("../../../../shared/lib/ui-utils");
                    function p(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function f(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (f = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function m(e, t, n) {
                        return (t = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e)
                                    return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var a = n.call(e, t || "default");
                                    if ("object" != typeof a)
                                        return a;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(t))in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n,
                        e
                    }
                    class g extends a.PureComponent {
                        constructor(...e) {
                            super(...e),
                            m(this, "state", {
                                version: "12.9.3"
                            }),
                            m(this, "settingsRefs", Array((0,
                            c.getNumberOfSettingRoutesInTab)(this.context.t, this.context.t("about"))).fill(undefined).map(( () => a.default.createRef())))
                        }
                        componentDidUpdate() {
                            const {t: e} = this.context;
                            (0,
                            c.handleSettingsRefs)(e, e("about"), this.settingsRefs)
                        }
                        componentDidMount() {
                            const {t: e} = this.context;
                            (0,
                            c.handleSettingsRefs)(e, e("about"), this.settingsRefs)
                        }
                        renderInfoLinks() {
                            const {t: e} = this.context;
                            let t, n;
                            return t = "https://metamask.io/privacy.html",
                            n = "https://metamask.io/",
                            a.default.createElement("div", {
                                className: "settings-page__content-item settings-page__content-item--without-height"
                            }, a.default.createElement("div", {
                                ref: this.settingsRefs[1],
                                className: "info-tab__link-header"
                            }, e("links")), a.default.createElement("div", {
                                ref: this.settingsRefs[2],
                                className: "info-tab__link-item"
                            }, a.default.createElement(o.default, {
                                type: "link",
                                href: "https://metamask.io/privacy.html",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "info-tab__link-text"
                            }, e("privacyMsg"))), a.default.createElement("div", {
                                ref: this.settingsRefs[3],
                                className: "info-tab__link-item"
                            }, a.default.createElement(o.default, {
                                type: "link",
                                href: "https://metamask.io/terms.html",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "info-tab__link-text"
                            }, e("terms"))), (0,
                            l.isBeta)() ? a.default.createElement("div", {
                                ref: this.settingsRefs[8],
                                className: "info-tab__link-item"
                            }, a.default.createElement(o.default, {
                                type: "link",
                                href: "https://metamask.io/beta-terms.html",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "info-tab__link-text"
                            }, e("betaTerms"), a.default.createElement(r.Tag, {
                                label: e("new"),
                                className: "info-tab__tag"
                            }))) : null, a.default.createElement("div", {
                                ref: this.settingsRefs[4],
                                className: "info-tab__link-item"
                            }, a.default.createElement(o.default, {
                                type: "link",
                                href: `https://raw.githubusercontent.com/MetaMask/metamask-extension/v${this.state.version}/attribution.txt`,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "info-tab__link-text"
                            }, e("attributions"))), a.default.createElement("hr", {
                                className: "info-tab__separator"
                            }), a.default.createElement("div", {
                                ref: this.settingsRefs[5],
                                className: "info-tab__link-item"
                            }, a.default.createElement(o.default, {
                                type: "link",
                                href: d.SUPPORT_LINK,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "info-tab__link-text",
                                onClick: () => {
                                    this.context.trackEvent({
                                        category: u.MetaMetricsEventCategory.Settings,
                                        event: u.MetaMetricsEventName.SupportLinkClicked,
                                        properties: {
                                            url: d.SUPPORT_LINK
                                        }
                                    }, {
                                        contextPropsIntoEventProperties: [u.MetaMetricsContextProp.PageTitle]
                                    })
                                }
                            }, e("supportCenter"))), a.default.createElement("div", {
                                ref: this.settingsRefs[6],
                                className: "info-tab__link-item"
                            }, a.default.createElement(o.default, {
                                type: "link",
                                href: "https://metamask.io/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "info-tab__link-text"
                            }, e("visitWebSite"))), a.default.createElement("div", {
                                ref: this.settingsRefs[7],
                                className: "info-tab__link-item"
                            }, a.default.createElement(o.default, {
                                type: "link",
                                href: i.SUPPORT_REQUEST_LINK,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "info-tab__link-text",
                                onClick: () => {
                                    this.context.trackEvent({
                                        category: u.MetaMetricsEventCategory.Settings,
                                        event: u.MetaMetricsEventName.SupportLinkClicked,
                                        properties: {
                                            url: i.SUPPORT_REQUEST_LINK
                                        }
                                    }, {
                                        contextPropsIntoEventProperties: [u.MetaMetricsContextProp.PageTitle]
                                    })
                                }
                            }, e("contactUs"))))
                        }
                        render() {
                            const {t: e} = this.context;
                            return a.default.createElement("div", {
                                className: "settings-page__body"
                            }, a.default.createElement("div", {
                                className: "settings-page__content-row"
                            }, a.default.createElement("div", {
                                className: "settings-page__content-item settings-page__content-item--without-height"
                            }, a.default.createElement("div", {
                                className: "info-tab__item"
                            }, a.default.createElement("div", {
                                ref: this.settingsRefs[0],
                                className: "info-tab__version-header"
                            }, (0,
                            l.isBeta)() ? e("betaMetamaskVersion") : e("metamaskVersion")), a.default.createElement("div", {
                                className: "info-tab__version-number"
                            }, this.state.version)), a.default.createElement("div", {
                                className: "info-tab__item"
                            }, a.default.createElement("div", {
                                className: "info-tab__about"
                            }, e("builtAroundTheWorld")))), this.renderInfoLinks()), a.default.createElement("div", {
                                className: "info-tab__logo-wrapper"
                            }, a.default.createElement("img", {
                                src: "./images/logo/metamask-fox.svg",
                                className: "info-tab__logo",
                                alt: "MetaMask Logo"
                            })))
                        }
                    }
                    n.default = g,
                    m(g, "contextTypes", {
                        t: s.default.func,
                        trackEvent: s.default.func
                    })
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/info-tab/info-tab.component.js"
}], [6879, {
    "./networks-form": 6881
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./networks-form")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/networks-tab/networks-form/index.js"
}], [6880, {
    "../../../../../shared/modules/conversion.utils": 5301,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.useNetworkFormState = void 0;
                    var a = e("react")
                      , s = e("../../../../../shared/modules/conversion.utils");
                    n.useNetworkFormState = e => {
                        const [t,n] = (0,
                        a.useState)("")
                          , [o,r] = (0,
                        a.useState)("")
                          , [i,l] = (0,
                        a.useState)("")
                          , [c,u] = (0,
                        a.useState)({
                            rpcEndpoints: [],
                            defaultRpcEndpointIndex: undefined
                        })
                          , [d,p] = (0,
                        a.useState)({
                            blockExplorerUrls: [],
                            defaultBlockExplorerUrlIndex: undefined
                        });
                        return (0,
                        a.useEffect)(( () => {
                            n((null == e ? void 0 : e.name) ?? ""),
                            r(e ? (0,
                            s.hexToDecimal)(e.chainId) : ""),
                            l((null == e ? void 0 : e.nativeCurrency) ?? ""),
                            u({
                                rpcEndpoints: (null == e ? void 0 : e.rpcEndpoints) ?? [],
                                defaultRpcEndpointIndex: null == e ? void 0 : e.defaultRpcEndpointIndex
                            }),
                            p({
                                blockExplorerUrls: (null == e ? void 0 : e.blockExplorerUrls) ?? [],
                                defaultBlockExplorerUrlIndex: null == e ? void 0 : e.defaultBlockExplorerUrlIndex
                            })
                        }
                        ), [null == e ? void 0 : e.chainId]),
                        {
                            name: t,
                            setName: n,
                            chainId: o,
                            setChainId: r,
                            ticker: i,
                            setTicker: l,
                            rpcUrls: c,
                            setRpcUrls: u,
                            blockExplorers: d,
                            setBlockExplorers: p,
                            clear: () => {
                                n(""),
                                r(""),
                                l(""),
                                u({
                                    rpcEndpoints: [],
                                    defaultRpcEndpointIndex: undefined
                                }),
                                p({
                                    blockExplorerUrls: [],
                                    defaultBlockExplorerUrlIndex: undefined
                                })
                            }
                        }
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/networks-tab/networks-form/networks-form-state.ts"
}], [6881, {
    "../../../../../shared/constants/metametrics": 5260,
    "../../../../../shared/constants/network": 5264,
    "../../../../../shared/modules/conversion.utils": 5301,
    "../../../../../shared/modules/network.utils": 5311,
    "../../../../../shared/modules/rpc.utils": 5315,
    "../../../../../shared/modules/selectors/networks": 5320,
    "../../../../components/component-library": 5806,
    "../../../../components/multichain/dropdown-editor/dropdown-editor": 5945,
    "../../../../components/multichain/network-list-menu/rpc-list-item": 5979,
    "../../../../contexts/metametrics": 6214,
    "../../../../helpers/constants/design-system": 6248,
    "../../../../hooks/useI18nContext": 6334,
    "../../../../store/actions": 7e3,
    "./use-safe-chains": 6882,
    "@metamask/network-controller": 1990,
    "@metamask/utils": 2761,
    loglevel: 4386,
    react: 4776,
    "react-redux": 4734
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = n.NetworksForm = void 0;
                    var a, s = (a = e("loglevel")) && a.__esModule ? a : {
                        default: a
                    }, o = x(e("react")), r = e("react-redux"), i = e("@metamask/network-controller"), l = e("@metamask/utils"), c = e("../../../../../shared/constants/metametrics"), u = e("../../../../../shared/constants/network"), d = e("../../../../../shared/modules/conversion.utils"), p = e("../../../../../shared/modules/network.utils"), f = e("../../../../../shared/modules/rpc.utils"), m = e("../../../../contexts/metametrics"), g = e("../../../../hooks/useI18nContext"), h = e("../../../../../shared/modules/selectors/networks"), y = e("../../../../store/actions"), _ = e("../../../../components/component-library"), v = e("../../../../helpers/constants/design-system"), b = x(e("../../../../components/multichain/network-list-menu/rpc-list-item")), E = e("../../../../components/multichain/dropdown-editor/dropdown-editor"), T = e("./use-safe-chains");
                    function w(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (w = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function x(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = w(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }
                    const k = ({networkFormState: e, existingNetwork: t, onRpcAdd: n, onBlockExplorerAdd: a}) => {
                        var l, w, x, k, S, N, M, O;
                        const I = (0,
                        g.useI18nContext)()
                          , R = (0,
                        r.useDispatch)()
                          , P = (0,
                        o.useContext)(m.MetaMetricsContext)
                          , D = (0,
                        o.useRef)(null)
                          , A = (0,
                        r.useSelector)(h.getNetworkConfigurationsByChainId)
                          , {name: B, setName: j, chainId: F, setChainId: L, ticker: U, setTicker: W, rpcUrls: $, setRpcUrls: q, blockExplorers: V, setBlockExplorers: z} = e
                          , {safeChains: H} = (0,
                        T.useSafeChains)()
                          , [G,K] = (0,
                        o.useState)({})
                          , [J,Q] = (0,
                        o.useState)({})
                          , [Y,Z] = (0,
                        o.useState)()
                          , [X,ee] = (0,
                        o.useState)()
                          , [te,ne] = (0,
                        o.useState)();
                        (0,
                        o.useEffect)(( () => {
                            var e;
                            const t = F ? C(F) : undefined
                              , n = t ? u.NETWORK_TO_NAME_MAP[t] ?? (null == H || null === (e = H.find((e => C(e.chainId) === t))) || void 0 === e ? void 0 : e.name) : undefined
                              , a = n && n !== B;
                            Z(a ? n : undefined),
                            Q((e => ({
                                ...e,
                                name: a ? {
                                    key: "wrongNetworkName",
                                    msg: I("wrongNetworkName")
                                } : undefined
                            })))
                        }
                        ), [F, B, H]),
                        (0,
                        o.useEffect)(( () => {
                            var e;
                            const t = F ? C(F) : undefined
                              , n = t ? u.CHAIN_ID_TO_CURRENCY_SYMBOL_MAP[t] ?? (null == H || null === (e = H.find((e => C(e.chainId) === t))) || void 0 === e || null === (e = e.nativeCurrency) || void 0 === e ? void 0 : e.symbol) : undefined
                              , a = n && n !== U;
                            ee(a ? n : undefined),
                            Q((e => ({
                                ...e,
                                ticker: a ? {
                                    key: "chainListReturnedDifferentTickerSymbol",
                                    msg: I("chainListReturnedDifferentTickerSymbol")
                                } : undefined
                            })))
                        }
                        ), [F, U, H]),
                        (0,
                        o.useEffect)(( () => {
                            let e;
                            F === undefined || "" === F ? e = undefined : F.startsWith("0x") ? /^0x[0-9a-f]+$/iu.test(F) ? (0,
                            p.isPrefixedFormattedHexString)(F) || (e = ["invalidHexNumber", I("invalidHexNumberLeadingZeros")]) : e = ["invalidHexNumber", I("invalidHexNumber")] : /^[0-9]+$/u.test(F) ? F.startsWith("0") && (e = ["invalidNumberLeadingZeros", I("invalidNumberLeadingZeros")]) : e = ["invalidNumber", I("invalidNumber")],
                            !F || e || (0,
                            p.isSafeChainId)(parseInt(F, F.startsWith("0x") ? 16 : 10)) || (e = ["invalidChainIdTooBig", I("invalidChainIdTooBig")]);
                            const n = C(F);
                            if (!e && !t) {
                                const t = n ? A[n] : undefined;
                                t && (e = ["existingChainId", I("chainIdExistsErrorMsg", [t.name])])
                            }
                            let a;
                            te && n && te !== n && (a = ["endpointReturnedDifferentChainId", I("endpointReturnedDifferentChainId", [(0,
                            d.hexToDecimal)(te)])]),
                            K((t => ({
                                ...t,
                                chainId: e ? {
                                    key: e[0],
                                    msg: e[1]
                                } : undefined,
                                rpcUrl: a ? {
                                    key: a[0],
                                    msg: a[1]
                                } : undefined
                            })))
                        }
                        ), [F, te, null == t ? void 0 : t.chainId]),
                        (0,
                        o.useEffect)(( () => {
                            var e;
                            const t = null == $ || null === (e = $.rpcEndpoints) || void 0 === e || null === (e = e[(null == $ ? void 0 : $.defaultRpcEndpointIndex) ?? -1]) || void 0 === e ? void 0 : e.url;
                            var n;
                            t && (0,
                            f.jsonRpcRequest)((n = t,
                            n.endsWith("{infuraProjectId}") ? n.replace("{infuraProjectId}", u.infuraProjectId ?? "") : n), "eth_chainId").then((e => {
                                ne(e)
                            }
                            )).catch((e => {
                                ne(undefined),
                                s.default.warn("Failed to fetch the chainId from the endpoint.", e),
                                K((e => ({
                                    ...e,
                                    rpcUrl: {
                                        key: "failedToFetchChainId",
                                        msg: I("failedToFetchChainId")
                                    }
                                })))
                            }
                            ))
                        }
                        ), [F, $]);
                        return o.default.createElement(_.Box, {
                            height: v.BlockSize.Full,
                            display: v.Display.Flex,
                            justifyContent: v.JustifyContent.spaceBetween,
                            flexDirection: v.FlexDirection.Column,
                            alignItems: v.AlignItems.center,
                            ref: D,
                            className: "networks-tab__scrollable"
                        }, o.default.createElement(_.Box, {
                            width: v.BlockSize.Full,
                            paddingLeft: 4,
                            paddingRight: 4,
                            paddingBottom: 2
                        }, o.default.createElement(_.FormTextField, {
                            id: "networkName",
                            size: _.FormTextFieldSize.Lg,
                            placeholder: I("enterNetworkName"),
                            "data-testid": "network-form-name-input",
                            autoFocus: !0,
                            helpText: (B && (null == J || null === (l = J.name) || void 0 === l ? void 0 : l.msg) || Y) && o.default.createElement(o.default.Fragment, null, B && (null == J || null === (w = J.name) || void 0 === w ? void 0 : w.msg) && o.default.createElement(_.HelpText, {
                                variant: v.TextVariant.bodySm,
                                severity: _.HelpTextSeverity.Warning
                            }, J.name.msg), Y && o.default.createElement(_.Text, {
                                as: "span",
                                variant: v.TextVariant.bodySm,
                                color: v.TextColor.textDefault,
                                "data-testid": "network-form-name-suggestion"
                            }, I("suggestedTokenName"), o.default.createElement(_.ButtonLink, {
                                as: "button",
                                variant: v.TextVariant.bodySm,
                                color: v.TextColor.primaryDefault,
                                onClick: () => {
                                    j(Y)
                                }
                                ,
                                paddingLeft: 1,
                                paddingRight: 1,
                                style: {
                                    verticalAlign: "baseline"
                                }
                            }, Y))),
                            onChange: e => {
                                var t;
                                j(null === (t = e.target) || void 0 === t ? void 0 : t.value)
                            }
                            ,
                            label: I("networkName"),
                            labelProps: {
                                children: undefined,
                                variant: v.TextVariant.bodyMdMedium
                            },
                            textFieldProps: {
                                borderRadius: v.BorderRadius.LG
                            },
                            inputProps: {
                                "data-testid": "network-form-network-name"
                            },
                            value: B
                        }), o.default.createElement(E.DropdownEditor, {
                            title: I("defaultRpcUrl"),
                            placeholder: I("addAUrl"),
                            style: E.DropdownEditorStyle.PopoverStyle,
                            items: $.rpcEndpoints,
                            itemKey: e => e.url,
                            selectedItemIndex: $.defaultRpcEndpointIndex,
                            error: Boolean(G.rpcUrl),
                            buttonDataTestId: "test-add-rpc-drop-down",
                            renderItem: (e, t) => t || null != e && e.name || (null == e ? void 0 : e.type) === i.RpcEndpointType.Infura ? o.default.createElement(b.default, {
                                rpcEndpoint: e
                            }) : o.default.createElement(_.Text, {
                                ellipsis: !0,
                                variant: v.TextVariant.bodyMd,
                                paddingTop: 3,
                                paddingBottom: 3
                            }, (0,
                            b.stripProtocol)((0,
                            b.stripKeyFromInfuraUrl)(e.url))),
                            renderTooltip: (e, t) => {
                                const n = (0,
                                b.stripKeyFromInfuraUrl)(e.url);
                                return n.length > (t ? 37 : 35) ? n : undefined
                            }
                            ,
                            addButtonText: I("addRpcUrl"),
                            itemIsDeletable: e => e.type !== i.RpcEndpointType.Infura,
                            onItemAdd: n,
                            onItemSelected: e => q((t => ({
                                ...t,
                                defaultRpcEndpointIndex: e
                            }))),
                            onItemDeleted: (e, t) => {
                                var n;
                                q({
                                    rpcEndpoints: null === (n = $.rpcEndpoints) || void 0 === n ? void 0 : n.slice(0, e).concat($.rpcEndpoints.slice(e + 1)),
                                    defaultRpcEndpointIndex: t
                                })
                            }
                        }), (null === (x = G.rpcUrl) || void 0 === x ? void 0 : x.msg) && o.default.createElement(_.Box, null, o.default.createElement(_.HelpText, {
                            variant: v.TextVariant.bodySm,
                            severity: _.HelpTextSeverity.Danger,
                            "data-testid": "network-form-chain-id-error"
                        }, null === (k = G.rpcUrl) || void 0 === k ? void 0 : k.msg)), o.default.createElement(_.FormTextField, {
                            id: "chainId",
                            size: _.FormTextFieldSize.Lg,
                            placeholder: I("enterChainId"),
                            paddingTop: 4,
                            "data-testid": "network-form-chain-id-input",
                            onChange: e => {
                                var t;
                                L(null === (t = e.target) || void 0 === t ? void 0 : t.value.trim())
                            }
                            ,
                            error: Boolean(null == G ? void 0 : G.chainId),
                            label: I("chainId"),
                            labelProps: {
                                children: undefined,
                                variant: v.TextVariant.bodyMdMedium
                            },
                            textFieldProps: {
                                borderRadius: v.BorderRadius.LG
                            },
                            inputProps: {
                                "data-testid": "network-form-chain-id"
                            },
                            value: F,
                            disabled: Boolean(t)
                        }), null !== (S = G.chainId) && void 0 !== S && S.msg ? o.default.createElement(_.HelpText, {
                            variant: v.TextVariant.bodySm,
                            severity: _.HelpTextSeverity.Danger,
                            "data-testid": "network-form-chain-id-error"
                        }, G.chainId.msg) : null, "existingChainId" === (null === (N = G.chainId) || void 0 === N ? void 0 : N.key) ? o.default.createElement(_.Box, null, o.default.createElement(_.HelpText, {
                            variant: v.TextVariant.bodySm,
                            severity: _.HelpTextSeverity.Danger,
                            "data-testid": "network-form-chain-id-error"
                        }, I("updateOrEditNetworkInformations"), " ", o.default.createElement(_.ButtonLink, {
                            as: "button",
                            variant: v.TextVariant.bodySm,
                            color: v.TextColor.primaryDefault,
                            onClick: () => {
                                const e = C(F);
                                e && R((0,
                                y.setEditedNetwork)({
                                    chainId: e
                                }))
                            }
                        }, I("editNetworkLink")))) : null, o.default.createElement(_.FormTextField, {
                            id: "nativeCurrency",
                            size: _.FormTextFieldSize.Lg,
                            placeholder: I("enterSymbol"),
                            paddingTop: 4,
                            "data-testid": "network-form-ticker",
                            helpText: X ? o.default.createElement(_.Text, {
                                as: "span",
                                variant: v.TextVariant.bodySm,
                                color: v.TextColor.textDefault,
                                "data-testid": "network-form-ticker-suggestion"
                            }, I("suggestedCurrencySymbol"), o.default.createElement(_.ButtonLink, {
                                as: "button",
                                variant: v.TextVariant.bodySm,
                                color: v.TextColor.primaryDefault,
                                onClick: () => {
                                    W(X)
                                }
                                ,
                                paddingLeft: 1,
                                paddingRight: 1,
                                style: {
                                    verticalAlign: "baseline"
                                }
                            }, X)) : null,
                            onChange: e => {
                                var t;
                                W(null === (t = e.target) || void 0 === t ? void 0 : t.value)
                            }
                            ,
                            label: I("currencySymbol"),
                            labelProps: {
                                children: undefined,
                                variant: v.TextVariant.bodyMdMedium
                            },
                            textFieldProps: {
                                borderRadius: v.BorderRadius.LG
                            },
                            inputProps: {
                                "data-testid": "network-form-ticker-input"
                            },
                            value: U
                        }), U && null !== (M = J.ticker) && void 0 !== M && M.msg ? o.default.createElement(_.HelpText, {
                            variant: v.TextVariant.bodySm,
                            severity: _.HelpTextSeverity.Warning,
                            "data-testid": "network-form-ticker-warning"
                        }, J.ticker.msg) : null, o.default.createElement(E.DropdownEditor, {
                            title: I("blockExplorerUrl"),
                            placeholder: I("addAUrl"),
                            style: E.DropdownEditorStyle.BoxStyle,
                            items: V.blockExplorerUrls,
                            itemKey: e => `${e}`,
                            selectedItemIndex: V.defaultBlockExplorerUrlIndex,
                            addButtonText: I("addBlockExplorerUrl"),
                            onItemAdd: a,
                            buttonDataTestId: "test-explorer-drop-down",
                            onItemSelected: e => z((t => ({
                                ...t,
                                defaultBlockExplorerUrlIndex: e
                            }))),
                            onItemDeleted: (e, t) => {
                                var n;
                                z({
                                    blockExplorerUrls: null === (n = V.blockExplorerUrls) || void 0 === n ? void 0 : n.slice(0, e).concat(V.blockExplorerUrls.slice(e + 1)),
                                    defaultBlockExplorerUrlIndex: t
                                })
                            }
                            ,
                            onDropdownOpened: () => {
                                D.current && (D.current.scrollTop = D.current.scrollHeight)
                            }
                            ,
                            renderItem: e => o.default.createElement(_.Text, {
                                as: "button",
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 3,
                                paddingBottom: 3,
                                color: v.TextColor.textDefault,
                                variant: v.TextVariant.bodyMd,
                                backgroundColor: v.BackgroundColor.transparent,
                                ellipsis: !0
                            }, (0,
                            b.stripProtocol)(e)),
                            renderTooltip: e => e.length > 36 ? e : undefined
                        })), o.default.createElement(_.Box, {
                            className: "networks-tab__network-form__footer",
                            backgroundColor: v.BackgroundColor.backgroundDefault,
                            padding: 4,
                            width: v.BlockSize.Full
                        }, o.default.createElement(_.ButtonPrimary, {
                            disabled: !B || !F || !U || !(null != $ && null !== (O = $.rpcEndpoints) && void 0 !== O && O.length) || Object.values(G).some((e => e)),
                            onClick: async () => {
                                try {
                                    const a = F ? C(F) : undefined;
                                    if (a === u.CHAIN_IDS.GOERLI)
                                        R((0,
                                        y.showDeprecatedNetworkModal)());
                                    else if (a) {
                                        var e, n;
                                        const s = {
                                            chainId: a,
                                            name: B,
                                            nativeCurrency: U,
                                            rpcEndpoints: null == $ ? void 0 : $.rpcEndpoints,
                                            defaultRpcEndpointIndex: (null == $ ? void 0 : $.defaultRpcEndpointIndex) ?? 0,
                                            blockExplorerUrls: null == V ? void 0 : V.blockExplorerUrls,
                                            defaultBlockExplorerUrlIndex: null == V ? void 0 : V.defaultBlockExplorerUrlIndex
                                        };
                                        if (t) {
                                            const e = {
                                                replacementSelectedRpcEndpointIndex: a === t.chainId ? null == $ ? void 0 : $.defaultRpcEndpointIndex : undefined
                                            };
                                            await R((0,
                                            y.updateNetwork)(s, e))
                                        } else
                                            await R((0,
                                            y.addNetwork)(s));
                                        P({
                                            event: c.MetaMetricsEventName.CustomNetworkAdded,
                                            category: c.MetaMetricsEventCategory.Network,
                                            properties: {
                                                block_explorer_url: null == V || null === (e = V.blockExplorerUrls) || void 0 === e ? void 0 : e[(null == V ? void 0 : V.defaultBlockExplorerUrlIndex) ?? -1],
                                                chain_id: a,
                                                network_name: B,
                                                source_connection_method: c.MetaMetricsNetworkEventSource.CustomNetworkForm,
                                                token_symbol: U
                                            },
                                            sensitiveProperties: {
                                                rpcUrl: (0,
                                                T.rpcIdentifierUtility)(null == $ || null === (n = $.rpcEndpoints[$.defaultRpcEndpointIndex ?? -1]) || void 0 === n ? void 0 : n.url, H ?? [])
                                            }
                                        }),
                                        R((0,
                                        y.setEditedNetwork)({
                                            chainId: a,
                                            nickname: B,
                                            editCompleted: !0,
                                            newNetwork: !t
                                        }))
                                    }
                                } catch (e) {
                                    console.error(e)
                                } finally {
                                    R((0,
                                    y.toggleNetworkMenu)())
                                }
                            }
                            ,
                            size: _.ButtonPrimarySize.Lg,
                            width: v.BlockSize.Full
                        }, I("save"))))
                    }
                    ;
                    function C(e) {
                        return (0,
                        l.isStrictHexString)(e) ? e : /^\d+$/u.test(e) ? `0x${(0,
                        d.decimalToHex)(e)}` : undefined
                    }
                    n.NetworksForm = k;
                    n.default = k
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/networks-tab/networks-form/networks-form.tsx"
}], [6882, {
    "../../../../../shared/constants/network": 5264,
    "../../../../../shared/constants/time": 5276,
    "../../../../../shared/lib/fetch-with-cache": 5283,
    "../../../../selectors": 6985,
    react: 4776,
    "react-redux": 4734
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.useSafeChains = n.rpcIdentifierUtility = void 0;
                    var a, s = e("react"), o = e("react-redux"), r = e("../../../../selectors"), i = (a = e("../../../../../shared/lib/fetch-with-cache")) && a.__esModule ? a : {
                        default: a
                    }, l = e("../../../../../shared/constants/network"), c = e("../../../../../shared/constants/time");
                    n.useSafeChains = () => {
                        const e = (0,
                        o.useSelector)(r.useSafeChainsListValidationSelector)
                          , [t,n] = (0,
                        s.useState)({
                            safeChains: []
                        });
                        return e && (0,
                        s.useEffect)(( () => {
                            (0,
                            i.default)({
                                url: l.CHAIN_SPEC_URL,
                                functionName: "getSafeChainsList",
                                allowStale: !0,
                                cacheOptions: {
                                    cacheRefreshTime: c.DAY
                                }
                            }).then((e => {
                                n({
                                    safeChains: e
                                })
                            }
                            )).catch((e => {
                                n({
                                    error: e
                                })
                            }
                            ))
                        }
                        ), []),
                        t
                    }
                    ;
                    n.rpcIdentifierUtility = (e, t) => {
                        const {host: n} = new URL(e);
                        for (const e of t)
                            for (const t of e.rpc)
                                try {
                                    if (n === new URL(t).host)
                                        return n
                                } catch {
                                    continue
                                }
                        return "Unknown rpcUrl"
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/networks-tab/networks-form/use-safe-chains.ts"
}], [6883, {
    "../../../../../shared/constants/metametrics": 5260,
    "../../../../../shared/lib/ui-utils": 5293,
    "../../../../components/app/clear-metametrics-data": 5406,
    "../../../../components/app/data-deletion-error-modal": 5450,
    "../../../../components/component-library": 5806,
    "../../../../ducks/app/app": 6223,
    "../../../../helpers/constants/design-system": 6248,
    "../../../../helpers/utils/util": 6297,
    "../../../../hooks/useI18nContext": 6334,
    "../../../../selectors": 6985,
    react: 4776,
    "react-redux": 4734
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a = g(e("react"))
                      , s = e("react-redux")
                      , o = e("../../../../../shared/lib/ui-utils")
                      , r = g(e("../../../../components/app/clear-metametrics-data"))
                      , i = e("../../../../components/component-library")
                      , l = e("../../../../helpers/constants/design-system")
                      , c = e("../../../../hooks/useI18nContext")
                      , u = e("../../../../selectors")
                      , d = e("../../../../ducks/app/app")
                      , p = g(e("../../../../components/app/data-deletion-error-modal"))
                      , f = e("../../../../helpers/utils/util")
                      , m = e("../../../../../shared/constants/metametrics");
                    function g(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    const h = a.default.forwardRef(( ({...e}, t) => {
                        const n = (0,
                        c.useI18nContext)()
                          , g = (0,
                        s.useDispatch)()
                          , h = (0,
                        s.useSelector)(u.getMetaMetricsId)
                          , y = (0,
                        s.useSelector)(u.getMetaMetricsDataDeletionStatus)
                          , _ = (0,
                        s.useSelector)(u.getMetaMetricsDataDeletionTimestamp)
                          , v = (0,
                        f.formatDate)(_, "d/MM/y")
                          , b = (0,
                        s.useSelector)(u.getShowDeleteMetaMetricsDataModal)
                          , E = (0,
                        s.useSelector)(u.getShowDataDeletionErrorModal)
                          , T = (0,
                        s.useSelector)(u.getLatestMetricsEventTimestamp);
                        let w = Boolean(!h);
                        !w && y && (w = [m.DeleteRegulationStatus.Initialized, m.DeleteRegulationStatus.Running, m.DeleteRegulationStatus.Finished].includes(y) && _ > T);
                        const x = a.default.createElement("a", {
                            href: o.CONSENSYS_PRIVACY_LINK,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            key: "metametrics-consensys-privacy-link"
                        }, n("privacyMsg"));
                        return a.default.createElement(a.default.Fragment, null, a.default.createElement(i.Box, {
                            ref: t,
                            className: "settings-page__content-row",
                            "data-testid": "delete-metametrics-data-button",
                            display: l.Display.Flex,
                            flexDirection: l.FlexDirection.Column,
                            gap: 4
                        }, a.default.createElement("div", {
                            className: "settings-page__content-item"
                        }, a.default.createElement("span", null, n("deleteMetaMetricsData")), a.default.createElement("div", {
                            className: "settings-page__content-description"
                        }, w && Boolean(h) ? n("deleteMetaMetricsDataRequestedDescription", [v, x]) : n("deleteMetaMetricsDataDescription", [x]))), a.default.createElement("div", {
                            className: "settings-page__content-item-col"
                        }, Boolean(!h) && a.default.createElement(i.Box, {
                            display: l.Display.InlineFlex
                        }, a.default.createElement(i.Icon, {
                            name: i.IconName.Info,
                            size: i.IconSize.Sm
                        }), a.default.createElement(i.Text, {
                            variant: l.TextVariant.bodyXs,
                            marginLeft: 1,
                            marginBottom: 2
                        }, n("metaMetricsIdNotAvailableError"))), a.default.createElement(i.ButtonPrimary, {
                            className: "settings-page__button",
                            onClick: () => {
                                g((0,
                                d.openDeleteMetaMetricsDataModal)())
                            }
                            ,
                            disabled: w
                        }, n("deleteMetaMetricsData")))), b && a.default.createElement(r.default, null), E && a.default.createElement(p.default, null))
                    }
                    ));
                    n.default = h
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/security-tab/delete-metametrics-data-button/delete-metametrics-data-button.tsx"
}], [6884, {
    "./delete-metametrics-data-button": 6883
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./delete-metametrics-data-button")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/security-tab/delete-metametrics-data-button/index.ts"
}], [6885, {
    "./security-tab.container": 6891
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./security-tab.container")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/security-tab/index.js"
}], [6886, {
    "./metametrics-toggle": 6887
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./metametrics-toggle")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/security-tab/metametrics-toggle/index.ts"
}], [6887, {
    "../../../../../shared/constants/metametrics": 5260,
    "../../../../components/component-library": 5806,
    "../../../../components/ui/toggle-button": 6193,
    "../../../../contexts/metametrics": 6214,
    "../../../../helpers/constants/design-system": 6248,
    "../../../../hooks/metamask-notifications/useMetametrics": 6305,
    "../../../../hooks/useI18nContext": 6334,
    "../../../../selectors/metamask-notifications/authentication": 6986,
    "../../../../selectors/metamask-notifications/profile-syncing": 6988,
    react: 4776,
    "react-redux": 4734
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a, s = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = g(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react")), o = e("react-redux"), r = e("../../../../hooks/useI18nContext"), i = e("../../../../contexts/metametrics"), l = e("../../../../hooks/metamask-notifications/useMetametrics"), c = e("../../../../selectors/metamask-notifications/profile-syncing"), u = e("../../../../selectors/metamask-notifications/authentication"), d = e("../../../../../shared/constants/metametrics"), p = e("../../../../components/component-library"), f = (a = e("../../../../components/ui/toggle-button")) && a.__esModule ? a : {
                        default: a
                    }, m = e("../../../../helpers/constants/design-system");
                    function g(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (g = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    n.default = ({dataCollectionForMarketing: e, setDataCollectionForMarketing: t}) => {
                        const n = (0,
                        r.useI18nContext)()
                          , a = (0,
                        s.useContext)(i.MetaMetricsContext)
                          , {enableMetametrics: g, error: h} = (0,
                        l.useEnableMetametrics)()
                          , {disableMetametrics: y, error: _} = (0,
                        l.useDisableMetametrics)()
                          , v = h || _
                          , b = (0,
                        o.useSelector)(c.selectIsProfileSyncingEnabled)
                          , E = (0,
                        o.useSelector)(u.selectParticipateInMetaMetrics);
                        return s.default.createElement(p.Box, null, s.default.createElement(p.Box, {
                            className: "settings-page__content-row",
                            display: m.Display.Flex,
                            flexDirection: m.FlexDirection.Row,
                            justifyContent: m.JustifyContent.spaceBetween,
                            gap: 4,
                            "data-testid": "profileSyncToggle"
                        }, s.default.createElement("div", {
                            className: "settings-page__content-item",
                            id: "profileSyncLabel"
                        }, s.default.createElement("span", null, n("participateInMetaMetrics")), s.default.createElement("div", {
                            className: "settings-page__content-description",
                            "data-testid": "profileSyncDescription"
                        }, n("participateInMetaMetricsDescription"))), s.default.createElement("div", {
                            className: "settings-page__content-item-col",
                            "data-testid": "participateInMetaMetrics"
                        }, s.default.createElement(f.default, {
                            value: E,
                            onToggle: async () => {
                                E ? (await y(),
                                a({
                                    category: d.MetaMetricsEventCategory.Settings,
                                    event: d.MetaMetricsEventName.TurnOffMetaMetrics,
                                    properties: {
                                        isProfileSyncingEnabled: b,
                                        participateInMetaMetrics: E
                                    }
                                }),
                                a({
                                    category: d.MetaMetricsEventCategory.Settings,
                                    event: d.MetaMetricsEventName.AnalyticsPreferenceSelected,
                                    properties: {
                                        is_metrics_opted_in: !1,
                                        has_marketing_consent: !1,
                                        location: "Settings"
                                    }
                                })) : (await g(),
                                a({
                                    category: d.MetaMetricsEventCategory.Settings,
                                    event: d.MetaMetricsEventName.TurnOnMetaMetrics,
                                    properties: {
                                        isProfileSyncingEnabled: b,
                                        participateInMetaMetrics: E
                                    }
                                })),
                                e && t(!1)
                            }
                            ,
                            offLabel: n("off"),
                            onLabel: n("on"),
                            dataTestId: "toggleButton"
                        }))), v && s.default.createElement(p.Box, {
                            paddingBottom: 4
                        }, s.default.createElement(p.Text, {
                            as: "p",
                            color: m.TextColor.errorDefault,
                            variant: m.TextVariant.bodySm
                        }, n("notificationsSettingsBoxError"))))
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/security-tab/metametrics-toggle/metametrics-toggle.tsx"
}], [6888, {
    "./profile-sync-toggle": 6889
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./profile-sync-toggle")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/security-tab/profile-sync-toggle/index.ts"
}], [6889, {
    "../../../../../shared/constants/metametrics": 5260,
    "../../../../components/component-library": 5806,
    "../../../../components/ui/icon/preloader/preloader-icon.component": 6127,
    "../../../../components/ui/toggle-button": 6193,
    "../../../../contexts/metametrics": 6214,
    "../../../../helpers/constants/design-system": 6248,
    "../../../../hooks/metamask-notifications/useProfileSyncing": 6308,
    "../../../../hooks/useI18nContext": 6334,
    "../../../../selectors": 6985,
    "../../../../selectors/metamask-notifications/metamask-notifications": 6987,
    "../../../../selectors/metamask-notifications/profile-syncing": 6988,
    "../../../../store/actions": 7e3,
    react: 4776,
    "react-redux": 4734
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = _(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , s = e("react-redux")
                      , o = e("../../../../hooks/useI18nContext")
                      , r = e("../../../../contexts/metametrics")
                      , i = e("../../../../hooks/metamask-notifications/useProfileSyncing")
                      , l = e("../../../../../shared/constants/metametrics")
                      , c = e("../../../../selectors/metamask-notifications/profile-syncing")
                      , u = e("../../../../selectors/metamask-notifications/metamask-notifications")
                      , d = e("../../../../store/actions")
                      , p = e("../../../../components/component-library")
                      , f = y(e("../../../../components/ui/toggle-button"))
                      , m = e("../../../../helpers/constants/design-system")
                      , g = y(e("../../../../components/ui/icon/preloader/preloader-icon.component"))
                      , h = e("../../../../selectors");
                    function y(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function _(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (_ = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    n.default = () => {
                        const e = (0,
                        a.useContext)(r.MetaMetricsContext)
                          , t = (0,
                        o.useI18nContext)()
                          , n = (0,
                        s.useDispatch)()
                          , {enableProfileSyncing: y, error: _} = (0,
                        i.useEnableProfileSyncing)()
                          , {disableProfileSyncing: v, error: b} = (0,
                        i.useDisableProfileSyncing)()
                          , {isProfileSyncDisabled: E} = function() {
                            const e = (0,
                            s.useSelector)(h.getUseExternalServices)
                              , {disableProfileSyncing: t} = (0,
                            i.useDisableProfileSyncing)();
                            return (0,
                            a.useEffect)(( () => {
                                !1 === e && t()
                            }
                            ), [e, t]),
                            {
                                isProfileSyncDisabled: !e
                            }
                        }()
                          , T = _ || b
                          , w = (0,
                        s.useSelector)(c.selectIsProfileSyncingEnabled)
                          , x = (0,
                        s.useSelector)(c.selectIsProfileSyncingUpdateLoading)
                          , k = (0,
                        s.useSelector)(u.selectIsMetamaskNotificationsEnabled);
                        return a.default.createElement(p.Box, null, a.default.createElement(p.Box, {
                            className: "settings-page__content-row",
                            display: m.Display.Flex,
                            flexDirection: m.FlexDirection.Row,
                            justifyContent: m.JustifyContent.spaceBetween,
                            gap: 4,
                            "data-testid": "profileSyncToggle"
                        }, a.default.createElement("div", {
                            className: "settings-page__content-item",
                            id: "profileSyncLabel"
                        }, a.default.createElement("span", null, t("profileSync")), a.default.createElement("div", {
                            className: "settings-page__content-description",
                            "data-testid": "profileSyncDescription"
                        }, t("profileSyncDescription", [a.default.createElement("a", {
                            href: "https://support.metamask.io/privacy-and-security/profile-privacy",
                            key: "link",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "data-testid": "privacyPolicyLink"
                        }, t("profileSyncPrivacyLink"))]))), x && a.default.createElement(p.Box, {
                            paddingLeft: 5,
                            paddingRight: 5
                        }, a.default.createElement(g.default, {
                            size: 36
                        })), !x && a.default.createElement("div", {
                            className: "settings-page__content-item-col"
                        }, a.default.createElement(f.default, {
                            disabled: E,
                            value: w,
                            onToggle: async () => {
                                w ? n((0,
                                d.showModal)({
                                    name: "CONFIRM_TURN_OFF_PROFILE_SYNCING",
                                    turnOffProfileSyncing: () => {
                                        e({
                                            category: l.MetaMetricsEventCategory.Settings,
                                            event: l.MetaMetricsEventName.SettingsUpdated,
                                            properties: {
                                                settings_group: "security_privacy",
                                                settings_type: "profile_syncing",
                                                old_value: !0,
                                                new_value: !1,
                                                was_notifications_on: k
                                            }
                                        }),
                                        v()
                                    }
                                })) : (e({
                                    category: l.MetaMetricsEventCategory.Settings,
                                    event: l.MetaMetricsEventName.SettingsUpdated,
                                    properties: {
                                        settings_group: "security_privacy",
                                        settings_type: "profile_syncing",
                                        old_value: !1,
                                        new_value: !0,
                                        was_notifications_on: k
                                    }
                                }),
                                await y())
                            }
                            ,
                            offLabel: t("off"),
                            onLabel: t("on"),
                            dataTestId: "toggleButton"
                        }))), T && a.default.createElement(p.Box, {
                            paddingBottom: 4
                        }, a.default.createElement(p.Text, {
                            as: "p",
                            color: m.TextColor.errorDefault,
                            variant: m.TextVariant.bodySm
                        }, t("notificationsSettingsBoxError"))))
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/security-tab/profile-sync-toggle/profile-sync-toggle.tsx"
}], [6890, {
    "../../../../app/scripts/lib/util": 135,
    "../../../../shared/constants/app": 5248,
    "../../../../shared/constants/metametrics": 5260,
    "../../../../shared/constants/network": 5264,
    "../../../../shared/lib/ui-utils": 5293,
    "../../../components/app/incoming-trasaction-toggle/incoming-transaction-toggle": 5468,
    "../../../components/app/srp-quiz-modal/SRPQuiz": 5693,
    "../../../components/component-library": 5806,
    "../../../components/ui/popover": 6166,
    "../../../components/ui/text-field": 6189,
    "../../../components/ui/toggle-button": 6193,
    "../../../helpers/constants/design-system": 6248,
    "../../../helpers/constants/routes": 6254,
    "../../../helpers/utils/settings-search": 6291,
    "../../../store/actions": 7e3,
    "./delete-metametrics-data-button": 6884,
    "./metametrics-toggle": 6886,
    "./profile-sync-toggle": 6888,
    lodash: 4380,
    "prop-types": 4528,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a = e("lodash")
                      , s = k(e("prop-types"))
                      , o = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = x(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , r = e("../../../../app/scripts/lib/util")
                      , i = e("../../../../shared/constants/app")
                      , l = e("../../../../shared/constants/metametrics")
                      , c = e("../../../../shared/constants/network")
                      , u = e("../../../../shared/lib/ui-utils")
                      , d = k(e("../../../components/app/srp-quiz-modal/SRPQuiz"))
                      , p = e("../../../components/component-library")
                      , f = k(e("../../../components/ui/text-field"))
                      , m = k(e("../../../components/ui/toggle-button"))
                      , g = k(e("../../../components/ui/popover"))
                      , h = e("../../../helpers/constants/design-system")
                      , y = e("../../../helpers/constants/routes")
                      , _ = e("../../../helpers/utils/settings-search")
                      , v = k(e("../../../components/app/incoming-trasaction-toggle/incoming-transaction-toggle"))
                      , b = e("../../../store/actions")
                      , E = k(e("./metametrics-toggle"))
                      , T = k(e("./profile-sync-toggle"))
                      , w = k(e("./delete-metametrics-data-button"));
                    function x(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (x = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function k(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function C(e, t, n) {
                        return (t = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e)
                                    return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var a = n.call(e, t || "default");
                                    if ("object" != typeof a)
                                        return a;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(t))in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n,
                        e
                    }
                    class S extends o.PureComponent {
                        constructor(...e) {
                            super(...e),
                            C(this, "state", {
                                ipfsGateway: this.props.ipfsGateway || c.IPFS_DEFAULT_GATEWAY_URL,
                                ipfsGatewayError: "",
                                srpQuizModalVisible: !1,
                                showDataCollectionDisclaimer: !1,
                                ipfsToggle: this.props.ipfsGateway.length > 0
                            }),
                            C(this, "settingsRefCounter", 0),
                            C(this, "settingsRefs", Array((0,
                            _.getNumberOfSettingRoutesInTab)(this.context.t, this.context.t("securityAndPrivacy"))).fill(undefined).map(( () => o.default.createRef()))),
                            C(this, "hideSrpQuizModal", ( () => this.setState({
                                srpQuizModalVisible: !1
                            }))),
                            C(this, "renderDataCollectionWarning", ( () => {
                                const {t: e} = this.context;
                                return o.default.createElement(g.default, {
                                    wrapTitle: !0,
                                    centerTitle: !0,
                                    onClose: () => this.setState({
                                        showDataCollectionDisclaimer: !1
                                    }),
                                    title: o.default.createElement(p.Icon, {
                                        size: p.IconSize.Xl,
                                        name: p.IconName.Danger,
                                        color: h.IconColor.warningDefault
                                    }),
                                    footer: o.default.createElement(p.Button, {
                                        width: h.BlockSize.Full,
                                        type: "primary",
                                        onClick: () => this.setState({
                                            showDataCollectionDisclaimer: !1
                                        })
                                    }, e("dataCollectionWarningPopoverButton"))
                                }, o.default.createElement(p.Box, {
                                    display: h.Display.Flex,
                                    flexDirection: h.FlexDirection.Column,
                                    gap: 2,
                                    margin: 4
                                }, o.default.createElement(p.Text, null, e("dataCollectionWarningPopoverDescription"))))
                            }
                            ))
                        }
                        componentDidUpdate(e) {
                            const {t: t} = this.context;
                            (0,
                            _.handleSettingsRefs)(t, t("securityAndPrivacy"), this.settingsRefs),
                            !0 === e.dataCollectionForMarketing && !0 === this.props.participateInMetaMetrics && !1 === this.props.dataCollectionForMarketing && this.setState({
                                showDataCollectionDisclaimer: !0
                            })
                        }
                        async componentDidMount() {
                            const {t: e} = this.context;
                            (0,
                            _.handleSettingsRefs)(e, e("securityAndPrivacy"), this.settingsRefs),
                            this.props.metaMetricsDataDeletionId && await (0,
                            b.updateDataDeletionTaskStatus)()
                        }
                        toggleSetting(e, t, n, a) {
                            this.context.trackEvent({
                                category: l.MetaMetricsEventCategory.Settings,
                                event: t,
                                properties: {
                                    action: n,
                                    legacy_event: !0
                                }
                            }),
                            a(!e)
                        }
                        renderSeedWords() {
                            return;
                        }
                        renderSecurityAlertsToggle() {
                            const {t: e} = this.context
                              , {securityAlertsEnabled: t} = this.props;
                            return o.default.createElement(o.default.Fragment, null, o.default.createElement("div", {
                                ref: this.settingsRefs[16]
                            }, o.default.createElement("span", {
                                className: "settings-page__security-tab-sub-header"
                            }, e("securityAlerts"))), o.default.createElement("div", {
                                className: "settings-page__content-padded"
                            }, o.default.createElement(p.Box, {
                                ref: this.settingsRefs[3],
                                className: "settings-page__content-row",
                                display: h.Display.Flex,
                                flexDirection: h.FlexDirection.Row,
                                justifyContent: h.JustifyContent.spaceBetween,
                                gap: 4
                            }, o.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, o.default.createElement("div", {
                                className: "settings-page__content-description"
                            }, e("securityAlertsDescription", [o.default.createElement("a", {
                                key: "learn_more_link",
                                href: u.SECURITY_ALERTS_LEARN_MORE_LINK,
                                rel: "noreferrer",
                                target: "_blank"
                            }, e("learnMoreUpperCase"))]))), o.default.createElement("div", {
                                className: "settings-page__content-item-col",
                                "data-testid": "securityAlert"
                            }, o.default.createElement(m.default, {
                                value: t,
                                onToggle: this.toggleSecurityAlert.bind(this),
                                offLabel: e("off"),
                                onLabel: e("on")
                            })))))
                        }
                        renderIncomingTransactionsOptIn() {
                            const {incomingTransactionsPreferences: e, networkConfigurations: t, setIncomingTransactionsPreferences: n} = this.props;
                            return o.default.createElement(v.default, {
                                wrapperRef: this.settingsRefs[2],
                                networkConfigurations: t,
                                setIncomingTransactionsPreferences: n,
                                incomingTransactionsPreferences: e
                            })
                        }
                        renderPhishingDetectionToggle() {
                            const {t: e} = this.context
                              , {usePhishDetect: t, setUsePhishDetect: n} = this.props;
                            return o.default.createElement(p.Box, {
                                ref: this.settingsRefs[3],
                                className: "settings-page__content-row",
                                display: h.Display.Flex,
                                flexDirection: h.FlexDirection.Row,
                                justifyContent: h.JustifyContent.spaceBetween,
                                gap: 4
                            }, o.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, o.default.createElement("span", null, e("usePhishingDetection")), o.default.createElement("div", {
                                className: "settings-page__content-description"
                            }, e("usePhishingDetectionDescription"))), o.default.createElement("div", {
                                className: "settings-page__content-item-col",
                                "data-testid": "usePhishingDetection"
                            }, o.default.createElement(m.default, {
                                value: t,
                                onToggle: e => n(!e),
                                offLabel: e("off"),
                                onLabel: e("on")
                            })))
                        }
                        renderUse4ByteResolutionToggle() {
                            const {t: e} = this.context
                              , {use4ByteResolution: t, setUse4ByteResolution: n} = this.props;
                            return o.default.createElement(p.Box, {
                                ref: this.settingsRefs[4],
                                className: "settings-page__content-row",
                                display: h.Display.Flex,
                                flexDirection: h.FlexDirection.Row,
                                justifyContent: h.JustifyContent.spaceBetween,
                                gap: 4
                            }, o.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, o.default.createElement("span", null, e("use4ByteResolution")), o.default.createElement("div", {
                                className: "settings-page__content-description"
                            }, e("use4ByteResolutionDescription"))), o.default.createElement("div", {
                                className: "settings-page__content-item-col",
                                "data-testid": "4byte-resolution-container"
                            }, o.default.createElement(m.default, {
                                value: t,
                                onToggle: e => n(!e),
                                offLabel: e("off"),
                                onLabel: e("on")
                            })))
                        }
                        renderDataCollectionForMarketing() {
                            const {t: e} = this.context
                              , {dataCollectionForMarketing: t, participateInMetaMetrics: n, setDataCollectionForMarketing: a, setParticipateInMetaMetrics: s} = this.props;
                            return o.default.createElement(p.Box, {
                                ref: this.settingsRefs[19],
                                className: "settings-page__content-row",
                                display: h.Display.Flex,
                                flexDirection: h.FlexDirection.Row,
                                justifyContent: h.JustifyContent.spaceBetween,
                                gap: 4
                            }, o.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, o.default.createElement("span", null, e("dataCollectionForMarketing")), o.default.createElement("div", {
                                className: "settings-page__content-description"
                            }, o.default.createElement("span", null, e("dataCollectionForMarketingDescription")))), o.default.createElement("div", {
                                className: "settings-page__content-item-col",
                                "data-testid": "dataCollectionForMarketing"
                            }, o.default.createElement(m.default, {
                                value: t,
                                onToggle: e => {
                                    const t = Boolean(!e);
                                    a(t),
                                    n ? this.context.trackEvent({
                                        category: l.MetaMetricsEventCategory.Settings,
                                        event: l.MetaMetricsEventName.AnalyticsPreferenceSelected,
                                        properties: {
                                            is_metrics_opted_in: !0,
                                            has_marketing_consent: Boolean(t),
                                            location: "Settings"
                                        }
                                    }) : s(!0)
                                }
                                ,
                                offLabel: e("off"),
                                onLabel: e("on")
                            })))
                        }
                        renderChooseYourNetworkButton() {
                            const {t: e} = this.context;
                            return o.default.createElement(p.Box, {
                                className: "settings-page__content-row",
                                "data-testid": "advanced-setting-choose-your-network",
                                display: h.Display.Flex,
                                flexDirection: h.FlexDirection.Column,
                                gap: 4
                            }, o.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, o.default.createElement("span", null, e("chooseYourNetwork")), o.default.createElement("div", {
                                className: "settings-page__content-description"
                            }, e("chooseYourNetworkDescription", [o.default.createElement("a", {
                                href: u.CONSENSYS_PRIVACY_LINK,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                key: "cyn-consensys-privacy-link"
                            }, e("privacyMsg"))]))), o.default.createElement("div", {
                                className: "settings-page__content-item-col"
                            }, o.default.createElement(p.Button, {
                                type: "secondary",
                                className: "settings-page__button",
                                onClick: () => {
                                    (0,
                                    r.getEnvironmentType)() === i.ENVIRONMENT_TYPE_POPUP ? global.platform.openExtensionInBrowser(y.ADD_POPULAR_CUSTOM_NETWORK) : this.props.history.push(y.ADD_POPULAR_CUSTOM_NETWORK)
                                }
                            }, e("addCustomNetwork"))))
                        }
                        renderSafeChainsListValidationToggle() {
                            const {t: e} = this.context
                              , {useSafeChainsListValidation: t, setUseSafeChainsListValidation: n} = this.props
                              , a = e("useSafeChainsListValidationWebsite");
                            return o.default.createElement(p.Box, {
                                ref: this.settingsRefs[14],
                                className: "settings-page__content-row",
                                "data-testid": "setting-safe-chains-validation",
                                display: h.Display.Flex,
                                flexDirection: h.FlexDirection.Column,
                                gap: 4
                            }, o.default.createElement(p.Box, {
                                className: "settings-page__content-row",
                                gap: 4,
                                display: h.Display.Flex,
                                flexDirection: h.FlexDirection.Row,
                                justifyContent: h.JustifyContent.spaceBetween
                            }, o.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, o.default.createElement("span", null, e("useSafeChainsListValidation")), o.default.createElement("div", {
                                className: "settings-page__content-description"
                            }, e("useSafeChainsListValidationDescription", [o.default.createElement("b", {
                                key: "safechain-list-validation-website"
                            }, a)]))), o.default.createElement("div", {
                                className: "settings-page__content-item-col",
                                "data-testid": "useSafeChainsListValidation"
                            }, o.default.createElement(m.default, {
                                value: t,
                                onToggle: e => n(!e),
                                offLabel: e("off"),
                                onLabel: e("on")
                            }))))
                        }
                        renderIpfsGatewayControl() {
                            const {t: e} = this.context;
                            let t = "";
                            const n = n => {
                                if (n.length > 0)
                                    try {
                                        const a = (0,
                                        r.addUrlProtocolPrefix)(n);
                                        a || (t = e("invalidIpfsGateway"));
                                        const s = new URL(a);
                                        "gateway.ipfs.io" === s.host && (t = e("forbiddenIpfsGateway")),
                                        0 === t.length && this.props.setIpfsGateway(s.host)
                                    } catch (n) {
                                        t = e("invalidIpfsGateway")
                                    }
                                else
                                    t = e("invalidIpfsGateway");
                                this.setState({
                                    ipfsGateway: n,
                                    ipfsGatewayError: t
                                })
                            }
                            ;
                            return o.default.createElement(p.Box, {
                                ref: this.settingsRefs[7],
                                className: "settings-page__content-row",
                                "data-testid": "setting-ipfs-gateway",
                                display: h.Display.Flex,
                                flexDirection: h.FlexDirection.Column,
                                gap: 4
                            }, o.default.createElement(p.Box, {
                                className: "settings-page__content-row",
                                gap: 4,
                                display: h.Display.Flex,
                                flexDirection: h.FlexDirection.Row,
                                justifyContent: h.JustifyContent.spaceBetween
                            }, o.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, o.default.createElement("span", null, e("ipfsGateway")), o.default.createElement("div", {
                                className: "settings-page__content-description"
                            }, e("ipfsGatewayDescription"))), o.default.createElement("div", {
                                className: "settings-page__content-item-col",
                                "data-testid": "ipfsToggle"
                            }, o.default.createElement(m.default, {
                                value: this.state.ipfsToggle,
                                onToggle: e => {
                                    e ? (this.props.setIsIpfsGatewayEnabled(!1),
                                    this.props.setIpfsGateway("")) : (this.props.setIsIpfsGatewayEnabled(!0),
                                    n(this.state.ipfsGateway)),
                                    this.setState({
                                        ipfsToggle: !e
                                    })
                                }
                                ,
                                offLabel: e("off"),
                                onLabel: e("on")
                            }))), this.state.ipfsToggle && o.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, o.default.createElement("span", null, e("addIPFSGateway")), o.default.createElement("div", {
                                className: "settings-page__content-item-col"
                            }, o.default.createElement(f.default, {
                                type: "text",
                                value: this.state.ipfsGateway,
                                onChange: e => n(e.target.value),
                                error: this.state.ipfsGatewayError,
                                fullWidth: !0,
                                margin: "dense"
                            }))), o.default.createElement(p.Box, {
                                className: "settings-page__content-row",
                                display: h.Display.Flex,
                                flexDirection: h.FlexDirection.Row,
                                justifyContent: h.JustifyContent.spaceBetween,
                                gap: 4,
                                ref: this.settingsRefs[11],
                                marginTop: 3,
                                id: "ens-domains"
                            }, o.default.createElement("div", null, e("ensDomainsSettingTitle"), o.default.createElement("div", {
                                className: "settings-page__content-description"
                            }, o.default.createElement(p.Text, {
                                color: h.TextColor.inherit,
                                variant: h.TextVariant.inherit
                            }, e("ensDomainsSettingDescriptionIntroduction")), o.default.createElement(p.Box, {
                                as: "ul",
                                marginTop: 4,
                                marginBottom: 4,
                                paddingInlineStart: 4,
                                style: {
                                    listStyleType: "circle"
                                }
                            }, o.default.createElement(p.Text, {
                                as: "li",
                                color: h.TextColor.inherit,
                                variant: h.TextVariant.inherit
                            }, e("ensDomainsSettingDescriptionPart1")), o.default.createElement(p.Text, {
                                as: "li",
                                color: h.TextColor.inherit,
                                variant: h.TextVariant.inherit
                            }, e("ensDomainsSettingDescriptionPart2"))), o.default.createElement(p.Text, {
                                color: h.TextColor.inherit,
                                variant: h.TextVariant.inherit
                            }, e("ensDomainsSettingDescriptionOutroduction")))), o.default.createElement("div", {
                                className: "settings-page__content-item-col",
                                "data-testid": "ipfs-gateway-resolution-container"
                            }, o.default.createElement(m.default, {
                                value: this.props.useAddressBarEnsResolution,
                                onToggle: e => this.props.setUseAddressBarEnsResolution(!e),
                                offLabel: e("off"),
                                onLabel: e("on")
                            }))))
                        }
                        renderAutoDetectTokensToggle() {
                            const {t: e} = this.context
                              , {useTokenDetection: t, setUseTokenDetection: n} = this.props;
                            return o.default.createElement(p.Box, {
                                ref: this.settingsRefs[8],
                                className: "settings-page__content-row",
                                "data-testid": "advanced-setting-gas-fee-estimation",
                                display: h.Display.Flex,
                                flexDirection: h.FlexDirection.Row,
                                justifyContent: h.JustifyContent.spaceBetween,
                                gap: 4,
                                id: "advanced-settings-autodetect-tokens"
                            }, o.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, o.default.createElement("span", null, e("autoDetectTokens")), o.default.createElement("div", {
                                className: "settings-page__content-description"
                            }, e("autoDetectTokensDescription", [o.default.createElement("a", {
                                href: u.AUTO_DETECT_TOKEN_LEARN_MORE_LINK,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                key: "cyn-consensys-privacy-link"
                            }, (0,
                            a.startCase)(e("learnMore")))]))), o.default.createElement("div", {
                                className: "settings-page__content-item-col",
                                "data-testid": "autoDetectTokens"
                            }, o.default.createElement(m.default, {
                                value: t,
                                onToggle: e => {
                                    this.toggleSetting(e, l.MetaMetricsEventName.KeyAutoDetectTokens, l.MetaMetricsEventName.KeyAutoDetectTokens, n)
                                }
                                ,
                                offLabel: e("off"),
                                onLabel: e("on")
                            })))
                        }
                        renderBatchAccountBalanceRequestsToggle() {
                            const {t: e} = this.context
                              , {useMultiAccountBalanceChecker: t, setUseMultiAccountBalanceChecker: n} = this.props;
                            return o.default.createElement(p.Box, {
                                ref: this.settingsRefs[9],
                                className: "settings-page__content-row",
                                display: h.Display.Flex,
                                flexDirection: h.FlexDirection.Row,
                                justifyContent: h.JustifyContent.spaceBetween,
                                gap: 4
                            }, o.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, o.default.createElement("span", null, e("useMultiAccountBalanceChecker")), o.default.createElement("div", {
                                className: "settings-page__content-description"
                            }, e("useMultiAccountBalanceCheckerSettingDescription"))), o.default.createElement("div", {
                                className: "settings-page__content-item-col",
                                "data-testid": "useMultiAccountBalanceChecker"
                            }, o.default.createElement(m.default, {
                                value: t,
                                onToggle: e => {
                                    this.toggleSetting(e, l.MetaMetricsEventName.KeyBatchAccountBalanceRequests, l.MetaMetricsEventName.KeyBatchAccountBalanceRequests, n)
                                }
                                ,
                                offLabel: e("off"),
                                onLabel: e("on")
                            })))
                        }
                        renderCurrencyRateCheckToggle() {
                            const {t: e} = this.context
                              , {useCurrencyRateCheck: t, setUseCurrencyRateCheck: n} = this.props;
                            return o.default.createElement(p.Box, {
                                ref: this.settingsRefs[10],
                                className: "settings-page__content-row",
                                display: h.Display.Flex,
                                flexDirection: h.FlexDirection.Row,
                                justifyContent: h.JustifyContent.spaceBetween,
                                gap: 4
                            }, o.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, o.default.createElement("span", null, e("currencyRateCheckToggle")), o.default.createElement("div", {
                                className: "settings-page__content-description"
                            }, e("currencyRateCheckToggleDescription", [o.default.createElement("a", {
                                key: "coingecko_link",
                                href: u.COINGECKO_LINK,
                                rel: "noreferrer",
                                target: "_blank"
                            }, e("coingecko")), o.default.createElement("a", {
                                key: "cryptocompare_link",
                                href: u.CRYPTOCOMPARE_LINK,
                                rel: "noreferrer",
                                target: "_blank"
                            }, e("cryptoCompare")), o.default.createElement("a", {
                                key: "privacy_policy_link",
                                href: u.PRIVACY_POLICY_LINK,
                                rel: "noreferrer",
                                target: "_blank"
                            }, e("privacyMsg"))]))), o.default.createElement("div", {
                                className: "settings-page__content-item-col",
                                "data-testid": "currencyRateCheckToggle"
                            }, o.default.createElement(m.default, {
                                value: t,
                                onToggle: e => n(!e),
                                offLabel: e("off"),
                                onLabel: e("on")
                            })))
                        }
                        renderDisplayNftMediaToggle() {
                            const {t: e} = this.context
                              , {openSeaEnabled: t, setOpenSeaEnabled: n, useNftDetection: a, setUseNftDetection: s} = this.props;
                            return o.default.createElement(p.Box, {
                                ref: this.settingsRefs[12],
                                className: "settings-page__content-row",
                                display: h.Display.Flex,
                                flexDirection: h.FlexDirection.Row,
                                justifyContent: h.JustifyContent.spaceBetween,
                                gap: 4,
                                id: "display-nft-media"
                            }, o.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, o.default.createElement("span", null, e("displayNftMedia")), o.default.createElement("div", {
                                className: "settings-page__content-description"
                            }, e("displayNftMediaDescription"))), o.default.createElement("div", {
                                className: "settings-page__content-item-col",
                                "data-testid": "displayNftMedia"
                            }, o.default.createElement(m.default, {
                                value: t,
                                onToggle: e => {
                                    this.context.trackEvent({
                                        category: l.MetaMetricsEventCategory.Settings,
                                        event: "Enabled/Disable OpenSea",
                                        properties: {
                                            action: "Enabled/Disable OpenSea",
                                            legacy_event: !0
                                        }
                                    }),
                                    e && a && s(!1),
                                    n(!e)
                                }
                                ,
                                offLabel: e("off"),
                                onLabel: e("on")
                            })))
                        }
                        renderNftDetectionToggle() {
                            const {t: e} = this.context
                              , {openSeaEnabled: t, setOpenSeaEnabled: n, useNftDetection: a, setUseNftDetection: s} = this.props;
                            return o.default.createElement(p.Box, {
                                ref: this.settingsRefs[13],
                                className: "settings-page__content-row",
                                display: h.Display.Flex,
                                flexDirection: h.FlexDirection.Row,
                                justifyContent: h.JustifyContent.spaceBetween,
                                gap: 4
                            }, o.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, o.default.createElement("span", null, e("useNftDetection")), o.default.createElement("div", {
                                className: "settings-page__content-description"
                            }, e("useNftDetectionDescriptionText"))), o.default.createElement("div", {
                                className: "settings-page__content-item-col",
                                "data-testid": "useNftDetection"
                            }, o.default.createElement(m.default, {
                                value: a,
                                onToggle: e => {
                                    this.context.trackEvent({
                                        category: l.MetaMetricsEventCategory.Settings,
                                        event: "NFT Detected",
                                        properties: {
                                            action: "NFT Detected",
                                            legacy_event: !0
                                        }
                                    }),
                                    e || t || n(!e),
                                    s(!e)
                                }
                                ,
                                offLabel: e("off"),
                                onLabel: e("on")
                            })))
                        }
                        renderExternalNameSourcesToggle() {
                            const {t: e} = this.context
                              , {useExternalNameSources: t, setUseExternalNameSources: n} = this.props;
                            return o.default.createElement(p.Box, {
                                ref: this.settingsRefs[15],
                                className: "settings-page__content-row",
                                display: h.Display.Flex,
                                flexDirection: h.FlexDirection.Row,
                                justifyContent: h.JustifyContent.spaceBetween,
                                gap: 4
                            }, o.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, o.default.createElement("span", null, e("externalNameSourcesSetting")), o.default.createElement("div", {
                                className: "settings-page__content-description"
                            }, e("externalNameSourcesSettingDescription"))), o.default.createElement("div", {
                                className: "settings-page__content-item-col",
                                "data-testid": "useExternalNameSources"
                            }, o.default.createElement(m.default, {
                                value: t,
                                onToggle: e => n(!e),
                                offLabel: e("off"),
                                onLabel: e("on")
                            })))
                        }
                        renderSimulationsToggle() {
                            const {t: e} = this.context
                              , {useTransactionSimulations: t, setUseTransactionSimulations: n} = this.props;
                            return o.default.createElement(p.Box, {
                                ref: this.settingsRefs[17],
                                className: "settings-page__content-row",
                                display: h.Display.Flex,
                                flexDirection: h.FlexDirection.Row,
                                justifyContent: h.JustifyContent.spaceBetween,
                                gap: 4
                            }, o.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, o.default.createElement("span", null, e("simulationsSettingSubHeader")), o.default.createElement("div", {
                                className: "settings-page__content-description"
                            }, e("simulationsSettingDescription", [o.default.createElement("a", {
                                key: "learn_more_link",
                                href: u.TRANSACTION_SIMULATIONS_LEARN_MORE_LINK,
                                rel: "noreferrer",
                                target: "_blank"
                            }, e("learnMoreUpperCase"))]))), o.default.createElement("div", {
                                className: "settings-page__content-item-col",
                                "data-testid": "useTransactionSimulations"
                            }, o.default.createElement(m.default, {
                                value: t,
                                onToggle: e => n(!e),
                                offLabel: e("off"),
                                onLabel: e("on")
                            })))
                        }
                        toggleSecurityAlert(e) {
                            const t = !e
                              , {setSecurityAlertsEnabled: n} = this.props;
                            this.context.trackEvent({
                                category: l.MetaMetricsEventCategory.Settings,
                                event: l.MetaMetricsEventName.SettingsUpdated,
                                properties: {
                                    blockaid_alerts_enabled: t
                                }
                            }),
                            n(t)
                        }
                        renderUseExternalServices() {
                            const {t: e} = this.context
                              , {useExternalServices: t, toggleExternalServices: n, setBasicFunctionalityModalOpen: a} = this.props;
                            return o.default.createElement(p.Box, {
                                ref: this.settingsRefs[0],
                                className: "settings-page__content-row",
                                display: h.Display.Flex,
                                flexDirection: h.FlexDirection.Row,
                                justifyContent: h.JustifyContent.spaceBetween,
                                gap: 4,
                                "data-testid": "advanced-setting-show-testnet-conversion"
                            }, o.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, o.default.createElement("span", null, e("basicConfigurationLabel")), o.default.createElement("div", {
                                className: "settings-page__content-description"
                            }, e("basicConfigurationDescription", [o.default.createElement("a", {
                                href: "https://consensys.io/privacy-policy",
                                key: "link",
                                target: "_blank",
                                rel: "noreferrer noopener"
                            }, e("privacyMsg"))]))), o.default.createElement("div", {
                                className: "settings-page__content-item-col"
                            }, o.default.createElement(m.default, {
                                value: t,
                                onToggle: () => {
                                    t ? a() : (n(!0),
                                    this.context.trackEvent({
                                        category: l.MetaMetricsEventCategory.Settings,
                                        event: l.MetaMetricsEventName.SettingsUpdated,
                                        properties: {
                                            settings_group: "security_privacy",
                                            settings_type: "basic_functionality",
                                            old_value: !1,
                                            new_value: !0,
                                            was_notifications_on: !1,
                                            was_profile_syncing_on: !1
                                        }
                                    }))
                                }
                                ,
                                offLabel: e("off"),
                                onLabel: e("on")
                            })))
                        }
                        render() {
                            const {petnamesEnabled: e, dataCollectionForMarketing: t, setDataCollectionForMarketing: n} = this.props
                              , {showDataCollectionDisclaimer: a} = this.state;
                            return o.default.createElement("div", {
                                className: "settings-page__body"
                            }, this.renderUseExternalServices(), a ? this.renderDataCollectionWarning() : null, o.default.createElement("span", {
                                className: "settings-page__security-tab-sub-header__bold"
                            }, this.context.t("security")), this.renderSeedWords(), this.renderSecurityAlertsToggle(), o.default.createElement("span", {
                                className: "settings-page__security-tab-sub-header__bold"
                            }, this.context.t("privacy")), o.default.createElement("div", {
                                className: "settings-page__content-padded"
                            }, o.default.createElement(T.default, null)), o.default.createElement("div", null, o.default.createElement("span", {
                                className: "settings-page__security-tab-sub-header"
                            }, this.context.t("alerts"))), o.default.createElement("div", {
                                className: "settings-page__content-padded"
                            }, this.renderPhishingDetectionToggle()), o.default.createElement("div", null, o.default.createElement("span", {
                                className: "settings-page__security-tab-sub-header"
                            }, this.context.t("smartContracts"))), o.default.createElement("div", {
                                className: "settings-page__content-padded"
                            }, this.renderUse4ByteResolutionToggle()), o.default.createElement("span", {
                                className: "settings-page__security-tab-sub-header"
                            }, this.context.t("transactions")), o.default.createElement("div", {
                                className: "settings-page__content-padded"
                            }, this.renderCurrencyRateCheckToggle(), this.renderIncomingTransactionsOptIn(), this.renderSimulationsToggle()), o.default.createElement("span", {
                                className: "settings-page__security-tab-sub-header",
                                ref: this.settingsRefs[6]
                            }, this.context.t("networkProvider")), o.default.createElement("div", {
                                className: "settings-page__content-padded"
                            }, this.renderChooseYourNetworkButton(), this.renderSafeChainsListValidationToggle(), this.renderIpfsGatewayControl()), o.default.createElement("span", {
                                className: "settings-page__security-tab-sub-header"
                            }, this.context.t("tokenAutoDetection")), o.default.createElement("div", {
                                className: "settings-page__content-padded"
                            }, this.renderAutoDetectTokensToggle(), this.renderBatchAccountBalanceRequestsToggle(), this.renderDisplayNftMediaToggle(), this.renderNftDetectionToggle()), e && o.default.createElement(o.default.Fragment, null, o.default.createElement("span", {
                                className: "settings-page__security-tab-sub-header"
                            }, this.context.t("settingsSubHeadingSignaturesAndTransactions")), o.default.createElement("div", {
                                className: "settings-page__content-padded"
                            }, this.renderExternalNameSourcesToggle())), o.default.createElement("span", {
                                className: "settings-page__security-tab-sub-header"
                            }, this.context.t("metrics")), o.default.createElement("div", {
                                className: "settings-page__content-padded"
                            }, o.default.createElement(E.default, {
                                dataCollectionForMarketing: t,
                                setDataCollectionForMarketing: n
                            }), this.renderDataCollectionForMarketing(), o.default.createElement(w.default, {
                                ref: this.settingsRefs[20]
                            })))
                        }
                    }
                    n.default = S,
                    C(S, "contextTypes", {
                        t: s.default.func,
                        trackEvent: s.default.func
                    }),
                    C(S, "propTypes", {
                        history: s.default.object,
                        openSeaEnabled: s.default.bool,
                        setOpenSeaEnabled: s.default.func,
                        useNftDetection: s.default.bool,
                        setUseNftDetection: s.default.func,
                        dataCollectionForMarketing: s.default.bool,
                        setDataCollectionForMarketing: s.default.func.isRequired,
                        participateInMetaMetrics: s.default.bool.isRequired,
                        setParticipateInMetaMetrics: s.default.func.isRequired,
                        incomingTransactionsPreferences: s.default.object.isRequired,
                        networkConfigurations: s.default.object.isRequired,
                        setIncomingTransactionsPreferences: s.default.func.isRequired,
                        setUsePhishDetect: s.default.func.isRequired,
                        usePhishDetect: s.default.bool.isRequired,
                        setUse4ByteResolution: s.default.func.isRequired,
                        use4ByteResolution: s.default.bool.isRequired,
                        useTokenDetection: s.default.bool.isRequired,
                        setUseTokenDetection: s.default.func.isRequired,
                        setIpfsGateway: s.default.func.isRequired,
                        setIsIpfsGatewayEnabled: s.default.func.isRequired,
                        ipfsGateway: s.default.string.isRequired,
                        useMultiAccountBalanceChecker: s.default.bool.isRequired,
                        setUseMultiAccountBalanceChecker: s.default.func.isRequired,
                        useSafeChainsListValidation: s.default.bool.isRequired,
                        setUseSafeChainsListValidation: s.default.func.isRequired,
                        useCurrencyRateCheck: s.default.bool.isRequired,
                        setUseCurrencyRateCheck: s.default.func.isRequired,
                        useAddressBarEnsResolution: s.default.bool.isRequired,
                        setUseAddressBarEnsResolution: s.default.func.isRequired,
                        useExternalNameSources: s.default.bool.isRequired,
                        setUseExternalNameSources: s.default.func.isRequired,
                        setBasicFunctionalityModalOpen: s.default.func.isRequired,
                        setUseTransactionSimulations: s.default.func.isRequired,
                        useTransactionSimulations: s.default.bool.isRequired,
                        petnamesEnabled: s.default.bool.isRequired,
                        securityAlertsEnabled: s.default.bool,
                        useExternalServices: s.default.bool,
                        toggleExternalServices: s.default.func.isRequired,
                        setSecurityAlertsEnabled: s.default.func,
                        metaMetricsDataDeletionId: s.default.string
                    })
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/security-tab/security-tab.component.js"
}], [6891, {
    "../../../../shared/modules/selectors/networks": 5320,
    "../../../ducks/app/app": 6223,
    "../../../selectors/selectors": 6993,
    "../../../store/actions": 7e3,
    "./security-tab.component": 6890,
    "react-redux": 4734,
    "react-router-dom": 4761,
    redux: 4794
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a, s = e("react-redux"), o = e("react-router-dom"), r = e("redux"), i = e("../../../store/actions"), l = e("../../../selectors/selectors"), c = e("../../../../shared/modules/selectors/networks"), u = e("../../../ducks/app/app"), d = (a = e("./security-tab.component")) && a.__esModule ? a : {
                        default: a
                    };
                    n.default = (0,
                    r.compose)(o.withRouter, (0,
                    s.connect)((e => {
                        const {metamask: t} = e
                          , n = (0,
                        l.getPetnamesEnabled)(e)
                          , {incomingTransactionsPreferences: a, participateInMetaMetrics: s, dataCollectionForMarketing: o, usePhishDetect: r, useTokenDetection: i, ipfsGateway: u, useMultiAccountBalanceChecker: d, useSafeChainsListValidation: p, useCurrencyRateCheck: f, useAddressBarEnsResolution: m, openSeaEnabled: g, useNftDetection: h, use4ByteResolution: y, useExternalServices: _, useExternalNameSources: v} = t;
                        return {
                            incomingTransactionsPreferences: a,
                            networkConfigurations: (0,
                            c.getNetworkConfigurationsByChainId)(e),
                            participateInMetaMetrics: s,
                            dataCollectionForMarketing: o,
                            usePhishDetect: r,
                            useTokenDetection: i,
                            ipfsGateway: u,
                            useMultiAccountBalanceChecker: d,
                            useSafeChainsListValidation: p,
                            useCurrencyRateCheck: f,
                            useAddressBarEnsResolution: m,
                            openSeaEnabled: g,
                            useNftDetection: h,
                            use4ByteResolution: y,
                            useExternalNameSources: v,
                            useExternalServices: _,
                            petnamesEnabled: n,
                            securityAlertsEnabled: (0,
                            l.getIsSecurityAlertsEnabled)(e),
                            useTransactionSimulations: t.useTransactionSimulations,
                            metaMetricsDataDeletionId: (0,
                            l.getMetaMetricsDataDeletionId)(e)
                        }
                    }
                    ), (e => ({
                        setIncomingTransactionsPreferences: (t, n) => e((0,
                        i.setIncomingTransactionsPreferences)(t, n)),
                        setParticipateInMetaMetrics: t => e((0,
                        i.setParticipateInMetaMetrics)(t)),
                        setDataCollectionForMarketing: t => e((0,
                        i.setDataCollectionForMarketing)(t)),
                        setUsePhishDetect: t => e((0,
                        i.setUsePhishDetect)(t)),
                        setUseCurrencyRateCheck: t => e((0,
                        i.setUseCurrencyRateCheck)(t)),
                        setUseTokenDetection: t => e((0,
                        i.setUseTokenDetection)(t)),
                        setIpfsGateway: t => e((0,
                        i.setIpfsGateway)(t)),
                        setIsIpfsGatewayEnabled: t => e((0,
                        i.setIsIpfsGatewayEnabled)(t)),
                        setUseMultiAccountBalanceChecker: t => e((0,
                        i.setUseMultiAccountBalanceChecker)(t)),
                        setUseAddressBarEnsResolution: t => e((0,
                        i.setUseAddressBarEnsResolution)(t)),
                        setUseSafeChainsListValidation: t => e((0,
                        i.setUseSafeChainsListValidation)(t)),
                        setBasicFunctionalityModalOpen: () => e((0,
                        u.openBasicFunctionalityModal)()),
                        setOpenSeaEnabled: t => e((0,
                        i.setOpenSeaEnabled)(t)),
                        setUseNftDetection: t => e((0,
                        i.setUseNftDetection)(t)),
                        setUse4ByteResolution: t => e((0,
                        i.setUse4ByteResolution)(t)),
                        setUseExternalNameSources: t => e((0,
                        i.setUseExternalNameSources)(t)),
                        toggleExternalServices: t => e((0,
                        i.toggleExternalServices)(t)),
                        setUseTransactionSimulations: t => e((0,
                        i.setUseTransactionSimulations)(t)),
                        updateDataDeletionTaskStatus: () => (0,
                        i.updateDataDeletionTaskStatus)(),
                        setSecurityAlertsEnabled: e => (0,
                        i.setSecurityAlertsEnabled)(e)
                    }))))(d.default)
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/security-tab/security-tab.container.js"
}], [6892, {
    "./settings-search-list": 6893
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a, s = (a = e("./settings-search-list")) && a.__esModule ? a : {
                        default: a
                    };
                    n.default = s.default
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/settings-search-list/index.js"
}], [6893, {
    "../../../components/component-library": 5806,
    "../../../contexts/i18n": 6211,
    "../../../helpers/constants/design-system": 6248,
    "../../../helpers/utils/settings-search": 6291,
    classnames: 3584,
    "prop-types": 4528,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = p;
                    var a = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = d(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , s = u(e("prop-types"))
                      , o = u(e("classnames"))
                      , r = e("../../../helpers/utils/settings-search")
                      , i = e("../../../contexts/i18n")
                      , l = e("../../../components/component-library")
                      , c = e("../../../helpers/constants/design-system");
                    function u(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function d(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (d = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function p({results: e, onClickSetting: t}) {
                        const n = (0,
                        a.useContext)(i.I18nContext);
                        return (0,
                        a.useEffect)(r.highlightSearchedText, [e]),
                        a.default.createElement("div", {
                            className: "settings-page__header__search__list"
                        }, e.slice(0, 5).map((e => {
                            const {icon: s, iconName: r, tabMessage: i, sectionMessage: u, route: d} = e;
                            return Boolean(s || i || u) && a.default.createElement("div", {
                                key: `settings_${d}`
                            }, a.default.createElement("div", {
                                className: "settings-page__header__search__list__item",
                                onClick: () => t(e)
                            }, r ? a.default.createElement(l.Icon, {
                                name: r
                            }) : a.default.createElement("i", {
                                className: (0,
                                o.default)("settings-page__header__search__list__item__icon", s)
                            }), a.default.createElement("span", {
                                id: `menu-tab_${d}`,
                                className: (0,
                                o.default)("settings-page__header__search__list__item__tab", {
                                    "settings-page__header__search__list__item__tab-multiple-lines": i(n) === n("securityAndPrivacy")
                                })
                            }, i(n)), a.default.createElement(l.Icon, {
                                name: l.IconName.ArrowRight,
                                size: c.Size.SM,
                                className: "settings-page__header__search__list__item__caret"
                            }), a.default.createElement("span", {
                                id: `menu-section_${d}`,
                                className: (0,
                                o.default)("settings-page__header__search__list__item__section", {
                                    "settings-page__header__search__list__item__section-multiple-lines": i(n) === n("securityAndPrivacy") || i(n) === n("alerts")
                                })
                            }, u(n))))
                        }
                        )), 0 === e.length && a.default.createElement("div", {
                            className: "settings-page__header__search__list__item",
                            style: {
                                cursor: "auto",
                                display: "flex"
                            }
                        }, a.default.createElement("span", {
                            className: "settings-page__header__search__list__item__no-matching"
                        }, n("settingsSearchMatchingNotFound"))), a.default.createElement("div", {
                            className: "settings-page__header__search__list__item",
                            style: {
                                cursor: "auto",
                                display: "flex"
                            }
                        }, a.default.createElement("span", {
                            className: "settings-page__header__search__list__item__request"
                        }, n("missingSetting")), a.default.createElement("a", {
                            href: "https://community.metamask.io/c/feature-requests-ideas/13",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            key: "need-help-link",
                            className: "settings-page__header__search__list__item__link"
                        }, n("missingSettingRequest"))))
                    }
                    p.propTypes = {
                        results: s.default.array,
                        onClickSetting: s.default.func
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/settings-search-list/settings-search-list.js"
}], [6894, {
    "./settings-search": 6895
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a, s = (a = e("./settings-search")) && a.__esModule ? a : {
                        default: a
                    };
                    n.default = s.default
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/settings-search/index.js"
}], [6895, {
    "../../../../shared/modules/string-utils": 5324,
    "../../../components/component-library": 5806,
    "../../../components/ui/text-field": 6189,
    "../../../contexts/i18n": 6211,
    "../../../helpers/constants/design-system": 6248,
    "@material-ui/core/InputAdornment": 1005,
    "fuse.js": 3948,
    "prop-types": 4528,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = m;
                    var a = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = f(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , s = p(e("prop-types"))
                      , o = p(e("fuse.js"))
                      , r = p(e("@material-ui/core/InputAdornment"))
                      , i = p(e("../../../components/ui/text-field"))
                      , l = e("../../../contexts/i18n")
                      , c = e("../../../../shared/modules/string-utils")
                      , u = e("../../../components/component-library")
                      , d = e("../../../helpers/constants/design-system");
                    function p(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function f(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (f = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function m({onSearch: e, error: t, settingsRoutesList: n}) {
                        const s = (0,
                        a.useContext)(l.I18nContext)
                          , [p,f] = (0,
                        a.useState)("")
                          , [m,g] = (0,
                        a.useState)(d.IconColor.iconMuted)
                          , h = Object.values(n)
                          , y = new o.default(h,{
                            shouldSort: !0,
                            threshold: .3,
                            location: 0,
                            distance: 100,
                            maxPatternLength: 32,
                            minMatchCharLength: 1,
                            keys: ["tabMessage", "sectionMessage", "descriptionMessage"],
                            getFn: (e, t) => e[t](s)
                        })
                          , _ = t => {
                            const n = t.trimStart();
                            f(n),
                            g("" === n ? d.IconColor.iconMuted : d.IconColor.iconDefault);
                            const a = y.search(n)
                              , s = [...h.filter((e => e.tabMessage && n && (0,
                            c.isEqualCaseInsensitive)(e.tab, n))), ...a];
                            e({
                                searchQuery: n,
                                results: s
                            })
                        }
                        ;
                        return a.default.createElement(i.default, {
                            id: "search-settings",
                            placeholder: s("search"),
                            type: "text",
                            value: p,
                            onChange: e => _(e.target.value),
                            error: t,
                            fullWidth: !0,
                            autoFocus: !0,
                            autoComplete: "off",
                            startAdornment: a.default.createElement(r.default, {
                                position: "start",
                                style: {
                                    marginRight: "12px"
                                }
                            }, a.default.createElement(u.Icon, {
                                size: u.IconSize.Sm,
                                name: u.IconName.Search,
                                color: m
                            })),
                            endAdornment: a.default.createElement(a.default.Fragment, null, p && a.default.createElement(r.default, {
                                className: "imageclosectn",
                                position: "end",
                                onClick: () => _(""),
                                style: {
                                    cursor: "pointer"
                                }
                            }, a.default.createElement(u.Icon, {
                                name: u.IconName.Close,
                                color: d.IconColor.iconDefault,
                                size: u.IconSize.Xs
                            }))),
                            theme: "bordered"
                        })
                    }
                    m.propTypes = {
                        onSearch: s.default.func,
                        error: s.default.string,
                        settingsRoutesList: s.default.array
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/settings-search/settings-search.js"
}], [6896, {
    "./settings-tab.container": 6898
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./settings-tab.container")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/settings-tab/index.js"
}], [6897, {
    "../../../../app/_locales/index.json": 3,
    "../../../../shared/constants/metametrics": 5260,
    "../../../../shared/constants/preferences": 5269,
    "../../../components/component-library": 5806,
    "../../../components/ui/dropdown": 6107,
    "../../../components/ui/identicon/blockieIdenticon": 6130,
    "../../../components/ui/jazzicon": 6137,
    "../../../components/ui/toggle-button": 6193,
    "../../../helpers/constants/available-conversions.json": 6245,
    "../../../helpers/constants/design-system": 6248,
    "../../../helpers/utils/settings-search": 6291,
    classnames: 3584,
    "prop-types": 4528,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = _(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , s = y(e("prop-types"))
                      , o = y(e("classnames"))
                      , r = y(e("../../../helpers/constants/available-conversions.json"))
                      , i = e("../../../helpers/constants/design-system")
                      , l = y(e("../../../components/ui/dropdown"))
                      , c = y(e("../../../components/ui/toggle-button"))
                      , u = y(e("../../../../app/_locales/index.json"))
                      , d = y(e("../../../components/ui/jazzicon"))
                      , p = y(e("../../../components/ui/identicon/blockieIdenticon"))
                      , f = e("../../../../shared/constants/metametrics")
                      , m = e("../../../helpers/utils/settings-search")
                      , g = e("../../../../shared/constants/preferences")
                      , h = e("../../../components/component-library");
                    function y(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function _(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (_ = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function v(e, t, n) {
                        return (t = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e)
                                    return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var a = n.call(e, t || "default");
                                    if ("object" != typeof a)
                                        return a;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(t))in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n,
                        e
                    }
                    const b = r.default.sort(( (e, t) => e.name.toLocaleLowerCase().localeCompare(t.name.toLocaleLowerCase()))).map(( ({code: e, name: t}) => ({
                        name: `${e.toUpperCase()} - ${t}`,
                        value: e
                    })))
                      , E = u.default.map((e => ({
                        name: `${e.name}`,
                        value: e.code
                    })));
                    class T extends a.PureComponent {
                        constructor(...e) {
                            super(...e),
                            v(this, "settingsRefs", Array((0,
                            m.getNumberOfSettingRoutesInTab)(this.context.t, this.context.t("general"))).fill(undefined).map(( () => a.default.createRef())))
                        }
                        componentDidUpdate() {
                            const {t: e} = this.context;
                            (0,
                            m.handleSettingsRefs)(e, e("general"), this.settingsRefs)
                        }
                        componentDidMount() {
                            const {t: e} = this.context;
                            (0,
                            m.handleSettingsRefs)(e, e("general"), this.settingsRefs)
                        }
                        renderCurrentConversion() {
                            const {t: e} = this.context
                              , {currentCurrency: t, setCurrentCurrency: n} = this.props;
                            return a.default.createElement(h.Box, {
                                ref: this.settingsRefs[0],
                                className: "settings-page__content-row",
                                display: i.Display.Flex,
                                flexDirection: i.FlexDirection.Column
                            }, a.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, a.default.createElement(h.Text, {
                                variant: i.TextVariant.bodyMd,
                                color: i.TextColor.textDefault,
                                className: "settings-page__content-item__title"
                            }, e("currencyConversion"))), a.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, a.default.createElement("div", {
                                className: "settings-page__content-item-col"
                            }, a.default.createElement(l.default, {
                                "data-testid": "currency-select",
                                id: "select-currency",
                                options: b,
                                selectedOption: t,
                                onChange: e => {
                                    n(e),
                                    this.context.trackEvent({
                                        category: f.MetaMetricsEventCategory.Settings,
                                        event: f.MetaMetricsEventName.CurrentCurrency,
                                        properties: {
                                            current_currency: e
                                        }
                                    })
                                }
                                ,
                                className: "settings-page__content-item__dropdown"
                            }))))
                        }
                        renderCurrentLocale() {
                            const {t: e} = this.context
                              , {updateCurrentLocale: t, currentLocale: n} = this.props;
                            return a.default.createElement(h.Box, {
                                ref: this.settingsRefs[2],
                                className: "settings-page__content-row",
                                display: i.Display.Flex,
                                flexDirection: i.FlexDirection.Column
                            }, a.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, a.default.createElement(h.Text, {
                                variant: i.TextVariant.bodyMd,
                                color: i.TextColor.textDefault,
                                className: "settings-page__content-item__title"
                            }, e("currentLanguage"))), a.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, a.default.createElement("div", {
                                className: "settings-page__content-item-col"
                            }, a.default.createElement(l.default, {
                                "data-testid": "locale-select",
                                id: "select-locale",
                                options: E,
                                selectedOption: n,
                                onChange: async e => t(e)
                            }))))
                        }
                        renderHideZeroBalanceTokensOptIn() {
                            const {t: e} = this.context
                              , {hideZeroBalanceTokens: t, setHideZeroBalanceTokens: n} = this.props;
                            return a.default.createElement(h.Box, {
                                ref: this.settingsRefs[5],
                                className: "settings-page__content-row",
                                display: i.Display.Flex,
                                flexDirection: i.FlexDirection.Row,
                                justifyContent: i.JustifyContent.spaceBetween,
                                alignItems: i.AlignItems.center,
                                id: "toggle-zero-balance"
                            }, a.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, a.default.createElement(h.Text, {
                                variant: i.TextVariant.bodyMd,
                                color: i.TextColor.textDefault,
                                className: "settings-page__content-item__title"
                            }, e("hideZeroBalanceTokens"))), a.default.createElement("div", {
                                className: "settings-page__content-item-col"
                            }, a.default.createElement(c.default, {
                                value: t,
                                onToggle: e => n(!e),
                                "data-testid": "toggle-zero-balance-button"
                            })))
                        }
                        renderBlockieOptIn() {
                            const {t: e} = this.context
                              , {useBlockie: t, setUseBlockie: n, selectedAddress: s, tokenList: r} = this.props;
                            return a.default.createElement(h.Box, {
                                ref: this.settingsRefs[4],
                                className: "settings-page__content-row",
                                display: i.Display.Flex,
                                flexDirection: i.FlexDirection.Column,
                                id: "blockie-optin"
                            }, a.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, a.default.createElement(h.Text, {
                                variant: i.TextVariant.bodyMd,
                                color: i.TextColor.textDefault,
                                className: "settings-page__content-item__title"
                            }, e("accountIdenticon")), a.default.createElement(h.Text, {
                                variant: i.TextVariant.bodyMd,
                                color: i.TextColor.textAlternative,
                                marginBottom: 3,
                                className: "settings-page__content-item__description"
                            }, e("jazzAndBlockies")), a.default.createElement("div", {
                                className: "settings-page__content-item__identicon"
                            }, a.default.createElement("button", {
                                "data-testid": "jazz_icon",
                                onClick: () => n(!1),
                                className: "settings-page__content-item__identicon__item"
                            }, a.default.createElement("div", {
                                className: (0,
                                o.default)("settings-page__content-item__identicon__item__icon", {
                                    "settings-page__content-item__identicon__item__icon--active": !t
                                })
                            }, a.default.createElement(d.default, {
                                id: "jazzicon",
                                address: s,
                                diameter: 32,
                                tokenList: r,
                                style: {
                                    display: "block",
                                    borderRadius: "16px",
                                    width: "32px",
                                    height: "32px"
                                }
                            })), a.default.createElement(h.Text, {
                                color: i.TextColor.textDefault,
                                variant: i.TextVariant.bodySm,
                                as: "h6",
                                marginTop: 0,
                                marginRight: 12,
                                marginBottom: 0,
                                marginLeft: 3
                            }, e("jazzicons"))), a.default.createElement("button", {
                                "data-testid": "blockie_icon",
                                onClick: () => n(!0),
                                className: "settings-page__content-item__identicon__item"
                            }, a.default.createElement("div", {
                                className: (0,
                                o.default)("settings-page__content-item__identicon__item__icon", {
                                    "settings-page__content-item__identicon__item__icon--active": t
                                })
                            }, a.default.createElement(p.default, {
                                id: "blockies",
                                address: s,
                                diameter: 32,
                                borderRadius: "50%"
                            })), a.default.createElement(h.Text, {
                                color: i.TextColor.textDefault,
                                variant: i.TextVariant.bodySm,
                                as: "h6",
                                marginTop: 3,
                                marginRight: 0,
                                marginBottom: 3,
                                marginLeft: 3
                            }, e("blockies"))))))
                        }
                        renderShowNativeTokenAsMainBalance() {
                            const {t: e} = this.context
                              , t = e => {
                                this.context.trackEvent({
                                    category: f.MetaMetricsEventCategory.Settings,
                                    event: f.MetaMetricsEventName.ShowNativeTokenAsMainBalance,
                                    properties: {
                                        show_native_token_as_main_balance: e
                                    }
                                })
                            }
                              , {setShowNativeTokenAsMainBalancePreference: n, showNativeTokenAsMainBalance: s} = this.props;
                            return a.default.createElement(h.Box, {
                                ref: this.settingsRefs[1],
                                className: "settings-page__content-row",
                                display: i.Display.Flex,
                                flexDirection: i.FlexDirection.Row,
                                justifyContent: i.JustifyContent.spaceBetween,
                                alignItems: i.AlignItems.center,
                                id: "toggle-show-native-token-as-main-balance"
                            }, a.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, a.default.createElement(h.Text, {
                                variant: i.TextVariant.bodyMd,
                                color: i.TextColor.textDefault,
                                className: "settings-page__content-item__title"
                            }, e("showNativeTokenAsMainBalance"))), a.default.createElement("div", {
                                className: "settings-page__content-item-col"
                            }, a.default.createElement(c.default, {
                                className: "show-native-token-as-main-balance",
                                value: s,
                                onToggle: e => {
                                    n(!e),
                                    t(!e)
                                }
                            })))
                        }
                        renderTheme() {
                            const {t: e} = this.context
                              , {theme: t, setTheme: n} = this.props
                              , s = [{
                                name: e("lightTheme"),
                                value: g.ThemeType.light
                            }, {
                                name: e("darkTheme"),
                                value: g.ThemeType.dark
                            }, {
                                name: e("osTheme"),
                                value: g.ThemeType.os
                            }];
                            return a.default.createElement(h.Box, {
                                ref: this.settingsRefs[3],
                                className: "settings-page__content-row",
                                display: i.Display.Flex,
                                flexDirection: i.FlexDirection.Column
                            }, a.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, a.default.createElement(h.Text, {
                                variant: i.TextVariant.bodyMd,
                                color: i.TextColor.textDefault,
                                className: "settings-page__content-item__title"
                            }, this.context.t("theme")), a.default.createElement("div", {
                                className: "settings-page__content-description"
                            }, this.context.t("themeDescription"))), a.default.createElement("div", {
                                className: "settings-page__content-item"
                            }, a.default.createElement("div", {
                                className: "settings-page__content-item-col"
                            }, a.default.createElement(l.default, {
                                id: "select-theme",
                                options: s,
                                selectedOption: t,
                                onChange: e => {
                                    this.context.trackEvent({
                                        category: f.MetaMetricsEventCategory.Settings,
                                        event: "Theme Changed",
                                        properties: {
                                            theme_selected: e
                                        }
                                    }),
                                    n(e)
                                }
                            }))))
                        }
                        render() {
                            return a.default.createElement("div", {
                                className: "settings-page__body"
                            }, this.renderCurrentConversion(), this.renderShowNativeTokenAsMainBalance(), this.renderCurrentLocale(), this.renderTheme(), this.renderBlockieOptIn(), this.renderHideZeroBalanceTokensOptIn())
                        }
                    }
                    n.default = T,
                    v(T, "contextTypes", {
                        t: s.default.func,
                        metricsEvent: s.default.func,
                        trackEvent: s.default.func
                    }),
                    v(T, "propTypes", {
                        setUseBlockie: s.default.func,
                        setCurrentCurrency: s.default.func,
                        updateCurrentLocale: s.default.func,
                        currentLocale: s.default.string,
                        useBlockie: s.default.bool,
                        currentCurrency: s.default.string,
                        showNativeTokenAsMainBalance: s.default.bool,
                        setShowNativeTokenAsMainBalancePreference: s.default.func,
                        hideZeroBalanceTokens: s.default.bool,
                        setHideZeroBalanceTokens: s.default.func,
                        selectedAddress: s.default.string,
                        tokenList: s.default.object,
                        theme: s.default.string,
                        setTheme: s.default.func
                    })
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/settings-tab/settings-tab.component.js"
}], [6898, {
    "../../../../shared/modules/selectors/networks": 5320,
    "../../../selectors": 6985,
    "../../../store/actions": 7e3,
    "./settings-tab.component": 6897,
    "react-redux": 4734
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a, s = e("react-redux"), o = e("../../../store/actions"), r = e("../../../selectors"), i = e("../../../../shared/modules/selectors/networks"), l = (a = e("./settings-tab.component")) && a.__esModule ? a : {
                        default: a
                    };
                    n.default = (0,
                    s.connect)((e => {
                        const {metamask: t} = e
                          , {currentCurrency: n, useBlockie: a, currentLocale: s} = t
                          , {ticker: o} = (0,
                        i.getProviderConfig)(e)
                          , {address: l} = (0,
                        r.getSelectedInternalAccount)(e)
                          , {hideZeroBalanceTokens: c, showNativeTokenAsMainBalance: u} = (0,
                        r.getPreferences)(e);
                        return {
                            currentLocale: s,
                            currentCurrency: n,
                            nativeCurrency: o,
                            useBlockie: a,
                            showNativeTokenAsMainBalance: u,
                            hideZeroBalanceTokens: c,
                            selectedAddress: l,
                            tokenList: (0,
                            r.getTokenList)(e),
                            theme: (0,
                            r.getTheme)(e)
                        }
                    }
                    ), (e => ({
                        setCurrentCurrency: t => e((0,
                        o.setCurrentCurrency)(t)),
                        setUseBlockie: t => e((0,
                        o.setUseBlockie)(t)),
                        updateCurrentLocale: t => e((0,
                        o.updateCurrentLocale)(t)),
                        setShowNativeTokenAsMainBalancePreference: t => e((0,
                        o.setShowNativeTokenAsMainBalancePreference)(t)),
                        setParticipateInMetaMetrics: t => e((0,
                        o.setParticipateInMetaMetrics)(t)),
                        setHideZeroBalanceTokens: t => e((0,
                        o.setHideZeroBalanceTokens)(t)),
                        setTheme: t => e((0,
                        o.setTheme)(t))
                    })))(l.default)
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/settings-tab/settings-tab.container.js"
}], [6899, {
    "../../../app/scripts/lib/util": 135,
    "../../../shared/constants/app": 5248,
    "../../components/app/tab-bar": 5697,
    "../../components/component-library": 5806,
    "../../components/ui/metafox-logo": 6154,
    "../../helpers/constants/design-system": 6248,
    "../../helpers/constants/routes": 6254,
    "../../helpers/utils/settings-search": 6291,
    "./advanced-tab": 6854,
    "./contact-list-tab": 6863,
    "./developer-options-tab": 6870,
    "./experimental-tab": 6875,
    "./info-tab": 6877,
    "./security-tab": 6885,
    "./settings-search": 6894,
    "./settings-search-list": 6892,
    "./settings-tab": 6896,
    classnames: 3584,
    "prop-types": 4528,
    react: 4776,
    "react-router-dom": 4761
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = x(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , s = w(e("prop-types"))
                      , o = e("react-router-dom")
                      , r = w(e("classnames"))
                      , i = w(e("../../components/app/tab-bar"))
                      , l = e("../../helpers/constants/routes")
                      , c = e("../../helpers/utils/settings-search")
                      , u = e("../../components/component-library")
                      , d = e("../../helpers/constants/design-system")
                      , p = w(e("../../components/ui/metafox-logo"))
                      , f = e("../../../app/scripts/lib/util")
                      , m = e("../../../shared/constants/app")
                      , g = w(e("./settings-tab"))
                      , h = w(e("./advanced-tab"))
                      , y = w(e("./info-tab"))
                      , _ = w(e("./security-tab"))
                      , v = w(e("./contact-list-tab"))
                      , b = (w(e("./developer-options-tab")),
                    w(e("./experimental-tab")))
                      , E = w(e("./settings-search"))
                      , T = w(e("./settings-search-list"));
                    function w(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function x(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (x = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function k() {
                        return k = Object.assign ? Object.assign.bind() : function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var a in n)
                                    ({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
                            }
                            return e
                        }
                        ,
                        k.apply(null, arguments)
                    }
                    function C(e, t, n) {
                        return (t = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e)
                                    return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var a = n.call(e, t || "default");
                                    if ("object" != typeof a)
                                        return a;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(t))in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n,
                        e
                    }
                    class S extends a.PureComponent {
                        constructor(...e) {
                            super(...e),
                            C(this, "state", {
                                isSearchList: !1,
                                lastFetchedConversionDate: null,
                                searchResults: [],
                                searchText: ""
                            })
                        }
                        componentDidMount() {
                            this.handleConversionDate()
                        }
                        componentDidUpdate() {
                            this.handleConversionDate()
                        }
                        handleConversionDate() {
                            const {conversionDate: e} = this.props;
                            null !== e && this.setState({
                                lastFetchedConversionDate: e
                            })
                        }
                        handleClickSetting(e) {
                            const {history: t} = this.props;
                            t.push(e.route),
                            this.setState({
                                isSearchList: "",
                                searchResults: ""
                            })
                        }
                        render() {
                            const {history: e, backRoute: t, currentPath: n, mostRecentOverviewPage: s, addNewNetwork: o} = this.props
                              , {searchResults: i, isSearchList: g, searchText: h} = this.state
                              , {t: y} = this.context
                              , _ = (0,
                            f.getEnvironmentType)() === m.ENVIRONMENT_TYPE_POPUP;
                            return a.default.createElement("div", {
                                className: (0,
                                r.default)("main-container settings-page", {
                                    "settings-page--selected": n !== l.SETTINGS_ROUTE
                                })
                            }, a.default.createElement(u.Box, {
                                className: "settings-page__header",
                                padding: 4,
                                paddingBottom: [2, 4]
                            }, a.default.createElement("div", {
                                className: "settings-page__header__title-container"
                            }, _ && a.default.createElement(a.default.Fragment, null, n === l.SETTINGS_ROUTE ? a.default.createElement(p.default, {
                                className: "settings-page__header__title-container__metamask-logo",
                                unsetIconHeight: !0,
                                onClick: async () => e.push(l.DEFAULT_ROUTE),
                                display: [d.Display.Flex, d.Display.None]
                            }) : a.default.createElement(u.ButtonIcon, {
                                ariaLabel: y("back"),
                                iconName: u.IconName.ArrowLeft,
                                className: "settings-page__header__title-container__back-button",
                                color: d.Color.iconDefault,
                                onClick: () => e.push(t),
                                display: [d.Display.Flex, d.Display.None],
                                size: u.ButtonIconSize.Sm
                            })), this.renderTitle(), a.default.createElement(u.Box, {
                                className: "settings-page__header__title-container__search",
                                display: [d.Display.Block]
                            }, a.default.createElement(E.default, {
                                onSearch: ({searchQuery: e="", results: t=[]}) => {
                                    this.setState({
                                        isSearchList: "" !== e,
                                        searchResults: t,
                                        searchText: e
                                    })
                                }
                                ,
                                settingsRoutesList: (0,
                                c.getSettingsRoutes)()
                            }), g && h.length >= 3 && a.default.createElement(T.default, {
                                results: i,
                                onClickSetting: e => this.handleClickSetting(e)
                            })), a.default.createElement(u.ButtonIcon, {
                                className: "settings-page__header__title-container__close-button",
                                iconName: u.IconName.Close,
                                ariaLabel: y("close"),
                                onClick: () => {
                                    o ? e.push(l.NETWORKS_ROUTE) : e.push(s)
                                }
                                ,
                                size: u.ButtonIconSize.Sm,
                                marginLeft: "auto"
                            }))), a.default.createElement("div", {
                                className: "settings-page__content"
                            }, a.default.createElement("div", {
                                className: "settings-page__content__tabs"
                            }, this.renderTabs()), a.default.createElement("div", {
                                className: "settings-page__content__modules"
                            }, this.renderSubHeader(), this.renderContent())))
                        }
                        renderTitle() {
                            const {t: e} = this.context
                              , {isPopup: t, pathnameI18nKey: n, addressName: s} = this.props;
                            let o;
                            return o = e(t && s ? "details" : n && t ? n : "settings"),
                            a.default.createElement("div", {
                                className: "settings-page__header__title-container__title"
                            }, a.default.createElement(u.Text, {
                                variant: d.TextVariant.headingMd
                            }, o))
                        }
                        renderSubHeader() {
                            const {t: e} = this.context
                              , {currentPath: t, isPopup: n, isAddressEntryPage: s, pathnameI18nKey: o, addressName: i, initialBreadCrumbRoute: c, breadCrumbTextKey: p, history: f, initialBreadCrumbKey: m} = this.props;
                            let g;
                            return g = e(n && s ? "settings" : s ? "contacts" : m || (o || "general")),
                            !t.startsWith(l.NETWORKS_ROUTE) && a.default.createElement(u.Box, {
                                className: "settings-page__subheader",
                                padding: 4,
                                paddingLeft: 6,
                                paddingRight: 6,
                                display: d.Display.Flex,
                                flexDirection: d.FlexDirection.Row,
                                alignItems: d.AlignItems.center
                            }, a.default.createElement(u.Text, {
                                className: (0,
                                r.default)({
                                    "settings-page__subheader--link": c
                                }),
                                variant: d.TextVariant.headingSm,
                                onClick: () => c && f.push(c)
                            }, g), p && a.default.createElement("div", {
                                className: "settings-page__subheader--break"
                            }, a.default.createElement("span", null, " > "), e(p)), s && a.default.createElement("div", {
                                className: "settings-page__subheader--break"
                            }, a.default.createElement("span", null, " > "), i))
                        }
                        renderTabs() {
                            const {history: e, currentPath: t, useExternalServices: n} = this.props
                              , {t: s} = this.context
                              , r = [{
                                content: s("general"),
                                icon: a.default.createElement(u.Icon, {
                                    name: u.IconName.Setting
                                }),
                                key: l.GENERAL_ROUTE
                            }, {
                                content: s("advanced"),
                                icon: a.default.createElement("i", {
                                    className: "fas fa-sliders-h"
                                }),
                                key: l.ADVANCED_ROUTE
                            }, {
                                content: s("contacts"),
                                icon: a.default.createElement(u.Icon, {
                                    name: u.IconName.Book
                                }),
                                key: l.CONTACT_LIST_ROUTE
                            }, {
                                content: s("securityAndPrivacy"),
                                icon: a.default.createElement("i", {
                                    className: "fa fa-lock"
                                }),
                                key: l.SECURITY_ROUTE
                            }, {
                                content: s("experimental"),
                                icon: a.default.createElement(u.Icon, {
                                    name: u.IconName.Flask
                                }),
                                key: l.EXPERIMENTAL_ROUTE
                            }, {
                                content: s("about"),
                                icon: a.default.createElement(u.Icon, {
                                    name: u.IconName.Info
                                }),
                                key: l.ABOUT_US_ROUTE
                            }];
                            return n && r.splice(4, 0, {
                                content: s("notifications"),
                                icon: a.default.createElement(u.Icon, {
                                    name: u.IconName.Notification
                                }),
                                key: l.NOTIFICATIONS_SETTINGS_ROUTE
                            }),
                            a.default.createElement(i.default, {
                                tabs: r,
                                isActive: e => e === l.GENERAL_ROUTE && t === l.SETTINGS_ROUTE || (!(e !== l.CONTACT_LIST_ROUTE || !t.includes(l.CONTACT_LIST_ROUTE)) || (0,
                                o.matchPath)(t, {
                                    exact: !0,
                                    path: e
                                })),
                                onSelect: n => e.push({
                                    pathname: n,
                                    state: {
                                        fromPage: t
                                    }
                                })
                            })
                        }
                        renderContent() {
                            return a.default.createElement(o.Switch, null, a.default.createElement(o.Route, {
                                exact: !0,
                                path: l.GENERAL_ROUTE,
                                render: e => a.default.createElement(g.default, k({}, e, {
                                    lastFetchedConversionDate: this.state.lastFetchedConversionDate
                                }))
                            }), a.default.createElement(o.Route, {
                                exact: !0,
                                path: l.ABOUT_US_ROUTE,
                                component: y.default
                            }), a.default.createElement(o.Route, {
                                exact: !0,
                                path: l.ADVANCED_ROUTE,
                                component: h.default
                            }), a.default.createElement(o.Route, {
                                exact: !0,
                                path: l.ADD_NETWORK_ROUTE,
                                render: () => (this.props.toggleNetworkMenu({
                                    isAddingNewNetwork: !0
                                }),
                                a.default.createElement(o.Redirect, {
                                    to: {
                                        pathname: l.DEFAULT_ROUTE
                                    }
                                }))
                            }), a.default.createElement(o.Route, {
                                exact: !0,
                                path: l.NETWORKS_ROUTE,
                                render: () => (this.props.toggleNetworkMenu(),
                                a.default.createElement(o.Redirect, {
                                    to: {
                                        pathname: l.DEFAULT_ROUTE
                                    }
                                }))
                            }), a.default.createElement(o.Route, {
                                exact: !0,
                                path: l.ADD_POPULAR_CUSTOM_NETWORK,
                                render: () => (this.props.toggleNetworkMenu(),
                                a.default.createElement(o.Redirect, {
                                    to: {
                                        pathname: l.DEFAULT_ROUTE
                                    }
                                }))
                            }), a.default.createElement(o.Route, {
                                exact: !0,
                                path: l.SECURITY_ROUTE,
                                component: _.default
                            }), a.default.createElement(o.Route, {
                                exact: !0,
                                path: l.EXPERIMENTAL_ROUTE,
                                component: b.default
                            }), !1, a.default.createElement(o.Route, {
                                exact: !0,
                                path: l.CONTACT_LIST_ROUTE,
                                component: v.default
                            }), a.default.createElement(o.Route, {
                                exact: !0,
                                path: l.CONTACT_ADD_ROUTE,
                                component: v.default
                            }), a.default.createElement(o.Route, {
                                exact: !0,
                                path: `${l.CONTACT_EDIT_ROUTE}/:id`,
                                component: v.default
                            }), a.default.createElement(o.Route, {
                                exact: !0,
                                path: `${l.CONTACT_VIEW_ROUTE}/:id`,
                                component: v.default
                            }), a.default.createElement(o.Route, {
                                render: e => a.default.createElement(g.default, k({}, e, {
                                    lastFetchedConversionDate: this.state.lastFetchedConversionDate
                                }))
                            }))
                        }
                    }
                    C(S, "propTypes", {
                        addNewNetwork: s.default.bool,
                        addressName: s.default.string,
                        backRoute: s.default.string,
                        breadCrumbTextKey: s.default.string,
                        conversionDate: s.default.number,
                        currentPath: s.default.string,
                        history: s.default.object,
                        initialBreadCrumbKey: s.default.string,
                        initialBreadCrumbRoute: s.default.string,
                        isAddressEntryPage: s.default.bool,
                        isPopup: s.default.bool,
                        mostRecentOverviewPage: s.default.string.isRequired,
                        pathnameI18nKey: s.default.string,
                        toggleNetworkMenu: s.default.func.isRequired,
                        useExternalServices: s.default.bool
                    }),
                    C(S, "contextTypes", {
                        t: s.default.func
                    });
                    n.default = S
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/settings.component.js"
}], [6900, {
    "../../../app/scripts/lib/util": 135,
    "../../../shared/constants/app": 5248,
    "../../../shared/modules/hexstring-utils": 5307,
    "../../../shared/modules/selectors/networks": 5320,
    "../../ducks/history/history": 6233,
    "../../helpers/constants/routes": 6254,
    "../../selectors": 6985,
    "../../store/actions": 7e3,
    "./settings.component": 6899,
    "react-redux": 4734,
    "react-router-dom": 4761,
    redux: 4794
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a, s = e("redux"), o = e("react-redux"), r = e("react-router-dom"), i = e("../../selectors"), l = e("../../../shared/constants/app"), c = e("../../../app/scripts/lib/util"), u = e("../../ducks/history/history"), d = e("../../../shared/modules/hexstring-utils"), p = e("../../helpers/constants/routes"), f = e("../../../shared/modules/selectors/networks"), m = e("../../store/actions"), g = (a = e("./settings.component")) && a.__esModule ? a : {
                        default: a
                    };
                    const h = {
                        [p.ABOUT_US_ROUTE]: "about",
                        [p.ADD_NETWORK_ROUTE]: "networks",
                        [p.ADD_POPULAR_CUSTOM_NETWORK]: "addNetwork",
                        [p.ADVANCED_ROUTE]: "advanced",
                        [p.CONTACT_ADD_ROUTE]: "newContact",
                        [p.CONTACT_EDIT_ROUTE]: "editContact",
                        [p.CONTACT_LIST_ROUTE]: "contacts",
                        [p.CONTACT_VIEW_ROUTE]: "viewContact",
                        [p.DEVELOPER_OPTIONS_ROUTE]: "developerOptions",
                        [p.EXPERIMENTAL_ROUTE]: "experimental",
                        [p.GENERAL_ROUTE]: "general",
                        [p.NETWORKS_FORM_ROUTE]: "networks",
                        [p.NETWORKS_ROUTE]: "networks",
                        [p.SECURITY_ROUTE]: "securityAndPrivacy"
                    };
                    n.default = (0,
                    s.compose)(r.withRouter, (0,
                    o.connect)(( (e, t) => {
                        var n;
                        const {location: a} = t
                          , {pathname: s} = a
                          , {ticker: o} = (0,
                        f.getProviderConfig)(e)
                          , {metamask: {currencyRates: r}} = e
                          , m = null === (n = r[o]) || void 0 === n ? void 0 : n.conversionDate
                          , g = s.match(/[^/]+$/u)[0]
                          , y = g.includes("0x")
                          , _ = Boolean(s.match(p.CONTACT_ADD_ROUTE))
                          , v = Boolean(s.match(p.CONTACT_EDIT_ROUTE))
                          , b = Boolean(s.match(p.NETWORKS_FORM_ROUTE)) || Boolean(s.match(p.ADD_NETWORK_ROUTE))
                          , E = Boolean(s.match(p.ADD_NETWORK_ROUTE))
                          , T = Boolean(s.match(p.ADD_POPULAR_CUSTOM_NETWORK))
                          , w = (0,
                        c.getEnvironmentType)() === l.ENVIRONMENT_TYPE_POPUP
                          , x = h[s];
                        let k = p.SETTINGS_ROUTE;
                        v ? k = `${p.CONTACT_VIEW_ROUTE}/${g}` : y || _ ? k = p.CONTACT_LIST_ROUTE : (b || T) && (k = p.NETWORKS_ROUTE);
                        const C = (0,
                        i.getAddressBookEntryOrAccountName)(e, !(0,
                        d.isBurnAddress)(g) && (0,
                        d.isValidHexAddress)(g, {
                            mixedCaseUseChecksum: !0
                        }) ? g : "")
                          , S = (0,
                        i.getUseExternalServices)(e);
                        return {
                            addNewNetwork: E,
                            addressName: C,
                            backRoute: k,
                            conversionDate: m,
                            currentPath: s,
                            initialBreadCrumbKey: undefined,
                            initialBreadCrumbRoute: undefined,
                            isAddressEntryPage: y,
                            isPopup: w,
                            mostRecentOverviewPage: (0,
                            u.getMostRecentOverviewPage)(e),
                            pathnameI18nKey: x,
                            useExternalServices: S
                        }
                    }
                    ), (function(e) {
                        return {
                            toggleNetworkMenu: t => e((0,
                            m.toggleNetworkMenu)(t))
                        }
                    }
                    )))(g.default)
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/settings/settings.container.js"
}], [6901, {
    "./smart-transaction-status-page": 6903
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "SmartTransactionStatusPage", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./smart-transaction-status-page")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/smart-transactions/smart-transaction-status-page/index.ts"
}], [6902, {
    "../../../components/component-library": 5806,
    "../../../components/component-library/lottie-animation": 5812,
    "../../../helpers/constants/design-system": 6248,
    "@metamask/smart-transactions-controller/dist/types": 2358,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.SmartTransactionStatusAnimation = void 0;
                    var a = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = l(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , s = e("@metamask/smart-transactions-controller/dist/types")
                      , o = e("../../../components/component-library")
                      , r = e("../../../helpers/constants/design-system")
                      , i = e("../../../components/component-library/lottie-animation");
                    function l(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (l = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    const c = "images/animations/smart-transaction-status"
                      , u = {
                        Failed: {
                            path: `${c}/failed.lottie.json`,
                            loop: !1
                        },
                        Confirmed: {
                            path: `${c}/confirmed.lottie.json`,
                            loop: !1
                        },
                        SubmittingIntro: {
                            path: `${c}/submitting-intro.lottie.json`,
                            loop: !1
                        },
                        SubmittingLoop: {
                            path: `${c}/submitting-loop.lottie.json`,
                            loop: !0
                        },
                        Processing: {
                            path: `${c}/processing.lottie.json`,
                            loop: !0
                        }
                    };
                    n.SmartTransactionStatusAnimation = ({status: e}) => {
                        const [t,n] = (0,
                        a.useState)(!0);
                        let l;
                        if (e === s.SmartTransactionStatuses.PENDING)
                            l = t ? u.SubmittingIntro : u.SubmittingLoop;
                        else
                            switch (e) {
                            case s.SmartTransactionStatuses.SUCCESS:
                                l = u.Confirmed;
                                break;
                            case s.SmartTransactionStatuses.REVERTED:
                            case s.SmartTransactionStatuses.UNKNOWN:
                                l = u.Failed;
                                break;
                            default:
                                l = u.Processing
                            }
                        const c = (0,
                        a.useCallback)(( () => {
                            e === s.SmartTransactionStatuses.PENDING && t && n(!1)
                        }
                        ), [e, t]);
                        return a.default.createElement(o.Box, {
                            display: r.Display.Flex,
                            style: {
                                width: "96px",
                                height: "96px"
                            }
                        }, a.default.createElement(i.LottieAnimation, {
                            path: l.path,
                            loop: l.loop,
                            autoplay: !0,
                            onComplete: c
                        }))
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/smart-transactions/smart-transaction-status-page/smart-transaction-status-animation.tsx"
}], [6903, {
    "../../../../shared/constants/notifications": 5265,
    "../../../../shared/constants/urls": 5279,
    "../../../../shared/modules/conversion.utils": 5301,
    "../../../../shared/modules/selectors/networks": 5320,
    "../../../components/component-library": 5806,
    "../../../helpers/constants/design-system": 6248,
    "../../../hooks/useI18nContext": 6334,
    "../../../selectors": 6985,
    "../../../store/actions": 7e3,
    "../../confirmations/components/simulation-details": 6617,
    "./smart-transaction-status-animation": 6902,
    "@metamask/smart-transactions-controller/dist/types": 2358,
    react: 4776,
    "react-redux": 4734
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.showRemainingTimeInMinAndSec = n.default = n.SmartTransactionStatusPage = void 0;
                    var a = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = y(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , s = e("react-redux")
                      , o = e("@metamask/smart-transactions-controller/dist/types")
                      , r = e("../../../components/component-library")
                      , i = e("../../../helpers/constants/design-system")
                      , l = e("../../../hooks/useI18nContext")
                      , c = e("../../../../shared/modules/selectors/networks")
                      , u = e("../../../selectors")
                      , d = e("../../../../shared/constants/urls")
                      , p = e("../../../store/actions")
                      , f = e("../../../../shared/modules/conversion.utils")
                      , m = e("../../confirmations/components/simulation-details")
                      , g = e("../../../../shared/constants/notifications")
                      , h = e("./smart-transaction-status-animation");
                    function y(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (y = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    n.showRemainingTimeInMinAndSec = e => {
                        if (!Number.isInteger(e))
                            return "0:00";
                        return `${Math.floor(e / 60)}:${(e % 60).toString().padStart(2, "0")}`
                    }
                    ;
                    const _ = ({description: e}) => e ? a.default.createElement(r.Box, {
                        display: i.Display.Flex,
                        flexDirection: i.FlexDirection.Column,
                        alignItems: i.AlignItems.center,
                        className: "smart-transaction-status-page__description"
                    }, a.default.createElement(r.Text, {
                        marginTop: 2,
                        color: i.TextColor.textAlternative,
                        variant: i.TextVariant.bodySm
                    }, e)) : null
                      , v = ({portfolioSmartTransactionStatusUrl: e, isSmartTransactionPending: t, onCloseExtension: n}) => {
                        const s = (0,
                        l.useI18nContext)();
                        if (!e)
                            return null;
                        const o = (0,
                        a.useCallback)(( () => {
                            const a = window.innerWidth > g.NOTIFICATION_WIDTH;
                            t && !a || n(),
                            global.platform.openTab({
                                url: e
                            })
                        }
                        ), [t, n, e]);
                        return a.default.createElement(r.Box, {
                            display: i.Display.Flex,
                            flexDirection: i.FlexDirection.Column,
                            marginTop: 2
                        }, a.default.createElement(r.Button, {
                            type: "link",
                            variant: r.ButtonVariant.Link,
                            onClick: o
                        }, s("viewTransaction")))
                    }
                      , b = ({isDapp: e, onCloseExtension: t}) => {
                        const n = (0,
                        l.useI18nContext)();
                        return e ? a.default.createElement(r.ButtonSecondary, {
                            "data-testid": "smart-transaction-status-page-footer-close-button",
                            onClick: t,
                            width: i.BlockSize.Full,
                            marginTop: 3
                        }, n("closeExtension")) : null
                    }
                      , E = ({isDapp: e, isSmartTransactionPending: t}) => {
                        const n = (0,
                        l.useI18nContext)();
                        return e && t ? a.default.createElement(r.Text, {
                            marginTop: 2,
                            color: i.TextColor.textAlternative,
                            variant: i.TextVariant.bodySm
                        }, n("closeWindowAnytime")) : null
                    }
                      , T = ({isDapp: e, onViewActivity: t}) => {
                        const n = (0,
                        l.useI18nContext)();
                        return e ? null : a.default.createElement(r.ButtonSecondary, {
                            "data-testid": "smart-transaction-status-page-footer-close-button",
                            onClick: t,
                            width: i.BlockSize.Full,
                            marginTop: 3
                        }, n("viewActivity"))
                    }
                      , w = ({isDapp: e, isSmartTransactionPending: t, onCloseExtension: n, onViewActivity: s}) => a.default.createElement(r.Box, {
                        className: "smart-transaction-status-page__footer",
                        display: i.Display.Flex,
                        flexDirection: i.FlexDirection.Column,
                        width: i.BlockSize.Full,
                        padding: 4,
                        paddingBottom: 0
                    }, a.default.createElement(E, {
                        isDapp: e,
                        isSmartTransactionPending: t
                    }), a.default.createElement(b, {
                        isDapp: e,
                        onCloseExtension: n
                    }), a.default.createElement(T, {
                        isDapp: e,
                        onViewActivity: s
                    }))
                      , x = ({title: e}) => a.default.createElement(r.Text, {
                        color: i.TextColor.textDefault,
                        variant: i.TextVariant.headingMd,
                        as: "h4",
                        fontWeight: i.FontWeight.Bold
                    }, e)
                      , k = ({requestState: e, onCloseExtension: t=( () => null), onViewActivity: n=( () => null)}) => {
                        var g, y, b;
                        const E = (0,
                        l.useI18nContext)()
                          , T = (0,
                        s.useDispatch)()
                          , {smartTransaction: k, isDapp: C, txId: S} = e
                          , N = !k || k.status === o.SmartTransactionStatuses.PENDING
                          , M = (null == k ? void 0 : k.status) === o.SmartTransactionStatuses.SUCCESS
                          , O = Boolean(null == k || null === (g = k.status) || void 0 === g ? void 0 : g.startsWith(o.SmartTransactionStatuses.CANCELLED))
                          , I = (0,
                        s.useSelector)(c.getCurrentChainId)
                          , R = (0,
                        s.useSelector)((e => (0,
                        u.getFullTxData)(e, S))) || {}
                          , {title: P, description: D} = ( ({t: e, isSmartTransactionPending: t, isSmartTransactionSuccess: n, isSmartTransactionCancelled: a}) => t ? {
                            title: e("smartTransactionPending"),
                            iconName: r.IconName.Clock,
                            iconColor: i.IconColor.primaryDefault
                        } : n ? {
                            title: e("smartTransactionSuccess"),
                            iconName: r.IconName.Confirmation,
                            iconColor: i.IconColor.successDefault
                        } : a ? {
                            title: e("smartTransactionCancelled"),
                            description: e("smartTransactionCancelledDescription"),
                            iconName: r.IconName.Danger,
                            iconColor: i.IconColor.errorDefault
                        } : {
                            title: e("smartTransactionError"),
                            description: e("smartTransactionErrorDescription"),
                            iconName: r.IconName.Danger,
                            iconColor: i.IconColor.errorDefault
                        })({
                            t: E,
                            isSmartTransactionPending: N,
                            isSmartTransactionSuccess: M,
                            isSmartTransactionCancelled: O
                        });
                        (0,
                        a.useEffect)(( () => {
                            T((0,
                            p.hideLoadingIndication)())
                        }
                        ), []);
                        const A = (null === (y = R.simulationData) || void 0 === y || null === (y = y.tokenBalanceChanges) || void 0 === y ? void 0 : y.length) > 0 || (null === (b = R.simulationData) || void 0 === b ? void 0 : b.nativeBalanceChange)
                          , B = null == k ? void 0 : k.uuid
                          , j = B && I ? `${d.BaseUrl.Portfolio}/networks/${Number((0,
                        f.hexToDecimal)(I))}/smart-transactions/${B}` : undefined;
                        return a.default.createElement(r.Box, {
                            className: "smart-transaction-status-page",
                            height: i.BlockSize.Full,
                            width: i.BlockSize.Full,
                            display: i.Display.Flex,
                            borderStyle: i.BorderStyle.none,
                            flexDirection: i.FlexDirection.Column,
                            alignItems: i.AlignItems.center,
                            marginBottom: 0
                        }, a.default.createElement(r.Box, {
                            display: i.Display.Flex,
                            flexDirection: i.FlexDirection.Column,
                            alignItems: i.AlignItems.center,
                            justifyContent: i.JustifyContent.center,
                            paddingLeft: 4,
                            paddingRight: 4,
                            width: i.BlockSize.Full,
                            style: {
                                flexGrow: 1
                            }
                        }, a.default.createElement(r.Box, {
                            display: i.Display.Flex,
                            flexDirection: i.FlexDirection.Column,
                            alignItems: i.AlignItems.center,
                            paddingLeft: 6,
                            paddingRight: 6,
                            width: i.BlockSize.Full
                        }, a.default.createElement(h.SmartTransactionStatusAnimation, {
                            status: null == k ? void 0 : k.status
                        }), a.default.createElement(x, {
                            title: P
                        }), a.default.createElement(_, {
                            description: D
                        }), a.default.createElement(v, {
                            portfolioSmartTransactionStatusUrl: j,
                            isSmartTransactionPending: N,
                            onCloseExtension: t
                        })), A && a.default.createElement(r.Box, {
                            width: i.BlockSize.Full
                        }, a.default.createElement(m.SimulationDetails, {
                            transaction: R
                        }))), a.default.createElement(w, {
                            isDapp: C,
                            isSmartTransactionPending: N,
                            onCloseExtension: t,
                            onViewActivity: n
                        }))
                    }
                    ;
                    n.SmartTransactionStatusPage = k;
                    n.default = k
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/smart-transactions/smart-transaction-status-page/smart-transaction-status-page.tsx"
}], [6904, {
    "./snap-account-redirect-context": 6906
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "SnapAccountRedirectContent", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./snap-account-redirect-context")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/snap-account-redirect/components/index.ts"
}], [6905, {
    "../../../components/component-library": 5806,
    "../../../helpers/constants/design-system": 6248,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a, s = (a = e("react")) && a.__esModule ? a : {
                        default: a
                    }, o = e("../../../components/component-library"), r = e("../../../helpers/constants/design-system");
                    const i = ({url: e, onSubmit: t}) => s.default.createElement(o.ButtonIcon, {
                        "data-testid": "snap-account-redirect-url-icon",
                        onClick: () => {
                            global.platform.openTab({
                                url: e
                            }),
                            null == t || t()
                        }
                        ,
                        iconName: o.IconName.Export,
                        color: r.IconColor.primaryDefault,
                        size: o.ButtonIconSize.Sm,
                        ariaLabel: ""
                    });
                    n.default = s.default.memo(i)
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/snap-account-redirect/components/redirect-url-icon.tsx"
}], [6906, {
    "../../../components/component-library": 5806,
    "../../../helpers/constants/design-system": 6248,
    "../../../hooks/useI18nContext": 6334,
    "./snap-account-redirect-message": 6907,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a = l(e("react"))
                      , s = e("../../../components/component-library")
                      , o = e("../../../helpers/constants/design-system")
                      , r = e("../../../hooks/useI18nContext")
                      , i = l(e("./snap-account-redirect-message"));
                    function l(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    n.default = ({url: e, snapName: t, isBlockedUrl: n, message: l, onSubmit: c}) => {
                        const u = (0,
                        r.useI18nContext)();
                        return a.default.createElement(s.Box, {
                            display: o.Display.Flex,
                            flexDirection: o.FlexDirection.Row,
                            justifyContent: o.JustifyContent.spaceBetween,
                            paddingTop: 4
                        }, a.default.createElement(s.Box, {
                            gap: 4,
                            display: o.Display.Flex,
                            flexDirection: o.FlexDirection.Column,
                            alignItems: o.AlignItems.center
                        }, a.default.createElement(s.Text, {
                            "data-testid": "snap-account-redirect-content-title",
                            textAlign: o.TextAlign.Center,
                            variant: o.TextVariant.headingLg
                        }, u("snapAccountRedirectFinishSigningTitle")), n ? a.default.createElement(s.Box, {
                            display: o.Display.Flex,
                            paddingLeft: 4,
                            paddingRight: 4
                        }, a.default.createElement(s.BannerAlert, {
                            severity: s.BannerAlertSeverity.Danger,
                            "data-testid": "snap-account-redirect-content-blocked-url-banner"
                        }, a.default.createElement(s.Text, null, u("snapUrlIsBlocked", [a.default.createElement(s.Button, {
                            variant: s.ButtonVariant.Link,
                            size: s.ButtonSize.Inherit,
                            onClick: () => global.platform.openTab({
                                url: "https://support.metamask.io/troubleshooting/deceptive-site-ahead-when-trying-to-connect-to-a-site/"
                            }),
                            key: "snap-url-is-blocked-learn-more-button"
                        }, u("learnMore"))])))) : null, !1 === n ? a.default.createElement(s.Text, {
                            "data-testid": "snap-account-redirect-content-description",
                            textAlign: o.TextAlign.Center,
                            variant: o.TextVariant.bodyMd
                        }, u("snapAccountRedirectSiteDescription", [t])) : null, (e.length > 0 || l.length > 0) && !1 === n ? a.default.createElement(i.default, {
                            snapName: t,
                            url: e,
                            message: l,
                            onSubmit: c
                        }) : null))
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/snap-account-redirect/components/snap-account-redirect-context.tsx"
}], [6907, {
    "../../../components/app/snaps/snap-delineator": 5586,
    "../../../components/component-library": 5806,
    "../../../helpers/constants/design-system": 6248,
    "./url-display-box": 6908,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a = l(e("react"))
                      , s = e("../../../helpers/constants/design-system")
                      , o = e("../../../components/component-library")
                      , r = e("../../../components/app/snaps/snap-delineator")
                      , i = l(e("./url-display-box"));
                    function l(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    const c = ({snapName: e, url: t, message: n, onSubmit: l}) => a.default.createElement(r.SnapDelineator, {
                        "data-testid": "snap-account-redirect-message-container",
                        snapName: e
                    }, "" !== n ? a.default.createElement(o.Text, {
                        variant: s.TextVariant.bodyMd,
                        "data-testid": "snap-account-redirect-message"
                    }, n) : null, t.length > 0 ? a.default.createElement(o.Box, {
                        paddingTop: 2,
                        display: s.Display.Flex
                    }, a.default.createElement(i.default, {
                        url: t,
                        onSubmit: l
                    })) : null);
                    n.default = a.default.memo(c)
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/snap-account-redirect/components/snap-account-redirect-message.tsx"
}], [6908, {
    "../../../components/component-library": 5806,
    "../../../helpers/constants/design-system": 6248,
    "./redirect-url-icon": 6905,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a = i(e("react"))
                      , s = e("../../../helpers/constants/design-system")
                      , o = e("../../../components/component-library")
                      , r = i(e("./redirect-url-icon"));
                    function i(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    const l = ({url: e, onSubmit: t}) => a.default.createElement(o.Box, {
                        display: s.Display.InlineFlex,
                        backgroundColor: s.BackgroundColor.backgroundDefault,
                        alignItems: s.AlignItems.center,
                        borderWidth: 1,
                        borderRadius: s.BorderRadius.SM,
                        borderColor: s.BorderColor.borderDefault,
                        paddingRight: 4
                    }, a.default.createElement(o.Text, {
                        "data-testid": "snap-account-redirect-url-display-box",
                        padding: 2,
                        variant: s.TextVariant.bodyMd,
                        color: s.TextColor.primaryDefault
                    }, e), a.default.createElement(r.default, {
                        url: e,
                        onSubmit: t
                    }));
                    n.default = a.default.memo(l)
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/snap-account-redirect/components/url-display-box.tsx"
}], [6909, {
    "./snap-account-redirect": 6910
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "SnapAccountRedirect", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./snap-account-redirect")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/snap-account-redirect/index.ts"
}], [6910, {
    "../../components/app/snaps/snap-authorship-header": 5581,
    "../../components/component-library": 5806,
    "../../helpers/constants/design-system": 6248,
    "./components": 6904,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a = l(e("react"))
                      , s = e("../../components/component-library")
                      , o = e("../../helpers/constants/design-system")
                      , r = l(e("../../components/app/snaps/snap-authorship-header"))
                      , i = e("./components");
                    function l(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    n.default = ({url: e, snapId: t, snapName: n, isBlockedUrl: l, message: c, onSubmit: u}) => a.default.createElement(s.Box, {
                        className: "create-snap-account-page",
                        height: o.BlockSize.Full,
                        width: o.BlockSize.Full,
                        borderStyle: o.BorderStyle.none,
                        flexDirection: o.FlexDirection.Column,
                        alignItems: o.AlignItems.center
                    }, a.default.createElement(r.default, {
                        snapId: t
                    }), a.default.createElement(s.Box, {
                        display: o.Display.Flex,
                        flexDirection: o.FlexDirection.Column,
                        alignItems: o.AlignItems.center,
                        height: o.BlockSize.Full,
                        paddingLeft: 4,
                        paddingRight: 4
                    }, a.default.createElement(i.SnapAccountRedirectContent, {
                        url: e,
                        onSubmit: u,
                        snapId: t,
                        snapName: n,
                        isBlockedUrl: l,
                        message: c
                    })))
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/snap-account-redirect/snap-account-redirect.tsx"
}], [6911, {
    "../../../shared/constants/metametrics": 5260,
    "../../contexts/metametrics": 6214,
    "../../hooks/useI18nContext": 6334,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = i(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , s = e("../../hooks/useI18nContext")
                      , o = e("../../contexts/metametrics")
                      , r = e("../../../shared/constants/metametrics");
                    function i(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (i = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    n.default = ({internalAccount: e}) => {
                        const t = (0,
                        s.useI18nContext)()
                          , n = (0,
                        a.useContext)(o.MetaMetricsContext);
                        return (0,
                        a.useEffect)(( () => {
                            var t, a;
                            n({
                                event: r.MetaMetricsEventName.SnapAccountTransactionLoadingViewed,
                                category: r.MetaMetricsEventCategory.Transactions,
                                properties: {
                                    snap_id: null == e || null === (t = e.metadata.snap) || void 0 === t ? void 0 : t.id,
                                    snap_name: null == e || null === (a = e.metadata.snap) || void 0 === a ? void 0 : a.name,
                                    account_type: r.MetaMetricsEventAccountType.Snap
                                }
                            })
                        }
                        ), []),
                        a.default.createElement("span", null, t("loadingScreenSnapMessage"))
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/snap-account-transaction-loading-screen/snap-account-transaction-loading-screen.tsx"
}], [6912, {}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.KeyringSnapRemovalResultStatus = void 0;
                    n.KeyringSnapRemovalResultStatus = {
                        Success: "success",
                        Failed: "failed",
                        None: "none"
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/snaps/snap-view/constants.ts"
}], [6913, {
    "./snap-view": 6916
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./snap-view")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/snaps/snap-view/index.js"
}], [6914, {
    "../../../components/app/snaps/snap-home-page/snap-home-renderer": 5590,
    "../../../components/component-library": 5806,
    "../../../helpers/constants/design-system": 6248,
    "prop-types": 4528,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a = l(e("react"))
                      , s = l(e("prop-types"))
                      , o = e("../../../components/app/snaps/snap-home-page/snap-home-renderer")
                      , r = e("../../../components/component-library")
                      , i = e("../../../helpers/constants/design-system");
                    function l(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function c({snapId: e}) {
                        return a.default.createElement(r.Box, {
                            display: i.Display.Flex,
                            height: i.BlockSize.Full
                        }, a.default.createElement(o.SnapHomeRenderer, {
                            snapId: e
                        }))
                    }
                    c.propTypes = {
                        snapId: s.default.string.isRequired
                    };
                    n.default = c
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/snaps/snap-view/snap-home.js"
}], [6915, {
    "../../../components/app/connected-sites-list": 5435,
    "../../../components/app/snaps/keyring-snap-removal-warning": 5574,
    "../../../components/app/snaps/show-more": 5577,
    "../../../components/app/snaps/snap-authorship-expanded": 5579,
    "../../../components/app/snaps/snap-delineator": 5586,
    "../../../components/app/snaps/snap-permissions-list": 5609,
    "../../../components/app/snaps/snap-remove-warning": 5613,
    "../../../components/app/snaps/snap-update-alert": 5682,
    "../../../components/component-library": 5806,
    "../../../helpers/constants/design-system": 6248,
    "../../../helpers/constants/routes": 6254,
    "../../../helpers/constants/snaps": 6257,
    "../../../helpers/utils/snaps": 6292,
    "../../../hooks/useI18nContext": 6334,
    "../../../selectors": 6985,
    "../../../store/actions": 7e3,
    "./constants": 6912,
    "prop-types": 4528,
    react: 4776,
    "react-redux": 4734,
    "react-router-dom": 4761,
    semver: 5064
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = C(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , s = e("react-redux")
                      , o = k(e("prop-types"))
                      , r = e("react-router-dom")
                      , i = k(e("semver"))
                      , l = e("../../../hooks/useI18nContext")
                      , c = e("../../../helpers/constants/design-system")
                      , u = k(e("../../../components/app/snaps/snap-authorship-expanded"))
                      , d = k(e("../../../components/app/snaps/snap-remove-warning"))
                      , p = k(e("../../../components/app/connected-sites-list"))
                      , f = k(e("../../../components/app/snaps/keyring-snap-removal-warning"))
                      , m = e("../../../store/actions")
                      , g = e("../../../selectors")
                      , h = e("../../../components/component-library")
                      , y = k(e("../../../components/app/snaps/snap-permissions-list"))
                      , _ = e("../../../components/app/snaps/snap-delineator")
                      , v = e("../../../helpers/constants/snaps")
                      , b = k(e("../../../components/app/snaps/snap-update-alert"))
                      , E = e("../../../helpers/constants/routes")
                      , T = e("../../../components/app/snaps/show-more")
                      , w = e("../../../helpers/utils/snaps")
                      , x = e("./constants");
                    function k(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function C(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (C = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function S({snapId: e, initRemove: t, resetInitRemove: n}) {
                        const o = (0,
                        r.useHistory)()
                          , k = (0,
                        l.useI18nContext)()
                          , C = (0,
                        s.useSelector)(g.getSnaps)
                          , S = (0,
                        s.useDispatch)()
                          , N = Object.entries(C).map(( ([e,t]) => t)).find((t => t.id === e))
                          , [M,O] = (0,
                        a.useState)(!1)
                          , [I,R] = (0,
                        a.useState)(!1)
                          , [P,D] = (0,
                        a.useState)([])
                          , A = (0,
                        s.useSelector)(g.getMemoizedMetaMaskInternalAccounts)
                          , B = (0,
                        s.useSelector)((e => (0,
                        g.getSubjectsWithSnapPermission)(e, null == N ? void 0 : N.id)))
                          , j = (0,
                        s.useSelector)((e => N && (0,
                        g.getPermissions)(e, N.id)))
                          , {name: F, description: L} = (0,
                        s.useSelector)((t => (0,
                        g.getSnapMetadata)(t, e)));
                        let U = !1;
                        U = Boolean(null == j ? void 0 : j.snap_manageAccounts),
                        (0,
                        a.useEffect)(( () => {
                            U && (async () => {
                                const e = await (0,
                                m.getSnapAccountsById)(N.id)
                                  , t = Object.values(A).filter((t => e.includes(t.address.toLowerCase())));
                                D(t)
                            }
                            )()
                        }
                        ), [null == N ? void 0 : N.id, A, U]);
                        const W = (0,
                        s.useSelector)((e => N ? (0,
                        g.getSnapLatestVersion)(e, null == N ? void 0 : N.id) : null))
                          , $ = !!W && i.default.gt(W, N.version);
                        return (0,
                        a.useEffect)(( () => {
                            t && (O(!0),
                            n())
                        }
                        ), [t, n]),
                        a.default.createElement(h.Box, null, $ && a.default.createElement(b.default, {
                            snapName: F,
                            onUpdateClick: async () => {
                                const e = {
                                    [N.id]: {
                                        version: W
                                    }
                                }
                                  , t = await S((0,
                                m.updateSnap)("MetaMask", e));
                                t && o.push(`${E.CONNECT_ROUTE}/${t}`)
                            }
                            ,
                            bannerAlertProps: {
                                marginBottom: 4
                            }
                        }), a.default.createElement(u.default, {
                            snapId: N.id,
                            snap: N
                        }), a.default.createElement(h.Box, {
                            className: "snap-view__content__description",
                            marginTop: [4, 7]
                        }, a.default.createElement(_.SnapDelineator, {
                            type: v.DelineatorType.Description,
                            snapName: F
                        }, a.default.createElement(T.ShowMore, {
                            buttonBackground: c.BackgroundColor.backgroundDefault
                        }, a.default.createElement(h.Text, null, L)))), a.default.createElement(h.Box, {
                            className: "snap-view__content__permissions",
                            marginTop: 12
                        }, a.default.createElement(h.Text, {
                            variant: c.TextVariant.bodyLgMedium,
                            marginBottom: 1
                        }, k("permissions")), a.default.createElement(y.default, {
                            snapId: e,
                            snapName: F,
                            permissions: j ?? {},
                            showOptions: !0,
                            showAllPermissions: !0
                        })), a.default.createElement(h.Box, {
                            className: "snap-view__content__connected-sites",
                            marginTop: 12
                        }, a.default.createElement(h.Text, {
                            variant: c.TextVariant.bodyLgMedium,
                            marginBottom: 2
                        }, B.every((e => (0,
                        w.isSnapId)(e.origin))) ? k("connectedSnaps") : B.some((e => (0,
                        w.isSnapId)(e.origin))) ? k("connectedSitesAndSnaps") : k("connectedSites")), a.default.createElement(p.default, {
                            connectedSubjects: B,
                            onDisconnect: e => {
                                var t;
                                t = e,
                                N.id,
                                S((0,
                                m.disconnectOriginFromSnap)(t, N.id))
                            }
                        })), a.default.createElement(h.Box, {
                            className: "snap-view__content__remove",
                            marginTop: 12
                        }, a.default.createElement(h.Text, {
                            variant: c.TextVariant.bodyLgMedium,
                            color: c.TextColor.textDefault
                        }, k("removeSnap")), a.default.createElement(h.Text, {
                            variant: c.TextVariant.bodyMd,
                            color: c.TextColor.textDefault
                        }, k("removeSnapDescription")), a.default.createElement(h.Box, {
                            marginTop: 4,
                            display: c.Display.Flex,
                            justifyContent: c.JustifyContent.center
                        }, a.default.createElement(h.Button, {
                            className: "snap-view__content__remove-button",
                            danger: "true",
                            variant: h.ButtonVariant.Secondary,
                            width: c.BlockSize.Full,
                            size: h.ButtonSize.Lg,
                            onClick: () => O(!0),
                            "data-testid": "remove-snap-button",
                            disabled: N.preinstalled && !1 === N.removable
                        }, a.default.createElement(h.Text, {
                            color: c.TextColor.inherit,
                            variant: c.TextVariant.bodyMd,
                            flexWrap: c.FlexWrap.NoWrap,
                            ellipsis: !0,
                            style: {
                                overflow: "hidden"
                            },
                            paddingTop: 3,
                            paddingBottom: 3
                        }, `${k("remove")} ${F}`)), a.default.createElement(d.default, {
                            isOpen: M && (!U || 0 === P.length) && !I,
                            onCancel: () => O(!1),
                            onSubmit: async () => {
                                await S((0,
                                m.removeSnap)(N.id))
                            }
                            ,
                            snapName: F
                        }), a.default.createElement(a.default.Fragment, null, a.default.createElement(f.default, {
                            snap: N,
                            keyringAccounts: P,
                            snapUrl: N.url,
                            onCancel: () => O(!1),
                            onClose: () => O(!1),
                            onBack: () => O(!1),
                            onSubmit: async () => {
                                try {
                                    R(!0),
                                    await S((0,
                                    m.removeSnap)(N.id)),
                                    O(!1),
                                    S((0,
                                    m.showKeyringSnapRemovalModal)({
                                        snapName: F,
                                        result: x.KeyringSnapRemovalResultStatus.Success
                                    }))
                                } catch {
                                    O(!1),
                                    S((0,
                                    m.showKeyringSnapRemovalModal)({
                                        snapName: F,
                                        result: x.KeyringSnapRemovalResultStatus.Failed
                                    }))
                                } finally {
                                    R(!1)
                                }
                            }
                            ,
                            isOpen: M && U && P.length > 0
                        })))))
                    }
                    S.propTypes = {
                        snapId: o.default.string.isRequired,
                        initRemove: o.default.bool,
                        resetInitRemove: o.default.func
                    };
                    n.default = S
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/snaps/snap-view/snap-settings.js"
}], [6916, {
    "../../../components/app/snaps/snap-authorship-header": 5581,
    "../../../components/app/snaps/snap-home-menu": 5588,
    "../../../components/component-library": 5806,
    "../../../components/multichain/pages/page": 6032,
    "../../../helpers/constants/design-system": 6248,
    "../../../helpers/constants/routes": 6254,
    "../../../selectors": 6985,
    "./snap-home": 6914,
    "./snap-settings": 6915,
    "@metamask/utils": 2761,
    react: 4776,
    "react-redux": 4734,
    "react-router-dom": 4761
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = y(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , s = e("react-router-dom")
                      , o = e("react-redux")
                      , r = e("@metamask/utils")
                      , i = e("../../../helpers/constants/design-system")
                      , l = e("../../../helpers/constants/routes")
                      , c = e("../../../selectors")
                      , u = e("../../../components/component-library")
                      , d = e("../../../components/multichain/pages/page")
                      , p = h(e("../../../components/app/snaps/snap-authorship-header"))
                      , f = h(e("../../../components/app/snaps/snap-home-menu"))
                      , m = h(e("./snap-settings"))
                      , g = h(e("./snap-home"));
                    function h(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function y(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (y = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    n.default = function() {
                        const e = (0,
                        s.useHistory)()
                          , t = (0,
                        s.useLocation)()
                          , {pathname: n} = t
                          , h = decodeURIComponent(n.match(/[^/]+$/u)[0])
                          , y = (0,
                        o.useSelector)(c.getSnaps)
                          , _ = Object.entries(y).map(( ([e,t]) => t)).find((e => e.id === h));
                        (0,
                        a.useEffect)(( () => {
                            _ || e.push(l.SNAPS_ROUTE)
                        }
                        ), [e, _]);
                        const v = (0,
                        o.useSelector)((e => _ && (0,
                        c.getPermissions)(e, _.id)))
                          , b = v && (0,
                        r.hasProperty)(v, "endowment:page-home")
                          , [E,T] = (0,
                        a.useState)(!b)
                          , [w,x] = (0,
                        a.useState)(!1);
                        if (!_)
                            return null;
                        const k = () => {
                            _.preinstalled && _.hidden ? e.push(l.DEFAULT_ROUTE) : E && b ? T(!1) : e.push(l.SNAPS_ROUTE)
                        }
                        ;
                        return a.default.createElement("div", {
                            className: "snap-view",
                            style: {
                                boxShadow: "var(--shadow-size-md) var(--color-shadow-default)"
                            }
                        }, a.default.createElement(d.Page, {
                            backgroundColor: i.BackgroundColor.backgroundDefault
                        }, !_.hideSnapBranding && a.default.createElement(p.default, {
                            snapId: h,
                            showInfo: !1,
                            startAccessory: a.default.createElement(u.Box, {
                                display: i.Display.Flex,
                                justifyContent: i.JustifyContent.center,
                                alignItems: i.AlignItems.center
                            }, a.default.createElement(u.ButtonIcon, {
                                ariaLabel: "Back",
                                iconName: "arrow-left",
                                size: u.ButtonIconSize.Md,
                                onClick: k
                            })),
                            endAccessory: !_.hidden && a.default.createElement(f.default, {
                                snapId: h,
                                onSettingsClick: () => {
                                    T(!0)
                                }
                                ,
                                onRemoveClick: () => {
                                    x(!0),
                                    T(!0)
                                }
                                ,
                                isSettingsAvailable: !_.preinstalled
                            })
                        }), a.default.createElement(d.Content, {
                            backgroundColor: i.BackgroundColor.backgroundDefault,
                            className: "snap-view__content",
                            marginTop: E ? 4 : 0,
                            padding: E ? 4 : 0
                        }, E ? a.default.createElement(m.default, {
                            snapId: h,
                            initRemove: w,
                            resetInitRemove: () => {
                                x(!1)
                            }
                        }) : a.default.createElement(g.default, {
                            snapId: h
                        }))))
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/snaps/snap-view/snap-view.js"
}], [6917, {
    "./snap-list": 6918
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./snap-list")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/snaps/snaps-list/index.js"
}], [6918, {
    "../../../components/app/snaps/snap-list-item": 5601,
    "../../../components/component-library": 5806,
    "../../../components/multichain/pages/page": 6032,
    "../../../helpers/constants/design-system": 6248,
    "../../../helpers/constants/routes": 6254,
    "../../../helpers/utils/settings-search": 6291,
    "../../../helpers/utils/util": 6297,
    "../../../hooks/useI18nContext": 6334,
    "../../../selectors": 6985,
    react: 4776,
    "react-redux": 4734,
    "react-router-dom": 4761
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = void 0;
                    var a, s = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = h(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react")), o = e("react-redux"), r = e("react-router-dom"), i = (a = e("../../../components/app/snaps/snap-list-item")) && a.__esModule ? a : {
                        default: a
                    }, l = e("../../../hooks/useI18nContext"), c = e("../../../helpers/constants/design-system"), u = e("../../../helpers/constants/routes"), d = e("../../../selectors"), p = e("../../../helpers/utils/settings-search"), f = e("../../../components/component-library"), m = e("../../../components/multichain/pages/page"), g = e("../../../helpers/utils/util");
                    function h(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (h = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    n.default = () => {
                        const e = (0,
                        l.useI18nContext)()
                          , t = (0,
                        r.useHistory)()
                          , n = (0,
                        s.useRef)();
                        (0,
                        s.useEffect)(( () => {
                            (0,
                            p.handleSettingsRefs)(e, e("snaps"), n)
                        }
                        ), [n, e]);
                        const a = (0,
                        o.useSelector)(d.getSnapsList)
                          , h = (0,
                        o.useSelector)(d.getAllSnapAvailableUpdates);
                        return s.default.createElement("div", {
                            className: "snaps"
                        }, s.default.createElement(m.Page, {
                            backgroundColor: c.BackgroundColor.backgroundDefault
                        }, s.default.createElement(m.Header, {
                            backgroundColor: c.BackgroundColor.backgroundDefault,
                            startAccessory: s.default.createElement(f.ButtonIcon, {
                                ariaLabel: "Back",
                                iconName: "arrow-left",
                                size: "sm",
                                onClick: () => t.push(u.DEFAULT_ROUTE)
                            })
                        }, e("snaps")), s.default.createElement(m.Content, {
                            backgroundColor: c.BackgroundColor.backgroundDefault,
                            className: "snaps__content"
                        }, s.default.createElement(f.Box, {
                            className: "snaps__content__list",
                            display: c.Display.Flex,
                            flexDirection: c.FlexDirection.Column,
                            height: c.BlockSize.Full
                        }, a.length > 0 && s.default.createElement("div", {
                            className: "snaps__content__list__body"
                        }, s.default.createElement("div", {
                            className: "snaps__content__list__wrapper"
                        }, a.map((e => s.default.createElement(i.default, {
                            className: "snaps__content__list-item",
                            key: e.key,
                            packageName: e.packageName,
                            name: e.name,
                            onClick: () => {
                                (e => {
                                    t.push((0,
                                    g.getSnapRoute)(e.id))
                                }
                                )(e)
                            }
                            ,
                            snapId: e.id,
                            showUpdateDot: h.get(e.id)
                        }))))), a.length <= 5 && s.default.createElement(f.Box, {
                            display: c.Display.Flex,
                            height: c.BlockSize.Full,
                            flexDirection: c.FlexDirection.Row,
                            flexWrap: c.FlexWrap.Wrap,
                            justifyContent: c.JustifyContent.center,
                            className: "snaps__content__list__container--snaps-info-content"
                        }, a.length < 1 && s.default.createElement(f.Box, {
                            className: "snaps__content__list__container--no-snaps_inner",
                            display: c.Display.Flex,
                            flexDirection: c.FlexDirection.Column,
                            justifyContent: c.JustifyContent.center,
                            alignItems: c.AlignItems.center
                        }, s.default.createElement(f.Icon, {
                            name: f.IconName.Snaps,
                            color: c.IconColor.iconMuted,
                            className: "snaps__content__list__no-snaps_icon",
                            size: f.IconSize.Inherit
                        }), s.default.createElement(f.Text, {
                            color: c.Color.textMuted,
                            align: c.TextAlign.Center,
                            marginTop: 4
                        }, e("noSnaps"))), s.default.createElement(f.Box, {
                            display: c.Display.Flex,
                            width: c.BlockSize.Full,
                            height: c.BlockSize.Min
                        }), s.default.createElement(f.Box, {
                            className: "snaps__content__list__container--no-snaps_banner-tip",
                            display: c.Display.Flex,
                            flexDirection: c.FlexDirection.Column,
                            justifyContent: c.JustifyContent.flexEnd,
                            paddingLeft: 4,
                            paddingRight: 4,
                            paddingBottom: 4
                        }, s.default.createElement(f.BannerTip, {
                            logoType: f.BannerTipLogoType.Greeting,
                            description: e("extendWalletWithSnaps"),
                            descriptionProps: {
                                variant: c.TextVariant.bodyMd
                            }
                        }, s.default.createElement(f.ButtonLink, {
                            size: c.Size.auto,
                            href: "https://snaps.metamask.io/",
                            target: "_blank",
                            endIconName: f.IconName.Export
                        }, `${e("discoverSnaps")}`))))))))
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/snaps/snaps-list/snap-list.js"
}], [6919, {
    "../../../../shared/constants/metametrics": 5260,
    "../../../../shared/modules/selectors": 5319,
    "../../../components/component-library": 5806,
    "../../../components/ui/box": 6079,
    "../../../components/ui/pulse-loader": 6168,
    "../../../contexts/i18n": 6211,
    "../../../contexts/metametrics": 6214,
    "../../../ducks/swaps/swaps": 6244,
    "../../../helpers/constants/design-system": 6248,
    "../../../helpers/constants/routes": 6254,
    "../../../selectors/selectors": 6993,
    "../swaps-footer": 6968,
    "./swap-step-icon": 6921,
    "lodash/isEqual": 4368,
    react: 4776,
    "react-redux": 4734,
    "react-router-dom": 4761
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = function() {
                        const e = (0,
                        a.useContext)(i.I18nContext)
                          , t = (0,
                        o.useHistory)()
                          , n = (0,
                        s.useDispatch)()
                          , b = (0,
                        s.useSelector)(l.getFetchParams, r.default)
                          , {destinationTokenInfo: E, sourceTokenInfo: T} = (null == b ? void 0 : b.metaData) || {}
                          , w = (0,
                        s.useSelector)(l.getApproveTxParams, s.shallowEqual)
                          , x = (0,
                        s.useSelector)(c.isHardwareWallet)
                          , k = (0,
                        s.useSelector)(c.getHardwareWalletType)
                          , C = (0,
                        s.useSelector)(u.getSmartTransactionsOptInStatusForMetrics)
                          , S = (0,
                        s.useSelector)(u.getSmartTransactionsEnabled)
                          , N = (0,
                        s.useSelector)(l.getCurrentSmartTransactionsEnabled)
                          , M = Boolean(w)
                          , O = (0,
                        a.useContext)(h.MetaMetricsContext);
                        (0,
                        a.useEffect)(( () => {
                            O({
                                event: "Awaiting Signature(s) on a HW wallet",
                                category: y.MetaMetricsEventCategory.Swaps,
                                sensitiveProperties: {
                                    needs_two_confirmations: M,
                                    token_from: null == T ? void 0 : T.symbol,
                                    token_from_amount: null == b ? void 0 : b.value,
                                    token_to: null == E ? void 0 : E.symbol,
                                    request_type: null != b && b.balanceError ? "Quote" : "Order",
                                    slippage: null == b ? void 0 : b.slippage,
                                    custom_slippage: 2 === (null == b ? void 0 : b.slippage),
                                    is_hardware_wallet: x,
                                    hardware_wallet_type: k,
                                    stx_enabled: S,
                                    current_stx_enabled: N,
                                    stx_user_opt_in: C
                                }
                            })
                        }
                        ), []);
                        const I = e(M ? "swapTwoTransactions" : "swapConfirmWithHwWallet");
                        return a.default.createElement("div", {
                            className: "awaiting-signatures"
                        }, a.default.createElement(f.default, {
                            paddingLeft: 8,
                            paddingRight: 8,
                            height: m.BLOCK_SIZES.FULL,
                            justifyContent: m.JustifyContent.center,
                            display: m.DISPLAY.FLEX,
                            className: "awaiting-signatures__content"
                        }, a.default.createElement(f.default, {
                            marginTop: 3,
                            marginBottom: 4
                        }, a.default.createElement(p.default, null)), a.default.createElement(_.Text, {
                            color: m.TextColor.textDefault,
                            variant: m.TextVariant.headingMd,
                            as: "h3"
                        }, I), M && a.default.createElement(a.default.Fragment, null, a.default.createElement(_.Text, {
                            variant: m.TextVariant.bodyMdBold,
                            marginTop: 2
                        }, e("swapToConfirmWithHwWallet")), a.default.createElement("ul", {
                            className: "awaiting-signatures__steps"
                        }, a.default.createElement("li", null, a.default.createElement(v.default, {
                            stepNumber: 1
                        }), e("swapAllowSwappingOf", [a.default.createElement(_.Text, {
                            as: "span",
                            variant: m.TextVariant.bodyMdBold,
                            key: "allowToken"
                        }, null == E ? void 0 : E.symbol)])), a.default.createElement("li", null, a.default.createElement(v.default, {
                            stepNumber: 2
                        }), e("swapFromTo", [a.default.createElement(_.Text, {
                            as: "span",
                            variant: m.TextVariant.bodyMdBold,
                            key: "tokenFrom"
                        }, null == T ? void 0 : T.symbol), a.default.createElement(_.Text, {
                            as: "span",
                            variation: m.TextVariant.bodyMdBold,
                            key: "tokenTo"
                        }, null == E ? void 0 : E.symbol)]))), a.default.createElement(_.Text, {
                            variant: m.TextVariant.bodyMd
                        }, e("swapGasFeesSplit")))), a.default.createElement(g.default, {
                            onSubmit: async () => {
                                await n((0,
                                l.prepareToLeaveSwaps)()),
                                t.push(d.DEFAULT_ROUTE),
                                t.push(d.PREPARE_SWAP_ROUTE)
                            }
                            ,
                            submitText: e("cancel"),
                            hideCancel: !0
                        }))
                    }
                    ;
                    var a = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = E(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , s = e("react-redux")
                      , o = e("react-router-dom")
                      , r = b(e("lodash/isEqual"))
                      , i = e("../../../contexts/i18n")
                      , l = e("../../../ducks/swaps/swaps")
                      , c = e("../../../selectors/selectors")
                      , u = e("../../../../shared/modules/selectors")
                      , d = e("../../../helpers/constants/routes")
                      , p = b(e("../../../components/ui/pulse-loader"))
                      , f = b(e("../../../components/ui/box"))
                      , m = e("../../../helpers/constants/design-system")
                      , g = b(e("../swaps-footer"))
                      , h = e("../../../contexts/metametrics")
                      , y = e("../../../../shared/constants/metametrics")
                      , _ = e("../../../components/component-library")
                      , v = b(e("./swap-step-icon"));
                    function b(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function E(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (E = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/swaps/awaiting-signatures/awaiting-signatures.js"
}], [6920, {
    "./awaiting-signatures": 6919
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./awaiting-signatures")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/swaps/awaiting-signatures/index.js"
}], [6921, {
    "prop-types": 4528,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = r;
                    var a = o(e("react"))
                      , s = o(e("prop-types"));
                    function o(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function r({stepNumber: e=1}) {
                        switch (e) {
                        case 1:
                            return a.default.createElement("svg", {
                                width: "14",
                                height: "14",
                                viewBox: "0 0 14 14",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, a.default.createElement("circle", {
                                cx: "7",
                                cy: "7",
                                r: "6.25",
                                stroke: "var(--color-primary-default)",
                                strokeWidth: "1.5"
                            }), a.default.createElement("path", {
                                d: "M6.50983 5.192H5.27783L6.14183 4H7.71783V9.68H6.50983V5.192Z",
                                fill: "var(--color-primary-default)"
                            }));
                        case 2:
                            return a.default.createElement("svg", {
                                width: "14",
                                height: "14",
                                viewBox: "0 0 14 14",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }, a.default.createElement("circle", {
                                cx: "7",
                                cy: "7",
                                r: "6.25",
                                stroke: "var(--color-primary-default)",
                                strokeWidth: "1.5"
                            }), a.default.createElement("path", {
                                d: "M8.92 9.776H5V9.368C5 9.048 5.056 8.77067 5.168 8.536C5.28 8.296 5.42133 8.08533 5.592 7.904C5.768 7.71733 5.96267 7.54933 6.176 7.4C6.39467 7.25067 6.608 7.10133 6.816 6.952C6.928 6.872 7.03467 6.78933 7.136 6.704C7.24267 6.61867 7.33333 6.53067 7.408 6.44C7.488 6.34933 7.552 6.256 7.6 6.16C7.648 6.064 7.672 5.96533 7.672 5.864C7.672 5.67733 7.616 5.52 7.504 5.392C7.39733 5.25867 7.22933 5.192 7 5.192C6.88267 5.192 6.776 5.21333 6.68 5.256C6.584 5.29333 6.50133 5.344 6.432 5.408C6.368 5.472 6.31733 5.54667 6.28 5.632C6.248 5.71733 6.232 5.808 6.232 5.904H5.024C5.024 5.62667 5.07467 5.37067 5.176 5.136C5.27733 4.90133 5.41867 4.70133 5.6 4.536C5.78133 4.36533 5.99467 4.23467 6.24 4.144C6.48533 4.048 6.752 4 7.04 4C7.28 4 7.50933 4.03733 7.728 4.112C7.952 4.18667 8.14933 4.29867 8.32 4.448C8.49067 4.59733 8.62667 4.784 8.728 5.008C8.82933 5.22667 8.88 5.48267 8.88 5.776C8.88 6.032 8.85067 6.25867 8.792 6.456C8.73333 6.648 8.65067 6.824 8.544 6.984C8.44267 7.13867 8.32 7.28 8.176 7.408C8.032 7.536 7.87733 7.66133 7.712 7.784C7.64267 7.832 7.55733 7.888 7.456 7.952C7.36 8.016 7.26133 8.08267 7.16 8.152C7.064 8.22133 6.97333 8.29333 6.888 8.368C6.80267 8.44267 6.74133 8.51467 6.704 8.584H8.92V9.776Z",
                                fill: "var(--color-primary-default)"
                            }));
                        default:
                            return undefined
                        }
                    }
                    r.propTypes = {
                        stepNumber: s.default.number
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/swaps/awaiting-signatures/swap-step-icon.js"
}], [6922, {
    "../../../../shared/constants/common": 5250,
    "../../../../shared/constants/metametrics": 5260,
    "../../../../shared/constants/swaps": 5274,
    "../../../../shared/lib/ui-utils": 5293,
    "../../../../shared/modules/selectors": 5319,
    "../../../../shared/modules/selectors/networks": 5320,
    "../../../../shared/modules/swaps.utils": 5325,
    "../../../components/ui/mascot": 6148,
    "../../../components/ui/pulse-loader": 6168,
    "../../../contexts/i18n": 6211,
    "../../../contexts/metametrics": 6214,
    "../../../ducks/swaps/swaps": 6244,
    "../../../helpers/constants/routes": 6254,
    "../../../selectors": 6985,
    "../../../store/actions": 7e3,
    "../create-new-swap": 6930,
    "../swaps-footer": 6968,
    "../swaps.util": 6970,
    "../view-on-block-explorer": 6972,
    "./quotes-timeout-icon": 6924,
    "./swap-failure-icon": 6925,
    "./swap-success-icon": 6926,
    "@metamask/etherscan-link": 1752,
    events: 3868,
    "lodash/isEqual": 4368,
    "prop-types": 4528,
    react: 4776,
    "react-redux": 4734,
    "react-router-dom": 4761
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = D;
                    var a = P(e("events"))
                      , s = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = R(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , o = e("react-redux")
                      , r = P(e("prop-types"))
                      , i = e("react-router-dom")
                      , l = P(e("lodash/isEqual"))
                      , c = e("@metamask/etherscan-link")
                      , u = e("../../../contexts/i18n")
                      , d = e("../../../contexts/metametrics")
                      , p = e("../../../../shared/constants/metametrics")
                      , f = e("../../../../shared/modules/selectors/networks")
                      , m = e("../../../selectors")
                      , g = e("../../../../shared/modules/selectors")
                      , h = e("../../../ducks/swaps/swaps")
                      , y = P(e("../../../components/ui/mascot"))
                      , _ = e("../../../../shared/constants/swaps")
                      , v = e("../../../../shared/constants/common")
                      , b = e("../../../../shared/modules/swaps.utils")
                      , E = P(e("../../../components/ui/pulse-loader"))
                      , T = e("../../../helpers/constants/routes")
                      , w = e("../../../store/actions")
                      , x = e("../swaps.util")
                      , k = P(e("../swaps-footer"))
                      , C = P(e("../create-new-swap"))
                      , S = P(e("../view-on-block-explorer"))
                      , N = e("../../../../shared/lib/ui-utils")
                      , M = P(e("./swap-failure-icon"))
                      , O = P(e("./swap-success-icon"))
                      , I = P(e("./quotes-timeout-icon"));
                    function R(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (R = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function P(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function D({swapComplete: e, errorKey: t, txHash: n, tokensReceived: r, submittingSwap: R, txId: P}) {
                        var D, A;
                        const B = (0,
                        s.useContext)(u.I18nContext)
                          , j = (0,
                        s.useContext)(d.MetaMetricsContext)
                          , F = (0,
                        i.useHistory)()
                          , L = (0,
                        o.useDispatch)()
                          , U = (0,
                        s.useRef)(new a.default)
                          , {swapMetaData: W} = (0,
                        o.useSelector)((e => (0,
                        m.getFullTxData)(e, P))) || {}
                          , $ = (0,
                        o.useSelector)(h.getFetchParams, l.default)
                          , q = (0,
                        o.useSelector)(h.getFromTokenInputValue)
                          , V = (0,
                        o.useSelector)(h.getMaxSlippage)
                          , z = (0,
                        o.useSelector)(h.getUsedQuote, l.default)
                          , H = (0,
                        o.useSelector)(h.getApproveTxParams, o.shallowEqual)
                          , G = (0,
                        o.useSelector)(h.getUsedSwapsGasPrice)
                          , K = (0,
                        o.useSelector)(m.getCurrentCurrency)
                          , J = (0,
                        o.useSelector)(m.getUSDConversionRate)
                          , Q = (0,
                        o.useSelector)(f.getCurrentChainId)
                          , Y = (0,
                        o.useSelector)(m.getRpcPrefsForCurrentProvider, o.shallowEqual)
                          , [Z,X] = (0,
                        s.useState)(!1)
                          , ee = (null == z || null === (D = z.destinationTokenInfo) || void 0 === D ? void 0 : D.symbol) || (null == W ? void 0 : W.token_to);
                        let te;
                        if (z && G) {
                            var ne, ae;
                            te = (0,
                            x.getRenderableNetworkFeesForQuote)({
                                tradeGas: z.gasEstimateWithRefund || z.averageGas,
                                approveGas: (null == H ? void 0 : H.gas) || "0x0",
                                gasPrice: G,
                                currentCurrency: K,
                                conversionRate: J,
                                tradeValue: null == z || null === (ne = z.trade) || void 0 === ne ? void 0 : ne.value,
                                sourceSymbol: null == z || null === (ae = z.sourceTokenInfo) || void 0 === ae ? void 0 : ae.symbol,
                                sourceAmount: z.sourceAmount,
                                chainId: Q
                            }).rawNetworkFees
                        }
                        const se = (0,
                        o.useSelector)(m.isHardwareWallet)
                          , oe = (0,
                        o.useSelector)(m.getHardwareWalletType)
                          , re = (0,
                        o.useSelector)(g.getSmartTransactionsOptInStatusForMetrics)
                          , ie = (0,
                        o.useSelector)(g.getSmartTransactionsEnabled)
                          , le = (0,
                        o.useSelector)(h.getCurrentSmartTransactionsEnabled)
                          , ce = (null == W ? void 0 : W.slippage) || (null == z ? void 0 : z.slippage)
                          , ue = {
                            token_from: (null == W ? void 0 : W.token_from) || (null == z || null === (A = z.sourceTokenInfo) || void 0 === A ? void 0 : A.symbol),
                            token_from_amount: null == W ? void 0 : W.token_from_amount,
                            token_to: ee,
                            request_type: null != $ && $.balanceError ? "Quote" : "Order",
                            slippage: ce,
                            custom_slippage: 2 === ce,
                            gas_fees: te,
                            is_hardware_wallet: se,
                            hardware_wallet_type: oe,
                            stx_enabled: ie,
                            current_stx_enabled: le,
                            stx_user_opt_in: re
                        }
                          , de = Y.blockExplorerUrl ?? v.CHAINID_DEFAULT_BLOCK_EXPLORER_URL_MAP[Q] ?? null
                          , pe = (0,
                        c.getBlockExplorerLink)({
                            hash: n,
                            chainId: Q
                        }, {
                            blockExplorerUrl: de
                        });
                        let fe, me, ge, he, ye;
                        return t === _.OFFLINE_FOR_MAINTENANCE ? (fe = B("offlineForMaintenance"),
                        ge = B("metamaskSwapsOfflineDescription"),
                        he = B("close"),
                        me = s.default.createElement(M.default, null)) : t === _.SWAP_FAILED_ERROR ? (fe = B("swapFailedErrorTitle"),
                        ge = B("swapFailedErrorDescriptionWithSupportLink", [s.default.createElement("a", {
                            className: "awaiting-swap__support-link",
                            key: "awaiting-swap-support-link",
                            href: N.SUPPORT_LINK,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: () => {
                                j({
                                    category: p.MetaMetricsEventCategory.Swaps,
                                    event: p.MetaMetricsEventName.SupportLinkClicked,
                                    properties: {
                                        url: N.SUPPORT_LINK
                                    }
                                }, {
                                    contextPropsIntoEventProperties: [p.MetaMetricsContextProp.PageTitle]
                                })
                            }
                        }, new URL(N.SUPPORT_LINK).hostname)]),
                        he = B("tryAgain"),
                        me = s.default.createElement(M.default, null),
                        ye = pe && s.default.createElement(S.default, {
                            blockExplorerUrl: pe,
                            sensitiveTrackingProperties: ue
                        })) : t === _.QUOTES_EXPIRED_ERROR ? (fe = B("swapQuotesExpiredErrorTitle"),
                        ge = B("swapQuotesExpiredErrorDescription"),
                        he = B("tryAgain"),
                        me = s.default.createElement(I.default, null),
                        Z || (X(!0),
                        j({
                            event: "Quotes Timed Out",
                            category: p.MetaMetricsEventCategory.Swaps,
                            sensitiveProperties: ue
                        }))) : t === _.ERROR_FETCHING_QUOTES ? (fe = B("swapFetchingQuotesErrorTitle"),
                        ge = B("swapFetchingQuotesErrorDescription"),
                        he = B("back"),
                        me = s.default.createElement(M.default, null)) : t === _.QUOTES_NOT_AVAILABLE_ERROR ? (fe = B("swapQuotesNotAvailableErrorTitle"),
                        ge = B("swapQuotesNotAvailableErrorDescription"),
                        he = B("tryAgain"),
                        me = s.default.createElement(M.default, null)) : t === _.CONTRACT_DATA_DISABLED_ERROR ? (fe = B("swapContractDataDisabledErrorTitle"),
                        ge = B("swapContractDataDisabledErrorDescription"),
                        he = B("tryAgain"),
                        me = s.default.createElement(M.default, null)) : t || e ? !t && e && (fe = B("swapTransactionComplete"),
                        me = s.default.createElement(O.default, null),
                        he = B("close"),
                        ge = B("swapTokenAvailable", [s.default.createElement("span", {
                            key: "swapTokenAvailable-2",
                            className: "awaiting-swap__amount-and-symbol"
                        }, `${r || ""} ${ee}`)]),
                        ye = pe && s.default.createElement(S.default, {
                            blockExplorerUrl: pe,
                            sensitiveTrackingProperties: ue
                        })) : (fe = B("swapProcessing"),
                        me = s.default.createElement(E.default, null),
                        he = B("swapsViewInActivity"),
                        ge = B("swapOnceTransactionHasProcess", [s.default.createElement("span", {
                            key: "swapOnceTransactionHasProcess-1",
                            className: "awaiting-swap__amount-and-symbol",
                            "data-testid": "awaiting-swap-amount-and-symbol"
                        }, ee)]),
                        ye = pe && s.default.createElement(S.default, {
                            blockExplorerUrl: pe,
                            sensitiveTrackingProperties: ue
                        })),
                        (0,
                        s.useEffect)(( () => {
                            t && L((0,
                            w.stopPollingForQuotes)())
                        }
                        ), [L, t]),
                        s.default.createElement("div", {
                            className: "awaiting-swap"
                        }, s.default.createElement("div", {
                            className: "awaiting-swap__content"
                        }, !(e || t) && s.default.createElement(y.default, {
                            animationEventEmitter: U.current,
                            width: "90",
                            height: "90"
                        }), s.default.createElement("div", {
                            className: "awaiting-swap__status-image"
                        }, me), s.default.createElement("div", {
                            className: "awaiting-swap__header",
                            "data-testid": "awaiting-swap-header"
                        }, fe), s.default.createElement("div", {
                            className: "awaiting-swap__main-description",
                            "data-testid": "awaiting-swap-main-description"
                        }, ge), ye), !t && e ? s.default.createElement(C.default, {
                            sensitiveTrackingProperties: ue
                        }) : null, s.default.createElement(k.default, {
                            onSubmit: async () => {
                                t === _.OFFLINE_FOR_MAINTENANCE ? (await L((0,
                                h.prepareToLeaveSwaps)()),
                                F.push(T.DEFAULT_ROUTE)) : t === _.QUOTES_EXPIRED_ERROR ? (L((0,
                                h.prepareForRetryGetQuotes)()),
                                await L((0,
                                h.fetchQuotesAndSetQuoteState)(F, q, V, j))) : t ? await L((0,
                                h.navigateBackToPrepareSwap)(F)) : ((0,
                                b.isSwapsDefaultTokenSymbol)(ee, Q) || e || await L((0,
                                w.setDefaultHomeActiveTabName)("activity")),
                                F.push(T.DEFAULT_ROUTE))
                            }
                            ,
                            onCancel: async () => await L((0,
                            h.navigateBackToPrepareSwap)(F)),
                            submitText: he,
                            disabled: R,
                            hideCancel: t !== _.QUOTES_EXPIRED_ERROR
                        }))
                    }
                    D.propTypes = {
                        swapComplete: r.default.bool,
                        txHash: r.default.string,
                        tokensReceived: r.default.string,
                        errorKey: r.default.oneOf([_.QUOTES_EXPIRED_ERROR, _.SWAP_FAILED_ERROR, _.ERROR_FETCHING_QUOTES, _.QUOTES_NOT_AVAILABLE_ERROR, _.OFFLINE_FOR_MAINTENANCE, _.CONTRACT_DATA_DISABLED_ERROR]),
                        submittingSwap: r.default.bool,
                        txId: r.default.string
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/swaps/awaiting-swap/awaiting-swap.js"
}], [6923, {
    "./awaiting-swap": 6922
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./awaiting-swap")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/swaps/awaiting-swap/index.js"
}], [6924, {
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = function() {
                        return s.default.createElement("svg", {
                            width: "44",
                            height: "44",
                            viewBox: "0 0 44 44",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, s.default.createElement("path", {
                            d: "M22 0C9.96768 0 0.178406 9.78928 0.178406 21.8216C0.178406 33.8539 9.96768 43.6432 22 43.6432C34.0323 43.6432 43.8216 33.8539 43.8216 21.8216C43.8216 9.78929 34.0323 0 22 0ZM22 3.27324C32.2633 3.27324 40.5484 11.5583 40.5484 21.8216C40.5484 32.0849 32.2633 40.3699 22 40.3699C11.7367 40.3699 3.45164 32.0849 3.45164 21.8216C3.45164 11.5583 11.7367 3.27324 22 3.27324ZM22 6.00094C21.0961 6.00094 20.3634 6.73371 20.3634 7.63756V21.8216C20.3634 22.4269 20.6932 22.9534 21.1817 23.2366L32.5187 29.783C33.3014 30.235 34.3001 29.9692 34.752 29.1864C35.2039 28.4036 34.938 27.405 34.1553 26.953L23.6366 20.8839V7.63756C23.6366 6.73371 22.9039 6.00094 22 6.00094Z",
                            fill: "var(--color-primary-default)"
                        }))
                    }
                    ;
                    var a, s = (a = e("react")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/swaps/awaiting-swap/quotes-timeout-icon.js"
}], [6925, {
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = function() {
                        return s.default.createElement("svg", {
                            width: "45",
                            height: "39",
                            viewBox: "0 0 45 39",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, s.default.createElement("path", {
                            d: "M22.203 0.424438L0.285706 38.2816H44.1203L22.203 0.424438ZM22.203 8.39436L37.2064 34.2966H7.19961L22.203 8.39436ZM20.2105 16.3643V24.3342H24.1955V16.3643H20.2105ZM20.2105 28.3192V32.3041H24.1955V28.3192",
                            fill: "var(--color-error-default)"
                        }))
                    }
                    ;
                    var a, s = (a = e("react")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/swaps/awaiting-swap/swap-failure-icon.js"
}], [6926, {
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = function() {
                        return s.default.createElement("svg", {
                            width: "38",
                            height: "38",
                            viewBox: "0 0 38 38",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, s.default.createElement("path", {
                            d: "M34.1429 19C34.1429 23.0161 32.5474 26.8678 29.7076 29.7076C26.8678 32.5474 23.0161 34.1428 19 34.1428C14.9839 34.1428 11.1322 32.5474 8.29238 29.7076C5.45254 26.8678 3.85714 23.0161 3.85714 19C3.85714 14.9838 5.45254 11.1322 8.29238 8.29237C11.1322 5.45253 14.9839 3.85713 19 3.85713C20.4386 3.85713 21.8393 4.06534 23.1643 4.44391L26.1361 1.47213C23.9404 0.563554 21.5364 0.0714111 19 0.0714111C16.5143 0.0714111 14.0529 0.561013 11.7563 1.51226C9.45983 2.46351 7.37316 3.85778 5.61548 5.61546C2.06568 9.16526 0.0714264 13.9798 0.0714264 19C0.0714264 24.0201 2.06568 28.8347 5.61548 32.3845C7.37316 34.1422 9.45983 35.5364 11.7563 36.4877C14.0529 37.4389 16.5143 37.9286 19 37.9286C24.0202 37.9286 28.8347 35.9343 32.3845 32.3845C35.9343 28.8347 37.9286 24.0201 37.9286 19H34.1429ZM11.2582 15.3657L8.58928 18.0536L17.1071 26.5714L36.0357 7.64284L33.3668 4.95498L17.1071 21.2146L11.2582 15.3657Z",
                            fill: "var(--color-success-default)"
                        }))
                    }
                    ;
                    var a, s = (a = e("react")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/swaps/awaiting-swap/swap-success-icon.js"
}], [6927, {
    "../../../../shared/constants/time": 5276,
    "../../../components/ui/info-tooltip": 6134,
    "../../../contexts/i18n": 6211,
    "../../../ducks/swaps/swaps": 6244,
    classnames: 3584,
    luxon: 4388,
    "prop-types": 4528,
    react: 4776,
    "react-redux": 4734
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = y;
                    var a = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = f(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , s = e("react-redux")
                      , o = p(e("prop-types"))
                      , r = p(e("classnames"))
                      , i = e("luxon")
                      , l = e("../../../contexts/i18n")
                      , c = p(e("../../../components/ui/info-tooltip"))
                      , u = e("../../../ducks/swaps/swaps")
                      , d = e("../../../../shared/constants/time");
                    function p(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function f(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (f = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function m(e, t, n) {
                        return n - (e - t)
                    }
                    function g(e) {
                        return Math.max(e - d.SECOND, 0)
                    }
                    function h(e, t) {
                        const [n,a] = t.split(":");
                        return e <= (60 * Number(n) + Number(a)) * d.SECOND
                    }
                    function y({timeStarted: e, timeOnly: t, timerBase: n, warningTime: o, labelKey: p, infoTooltipLabelKey: f}) {
                        const y = (0,
                        a.useContext)(l.I18nContext)
                          , _ = (0,
                        a.useRef)()
                          , v = (0,
                        a.useRef)()
                          , b = (0,
                        s.useSelector)(u.getSwapsQuoteRefreshTime)
                          , E = (0,
                        s.useSelector)(u.getSwapsQuotePrefetchingRefreshTime)
                          , T = v.current ? b : E
                          , w = Number(n) || T
                          , [x,k] = (0,
                        a.useState)(( () => Date.now()))
                          , [C,S] = (0,
                        a.useState)(( () => m(x, e, w)));
                        (0,
                        a.useEffect)(( () => (_.current === undefined && (_.current = setInterval(( () => {
                            S(g)
                        }
                        ), d.SECOND)),
                        function() {
                            clearInterval(_.current)
                        }
                        )), []),
                        (0,
                        a.useEffect)(( () => {
                            if (v.current || (v.current = e || Date.now()),
                            0 === C && e !== v.current) {
                                v.current = e;
                                const t = Date.now();
                                k(t),
                                S(m(t, e, w)),
                                clearInterval(_.current),
                                _.current = setInterval(( () => {
                                    S(g)
                                }
                                ), d.SECOND)
                            }
                        }
                        ), [e, C, w]);
                        const N = i.Duration.fromMillis(C).toFormat("m:ss");
                        let M;
                        return t ? M = a.default.createElement("div", {
                            className: "countdown-timer__time"
                        }, N) : p && (M = y(p, [a.default.createElement("div", {
                            key: "countdown-time-1",
                            className: "countdown-timer__time"
                        }, N)])),
                        a.default.createElement("div", {
                            className: "countdown-timer"
                        }, a.default.createElement("div", {
                            "data-testid": "countdown-timer__timer-container",
                            className: (0,
                            r.default)("countdown-timer__timer-container", {
                                "countdown-timer__timer-container--warning": o && h(C, o)
                            })
                        }, M), !t && f ? a.default.createElement(c.default, {
                            position: "bottom",
                            contentText: y(f)
                        }) : null)
                    }
                    y.propTypes = {
                        timeStarted: o.default.number,
                        timeOnly: o.default.bool,
                        timerBase: o.default.number,
                        warningTime: o.default.string,
                        labelKey: o.default.string,
                        infoTooltipLabelKey: o.default.string
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/swaps/countdown-timer/countdown-timer.js"
}], [6928, {
    "./countdown-timer": 6927
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./countdown-timer")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/swaps/countdown-timer/index.js"
}], [6929, {
    "../../../../shared/constants/metametrics": 5260,
    "../../../components/ui/box": 6079,
    "../../../contexts/i18n": 6211,
    "../../../contexts/metametrics": 6214,
    "../../../ducks/swaps/swaps": 6244,
    "../../../helpers/constants/routes": 6254,
    "../../../selectors": 6985,
    "lodash/isEqual": 4368,
    "prop-types": 4528,
    react: 4776,
    "react-redux": 4734,
    "react-router-dom": 4761
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = y;
                    var a = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = h(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , s = e("react-redux")
                      , o = g(e("prop-types"))
                      , r = e("react-router-dom")
                      , i = g(e("lodash/isEqual"))
                      , l = g(e("../../../components/ui/box"))
                      , c = e("../../../contexts/i18n")
                      , u = e("../../../contexts/metametrics")
                      , d = e("../../../../shared/constants/metametrics")
                      , p = e("../../../ducks/swaps/swaps")
                      , f = e("../../../helpers/constants/routes")
                      , m = e("../../../selectors");
                    function g(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function h(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (h = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function y({sensitiveTrackingProperties: e}) {
                        const t = (0,
                        a.useContext)(c.I18nContext)
                          , n = (0,
                        a.useContext)(u.MetaMetricsContext)
                          , o = (0,
                        s.useDispatch)()
                          , g = (0,
                        r.useHistory)()
                          , h = (0,
                        s.useSelector)(m.getSwapsDefaultToken, i.default);
                        return a.default.createElement(l.default, {
                            marginBottom: 3,
                            className: "create-new-swap"
                        }, a.default.createElement("button", {
                            onClick: async () => {
                                n({
                                    event: "Make Another Swap",
                                    category: d.MetaMetricsEventCategory.Swaps,
                                    sensitiveProperties: e
                                }),
                                g.push(f.DEFAULT_ROUTE),
                                await o((0,
                                p.navigateBackToPrepareSwap)(g)),
                                o((0,
                                p.setSwapsFromToken)(h))
                            }
                        }, t("makeAnotherSwap")))
                    }
                    y.propTypes = {
                        sensitiveTrackingProperties: o.default.object.isRequired
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/swaps/create-new-swap/create-new-swap.js"
}], [6930, {
    "./create-new-swap": 6929
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./create-new-swap")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/swaps/create-new-swap/index.js"
}], [6931, {
    "../../../../shared/lib/transactions-controller-utils": 5292,
    "../../../components/component-library": 5806,
    "../../../components/ui/box": 6079,
    "../../../contexts/i18n": 6211,
    "../../../helpers/constants/design-system": 6248,
    "../swaps.util": 6970,
    "bignumber.js": 3465,
    classnames: 3584,
    "prop-types": 4528,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = g;
                    var a = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = m(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react"))
                      , s = f(e("prop-types"))
                      , o = f(e("bignumber.js"))
                      , r = f(e("classnames"))
                      , i = e("../swaps.util")
                      , l = e("../../../../shared/lib/transactions-controller-utils")
                      , c = f(e("../../../components/ui/box"))
                      , u = e("../../../helpers/constants/design-system")
                      , d = e("../../../components/component-library")
                      , p = e("../../../contexts/i18n");
                    function f(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function m(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (m = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function g({primaryTokenValue: e, primaryTokenDecimals: t=18, primaryTokenSymbol: n, secondaryTokenValue: s, secondaryTokenDecimals: f=18, secondaryTokenSymbol: m, boldSymbols: g=!0, showIconForSwappingTokens: h=!0, className: y, onQuotesClick: _}) {
                        const [v,b] = (0,
                        a.useState)(!0)
                          , E = (0,
                        a.useContext)(p.I18nContext)
                          , T = (0,
                        l.calcTokenAmount)(e, t)
                          , w = (0,
                        l.calcTokenAmount)(s, f)
                          , x = new o.default(w).div(T).round(9).toString(10)
                          , k = new o.default(T).div(w).round(9).toString(10)
                          , C = v ? n : m
                          , S = v ? m : n
                          , N = v ? x : k;
                        let M, O = "=";
                        new o.default(N,10).lt("0.00000001", 10) ? (M = "0.000000001",
                        O = "<") : M = new o.default(N,10).lt("0.000001", 10) ? N : (0,
                        i.formatSwapsValueForDisplay)(N);
                        const I = _ ? "exchange-rate-display__quote-rate" : "exchange-rate-display__quote-rate--no-link"
                          , R = _ ? u.TextColor.primaryDefault : u.TextColor.textDefault;
                        return a.default.createElement("div", {
                            className: (0,
                            r.default)("exchange-rate-display", y)
                        }, a.default.createElement(c.default, {
                            display: u.DISPLAY.FLEX,
                            justifyContent: u.JustifyContent.center,
                            alignItems: u.AlignItems.center,
                            onClick: _,
                            color: R,
                            className: I,
                            gap: 1,
                            "data-testid": "exchange-rate-display-quote-rate"
                        }, a.default.createElement("span", null, "1"), a.default.createElement("span", {
                            className: (0,
                            r.default)({
                                "exchange-rate-display__bold": g
                            }),
                            "data-testid": "exchange-rate-display-base-symbol"
                        }, C), a.default.createElement("span", null, O), a.default.createElement("span", null, M), a.default.createElement("span", {
                            className: (0,
                            r.default)({
                                "exchange-rate-display__bold": g
                            })
                        }, S)), h && a.default.createElement(d.Icon, {
                            name: d.IconName.SwapHorizontal,
                            onClick: () => {
                                b(!v)
                            }
                            ,
                            color: u.IconColor.iconAlternative,
                            style: {
                                cursor: "pointer"
                            },
                            title: E("switch"),
                            "data-testid": "exchange-rate-display-switch"
                        }))
                    }
                    g.propTypes = {
                        primaryTokenValue: s.default.oneOfType([s.default.string, s.default.instanceOf(o.default)]).isRequired,
                        primaryTokenDecimals: s.default.oneOfType([s.default.string, s.default.number]),
                        primaryTokenSymbol: s.default.string.isRequired,
                        secondaryTokenValue: s.default.oneOfType([s.default.string, s.default.instanceOf(o.default)]).isRequired,
                        secondaryTokenDecimals: s.default.oneOfType([s.default.string, s.default.number]),
                        secondaryTokenSymbol: s.default.string.isRequired,
                        className: s.default.string,
                        boldSymbols: s.default.bool,
                        showIconForSwappingTokens: s.default.bool,
                        onQuotesClick: s.default.func
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/swaps/exchange-rate-display/exchange-rate-display.js"
}], [6932, {
    "./exchange-rate-display": 6931
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./exchange-rate-display")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/swaps/exchange-rate-display/index.js"
}], [6933, {
    "../../../ducks/swaps/swaps": 6244,
    react: 4776,
    "react-redux": 4734
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.useSwapsFeatureFlags = function() {
                        const e = (0,
                        s.useDispatch)();
                        (0,
                        a.useEffect)(( () => {
                            (async () => {
                                await e((0,
                                o.fetchSwapsLivenessAndFeatureFlags)())
                            }
                            )()
                        }
                        ), [e])
                    }
                    ;
                    var a = e("react")
                      , s = e("react-redux")
                      , o = e("../../../ducks/swaps/swaps")
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/swaps/hooks/useSwapsFeatureFlags.ts"
}], [6934, {
    "../../../../shared/modules/selectors/networks": 5320,
    "../../../ducks/swaps/swaps": 6244,
    "../../../selectors": 6985,
    "../../../store/actions": 7e3,
    "../swaps.util": 6970,
    react: 4776,
    "react-redux": 4734
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = function() {
                        const e = (0,
                        s.useDispatch)()
                          , t = (0,
                        s.useSelector)(l.getCurrentChainId)
                          , n = (0,
                        s.useSelector)(c.getIsSwapsChain)
                          , u = (0,
                        s.useSelector)(c.checkNetworkAndAccountSupports1559)
                          , d = (0,
                        s.useSelector)(c.getUseExternalServices);
                        (0,
                        a.useEffect)(( () => n && d ? ((0,
                        o.fetchTokens)(t).then((t => {
                            e((0,
                            i.setSwapsTokens)(t))
                        }
                        )).catch((e => console.error(e))),
                        (0,
                        o.fetchTopAssets)(t).then((t => {
                            e((0,
                            r.setTopAssets)(t))
                        }
                        )),
                        (0,
                        o.fetchAggregatorMetadata)(t).then((t => {
                            e((0,
                            r.setAggregatorMetadata)(t))
                        }
                        )),
                        u || e((0,
                        r.fetchAndSetSwapsGasPriceInfo)()),
                        () => {
                            e((0,
                            r.prepareToLeaveSwaps)())
                        }
                        ) : undefined), [e, t, u, n, d])
                    }
                    ;
                    var a = e("react")
                      , s = e("react-redux")
                      , o = e("../swaps.util")
                      , r = e("../../../ducks/swaps/swaps")
                      , i = e("../../../store/actions")
                      , l = e("../../../../shared/modules/selectors/networks")
                      , c = e("../../../selectors")
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/swaps/hooks/useUpdateSwapsState.ts"
}], [6935, {
    "../../../components/component-library": 5806,
    "../../../components/component-library/form-text-field/deprecated": 5794,
    "../../../components/component-library/modal-content/deprecated": 5816,
    "../../../components/component-library/modal-header/deprecated": 5825,
    "../../../contexts/i18n": 6211,
    "../../../helpers/constants/design-system": 6248,
    "prop-types": 4528,
    react: 4776
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    n.default = f;
                    var a, s = function(e, t) {
                        if (!t && e && e.__esModule)
                            return e;
                        if (null === e || "object" != typeof e && "function" != typeof e)
                            return {
                                default: e
                            };
                        var n = p(t);
                        if (n && n.has(e))
                            return n.get(e);
                        var a = {
                            __proto__: null
                        }
                          , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if ("default" !== o && {}.hasOwnProperty.call(e, o)) {
                                var r = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                                r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                            }
                        return a.default = e,
                        n && n.set(e, a),
                        a
                    }(e("react")), o = (a = e("prop-types")) && a.__esModule ? a : {
                        default: a
                    }, r = e("../../../contexts/i18n"), i = e("../../../helpers/constants/design-system"), l = e("../../../components/component-library"), c = e("../../../components/component-library/form-text-field/deprecated"), u = e("../../../components/component-library/modal-content/deprecated"), d = e("../../../components/component-library/modal-header/deprecated");
                    function p(e) {
                        if ("function" != typeof WeakMap)
                            return null;
                        var t = new WeakMap
                          , n = new WeakMap;
                        return (p = function(e) {
                            return e ? n : t
                        }
                        )(e)
                    }
                    function f({onImportTokenCloseClick: e, onImportTokenClick: t, setIsImportTokenModalOpen: n, tokenForImport: a, isOpen: o}) {
                        const p = (0,
                        s.useContext)(r.I18nContext);
                        return s.default.createElement(l.Modal, {
                            isOpen: o,
                            onClose: () => n(!1)
                        }, s.default.createElement(l.ModalOverlay, null), s.default.createElement(u.ModalContent, {
                            modalDialogProps: {
                                display: i.Display.Flex,
                                flexDirection: i.FlexDirection.Column,
                                alignItems: i.AlignItems.center,
                                gap: 4
                            }
                        }, s.default.createElement(d.ModalHeader, {
                            onClose: () => n(!1),
                            width: i.BlockSize.Full
                        }, p("importTokenQuestion")), s.default.createElement(l.BannerAlert, {
                            severity: i.Severity.Danger,
                            description: p("importTokenWarning")
                        }), s.default.createElement(l.AvatarToken, {
                            src: a.iconUrl,
                            name: a.symbol,
                            size: l.AvatarTokenSize.Xl
                        }), s.default.createElement(l.Text, {
                            variant: i.TextVariant.headingSm,
                            as: "h4"
                        }, a.name || ""), s.default.createElement(c.FormTextField, {
                            label: p("contract"),
                            id: "import-tokens-input",
                            inputProps: {
                                variant: i.TextVariant.bodySm
                            },
                            readOnly: !0,
                            value: a.address || "",
                            width: i.BlockSize.Full
                        }), s.default.createElement(l.Box, {
                            display: i.Display.Flex,
                            flexDirection: i.FlexDirection.Row,
                            gap: 4,
                            width: i.BlockSize.Full
                        }, s.default.createElement(l.Button, {
                            variant: l.BUTTON_VARIANT.SECONDARY,
                            block: !0,
                            size: l.BUTTON_SIZES.LG,
                            onClick: e
                        }, p("cancel")), s.default.createElement(l.Button, {
                            variant: l.BUTTON_VARIANT.PRIMARY,
                            block: !0,
                            size: l.BUTTON_SIZES.LG,
                            onClick: t,
                            "data-testid": "import-tokens-import-button"
                        }, p("import")))))
                    }
                    f.propTypes = {
                        onImportTokenCloseClick: o.default.func,
                        onImportTokenClick: o.default.func,
                        setIsImportTokenModalOpen: o.default.func,
                        tokenForImport: o.default.object,
                        isOpen: o.default.bool
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/swaps/import-token/import-token.js"
}], [6936, {
    "./import-token": 6935
}, function() {
    with (this.scopeTerminator)
        with (this.globalThis)
            return function() {
                "use strict";
                return function(e, t, n) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    });
                    var a, s = (a = e("./import-token")) && a.__esModule ? a : {
                        default: a
                    }
                }
            }
}
, {
    package: "$root$",
    file: "ui/pages/swaps/import-token/index.js"
}]], [], {});
