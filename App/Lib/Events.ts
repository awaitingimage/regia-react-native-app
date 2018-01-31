export interface Events {
    diary: Event[];
}

export interface Event {
    title: string;
    publicPrivate: string;
    startDate: string;
    endDate: string;
    dateline?: string;
    datelineEra?: string;
    datelineAOGuide?: string;
    type?: string;
    nationalShow?: boolean;
    localTraining?: boolean;
    nonRegiaEvent?: boolean;
    cancelled?: boolean;
    address1?: string;
    address2?: string;
    postcode?: string;
    country?: string;
    website?: string;
    FacebookLink?: string;
    details?: string;
}