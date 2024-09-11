/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SalesPlaningIncurredCostModel = {
  id?: string;
  salesPlaningId?: string;
  productId?: string;
  productName?: string | null;
  pricingCategoryId?: string | null;
  pricingCategoryName?: string | null;
  cost?: number;
  costTaxRate?: number;
  totalCostTax?: number;
  implementationCost?: number;
  costDescription?: string | null;
  createdByUserId?: string;
  lastModifiedByUserId?: string;
  lastModifiedOnDate?: string;
  createdOnDate?: string;
};

