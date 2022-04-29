const AddressFragment = `
fragment AddressFragment on Address {
  __typename
  id
  firstName
  lastName
  companyName
  streetAddress1
  streetAddress2
  city
  cityArea
  postalCode
  country {
    code
  }
  countryArea
  phone
}
`;

const MoneyFragment = `
fragment MoneyFragment on Money {
  amount
  currency
}
`;

const TaxedMoneyFragment = `
fragment TaxedMoneyFragment on TaxedMoney {
  currency
  net {
    ... MoneyFragment
  }
  gross {
    ... MoneyFragment
  }
}
`;

const PaymentFragment = `
fragment PaymentFragment on Payment {
  __typename
  id
  created
  modified
  gateway
  isActive
  chargeStatus
  total {
    amount
  }
  capturedAmount {
    ... MoneyFragment
  }
  creditCard {
    brand
  }
  paymentMethodType
}
`;

const MetadataFragment = `
fragment MetadataFragment on MetadataItem {
  key
  value
}
`;

const OrderFragment = `
fragment OrderFragment on Order {
  __typename
  id
  channel {
    __typename
    id
    slug
    currencyCode
  }
  shippingMethod {
    type
    id
    name
  }
  shippingAddress {
    ... AddressFragment
  }
  billingAddress {
    ... AddressFragment
  }
  discounts {
    id
  }
  token
  userEmail
  created
  original
  lines {
    __typename
    id
    productVariantId
    totalPrice {
      ... TaxedMoneyFragment
      }
    allocations {
      quantity
      warehouse {
        id
      }
    }
    productName
    variantName
    translatedProductName
    translatedVariantName
    productSku
    quantity
    unitDiscountValue
    unitDiscountType
    unitDiscountReason
    unitPrice {
      ... TaxedMoneyFragment
    }
    undiscountedUnitPrice {
      ... TaxedMoneyFragment
    }
    taxRate
  }
  fulfillments {
    id
  }
  payments {
    ... PaymentFragment
  }
  privateMetadata {
    ... MetadataFragment
  }
  metadata {
    ... MetadataFragment
  }
  status
  languageCodeEnum
  origin
  shippingMethodName
  collectionPointName
  shippingPrice {
    ... TaxedMoneyFragment
  }
  shippingTaxRate
  total {
    ... TaxedMoneyFragment
  }
  undiscountedTotal {
    ... TaxedMoneyFragment
  }
  weight {
    value
    unit
  }
}
`;


const OrderCreatedFragment = `
  fragment OrderCreatedFragment on OrderCreated {
    order {
      ... OrderFragment
    }
  }
`;

const OrderFullyPaidFragment = `
  fragment OrderFullyPaidFragment on OrderFullyPaid {
    order {
      ... OrderFragment
    }
  }
`;

const CustomerCreatedFragment = `
  fragment CustomerCreatedFragment on CustomerCreated {
    user {
      __typename
      id
      defaultShippingAddress {
        ... AddressFragment
      }
      defaultBillingAddress {
        ... AddressFragment
      }
      addresses {
        ... AddressFragment
      }
      privateMetadata {
        ... MetadataFragment
      }
      metadata {
        ... MetadataFragment
      }
      email
      firstName
      lastName
      isActive
      dateJoined
      languageCode
    }
  }
`;

const FulfillmentCreatedFragment = `
  fragment FulfillmentCreatedFragment on FulfillmentCreated {
    fulfillment {
      __typename
      id
      warehouse {
        address {
          ... AddressFragment
        }
      }
      lines {
        __typename
        id
        quantity
        orderLine {
          productName
          variantName
          productSku
          productVariantId
          unitPrice {
            ... TaxedMoneyFragment
          }
          undiscountedUnitPrice {
            ... TaxedMoneyFragment
          }
          totalPrice {
            ... TaxedMoneyFragment
          }
        }
      }
    }
  }
`;

export {
  AddressFragment,
  MoneyFragment,
  TaxedMoneyFragment,
  PaymentFragment,
  MetadataFragment,
  OrderFragment,

  OrderCreatedFragment,
  OrderFullyPaidFragment,
  CustomerCreatedFragment,
  FulfillmentCreatedFragment,
};
