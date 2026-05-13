import type { Schema, Struct } from '@strapi/strapi';

export interface SharedCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_section_s';
  info: {
    displayName: 'CTASection ';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedMarqueeItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_marquee_items';
  info: {
    displayName: 'MarqueeItem';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedServicesTabDetail extends Struct.ComponentSchema {
  collectionName: 'components_shared_services_tab_details';
  info: {
    displayName: 'servicesTabDetail';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    order: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface SharedStat extends Struct.ComponentSchema {
  collectionName: 'components_shared_stats';
  info: {
    displayName: 'Stat';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.cta-section': SharedCtaSection;
      'shared.marquee-item': SharedMarqueeItem;
      'shared.services-tab-detail': SharedServicesTabDetail;
      'shared.stat': SharedStat;
    }
  }
}
