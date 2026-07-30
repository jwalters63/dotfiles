declare module 'gi://Gcr?version=4' {
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';
import type Gck from 'gi://Gck?version=2';
export namespace Gcr {
    enum CertificateChainStatus {
        UNKNOWN,
        INCOMPLETE,
        DISTRUSTED,
        SELFSIGNED,
        PINNED,
        ANCHORED,
    }
    enum CertificateRequestFormat {
        CERTIFICATE_REQUEST_PKCS10,
    }
    enum DataError {
        FAILURE,
        UNRECOGNIZED,
        CANCELLED,
        LOCKED,
    }
    enum DataFormat {
        ALL,
        INVALID,
        DER_PRIVATE_KEY,
        DER_PRIVATE_KEY_RSA,
        DER_PRIVATE_KEY_DSA,
        DER_PRIVATE_KEY_EC,
        DER_SUBJECT_PUBLIC_KEY,
        DER_CERTIFICATE_X509,
        DER_PKCS7,
        DER_PKCS8,
        DER_PKCS8_PLAIN,
        DER_PKCS8_ENCRYPTED,
        DER_PKCS10,
        DER_SPKAC,
        BASE64_SPKAC,
        DER_PKCS12,
        OPENSSH_PUBLIC,
        OPENPGP_PACKET,
        OPENPGP_ARMOR,
        PEM,
        PEM_PRIVATE_KEY_RSA,
        PEM_PRIVATE_KEY_DSA,
        PEM_CERTIFICATE_X509,
        PEM_PKCS7,
        PEM_PKCS8_PLAIN,
        PEM_PKCS8_ENCRYPTED,
        PEM_PKCS12,
        PEM_PRIVATE_KEY,
        PEM_PKCS10,
        PEM_PRIVATE_KEY_EC,
        PEM_PUBLIC_KEY,
    }
    enum PromptReply {
        CANCEL,
        CONTINUE,
    }
    enum SystemPromptError {
        SYSTEM_PROMPT_IN_PROGRESS,
    }
    enum SystemPrompterMode {
        SINGLE,
        MULTIPLE,
    }
    const MAJOR_VERSION: number;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    const PURPOSE_CLIENT_AUTH: string;
    const PURPOSE_CODE_SIGNING: string;
    const PURPOSE_EMAIL: string;
    const PURPOSE_SERVER_AUTH: string;
    const SECRET_EXCHANGE_PROTOCOL_1: string;
    const UNLOCK_OPTION_ALWAYS: string;
    const UNLOCK_OPTION_IDLE: string;
    const UNLOCK_OPTION_SESSION: string;
    const UNLOCK_OPTION_TIMEOUT: string;
    function data_error_get_domain(): GLib.Quark;
    function fingerprint_from_attributes(attrs: Gck.Attributes, checksum_type: GLib.ChecksumType): Uint8Array | null;
    function fingerprint_from_subject_public_key_info(key_info: Uint8Array | string, checksum_type: GLib.ChecksumType): Uint8Array | null;
    function importer_create_for_parsed(parsed: Parsed): Importer[];
    function importer_queue_and_filter_for_parsed(importers: Importer[], parsed: Parsed): Importer[];
    function importer_register(importer_type: GObject.GType, attrs: Gck.Attributes): void;
    function importer_register_well_known(): void;
    function mock_prompter_disconnect(): void;
    function mock_prompter_expect_close(): void;
    function mock_prompter_expect_confirm_cancel(): void;
    function mock_prompter_expect_password_cancel(): void;
    function mock_prompter_get_delay_msec(): number;
    function mock_prompter_is_expecting(): boolean;
    function mock_prompter_is_prompting(): boolean;
    function mock_prompter_set_delay_msec(delay_msec: number): void;
    function mock_prompter_start(): string;
    function mock_prompter_stop(): void;
    function parsed_unref(parsed: null): void;
    function pkcs11_add_module(module: Gck.Module): void;
    function pkcs11_add_module_from_file(module_path: string, unused: null): boolean;
    function pkcs11_get_modules(): Gck.Module[];
    function pkcs11_get_trust_lookup_slots(): Gck.Slot[];
    function pkcs11_get_trust_lookup_uris(): string[] | null;
    function pkcs11_get_trust_store_slot(): Gck.Slot | null;
    function pkcs11_get_trust_store_uri(): string | null;
    function pkcs11_initialize(cancellable: Gio.Cancellable | null): boolean;
    function pkcs11_initialize_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
    function pkcs11_initialize_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.Cancellable | null> | null): void;
    function pkcs11_initialize_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.Cancellable | null> | null): globalThis.Promise<boolean> | void;
    function pkcs11_initialize_finish(result: Gio.AsyncResult): boolean;
    function pkcs11_set_modules(modules: Gck.Module[]): void;
    function pkcs11_set_trust_lookup_uris(pkcs11_uris: string | null): void;
    function pkcs11_set_trust_store_uri(pkcs11_uri: string | null): void;
    function trust_add_pinned_certificate(certificate: Certificate, purpose: string, peer: string, cancellable: Gio.Cancellable | null): boolean;
    function trust_add_pinned_certificate_async(certificate: Certificate, purpose: string, peer: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
    function trust_add_pinned_certificate_async(certificate: Certificate, purpose: string, peer: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Certificate> | null): void;
    function trust_add_pinned_certificate_async(certificate: Certificate, purpose: string, peer: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Certificate> | null): globalThis.Promise<boolean> | void;
    function trust_add_pinned_certificate_finish(result: Gio.AsyncResult): boolean;
    function trust_is_certificate_anchored(certificate: Certificate, purpose: string, cancellable: Gio.Cancellable | null): boolean;
    function trust_is_certificate_anchored_async(certificate: Certificate, purpose: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
    function trust_is_certificate_anchored_async(certificate: Certificate, purpose: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Certificate> | null): void;
    function trust_is_certificate_anchored_async(certificate: Certificate, purpose: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Certificate> | null): globalThis.Promise<boolean> | void;
    function trust_is_certificate_anchored_finish(result: Gio.AsyncResult): boolean;
    function trust_is_certificate_distrusted(serial_nr: Uint8Array | string, issuer: Uint8Array | string, cancellable: Gio.Cancellable | null): boolean;
    function trust_is_certificate_distrusted_async(serial_nr: Uint8Array | string, issuer: Uint8Array | string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
    function trust_is_certificate_distrusted_async(serial_nr: Uint8Array | string, issuer: Uint8Array | string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Uint8Array> | null): void;
    function trust_is_certificate_distrusted_async(serial_nr: Uint8Array | string, issuer: Uint8Array | string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Uint8Array> | null): globalThis.Promise<boolean> | void;
    function trust_is_certificate_distrusted_finish(result: Gio.AsyncResult): boolean;
    function trust_is_certificate_pinned(certificate: Certificate, purpose: string, peer: string, cancellable: Gio.Cancellable | null): boolean;
    function trust_is_certificate_pinned_async(certificate: Certificate, purpose: string, peer: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
    function trust_is_certificate_pinned_async(certificate: Certificate, purpose: string, peer: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Certificate> | null): void;
    function trust_is_certificate_pinned_async(certificate: Certificate, purpose: string, peer: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Certificate> | null): globalThis.Promise<boolean> | void;
    function trust_is_certificate_pinned_finish(result: Gio.AsyncResult): boolean;
    function trust_remove_pinned_certificate(certificate: Certificate, purpose: string, peer: string, cancellable: Gio.Cancellable | null): boolean;
    function trust_remove_pinned_certificate_async(certificate: Certificate, purpose: string, peer: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
    function trust_remove_pinned_certificate_async(certificate: Certificate, purpose: string, peer: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Certificate> | null): void;
    function trust_remove_pinned_certificate_async(certificate: Certificate, purpose: string, peer: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Certificate> | null): globalThis.Promise<boolean> | void;
    function trust_remove_pinned_certificate_finish(result: Gio.AsyncResult): boolean;
    enum CertificateChainFlags {
        NONE,
        NO_LOOKUPS,
    }
    enum CertificateSectionFlags {
        NONE,
        IMPORTANT,
    }
    namespace AccessDescription {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class AccessDescription extends GObject.Object {
        static $gtype: GObject.GType<AccessDescription>;
        $signals: AccessDescription.SignalSignatures;
        constructor(properties?: Partial<AccessDescription.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof AccessDescription.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AccessDescription.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AccessDescription.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AccessDescription.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AccessDescription.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AccessDescription.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_location(): GeneralName;
        get_method_name(): string;
        get_method_oid(): string;
    }
    namespace CertificateChain {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::length": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            length: number;
        }
    }
    class CertificateChain extends GObject.Object {
        static $gtype: GObject.GType<CertificateChain>;
        get length(): number;
        $signals: CertificateChain.SignalSignatures;
        constructor(properties?: Partial<CertificateChain.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): CertificateChain;
        connect<K extends keyof CertificateChain.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateChain.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CertificateChain.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateChain.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CertificateChain.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CertificateChain.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        add(certificate: Certificate): void;
        build(purpose: string, peer: string | null, flags: CertificateChainFlags, cancellable: Gio.Cancellable | null): boolean;
        build_async(purpose: string, peer: string | null, flags: CertificateChainFlags, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        build_async(purpose: string, peer: string | null, flags: CertificateChainFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        build_async(purpose: string, peer: string | null, flags: CertificateChainFlags, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        build_finish(result: Gio.AsyncResult): boolean;
        get_anchor(): Certificate;
        get_certificate(index: number): Certificate;
        get_endpoint(): Certificate;
        get_length(): number;
        get_status(): CertificateChainStatus;
    }
    namespace CertificateExtension {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::critical": (pspec: GObject.ParamSpec) => void;
            "notify::oid": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            critical: boolean;
            oid: string;
            value: GLib.Bytes | Uint8Array;
        }
    }
    class CertificateExtension extends GObject.Object {
        static $gtype: GObject.GType<CertificateExtension>;
        get critical(): boolean;
        get oid(): string;
        get value(): GLib.Bytes;
        $signals: CertificateExtension.SignalSignatures;
        constructor(properties?: Partial<CertificateExtension.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CertificateExtension.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateExtension.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CertificateExtension.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateExtension.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CertificateExtension.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CertificateExtension.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_description(): string | null;
        get_oid(): string;
        get_value(): GLib.Bytes;
        is_critical(): boolean;
    }
    namespace CertificateExtensionAuthorityInfoAccess {
        interface SignalSignatures extends CertificateExtension.SignalSignatures {
            "notify::n-items": (pspec: GObject.ParamSpec) => void;
            "notify::critical": (pspec: GObject.ParamSpec) => void;
            "notify::oid": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps<A extends GObject.Object = GObject.Object> extends CertificateExtension.ConstructorProps, Gio.ListModel.ConstructorProps {
            n_items: number;
            nItems: number;
        }
    }
    class CertificateExtensionAuthorityInfoAccess<A extends GObject.Object = GObject.Object> extends CertificateExtension implements Gio.ListModel<A> {
        static $gtype: GObject.GType<CertificateExtensionAuthorityInfoAccess>;
        get n_items(): number;
        get nItems(): number;
        $signals: CertificateExtensionAuthorityInfoAccess.SignalSignatures;
        constructor(properties?: Partial<CertificateExtensionAuthorityInfoAccess.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CertificateExtensionAuthorityInfoAccess.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateExtensionAuthorityInfoAccess.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CertificateExtensionAuthorityInfoAccess.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateExtensionAuthorityInfoAccess.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CertificateExtensionAuthorityInfoAccess.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CertificateExtensionAuthorityInfoAccess.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_description(position: number): AccessDescription;
        get_description(...args: never[]): any;
        get_item_type(): GObject.GType;
        get_n_items(): number;
        get_item(position: number): A | null;
        items_changed(position: number, removed: number, added: number): void;
        vfunc_get_item(position: number): A | null;
        vfunc_get_item_type(): GObject.GType;
        vfunc_get_n_items(): number;
    }
    namespace CertificateExtensionAuthorityKeyIdentifier {
        interface SignalSignatures extends CertificateExtension.SignalSignatures {
            "notify::critical": (pspec: GObject.ParamSpec) => void;
            "notify::oid": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends CertificateExtension.ConstructorProps {}
    }
    class CertificateExtensionAuthorityKeyIdentifier extends CertificateExtension {
        static $gtype: GObject.GType<CertificateExtensionAuthorityKeyIdentifier>;
        $signals: CertificateExtensionAuthorityKeyIdentifier.SignalSignatures;
        constructor(properties?: Partial<CertificateExtensionAuthorityKeyIdentifier.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CertificateExtensionAuthorityKeyIdentifier.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateExtensionAuthorityKeyIdentifier.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CertificateExtensionAuthorityKeyIdentifier.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateExtensionAuthorityKeyIdentifier.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CertificateExtensionAuthorityKeyIdentifier.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CertificateExtensionAuthorityKeyIdentifier.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_authority_cert_issuer(): GeneralNames | null;
        get_authority_cert_serial_number(): GLib.Bytes | null;
        get_key_id(): GLib.Bytes | null;
    }
    namespace CertificateExtensionBasicConstraints {
        interface SignalSignatures extends CertificateExtension.SignalSignatures {
            "notify::critical": (pspec: GObject.ParamSpec) => void;
            "notify::oid": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends CertificateExtension.ConstructorProps {}
    }
    class CertificateExtensionBasicConstraints extends CertificateExtension {
        static $gtype: GObject.GType<CertificateExtensionBasicConstraints>;
        $signals: CertificateExtensionBasicConstraints.SignalSignatures;
        constructor(properties?: Partial<CertificateExtensionBasicConstraints.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CertificateExtensionBasicConstraints.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateExtensionBasicConstraints.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CertificateExtensionBasicConstraints.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateExtensionBasicConstraints.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CertificateExtensionBasicConstraints.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CertificateExtensionBasicConstraints.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_path_len_constraint(): number;
        is_ca(): boolean;
    }
    namespace CertificateExtensionCertificatePolicies {
        interface SignalSignatures extends CertificateExtension.SignalSignatures {
            "notify::n-items": (pspec: GObject.ParamSpec) => void;
            "notify::critical": (pspec: GObject.ParamSpec) => void;
            "notify::oid": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps<A extends GObject.Object = GObject.Object> extends CertificateExtension.ConstructorProps, Gio.ListModel.ConstructorProps {
            n_items: number;
            nItems: number;
        }
    }
    class CertificateExtensionCertificatePolicies<A extends GObject.Object = GObject.Object> extends CertificateExtension implements Gio.ListModel<A> {
        static $gtype: GObject.GType<CertificateExtensionCertificatePolicies>;
        get n_items(): number;
        get nItems(): number;
        $signals: CertificateExtensionCertificatePolicies.SignalSignatures;
        constructor(properties?: Partial<CertificateExtensionCertificatePolicies.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CertificateExtensionCertificatePolicies.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateExtensionCertificatePolicies.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CertificateExtensionCertificatePolicies.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateExtensionCertificatePolicies.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CertificateExtensionCertificatePolicies.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CertificateExtensionCertificatePolicies.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_policy(position: number): CertificatePolicy;
        get_item_type(): GObject.GType;
        get_n_items(): number;
        get_item(position: number): A | null;
        items_changed(position: number, removed: number, added: number): void;
        vfunc_get_item(position: number): A | null;
        vfunc_get_item_type(): GObject.GType;
        vfunc_get_n_items(): number;
    }
    namespace CertificateExtensionCrlDistributionPoints {
        interface SignalSignatures extends CertificateExtension.SignalSignatures {
            "notify::n-items": (pspec: GObject.ParamSpec) => void;
            "notify::critical": (pspec: GObject.ParamSpec) => void;
            "notify::oid": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps<A extends GObject.Object = GObject.Object> extends CertificateExtension.ConstructorProps, Gio.ListModel.ConstructorProps {
            n_items: number;
            nItems: number;
        }
    }
    class CertificateExtensionCrlDistributionPoints<A extends GObject.Object = GObject.Object> extends CertificateExtension implements Gio.ListModel<A> {
        static $gtype: GObject.GType<CertificateExtensionCrlDistributionPoints>;
        get n_items(): number;
        get nItems(): number;
        $signals: CertificateExtensionCrlDistributionPoints.SignalSignatures;
        constructor(properties?: Partial<CertificateExtensionCrlDistributionPoints.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CertificateExtensionCrlDistributionPoints.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateExtensionCrlDistributionPoints.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CertificateExtensionCrlDistributionPoints.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateExtensionCrlDistributionPoints.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CertificateExtensionCrlDistributionPoints.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CertificateExtensionCrlDistributionPoints.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_distribution_point(position: number): DistributionPoint;
        get_item_type(): GObject.GType;
        get_n_items(): number;
        get_item(position: number): A | null;
        items_changed(position: number, removed: number, added: number): void;
        vfunc_get_item(position: number): A | null;
        vfunc_get_item_type(): GObject.GType;
        vfunc_get_n_items(): number;
    }
    namespace CertificateExtensionExtendedKeyUsage {
        interface SignalSignatures extends CertificateExtension.SignalSignatures {
            "notify::critical": (pspec: GObject.ParamSpec) => void;
            "notify::oid": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends CertificateExtension.ConstructorProps {}
    }
    class CertificateExtensionExtendedKeyUsage extends CertificateExtension {
        static $gtype: GObject.GType<CertificateExtensionExtendedKeyUsage>;
        $signals: CertificateExtensionExtendedKeyUsage.SignalSignatures;
        constructor(properties?: Partial<CertificateExtensionExtendedKeyUsage.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CertificateExtensionExtendedKeyUsage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateExtensionExtendedKeyUsage.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CertificateExtensionExtendedKeyUsage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateExtensionExtendedKeyUsage.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CertificateExtensionExtendedKeyUsage.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CertificateExtensionExtendedKeyUsage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_descriptions(): string[];
        get_oids(): string[];
    }
    namespace CertificateExtensionKeyUsage {
        interface SignalSignatures extends CertificateExtension.SignalSignatures {
            "notify::critical": (pspec: GObject.ParamSpec) => void;
            "notify::oid": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends CertificateExtension.ConstructorProps {}
    }
    class CertificateExtensionKeyUsage extends CertificateExtension {
        static $gtype: GObject.GType<CertificateExtensionKeyUsage>;
        $signals: CertificateExtensionKeyUsage.SignalSignatures;
        constructor(properties?: Partial<CertificateExtensionKeyUsage.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CertificateExtensionKeyUsage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateExtensionKeyUsage.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CertificateExtensionKeyUsage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateExtensionKeyUsage.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CertificateExtensionKeyUsage.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CertificateExtensionKeyUsage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_descriptions(): string[];
        get_usages(): number;
    }
    namespace CertificateExtensionList {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::n-items": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps<A extends GObject.Object = GObject.Object> extends GObject.Object.ConstructorProps, Gio.ListModel.ConstructorProps {
            n_items: number;
            nItems: number;
        }
    }
    class CertificateExtensionList<A extends GObject.Object = GObject.Object> extends GObject.Object implements Gio.ListModel<A> {
        static $gtype: GObject.GType<CertificateExtensionList>;
        get n_items(): number;
        get nItems(): number;
        $signals: CertificateExtensionList.SignalSignatures;
        constructor(properties?: Partial<CertificateExtensionList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CertificateExtensionList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateExtensionList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CertificateExtensionList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateExtensionList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CertificateExtensionList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CertificateExtensionList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        find_by_oid(oid: string): CertificateExtension | null;
        get_extension(position: number): CertificateExtension;
        get_item_type(): GObject.GType;
        get_n_items(): number;
        get_item(position: number): A | null;
        items_changed(position: number, removed: number, added: number): void;
        vfunc_get_item(position: number): A | null;
        vfunc_get_item_type(): GObject.GType;
        vfunc_get_n_items(): number;
    }
    namespace CertificateExtensionSubjectAltName {
        interface SignalSignatures extends CertificateExtension.SignalSignatures {
            "notify::critical": (pspec: GObject.ParamSpec) => void;
            "notify::oid": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps<A extends GObject.Object = GObject.Object> extends CertificateExtension.ConstructorProps, Gio.ListModel.ConstructorProps {}
    }
    class CertificateExtensionSubjectAltName<A extends GObject.Object = GObject.Object> extends CertificateExtension implements Gio.ListModel<A> {
        static $gtype: GObject.GType<CertificateExtensionSubjectAltName>;
        $signals: CertificateExtensionSubjectAltName.SignalSignatures;
        constructor(properties?: Partial<CertificateExtensionSubjectAltName.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CertificateExtensionSubjectAltName.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateExtensionSubjectAltName.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CertificateExtensionSubjectAltName.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateExtensionSubjectAltName.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CertificateExtensionSubjectAltName.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CertificateExtensionSubjectAltName.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_name(position: number): GeneralName;
        get_item_type(): GObject.GType;
        get_n_items(): number;
        get_item(position: number): A | null;
        items_changed(position: number, removed: number, added: number): void;
        vfunc_get_item(position: number): A | null;
        vfunc_get_item_type(): GObject.GType;
        vfunc_get_n_items(): number;
    }
    namespace CertificateExtensionSubjectKeyIdentifier {
        interface SignalSignatures extends CertificateExtension.SignalSignatures {
            "notify::critical": (pspec: GObject.ParamSpec) => void;
            "notify::oid": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends CertificateExtension.ConstructorProps {}
    }
    class CertificateExtensionSubjectKeyIdentifier extends CertificateExtension {
        static $gtype: GObject.GType<CertificateExtensionSubjectKeyIdentifier>;
        $signals: CertificateExtensionSubjectKeyIdentifier.SignalSignatures;
        constructor(properties?: Partial<CertificateExtensionSubjectKeyIdentifier.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CertificateExtensionSubjectKeyIdentifier.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateExtensionSubjectKeyIdentifier.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CertificateExtensionSubjectKeyIdentifier.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateExtensionSubjectKeyIdentifier.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CertificateExtensionSubjectKeyIdentifier.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CertificateExtensionSubjectKeyIdentifier.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_key_id(): GLib.Bytes;
    }
    namespace CertificateField {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::section": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            label: string;
            section: CertificateSection;
            value: GObject.Value | any;
        }
    }
    class CertificateField extends GObject.Object {
        static $gtype: GObject.GType<CertificateField>;
        get label(): string;
        get section(): CertificateSection;
        get value(): unknown;
        $signals: CertificateField.SignalSignatures;
        constructor(properties?: Partial<CertificateField.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CertificateField.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateField.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CertificateField.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateField.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CertificateField.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CertificateField.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_label(): string;
        get_section(): CertificateSection;
        get_value(): [boolean, unknown];
        get_value_type(): GObject.GType;
    }
    namespace CertificatePolicy {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps<A extends GObject.Object = GObject.Object> extends GObject.Object.ConstructorProps, Gio.ListModel.ConstructorProps {}
    }
    class CertificatePolicy<A extends GObject.Object = GObject.Object> extends GObject.Object implements Gio.ListModel<A> {
        static $gtype: GObject.GType<CertificatePolicy>;
        $signals: CertificatePolicy.SignalSignatures;
        constructor(properties?: Partial<CertificatePolicy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CertificatePolicy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificatePolicy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CertificatePolicy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificatePolicy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CertificatePolicy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CertificatePolicy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_name(): string;
        get_oid(): string;
        get_item_type(): GObject.GType;
        get_n_items(): number;
        get_item(position: number): A | null;
        items_changed(position: number, removed: number, added: number): void;
        vfunc_get_item(position: number): A | null;
        vfunc_get_item_type(): GObject.GType;
        vfunc_get_n_items(): number;
    }
    namespace CertificatePolicyQualifier {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class CertificatePolicyQualifier extends GObject.Object {
        static $gtype: GObject.GType<CertificatePolicyQualifier>;
        $signals: CertificatePolicyQualifier.SignalSignatures;
        constructor(properties?: Partial<CertificatePolicyQualifier.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CertificatePolicyQualifier.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificatePolicyQualifier.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CertificatePolicyQualifier.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificatePolicyQualifier.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CertificatePolicyQualifier.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CertificatePolicyQualifier.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_name(): string;
        get_oid(): string;
    }
    namespace CertificateRequest {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::private-key": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            private_key: Gck.Object;
            privateKey: Gck.Object;
        }
    }
    class CertificateRequest extends GObject.Object {
        static $gtype: GObject.GType<CertificateRequest>;
        get private_key(): Gck.Object;
        get privateKey(): Gck.Object;
        $signals: CertificateRequest.SignalSignatures;
        constructor(properties?: Partial<CertificateRequest.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CertificateRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateRequest.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CertificateRequest.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateRequest.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CertificateRequest.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CertificateRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static capable(private_key: Gck.Object, cancellable: Gio.Cancellable | null): boolean;
        static capable_async(private_key: Gck.Object, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<CertificateRequest> | null): void;
        static capable_finish(result: Gio.AsyncResult): boolean;
        static prepare(format: CertificateRequestFormat, private_key: Gck.Object): CertificateRequest;
        complete(cancellable: Gio.Cancellable | null): boolean;
        complete_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        complete_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        complete_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        complete_finish(result: Gio.AsyncResult): boolean;
        encode(textual: boolean): Uint8Array;
        get_format(): CertificateRequestFormat;
        get_private_key(): Gck.Object;
        set_cn(cn: string): void;
    }
    namespace CertificateSection {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::fields": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            fields: Gio.ListModel;
            label: string;
        }
    }
    class CertificateSection extends GObject.Object {
        static $gtype: GObject.GType<CertificateSection>;
        get fields(): Gio.ListModel;
        get label(): string;
        $signals: CertificateSection.SignalSignatures;
        constructor(properties?: Partial<CertificateSection.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof CertificateSection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateSection.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CertificateSection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CertificateSection.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CertificateSection.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CertificateSection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_fields(): Gio.ListModel;
        get_flags(): CertificateSectionFlags;
        get_label(): string;
    }
    namespace DistributionPoint {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class DistributionPoint extends GObject.Object {
        static $gtype: GObject.GType<DistributionPoint>;
        $signals: DistributionPoint.SignalSignatures;
        constructor(properties?: Partial<DistributionPoint.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof DistributionPoint.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DistributionPoint.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DistributionPoint.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DistributionPoint.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DistributionPoint.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DistributionPoint.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_full_name(): GeneralNames | null;
        get_relative_name_part(part: string): string | null;
    }
    namespace GeneralName {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    class GeneralName extends GObject.Object {
        static $gtype: GObject.GType<GeneralName>;
        $signals: GeneralName.SignalSignatures;
        constructor(properties?: Partial<GeneralName.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof GeneralName.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GeneralName.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GeneralName.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GeneralName.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GeneralName.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GeneralName.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_description(): string;
        get_value(): string;
        get_value_raw(): GLib.Bytes;
    }
    namespace GeneralNames {
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        interface ConstructorProps<A extends GObject.Object = GObject.Object> extends GObject.Object.ConstructorProps, Gio.ListModel.ConstructorProps {}
    }
    class GeneralNames<A extends GObject.Object = GObject.Object> extends GObject.Object implements Gio.ListModel<A> {
        static $gtype: GObject.GType<GeneralNames>;
        $signals: GeneralNames.SignalSignatures;
        constructor(properties?: Partial<GeneralNames.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof GeneralNames.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GeneralNames.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GeneralNames.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GeneralNames.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GeneralNames.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GeneralNames.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_name(position: number): GeneralName;
        get_item_type(): GObject.GType;
        get_n_items(): number;
        get_item(position: number): A | null;
        items_changed(position: number, removed: number, added: number): void;
        vfunc_get_item(position: number): A | null;
        vfunc_get_item_type(): GObject.GType;
        vfunc_get_n_items(): number;
    }
    namespace Parser {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            authenticate: (arg0: number) => boolean | void;
            parsed: () => void;
            "notify::parsed-attributes": (pspec: GObject.ParamSpec) => void;
            "notify::parsed-description": (pspec: GObject.ParamSpec) => void;
            "notify::parsed-label": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            parsed_attributes: Gck.Attributes | null;
            parsedAttributes: Gck.Attributes | null;
            parsed_description: string | null;
            parsedDescription: string | null;
            parsed_label: string | null;
            parsedLabel: string | null;
        }
    }
    class Parser extends GObject.Object {
        static $gtype: GObject.GType<Parser>;
        get parsed_attributes(): Gck.Attributes | null;
        get parsedAttributes(): Gck.Attributes | null;
        get parsed_description(): string | null;
        get parsedDescription(): string | null;
        get parsed_label(): string | null;
        get parsedLabel(): string | null;
        $signals: Parser.SignalSignatures;
        constructor(properties?: Partial<Parser.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](): Parser;
        connect<K extends keyof Parser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Parser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Parser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Parser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Parser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Parser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_authenticate(count: number): boolean;
        vfunc_parsed(): void;
        add_password(password: string | null): void;
        format_disable(format: DataFormat): void;
        format_enable(format: DataFormat): void;
        format_supported(format: DataFormat): boolean;
        get_filename(): string;
        get_parsed(): Parsed;
        get_parsed_attributes(): Gck.Attributes | null;
        get_parsed_block(): Uint8Array | null;
        get_parsed_bytes(): GLib.Bytes;
        get_parsed_description(): string | null;
        get_parsed_format(): DataFormat;
        get_parsed_label(): string | null;
        parse_bytes(data: GLib.Bytes | Uint8Array): boolean;
        parse_data(data: Uint8Array | string): boolean;
        parse_stream(input: Gio.InputStream, cancellable: Gio.Cancellable | null): boolean;
        parse_stream_async(input: Gio.InputStream, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        parse_stream_async(input: Gio.InputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        parse_stream_async(input: Gio.InputStream, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        parse_stream_finish(result: Gio.AsyncResult): boolean;
        set_filename(filename: string | null): void;
    }
    namespace Pkcs11Certificate {
        interface SignalSignatures extends Gck.Object.SignalSignatures {
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::handle": (pspec: GObject.ParamSpec) => void;
            "notify::module": (pspec: GObject.ParamSpec) => void;
            "notify::session": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::expiry-date": (pspec: GObject.ParamSpec) => void;
            "notify::issuer-name": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::subject-name": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends Gck.Object.ConstructorProps, Certificate.ConstructorProps {
            attributes: Gck.Attributes;
        }
    }
    class Pkcs11Certificate extends Gck.Object implements Certificate {
        static $gtype: GObject.GType<Pkcs11Certificate>;
        get attributes(): Gck.Attributes;
        $signals: Pkcs11Certificate.SignalSignatures;
        constructor(properties?: Partial<Pkcs11Certificate.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof Pkcs11Certificate.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Pkcs11Certificate.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Pkcs11Certificate.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Pkcs11Certificate.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Pkcs11Certificate.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Pkcs11Certificate.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static lookup_issuer(certificate: Certificate, cancellable: Gio.Cancellable | null): Certificate | null;
        static lookup_issuer_async(certificate: Certificate, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Pkcs11Certificate> | null): void;
        static lookup_issuer_finish(result: Gio.AsyncResult): Certificate | null;
        static new_from_uri(pkcs11_uri: string, cancellable: Gio.Cancellable | null): Certificate | null;
        static new_from_uri_async(pkcs11_uri: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Pkcs11Certificate> | null): void;
        static new_from_uri_finish(result: Gio.AsyncResult): Certificate | null;
        get_attributes(): Gck.Attributes;
        get description(): string;
        get expiry_date(): GLib.DateTime | null;
        get expiryDate(): GLib.DateTime | null;
        get issuer_name(): string | null;
        get issuerName(): string | null;
        get label(): string;
        get subject_name(): string | null;
        get subjectName(): string | null;
        get_basic_constraints(): [boolean, boolean, number];
        get_der_data(): Uint8Array;
        get_expiry_date(): GLib.DateTime | null;
        get_fingerprint(type: GLib.ChecksumType): Uint8Array | null;
        get_fingerprint_hex(type: GLib.ChecksumType): string | null;
        get_interface_elements(): CertificateSection[];
        get_issued_date(): GLib.DateTime | null;
        get_issuer_cn(): string | null;
        get_issuer_dn(): string | null;
        get_issuer_name(): string | null;
        get_issuer_part(part: string): string | null;
        get_issuer_raw(): Uint8Array | null;
        get_key_size(): number;
        get_public_key_info(): SubjectPublicKeyInfo;
        get_serial_number(): Uint8Array | null;
        get_serial_number_hex(): string | null;
        get_subject_cn(): string | null;
        get_subject_dn(): string | null;
        get_subject_name(): string | null;
        get_subject_part(part: string): string | null;
        get_subject_raw(): Uint8Array | null;
        get_version(): number;
        is_issuer(issuer: Certificate): boolean;
        list_extensions(): CertificateExtensionList;
        mixin_emit_notify(): void;
        vfunc_get_der_data(): Uint8Array | string;
        get_data(key: string): null;
        get_data(...args: never[]): any;
        set(properties: { [key: string]: any }): void;
        set(...args: never[]): any;
    }
    namespace SecretExchange {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::protocol": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            protocol: string;
        }
    }
    class SecretExchange extends GObject.Object {
        static $gtype: GObject.GType<SecretExchange>;
        get protocol(): string;
        $signals: SecretExchange.SignalSignatures;
        constructor(properties?: Partial<SecretExchange.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](protocol: string | null): SecretExchange;
        connect<K extends keyof SecretExchange.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SecretExchange.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SecretExchange.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SecretExchange.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SecretExchange.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SecretExchange.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        vfunc_derive_transport_key(peer: number, n_peer: number): boolean;
        vfunc_generate_exchange_key(scheme: string, public_key: number, n_public_key: number): boolean;
        begin(): string;
        get_protocol(): string;
        get_secret(): string[];
        receive(exchange: string): boolean;
        send(secret: string | null, secret_len: bigint | number): string;
    }
    namespace SimpleCertificate {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::expiry-date": (pspec: GObject.ParamSpec) => void;
            "notify::issuer-name": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::subject-name": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Certificate.ConstructorProps {}
    }
    class SimpleCertificate extends GObject.Object implements Certificate {
        static $gtype: GObject.GType<SimpleCertificate>;
        $signals: SimpleCertificate.SignalSignatures;
        constructor(properties?: Partial<SimpleCertificate.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](data: Uint8Array | string): SimpleCertificate;
        connect<K extends keyof SimpleCertificate.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SimpleCertificate.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SimpleCertificate.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SimpleCertificate.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SimpleCertificate.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SimpleCertificate.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get description(): string;
        get expiry_date(): GLib.DateTime | null;
        get expiryDate(): GLib.DateTime | null;
        get issuer_name(): string | null;
        get issuerName(): string | null;
        get label(): string;
        get subject_name(): string | null;
        get subjectName(): string | null;
        get_basic_constraints(): [boolean, boolean, number];
        get_der_data(): Uint8Array;
        get_expiry_date(): GLib.DateTime | null;
        get_fingerprint(type: GLib.ChecksumType): Uint8Array | null;
        get_fingerprint_hex(type: GLib.ChecksumType): string | null;
        get_interface_elements(): CertificateSection[];
        get_issued_date(): GLib.DateTime | null;
        get_issuer_cn(): string | null;
        get_issuer_dn(): string | null;
        get_issuer_name(): string | null;
        get_issuer_part(part: string): string | null;
        get_issuer_raw(): Uint8Array | null;
        get_key_size(): number;
        get_public_key_info(): SubjectPublicKeyInfo;
        get_serial_number(): Uint8Array | null;
        get_serial_number_hex(): string | null;
        get_subject_cn(): string | null;
        get_subject_dn(): string | null;
        get_subject_name(): string | null;
        get_subject_part(part: string): string | null;
        get_subject_raw(): Uint8Array | null;
        get_version(): number;
        is_issuer(issuer: Certificate): boolean;
        list_extensions(): CertificateExtensionList;
        mixin_emit_notify(): void;
        vfunc_get_der_data(): Uint8Array | string;
    }
    namespace SshAskpass {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::interaction": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            interaction: Gio.TlsInteraction;
        }
    }
    class SshAskpass extends GObject.Object {
        static $gtype: GObject.GType<SshAskpass>;
        get interaction(): Gio.TlsInteraction;
        $signals: SshAskpass.SignalSignatures;
        constructor(properties?: Partial<SshAskpass.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](interaction: Gio.TlsInteraction): SshAskpass;
        connect<K extends keyof SshAskpass.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SshAskpass.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SshAskpass.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SshAskpass.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SshAskpass.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SshAskpass.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static child_setup(askpass: null): void;
        get_interaction(): Gio.TlsInteraction;
    }
    namespace SystemPrompt {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::bus-name": (pspec: GObject.ParamSpec) => void;
            "notify::secret-exchange": (pspec: GObject.ParamSpec) => void;
            "notify::timeout-seconds": (pspec: GObject.ParamSpec) => void;
            "notify::caller-window": (pspec: GObject.ParamSpec) => void;
            "notify::cancel-label": (pspec: GObject.ParamSpec) => void;
            "notify::choice-chosen": (pspec: GObject.ParamSpec) => void;
            "notify::choice-label": (pspec: GObject.ParamSpec) => void;
            "notify::continue-label": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::message": (pspec: GObject.ParamSpec) => void;
            "notify::password-new": (pspec: GObject.ParamSpec) => void;
            "notify::password-strength": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::warning": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps, Prompt.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.Initable.ConstructorProps {
            bus_name: string;
            busName: string;
            secret_exchange: SecretExchange;
            secretExchange: SecretExchange;
            timeout_seconds: number;
            timeoutSeconds: number;
        }
    }
    class SystemPrompt extends GObject.Object implements Prompt, Gio.AsyncInitable<SystemPrompt>, Gio.Initable {
        static $gtype: GObject.GType<SystemPrompt>;
        get bus_name(): string;
        get busName(): string;
        get secret_exchange(): SecretExchange;
        set secret_exchange(val: SecretExchange);
        get secretExchange(): SecretExchange;
        set secretExchange(val: SecretExchange);
        set timeout_seconds(val: number);
        set timeoutSeconds(val: number);
        $signals: SystemPrompt.SignalSignatures;
        constructor(properties?: Partial<SystemPrompt.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        connect<K extends keyof SystemPrompt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SystemPrompt.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SystemPrompt.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SystemPrompt.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SystemPrompt.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SystemPrompt.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        static error_get_domain(): GLib.Quark;
        static open(timeout_seconds: number, cancellable: Gio.Cancellable | null): SystemPrompt;
        static open_async(timeout_seconds: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<SystemPrompt> | null): void;
        static open_finish(result: Gio.AsyncResult): SystemPrompt;
        static open_for_prompter(prompter_name: string | null, timeout_seconds: number, cancellable: Gio.Cancellable | null): SystemPrompt;
        static open_for_prompter_async(prompter_name: string | null, timeout_seconds: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<SystemPrompt> | null): void;
        close(cancellable: Gio.Cancellable | null): boolean;
        close(...args: never[]): any;
        close_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        close_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        close_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        close_finish(result: Gio.AsyncResult): boolean;
        get_secret_exchange(): SecretExchange;
        get caller_window(): string;
        set caller_window(val: string);
        get callerWindow(): string;
        set callerWindow(val: string);
        get cancel_label(): string;
        set cancel_label(val: string);
        get cancelLabel(): string;
        set cancelLabel(val: string);
        get choice_chosen(): boolean;
        set choice_chosen(val: boolean);
        get choiceChosen(): boolean;
        set choiceChosen(val: boolean);
        get choice_label(): string;
        set choice_label(val: string);
        get choiceLabel(): string;
        set choiceLabel(val: string);
        get continue_label(): string;
        set continue_label(val: string);
        get continueLabel(): string;
        set continueLabel(val: string);
        get description(): string;
        set description(val: string);
        get message(): string;
        set message(val: string);
        get password_new(): boolean;
        set password_new(val: boolean);
        get passwordNew(): boolean;
        set passwordNew(val: boolean);
        get password_strength(): number;
        get passwordStrength(): number;
        get title(): string;
        set title(val: string);
        get warning(): string;
        set warning(val: string);
        confirm(cancellable: Gio.Cancellable | null): PromptReply;
        confirm_async(cancellable: Gio.Cancellable | null): globalThis.Promise<PromptReply>;
        confirm_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        confirm_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<PromptReply> | void;
        confirm_finish(result: Gio.AsyncResult): PromptReply;
        confirm_run(cancellable: Gio.Cancellable | null): PromptReply;
        get_caller_window(): string;
        get_cancel_label(): string;
        get_choice_chosen(): boolean;
        get_choice_label(): string;
        get_continue_label(): string;
        get_description(): string;
        get_message(): string;
        get_password_new(): boolean;
        get_password_strength(): number;
        get_title(): string;
        get_warning(): string;
        password(cancellable: Gio.Cancellable | null): string;
        password_async(cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        password_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        password_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        password_finish(result: Gio.AsyncResult): string;
        password_run(cancellable: Gio.Cancellable | null): string;
        reset(): void;
        set_caller_window(window_id: string): void;
        set_cancel_label(cancel_label: string): void;
        set_choice_chosen(chosen: boolean): void;
        set_choice_label(choice_label: string | null): void;
        set_continue_label(continue_label: string): void;
        set_description(description: string): void;
        set_message(message: string): void;
        set_password_new(new_password: boolean): void;
        set_title(title: string): void;
        set_warning(warning: string | null): void;
        vfunc_prompt_close(): void;
        vfunc_prompt_confirm_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_prompt_confirm_finish(result: Gio.AsyncResult): PromptReply;
        vfunc_prompt_password_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_prompt_password_finish(result: Gio.AsyncResult): string;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        init_finish(res: Gio.AsyncResult): boolean;
        new_finish(res: Gio.AsyncResult): SystemPrompt;
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        init(cancellable: Gio.Cancellable | null): boolean;
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }
    namespace SystemPrompter {
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "new-prompt": () => Prompt;
            "notify::prompt-type": (pspec: GObject.ParamSpec) => void;
            "notify::prompting": (pspec: GObject.ParamSpec) => void;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            prompt_type: GObject.GTypeInput;
            promptType: GObject.GTypeInput;
            prompting: boolean;
        }
    }
    class SystemPrompter extends GObject.Object {
        static $gtype: GObject.GType<SystemPrompter>;
        get prompt_type(): GObject.GType;
        get promptType(): GObject.GType;
        get prompting(): boolean;
        $signals: SystemPrompter.SignalSignatures;
        constructor(properties?: Partial<SystemPrompter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static ["new"](mode: SystemPrompterMode, prompt_type: GObject.GType): SystemPrompter;
        connect<K extends keyof SystemPrompter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SystemPrompter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SystemPrompter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SystemPrompter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SystemPrompter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SystemPrompter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
        get_mode(): SystemPrompterMode;
        get_prompt_type(): GObject.GType;
        get_prompting(): boolean;
        register(connection: Gio.DBusConnection): void;
        unregister(wait: boolean): void;
    }
    type AccessDescriptionClass = typeof AccessDescription;
    type CertificateChainClass = typeof CertificateChain;
    abstract class CertificateChainPrivate {
        static $gtype: GObject.GType<CertificateChainPrivate>;
    }
    type CertificateExtensionAuthorityInfoAccessClass = typeof CertificateExtensionAuthorityInfoAccess;
    type CertificateExtensionAuthorityKeyIdentifierClass = typeof CertificateExtensionAuthorityKeyIdentifier;
    type CertificateExtensionBasicConstraintsClass = typeof CertificateExtensionBasicConstraints;
    type CertificateExtensionCertificatePoliciesClass = typeof CertificateExtensionCertificatePolicies;
    type CertificateExtensionClass = typeof CertificateExtension;
    type CertificateExtensionCrlDistributionPointsClass = typeof CertificateExtensionCrlDistributionPoints;
    type CertificateExtensionExtendedKeyUsageClass = typeof CertificateExtensionExtendedKeyUsage;
    type CertificateExtensionKeyUsageClass = typeof CertificateExtensionKeyUsage;
    type CertificateExtensionListClass = typeof CertificateExtensionList;
    type CertificateExtensionSubjectAltNameClass = typeof CertificateExtensionSubjectAltName;
    type CertificateExtensionSubjectKeyIdentifierClass = typeof CertificateExtensionSubjectKeyIdentifier;
    type CertificateFieldClass = typeof CertificateField;
    type CertificateIface = typeof Certificate;
    type CertificatePolicyClass = typeof CertificatePolicy;
    type CertificatePolicyQualifierClass = typeof CertificatePolicyQualifier;
    type CertificateRequestClass = typeof CertificateRequest;
    type CertificateSectionClass = typeof CertificateSection;
    type DistributionPointClass = typeof DistributionPoint;
    type GeneralNameClass = typeof GeneralName;
    type GeneralNamesClass = typeof GeneralNames;
    type ImportInteractionInterface = typeof ImportInteraction;
    type ImporterInterface = typeof Importer;
    abstract class Parsed {
        static $gtype: GObject.GType<Parsed>;
        static unref(parsed: null): void;
        get_attributes(): Gck.Attributes | null;
        get_bytes(): GLib.Bytes;
        get_data(): Uint8Array | null;
        get_description(): string | null;
        get_filename(): string;
        get_format(): DataFormat;
        get_label(): string | null;
        ref(): Parsed;
    }
    type ParserClass = typeof Parser;
    abstract class ParserPrivate {
        static $gtype: GObject.GType<ParserPrivate>;
    }
    type Pkcs11CertificateClass = typeof Pkcs11Certificate;
    abstract class Pkcs11CertificatePrivate {
        static $gtype: GObject.GType<Pkcs11CertificatePrivate>;
    }
    type PromptInterface = typeof Prompt;
    type SecretExchangeClass = typeof SecretExchange;
    abstract class SecretExchangePrivate {
        static $gtype: GObject.GType<SecretExchangePrivate>;
    }
    type SimpleCertificateClass = typeof SimpleCertificate;
    abstract class SimpleCertificatePrivate {
        static $gtype: GObject.GType<SimpleCertificatePrivate>;
    }
    type SshAskpassClass = typeof SshAskpass;
    abstract class SubjectPublicKeyInfo {
        static $gtype: GObject.GType<SubjectPublicKeyInfo>;
        copy(): SubjectPublicKeyInfo;
        free(): void;
        get_algorithm_description(): string;
        get_algorithm_oid(): string;
        get_algorithm_parameters_raw(): GLib.Bytes;
        get_key(): GLib.Bytes;
        get_key_size(): number;
    }
    type SystemPromptClass = typeof SystemPrompt;
    abstract class SystemPromptPrivate {
        static $gtype: GObject.GType<SystemPromptPrivate>;
    }
    type SystemPrompterClass = typeof SystemPrompter;
    abstract class SystemPrompterPrivate {
        static $gtype: GObject.GType<SystemPrompterPrivate>;
    }
    namespace Certificate {
        interface Interface {
            vfunc_get_der_data(): Uint8Array | string;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            description: string;
            expiry_date: GLib.DateTime | null;
            expiryDate: GLib.DateTime | null;
            issuer_name: string | null;
            issuerName: string | null;
            label: string;
            subject_name: string | null;
            subjectName: string | null;
        }
    }
    export interface CertificateNamespace {
        $gtype: GObject.GType<Certificate>;
        prototype: Certificate;
    }
    interface Certificate extends GObject.Object, Certificate.Interface {
        get description(): string;
        get expiry_date(): GLib.DateTime | null;
        get expiryDate(): GLib.DateTime | null;
        get issuer_name(): string | null;
        get issuerName(): string | null;
        get label(): string;
        get subject_name(): string | null;
        get subjectName(): string | null;
        get_basic_constraints(): [boolean, boolean, number];
        get_der_data(): Uint8Array;
        get_expiry_date(): GLib.DateTime | null;
        get_fingerprint(type: GLib.ChecksumType): Uint8Array | null;
        get_fingerprint_hex(type: GLib.ChecksumType): string | null;
        get_interface_elements(): CertificateSection[];
        get_issued_date(): GLib.DateTime | null;
        get_issuer_cn(): string | null;
        get_issuer_dn(): string | null;
        get_issuer_name(): string | null;
        get_issuer_part(part: string): string | null;
        get_issuer_raw(): Uint8Array | null;
        get_key_size(): number;
        get_public_key_info(): SubjectPublicKeyInfo;
        get_serial_number(): Uint8Array | null;
        get_serial_number_hex(): string | null;
        get_subject_cn(): string | null;
        get_subject_dn(): string | null;
        get_subject_name(): string | null;
        get_subject_part(part: string): string | null;
        get_subject_raw(): Uint8Array | null;
        get_version(): number;
        is_issuer(issuer: Certificate): boolean;
        list_extensions(): CertificateExtensionList;
        mixin_emit_notify(): void;
    }
    export const Certificate: CertificateNamespace & {
        new (): Certificate; 
    };
    namespace ImportInteraction {
        interface Interface {
            vfunc_supplement(builder: Gck.Builder, cancellable: Gio.Cancellable | null): Gio.TlsInteractionResult;
            vfunc_supplement_async(builder: Gck.Builder, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            vfunc_supplement_finish(result: Gio.AsyncResult): Gio.TlsInteractionResult;
            vfunc_supplement_prep(builder: Gck.Builder): void;
        }
        interface ConstructorProps extends Gio.TlsInteraction.ConstructorProps {}
    }
    export interface ImportInteractionNamespace {
        $gtype: GObject.GType<ImportInteraction>;
        prototype: ImportInteraction;
    }
    interface ImportInteraction extends Gio.TlsInteraction, ImportInteraction.Interface {
        supplement(builder: Gck.Builder, cancellable: Gio.Cancellable | null): Gio.TlsInteractionResult;
        supplement_async(builder: Gck.Builder, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.TlsInteractionResult>;
        supplement_async(builder: Gck.Builder, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        supplement_async(builder: Gck.Builder, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Gio.TlsInteractionResult> | void;
        supplement_finish(result: Gio.AsyncResult): Gio.TlsInteractionResult;
        supplement_prep(builder: Gck.Builder): void;
    }
    export const ImportInteraction: ImportInteractionNamespace & {
        new (): ImportInteraction; 
    };
    namespace Importer {
        interface Interface {
            vfunc_import_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            vfunc_import_finish(result: Gio.AsyncResult): boolean;
            vfunc_queue_for_parsed(parsed: Parsed): boolean;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            interaction: Gio.TlsInteraction | null;
            label: string;
            uri: string;
        }
    }
    export interface ImporterNamespace {
        $gtype: GObject.GType<Importer>;
        prototype: Importer;
        create_for_parsed(parsed: Parsed): Importer[];
        queue_and_filter_for_parsed(importers: Importer[], parsed: Parsed): Importer[];
        register(importer_type: GObject.GType, attrs: Gck.Attributes): void;
        register_well_known(): void;
    }
    interface Importer extends GObject.Object, Importer.Interface {
        get interaction(): Gio.TlsInteraction | null;
        set interaction(val: Gio.TlsInteraction | null);
        get label(): string;
        get uri(): string;
        get_interaction(): Gio.TlsInteraction | null;
        import_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        import_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        import_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        import_finish(result: Gio.AsyncResult): boolean;
        queue_for_parsed(parsed: Parsed): boolean;
        set_interaction(interaction: Gio.TlsInteraction): void;
    }
    export const Importer: ImporterNamespace & {
        new (): Importer; 
    };
    namespace Prompt {
        interface Interface {
            vfunc_prompt_close(): void;
            vfunc_prompt_confirm_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            vfunc_prompt_confirm_finish(result: Gio.AsyncResult): PromptReply;
            vfunc_prompt_password_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            vfunc_prompt_password_finish(result: Gio.AsyncResult): string;
        }
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            caller_window: string;
            callerWindow: string;
            cancel_label: string;
            cancelLabel: string;
            choice_chosen: boolean;
            choiceChosen: boolean;
            choice_label: string;
            choiceLabel: string;
            continue_label: string;
            continueLabel: string;
            description: string;
            message: string;
            password_new: boolean;
            passwordNew: boolean;
            password_strength: number;
            passwordStrength: number;
            title: string;
            warning: string;
        }
    }
    export interface PromptNamespace {
        $gtype: GObject.GType<Prompt>;
        prototype: Prompt;
    }
    interface Prompt extends GObject.Object, Prompt.Interface {
        get caller_window(): string;
        set caller_window(val: string);
        get callerWindow(): string;
        set callerWindow(val: string);
        get cancel_label(): string;
        set cancel_label(val: string);
        get cancelLabel(): string;
        set cancelLabel(val: string);
        get choice_chosen(): boolean;
        set choice_chosen(val: boolean);
        get choiceChosen(): boolean;
        set choiceChosen(val: boolean);
        get choice_label(): string;
        set choice_label(val: string);
        get choiceLabel(): string;
        set choiceLabel(val: string);
        get continue_label(): string;
        set continue_label(val: string);
        get continueLabel(): string;
        set continueLabel(val: string);
        get description(): string;
        set description(val: string);
        get message(): string;
        set message(val: string);
        get password_new(): boolean;
        set password_new(val: boolean);
        get passwordNew(): boolean;
        set passwordNew(val: boolean);
        get password_strength(): number;
        get passwordStrength(): number;
        get title(): string;
        set title(val: string);
        get warning(): string;
        set warning(val: string);
        close(): void;
        confirm(cancellable: Gio.Cancellable | null): PromptReply;
        confirm_async(cancellable: Gio.Cancellable | null): globalThis.Promise<PromptReply>;
        confirm_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        confirm_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<PromptReply> | void;
        confirm_finish(result: Gio.AsyncResult): PromptReply;
        confirm_run(cancellable: Gio.Cancellable | null): PromptReply;
        get_caller_window(): string;
        get_cancel_label(): string;
        get_choice_chosen(): boolean;
        get_choice_label(): string;
        get_continue_label(): string;
        get_description(): string;
        get_message(): string;
        get_password_new(): boolean;
        get_password_strength(): number;
        get_title(): string;
        get_warning(): string;
        password(cancellable: Gio.Cancellable | null): string;
        password_async(cancellable: Gio.Cancellable | null): globalThis.Promise<string>;
        password_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        password_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        password_finish(result: Gio.AsyncResult): string;
        password_run(cancellable: Gio.Cancellable | null): string;
        reset(): void;
        set_caller_window(window_id: string): void;
        set_cancel_label(cancel_label: string): void;
        set_choice_chosen(chosen: boolean): void;
        set_choice_label(choice_label: string | null): void;
        set_continue_label(continue_label: string): void;
        set_description(description: string): void;
        set_message(message: string): void;
        set_password_new(new_password: boolean): void;
        set_title(title: string): void;
        set_warning(warning: string | null): void;
    }
    export const Prompt: PromptNamespace & {
        new (): Prompt; 
    };
    const __name__: string;
    const __version__: string;
}
export default Gcr;
}
declare module 'gi://Gcr' {
    import Gcr4 from 'gi://Gcr?version=4';
    export default Gcr4;
}
