export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  bigint: any;
  jsonb: any;
  timestamptz: any;
};

export type Address = {
  __typename?: 'Address';
  Country?: Maybe<Country>;
  User?: Maybe<User>;
  countryId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  lineOne: Scalars['String'];
  lineTwo: Scalars['String'];
  name: Scalars['String'];
  state: Scalars['String'];
  town: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
  zipcode: Scalars['String'];
};

export type Admin = {
  __typename?: 'Admin';
  email: Scalars['String'];
  firebaseUUID: Scalars['String'];
  firstName: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  lastName: Scalars['String'];
};

export type AdminGoogleSignUpInput = {
  email: Scalars['String'];
  firebaseUUID: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type AdminSignUpInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type AdminSignUpResponse = {
  __typename?: 'AdminSignUpResponse';
  Admin?: Maybe<Admin>;
  Error?: Maybe<Error>;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export type Category = {
  __typename?: 'Category';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  subCategories?: Maybe<Array<Maybe<SubCategory>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Country = {
  __typename?: 'Country';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type Coupons = {
  __typename?: 'Coupons';
  code: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  isValid: Scalars['Boolean'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  value: Scalars['Int'];
};


export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message: Scalars['String'];
};

export type GoogleSignUpInput = {
  email: Scalars['String'];
  firebaseUUID: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber: Scalars['String'];
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  AdminGoogleSignUp?: Maybe<AdminSignUpResponse>;
  AdminSignUp?: Maybe<AdminSignUpResponse>;
  UserGoogleSignUp?: Maybe<SignUpResponse>;
  UserSignUp?: Maybe<SignUpResponse>;
  createOrder?: Maybe<CreateOrderResponse>;
  createRazorpayOrder?: Maybe<CreateRazorpayOrderResponse>;
};


export type MutationAdminGoogleSignUpArgs = {
  input?: Maybe<AdminGoogleSignUpInput>;
};


export type MutationAdminSignUpArgs = {
  input?: Maybe<AdminSignUpInput>;
};


export type MutationUserGoogleSignUpArgs = {
  input?: Maybe<GoogleSignUpInput>;
};


export type MutationUserSignUpArgs = {
  input?: Maybe<SignUpInput>;
};


export type MutationCreateOrderArgs = {
  input?: Maybe<CreateOrderInput>;
};


export type MutationCreateRazorpayOrderArgs = {
  input?: Maybe<CreateRazorpayOrderInput>;
};

export type Order = {
  __typename?: 'Order';
  Address?: Maybe<Address>;
  Status?: Maybe<OrderStatus>;
  User?: Maybe<User>;
  addressId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  razorPayOrderId?: Maybe<Scalars['String']>;
  razorPayPaymentId?: Maybe<Scalars['String']>;
  razorPaySignature?: Maybe<Scalars['String']>;
  shippingFee?: Maybe<Scalars['Int']>;
  statusId: Scalars['Int'];
  totalAmount: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type OrderProductType = {
  __typename?: 'OrderProductType';
  Order?: Maybe<Order>;
  ProductType?: Maybe<ProductType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  orderId: Scalars['Int'];
  productTypeId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderStatus = {
  __typename?: 'OrderStatus';
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

// export type Product = {
//   __typename?: 'Product';
//   SubCategory?: Maybe<SubCategory>;
//   createdAt?: Maybe<Scalars['DateTime']>;
//   descriptionImageUrl: Scalars['String'];
//   hoverImageUrl: Scalars['String'];
//   id: Scalars['Int'];
//   imageUrl: Scalars['String'];
//   isDeleted: Scalars['Boolean'];
//   name: Scalars['String'];
//   productTypes?: Maybe<Array<Maybe<ProductType>>>;
//   subCategoryId: Scalars['Int'];
//   updatedAt?: Maybe<Scalars['DateTime']>;
// };

export type ProductType = {
  __typename?: 'ProductType';
  Season?: Maybe<Season>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  imageUrl: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  isFeatured: Scalars['Boolean'];
  name: Scalars['String'];
  newPrice: Scalars['Int'];
  oldPrice: Scalars['Int'];
  productId: Scalars['Int'];
  rating: Scalars['Int'];
  recommendedCoverImage: Scalars['String'];
  seasonId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  uuid: Scalars['String'];
};

export type ProductTypePair = {
  count: Scalars['Int'];
  productTypeId: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  _dummy: Scalars['String'];
};

export type Season = {
  __typename?: 'Season';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  productTypes?: Maybe<Array<Maybe<ProductType>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SignUpInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type SignUpResponse = {
  __typename?: 'SignUpResponse';
  Error?: Maybe<Error>;
  User?: Maybe<User>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type SubCategory = {
  __typename?: 'SubCategory';
  Category?: Maybe<Category>;
  categoryId: Scalars['Int'];
  coverImageUrl: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  products?: Maybe<Array<Maybe<Product>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type User = {
  __typename?: 'User';
  Country?: Maybe<Country>;
  addresses?: Maybe<Array<Maybe<Address>>>;
  email: Scalars['String'];
  firebaseUUID: Scalars['String'];
  firstName: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  isDeleted: Scalars['Boolean'];
  lastName: Scalars['String'];
  phoneNumber: Scalars['String'];
};

/** columns and relationships of "addresses" */
export type Addresses = {
  __typename?: 'addresses';
  /** An object relationship */
  country: Countries;
  countryId: Scalars['Int'];
  createdAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['bigint'];
  isDeleted: Scalars['Boolean'];
  lineOne: Scalars['String'];
  lineTwo: Scalars['String'];
  name: Scalars['String'];
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregated array relationship */
  orders_aggregate: Orders_Aggregate;
  state: Scalars['String'];
  town: Scalars['String'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  userId: Scalars['Int'];
  zipcode: Scalars['String'];
};


/** columns and relationships of "addresses" */
export type AddressesOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** columns and relationships of "addresses" */
export type AddressesOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** aggregated selection of "addresses" */
export type Addresses_Aggregate = {
  __typename?: 'addresses_aggregate';
  aggregate?: Maybe<Addresses_Aggregate_Fields>;
  nodes: Array<Addresses>;
};

/** aggregate fields of "addresses" */
export type Addresses_Aggregate_Fields = {
  __typename?: 'addresses_aggregate_fields';
  avg?: Maybe<Addresses_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Addresses_Max_Fields>;
  min?: Maybe<Addresses_Min_Fields>;
  stddev?: Maybe<Addresses_Stddev_Fields>;
  stddev_pop?: Maybe<Addresses_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Addresses_Stddev_Samp_Fields>;
  sum?: Maybe<Addresses_Sum_Fields>;
  var_pop?: Maybe<Addresses_Var_Pop_Fields>;
  var_samp?: Maybe<Addresses_Var_Samp_Fields>;
  variance?: Maybe<Addresses_Variance_Fields>;
};


/** aggregate fields of "addresses" */
export type Addresses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Addresses_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "addresses" */
export type Addresses_Aggregate_Order_By = {
  avg?: Maybe<Addresses_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Addresses_Max_Order_By>;
  min?: Maybe<Addresses_Min_Order_By>;
  stddev?: Maybe<Addresses_Stddev_Order_By>;
  stddev_pop?: Maybe<Addresses_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Addresses_Stddev_Samp_Order_By>;
  sum?: Maybe<Addresses_Sum_Order_By>;
  var_pop?: Maybe<Addresses_Var_Pop_Order_By>;
  var_samp?: Maybe<Addresses_Var_Samp_Order_By>;
  variance?: Maybe<Addresses_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "addresses" */
export type Addresses_Arr_Rel_Insert_Input = {
  data: Array<Addresses_Insert_Input>;
  on_conflict?: Maybe<Addresses_On_Conflict>;
};

/** aggregate avg on columns */
export type Addresses_Avg_Fields = {
  __typename?: 'addresses_avg_fields';
  countryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "addresses" */
export type Addresses_Avg_Order_By = {
  countryId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "addresses". All fields are combined with a logical 'AND'. */
export type Addresses_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Addresses_Bool_Exp>>>;
  _not?: Maybe<Addresses_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Addresses_Bool_Exp>>>;
  country?: Maybe<Countries_Bool_Exp>;
  countryId?: Maybe<Int_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  isDeleted?: Maybe<Boolean_Comparison_Exp>;
  lineOne?: Maybe<String_Comparison_Exp>;
  lineTwo?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  orders?: Maybe<Orders_Bool_Exp>;
  state?: Maybe<String_Comparison_Exp>;
  town?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  userId?: Maybe<Int_Comparison_Exp>;
  zipcode?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "addresses" */
export enum Addresses_Constraint {
  /** unique or primary key constraint */
  AddressesPkey = 'addresses_pkey'
}

/** input type for incrementing integer column in table "addresses" */
export type Addresses_Inc_Input = {
  countryId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  userId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "addresses" */
export type Addresses_Insert_Input = {
  country?: Maybe<Countries_Obj_Rel_Insert_Input>;
  countryId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  lineOne?: Maybe<Scalars['String']>;
  lineTwo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orders?: Maybe<Orders_Arr_Rel_Insert_Input>;
  state?: Maybe<Scalars['String']>;
  town?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['Int']>;
  zipcode?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Addresses_Max_Fields = {
  __typename?: 'addresses_max_fields';
  countryId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  lineOne?: Maybe<Scalars['String']>;
  lineTwo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  town?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
  zipcode?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "addresses" */
export type Addresses_Max_Order_By = {
  countryId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lineOne?: Maybe<Order_By>;
  lineTwo?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  town?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  zipcode?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Addresses_Min_Fields = {
  __typename?: 'addresses_min_fields';
  countryId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  lineOne?: Maybe<Scalars['String']>;
  lineTwo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  town?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
  zipcode?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "addresses" */
export type Addresses_Min_Order_By = {
  countryId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lineOne?: Maybe<Order_By>;
  lineTwo?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  town?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  zipcode?: Maybe<Order_By>;
};

/** response of any mutation on the table "addresses" */
export type Addresses_Mutation_Response = {
  __typename?: 'addresses_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Addresses>;
};

/** input type for inserting object relation for remote table "addresses" */
export type Addresses_Obj_Rel_Insert_Input = {
  data: Addresses_Insert_Input;
  on_conflict?: Maybe<Addresses_On_Conflict>;
};

/** on conflict condition type for table "addresses" */
export type Addresses_On_Conflict = {
  constraint: Addresses_Constraint;
  update_columns: Array<Addresses_Update_Column>;
  where?: Maybe<Addresses_Bool_Exp>;
};

/** ordering options when selecting data from "addresses" */
export type Addresses_Order_By = {
  country?: Maybe<Countries_Order_By>;
  countryId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isDeleted?: Maybe<Order_By>;
  lineOne?: Maybe<Order_By>;
  lineTwo?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  orders_aggregate?: Maybe<Orders_Aggregate_Order_By>;
  state?: Maybe<Order_By>;
  town?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  userId?: Maybe<Order_By>;
  zipcode?: Maybe<Order_By>;
};

/** primary key columns input for table: "addresses" */
export type Addresses_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "addresses" */
export enum Addresses_Select_Column {
  /** column name */
  CountryId = 'countryId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  LineOne = 'lineOne',
  /** column name */
  LineTwo = 'lineTwo',
  /** column name */
  Name = 'name',
  /** column name */
  State = 'state',
  /** column name */
  Town = 'town',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  Zipcode = 'zipcode'
}

/** input type for updating data in table "addresses" */
export type Addresses_Set_Input = {
  countryId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  lineOne?: Maybe<Scalars['String']>;
  lineTwo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  town?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['Int']>;
  zipcode?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Addresses_Stddev_Fields = {
  __typename?: 'addresses_stddev_fields';
  countryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "addresses" */
export type Addresses_Stddev_Order_By = {
  countryId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Addresses_Stddev_Pop_Fields = {
  __typename?: 'addresses_stddev_pop_fields';
  countryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "addresses" */
export type Addresses_Stddev_Pop_Order_By = {
  countryId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Addresses_Stddev_Samp_Fields = {
  __typename?: 'addresses_stddev_samp_fields';
  countryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "addresses" */
export type Addresses_Stddev_Samp_Order_By = {
  countryId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Addresses_Sum_Fields = {
  __typename?: 'addresses_sum_fields';
  countryId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "addresses" */
export type Addresses_Sum_Order_By = {
  countryId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** update columns of table "addresses" */
export enum Addresses_Update_Column {
  /** column name */
  CountryId = 'countryId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  LineOne = 'lineOne',
  /** column name */
  LineTwo = 'lineTwo',
  /** column name */
  Name = 'name',
  /** column name */
  State = 'state',
  /** column name */
  Town = 'town',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  Zipcode = 'zipcode'
}

/** aggregate var_pop on columns */
export type Addresses_Var_Pop_Fields = {
  __typename?: 'addresses_var_pop_fields';
  countryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "addresses" */
export type Addresses_Var_Pop_Order_By = {
  countryId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Addresses_Var_Samp_Fields = {
  __typename?: 'addresses_var_samp_fields';
  countryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "addresses" */
export type Addresses_Var_Samp_Order_By = {
  countryId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Addresses_Variance_Fields = {
  __typename?: 'addresses_variance_fields';
  countryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "addresses" */
export type Addresses_Variance_Order_By = {
  countryId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** columns and relationships of "admins" */
export type Admins = {
  __typename?: 'admins';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email: Scalars['String'];
  firebaseUUID: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['bigint'];
  isDeleted: Scalars['Boolean'];
  lastName: Scalars['String'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "admins" */
export type Admins_Aggregate = {
  __typename?: 'admins_aggregate';
  aggregate?: Maybe<Admins_Aggregate_Fields>;
  nodes: Array<Admins>;
};

/** aggregate fields of "admins" */
export type Admins_Aggregate_Fields = {
  __typename?: 'admins_aggregate_fields';
  avg?: Maybe<Admins_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Admins_Max_Fields>;
  min?: Maybe<Admins_Min_Fields>;
  stddev?: Maybe<Admins_Stddev_Fields>;
  stddev_pop?: Maybe<Admins_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Admins_Stddev_Samp_Fields>;
  sum?: Maybe<Admins_Sum_Fields>;
  var_pop?: Maybe<Admins_Var_Pop_Fields>;
  var_samp?: Maybe<Admins_Var_Samp_Fields>;
  variance?: Maybe<Admins_Variance_Fields>;
};


/** aggregate fields of "admins" */
export type Admins_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Admins_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "admins" */
export type Admins_Aggregate_Order_By = {
  avg?: Maybe<Admins_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Admins_Max_Order_By>;
  min?: Maybe<Admins_Min_Order_By>;
  stddev?: Maybe<Admins_Stddev_Order_By>;
  stddev_pop?: Maybe<Admins_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Admins_Stddev_Samp_Order_By>;
  sum?: Maybe<Admins_Sum_Order_By>;
  var_pop?: Maybe<Admins_Var_Pop_Order_By>;
  var_samp?: Maybe<Admins_Var_Samp_Order_By>;
  variance?: Maybe<Admins_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "admins" */
export type Admins_Arr_Rel_Insert_Input = {
  data: Array<Admins_Insert_Input>;
  on_conflict?: Maybe<Admins_On_Conflict>;
};

/** aggregate avg on columns */
export type Admins_Avg_Fields = {
  __typename?: 'admins_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "admins" */
export type Admins_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "admins". All fields are combined with a logical 'AND'. */
export type Admins_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Admins_Bool_Exp>>>;
  _not?: Maybe<Admins_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Admins_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  firebaseUUID?: Maybe<String_Comparison_Exp>;
  firstName?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  isDeleted?: Maybe<Boolean_Comparison_Exp>;
  lastName?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "admins" */
export enum Admins_Constraint {
  /** unique or primary key constraint */
  AdminsPkey = 'admins_pkey'
}

/** input type for incrementing integer column in table "admins" */
export type Admins_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "admins" */
export type Admins_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firebaseUUID?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Admins_Max_Fields = {
  __typename?: 'admins_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firebaseUUID?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "admins" */
export type Admins_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firebaseUUID?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Admins_Min_Fields = {
  __typename?: 'admins_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firebaseUUID?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "admins" */
export type Admins_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firebaseUUID?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "admins" */
export type Admins_Mutation_Response = {
  __typename?: 'admins_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Admins>;
};

/** input type for inserting object relation for remote table "admins" */
export type Admins_Obj_Rel_Insert_Input = {
  data: Admins_Insert_Input;
  on_conflict?: Maybe<Admins_On_Conflict>;
};

/** on conflict condition type for table "admins" */
export type Admins_On_Conflict = {
  constraint: Admins_Constraint;
  update_columns: Array<Admins_Update_Column>;
  where?: Maybe<Admins_Bool_Exp>;
};

/** ordering options when selecting data from "admins" */
export type Admins_Order_By = {
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firebaseUUID?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isDeleted?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "admins" */
export type Admins_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "admins" */
export enum Admins_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  FirebaseUuid = 'firebaseUUID',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  LastName = 'lastName',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "admins" */
export type Admins_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firebaseUUID?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Admins_Stddev_Fields = {
  __typename?: 'admins_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "admins" */
export type Admins_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Admins_Stddev_Pop_Fields = {
  __typename?: 'admins_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "admins" */
export type Admins_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Admins_Stddev_Samp_Fields = {
  __typename?: 'admins_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "admins" */
export type Admins_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Admins_Sum_Fields = {
  __typename?: 'admins_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "admins" */
export type Admins_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "admins" */
export enum Admins_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  FirebaseUuid = 'firebaseUUID',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  LastName = 'lastName',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Admins_Var_Pop_Fields = {
  __typename?: 'admins_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "admins" */
export type Admins_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Admins_Var_Samp_Fields = {
  __typename?: 'admins_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "admins" */
export type Admins_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Admins_Variance_Fields = {
  __typename?: 'admins_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "admins" */
export type Admins_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/**
 * pivot table for banner and product/blog/sub_category
 *
 *
 * columns and relationships of "banner_product"
 */
export type Banner_Product = {
  __typename?: 'banner_product';
  /** An object relationship */
  banner: Banners;
  bannerId: Scalars['Int'];
  /** An object relationship */
  blog?: Maybe<Blogs>;
  blogId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['bigint'];
  /** An object relationship */
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  /** An object relationship */
  product_type?: Maybe<Product_Type>;
  subCategoryId?: Maybe<Scalars['Int']>;
  /** An object relationship */
  sub_category?: Maybe<Sub_Categories>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "banner_product" */
export type Banner_Product_Aggregate = {
  __typename?: 'banner_product_aggregate';
  aggregate?: Maybe<Banner_Product_Aggregate_Fields>;
  nodes: Array<Banner_Product>;
};

/** aggregate fields of "banner_product" */
export type Banner_Product_Aggregate_Fields = {
  __typename?: 'banner_product_aggregate_fields';
  avg?: Maybe<Banner_Product_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Banner_Product_Max_Fields>;
  min?: Maybe<Banner_Product_Min_Fields>;
  stddev?: Maybe<Banner_Product_Stddev_Fields>;
  stddev_pop?: Maybe<Banner_Product_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Banner_Product_Stddev_Samp_Fields>;
  sum?: Maybe<Banner_Product_Sum_Fields>;
  var_pop?: Maybe<Banner_Product_Var_Pop_Fields>;
  var_samp?: Maybe<Banner_Product_Var_Samp_Fields>;
  variance?: Maybe<Banner_Product_Variance_Fields>;
};


/** aggregate fields of "banner_product" */
export type Banner_Product_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Banner_Product_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "banner_product" */
export type Banner_Product_Aggregate_Order_By = {
  avg?: Maybe<Banner_Product_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Banner_Product_Max_Order_By>;
  min?: Maybe<Banner_Product_Min_Order_By>;
  stddev?: Maybe<Banner_Product_Stddev_Order_By>;
  stddev_pop?: Maybe<Banner_Product_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Banner_Product_Stddev_Samp_Order_By>;
  sum?: Maybe<Banner_Product_Sum_Order_By>;
  var_pop?: Maybe<Banner_Product_Var_Pop_Order_By>;
  var_samp?: Maybe<Banner_Product_Var_Samp_Order_By>;
  variance?: Maybe<Banner_Product_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "banner_product" */
export type Banner_Product_Arr_Rel_Insert_Input = {
  data: Array<Banner_Product_Insert_Input>;
  on_conflict?: Maybe<Banner_Product_On_Conflict>;
};

/** aggregate avg on columns */
export type Banner_Product_Avg_Fields = {
  __typename?: 'banner_product_avg_fields';
  bannerId?: Maybe<Scalars['Float']>;
  blogId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  subCategoryId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "banner_product" */
export type Banner_Product_Avg_Order_By = {
  bannerId?: Maybe<Order_By>;
  blogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "banner_product". All fields are combined with a logical 'AND'. */
export type Banner_Product_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Banner_Product_Bool_Exp>>>;
  _not?: Maybe<Banner_Product_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Banner_Product_Bool_Exp>>>;
  banner?: Maybe<Banners_Bool_Exp>;
  bannerId?: Maybe<Int_Comparison_Exp>;
  blog?: Maybe<Blogs_Bool_Exp>;
  blogId?: Maybe<Int_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  product?: Maybe<Product_Bool_Exp>;
  productId?: Maybe<Bigint_Comparison_Exp>;
  productTypeId?: Maybe<Int_Comparison_Exp>;
  product_type?: Maybe<Product_Type_Bool_Exp>;
  subCategoryId?: Maybe<Int_Comparison_Exp>;
  sub_category?: Maybe<Sub_Categories_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "banner_product" */
export enum Banner_Product_Constraint {
  /** unique or primary key constraint */
  BannerProductPkey = 'bannerProduct_pkey'
}

/** input type for incrementing integer column in table "banner_product" */
export type Banner_Product_Inc_Input = {
  bannerId?: Maybe<Scalars['Int']>;
  blogId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  productId?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  subCategoryId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "banner_product" */
export type Banner_Product_Insert_Input = {
  banner?: Maybe<Banners_Obj_Rel_Insert_Input>;
  bannerId?: Maybe<Scalars['Int']>;
  blog?: Maybe<Blogs_Obj_Rel_Insert_Input>;
  blogId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  product?: Maybe<Product_Obj_Rel_Insert_Input>;
  productId?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  product_type?: Maybe<Product_Type_Obj_Rel_Insert_Input>;
  subCategoryId?: Maybe<Scalars['Int']>;
  sub_category?: Maybe<Sub_Categories_Obj_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Banner_Product_Max_Fields = {
  __typename?: 'banner_product_max_fields';
  bannerId?: Maybe<Scalars['Int']>;
  blogId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  productId?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  subCategoryId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "banner_product" */
export type Banner_Product_Max_Order_By = {
  bannerId?: Maybe<Order_By>;
  blogId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Banner_Product_Min_Fields = {
  __typename?: 'banner_product_min_fields';
  bannerId?: Maybe<Scalars['Int']>;
  blogId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  productId?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  subCategoryId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "banner_product" */
export type Banner_Product_Min_Order_By = {
  bannerId?: Maybe<Order_By>;
  blogId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "banner_product" */
export type Banner_Product_Mutation_Response = {
  __typename?: 'banner_product_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Banner_Product>;
};

/** input type for inserting object relation for remote table "banner_product" */
export type Banner_Product_Obj_Rel_Insert_Input = {
  data: Banner_Product_Insert_Input;
  on_conflict?: Maybe<Banner_Product_On_Conflict>;
};

/** on conflict condition type for table "banner_product" */
export type Banner_Product_On_Conflict = {
  constraint: Banner_Product_Constraint;
  update_columns: Array<Banner_Product_Update_Column>;
  where?: Maybe<Banner_Product_Bool_Exp>;
};

/** ordering options when selecting data from "banner_product" */
export type Banner_Product_Order_By = {
  banner?: Maybe<Banners_Order_By>;
  bannerId?: Maybe<Order_By>;
  blog?: Maybe<Blogs_Order_By>;
  blogId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product?: Maybe<Product_Order_By>;
  productId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  product_type?: Maybe<Product_Type_Order_By>;
  subCategoryId?: Maybe<Order_By>;
  sub_category?: Maybe<Sub_Categories_Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "banner_product" */
export type Banner_Product_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "banner_product" */
export enum Banner_Product_Select_Column {
  /** column name */
  BannerId = 'bannerId',
  /** column name */
  BlogId = 'blogId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'productId',
  /** column name */
  ProductTypeId = 'productTypeId',
  /** column name */
  SubCategoryId = 'subCategoryId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "banner_product" */
export type Banner_Product_Set_Input = {
  bannerId?: Maybe<Scalars['Int']>;
  blogId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  productId?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  subCategoryId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Banner_Product_Stddev_Fields = {
  __typename?: 'banner_product_stddev_fields';
  bannerId?: Maybe<Scalars['Float']>;
  blogId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  subCategoryId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "banner_product" */
export type Banner_Product_Stddev_Order_By = {
  bannerId?: Maybe<Order_By>;
  blogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Banner_Product_Stddev_Pop_Fields = {
  __typename?: 'banner_product_stddev_pop_fields';
  bannerId?: Maybe<Scalars['Float']>;
  blogId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  subCategoryId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "banner_product" */
export type Banner_Product_Stddev_Pop_Order_By = {
  bannerId?: Maybe<Order_By>;
  blogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Banner_Product_Stddev_Samp_Fields = {
  __typename?: 'banner_product_stddev_samp_fields';
  bannerId?: Maybe<Scalars['Float']>;
  blogId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  subCategoryId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "banner_product" */
export type Banner_Product_Stddev_Samp_Order_By = {
  bannerId?: Maybe<Order_By>;
  blogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Banner_Product_Sum_Fields = {
  __typename?: 'banner_product_sum_fields';
  bannerId?: Maybe<Scalars['Int']>;
  blogId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  productId?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  subCategoryId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "banner_product" */
export type Banner_Product_Sum_Order_By = {
  bannerId?: Maybe<Order_By>;
  blogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
};

/** update columns of table "banner_product" */
export enum Banner_Product_Update_Column {
  /** column name */
  BannerId = 'bannerId',
  /** column name */
  BlogId = 'blogId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'productId',
  /** column name */
  ProductTypeId = 'productTypeId',
  /** column name */
  SubCategoryId = 'subCategoryId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Banner_Product_Var_Pop_Fields = {
  __typename?: 'banner_product_var_pop_fields';
  bannerId?: Maybe<Scalars['Float']>;
  blogId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  subCategoryId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "banner_product" */
export type Banner_Product_Var_Pop_Order_By = {
  bannerId?: Maybe<Order_By>;
  blogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Banner_Product_Var_Samp_Fields = {
  __typename?: 'banner_product_var_samp_fields';
  bannerId?: Maybe<Scalars['Float']>;
  blogId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  subCategoryId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "banner_product" */
export type Banner_Product_Var_Samp_Order_By = {
  bannerId?: Maybe<Order_By>;
  blogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Banner_Product_Variance_Fields = {
  __typename?: 'banner_product_variance_fields';
  bannerId?: Maybe<Scalars['Float']>;
  blogId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  subCategoryId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "banner_product" */
export type Banner_Product_Variance_Order_By = {
  bannerId?: Maybe<Order_By>;
  blogId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
};

/**
 * type of banner (highest rated/ new arrivals..)
 *
 *
 * columns and relationships of "banner_type"
 */
export type Banner_Type = {
  __typename?: 'banner_type';
  /** An array relationship */
  banners: Array<Banners>;
  /** An aggregated array relationship */
  banners_aggregate: Banners_Aggregate;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  type: Scalars['Int'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
};


/**
 * type of banner (highest rated/ new arrivals..)
 *
 *
 * columns and relationships of "banner_type"
 */
export type Banner_TypeBannersArgs = {
  distinct_on?: Maybe<Array<Banners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Banners_Order_By>>;
  where?: Maybe<Banners_Bool_Exp>;
};


/**
 * type of banner (highest rated/ new arrivals..)
 *
 *
 * columns and relationships of "banner_type"
 */
export type Banner_TypeBanners_AggregateArgs = {
  distinct_on?: Maybe<Array<Banners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Banners_Order_By>>;
  where?: Maybe<Banners_Bool_Exp>;
};

/** aggregated selection of "banner_type" */
export type Banner_Type_Aggregate = {
  __typename?: 'banner_type_aggregate';
  aggregate?: Maybe<Banner_Type_Aggregate_Fields>;
  nodes: Array<Banner_Type>;
};

/** aggregate fields of "banner_type" */
export type Banner_Type_Aggregate_Fields = {
  __typename?: 'banner_type_aggregate_fields';
  avg?: Maybe<Banner_Type_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Banner_Type_Max_Fields>;
  min?: Maybe<Banner_Type_Min_Fields>;
  stddev?: Maybe<Banner_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Banner_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Banner_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Banner_Type_Sum_Fields>;
  var_pop?: Maybe<Banner_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Banner_Type_Var_Samp_Fields>;
  variance?: Maybe<Banner_Type_Variance_Fields>;
};


/** aggregate fields of "banner_type" */
export type Banner_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Banner_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "banner_type" */
export type Banner_Type_Aggregate_Order_By = {
  avg?: Maybe<Banner_Type_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Banner_Type_Max_Order_By>;
  min?: Maybe<Banner_Type_Min_Order_By>;
  stddev?: Maybe<Banner_Type_Stddev_Order_By>;
  stddev_pop?: Maybe<Banner_Type_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Banner_Type_Stddev_Samp_Order_By>;
  sum?: Maybe<Banner_Type_Sum_Order_By>;
  var_pop?: Maybe<Banner_Type_Var_Pop_Order_By>;
  var_samp?: Maybe<Banner_Type_Var_Samp_Order_By>;
  variance?: Maybe<Banner_Type_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "banner_type" */
export type Banner_Type_Arr_Rel_Insert_Input = {
  data: Array<Banner_Type_Insert_Input>;
  on_conflict?: Maybe<Banner_Type_On_Conflict>;
};

/** aggregate avg on columns */
export type Banner_Type_Avg_Fields = {
  __typename?: 'banner_type_avg_fields';
  id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "banner_type" */
export type Banner_Type_Avg_Order_By = {
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "banner_type". All fields are combined with a logical 'AND'. */
export type Banner_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Banner_Type_Bool_Exp>>>;
  _not?: Maybe<Banner_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Banner_Type_Bool_Exp>>>;
  banners?: Maybe<Banners_Bool_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  isDeleted?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  type?: Maybe<Int_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "banner_type" */
export enum Banner_Type_Constraint {
  /** unique or primary key constraint */
  BannerTypePkey = 'bannerType_pkey'
}

/** input type for incrementing integer column in table "banner_type" */
export type Banner_Type_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "banner_type" */
export type Banner_Type_Insert_Input = {
  banners?: Maybe<Banners_Arr_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Banner_Type_Max_Fields = {
  __typename?: 'banner_type_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "banner_type" */
export type Banner_Type_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Banner_Type_Min_Fields = {
  __typename?: 'banner_type_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "banner_type" */
export type Banner_Type_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "banner_type" */
export type Banner_Type_Mutation_Response = {
  __typename?: 'banner_type_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Banner_Type>;
};

/** input type for inserting object relation for remote table "banner_type" */
export type Banner_Type_Obj_Rel_Insert_Input = {
  data: Banner_Type_Insert_Input;
  on_conflict?: Maybe<Banner_Type_On_Conflict>;
};

/** on conflict condition type for table "banner_type" */
export type Banner_Type_On_Conflict = {
  constraint: Banner_Type_Constraint;
  update_columns: Array<Banner_Type_Update_Column>;
  where?: Maybe<Banner_Type_Bool_Exp>;
};

/** ordering options when selecting data from "banner_type" */
export type Banner_Type_Order_By = {
  banners_aggregate?: Maybe<Banners_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isDeleted?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "banner_type" */
export type Banner_Type_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "banner_type" */
export enum Banner_Type_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "banner_type" */
export type Banner_Type_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Banner_Type_Stddev_Fields = {
  __typename?: 'banner_type_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "banner_type" */
export type Banner_Type_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Banner_Type_Stddev_Pop_Fields = {
  __typename?: 'banner_type_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "banner_type" */
export type Banner_Type_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Banner_Type_Stddev_Samp_Fields = {
  __typename?: 'banner_type_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "banner_type" */
export type Banner_Type_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Banner_Type_Sum_Fields = {
  __typename?: 'banner_type_sum_fields';
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "banner_type" */
export type Banner_Type_Sum_Order_By = {
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** update columns of table "banner_type" */
export enum Banner_Type_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Banner_Type_Var_Pop_Fields = {
  __typename?: 'banner_type_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "banner_type" */
export type Banner_Type_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Banner_Type_Var_Samp_Fields = {
  __typename?: 'banner_type_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "banner_type" */
export type Banner_Type_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Banner_Type_Variance_Fields = {
  __typename?: 'banner_type_variance_fields';
  id?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "banner_type" */
export type Banner_Type_Variance_Order_By = {
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** columns and relationships of "banners" */
export type Banners = {
  __typename?: 'banners';
  /** An array relationship */
  bannerProducts: Array<Banner_Product>;
  /** An aggregated array relationship */
  bannerProducts_aggregate: Banner_Product_Aggregate;
  /** An object relationship */
  bannerType: Banner_Type;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  isDeleted: Scalars['Boolean'];
  title?: Maybe<Scalars['String']>;
  typeId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "banners" */
export type BannersBannerProductsArgs = {
  distinct_on?: Maybe<Array<Banner_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Banner_Product_Order_By>>;
  where?: Maybe<Banner_Product_Bool_Exp>;
};


/** columns and relationships of "banners" */
export type BannersBannerProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Banner_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Banner_Product_Order_By>>;
  where?: Maybe<Banner_Product_Bool_Exp>;
};

/** aggregated selection of "banners" */
export type Banners_Aggregate = {
  __typename?: 'banners_aggregate';
  aggregate?: Maybe<Banners_Aggregate_Fields>;
  nodes: Array<Banners>;
};

/** aggregate fields of "banners" */
export type Banners_Aggregate_Fields = {
  __typename?: 'banners_aggregate_fields';
  avg?: Maybe<Banners_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Banners_Max_Fields>;
  min?: Maybe<Banners_Min_Fields>;
  stddev?: Maybe<Banners_Stddev_Fields>;
  stddev_pop?: Maybe<Banners_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Banners_Stddev_Samp_Fields>;
  sum?: Maybe<Banners_Sum_Fields>;
  var_pop?: Maybe<Banners_Var_Pop_Fields>;
  var_samp?: Maybe<Banners_Var_Samp_Fields>;
  variance?: Maybe<Banners_Variance_Fields>;
};


/** aggregate fields of "banners" */
export type Banners_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Banners_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "banners" */
export type Banners_Aggregate_Order_By = {
  avg?: Maybe<Banners_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Banners_Max_Order_By>;
  min?: Maybe<Banners_Min_Order_By>;
  stddev?: Maybe<Banners_Stddev_Order_By>;
  stddev_pop?: Maybe<Banners_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Banners_Stddev_Samp_Order_By>;
  sum?: Maybe<Banners_Sum_Order_By>;
  var_pop?: Maybe<Banners_Var_Pop_Order_By>;
  var_samp?: Maybe<Banners_Var_Samp_Order_By>;
  variance?: Maybe<Banners_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "banners" */
export type Banners_Arr_Rel_Insert_Input = {
  data: Array<Banners_Insert_Input>;
  on_conflict?: Maybe<Banners_On_Conflict>;
};

/** aggregate avg on columns */
export type Banners_Avg_Fields = {
  __typename?: 'banners_avg_fields';
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  typeId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "banners" */
export type Banners_Avg_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  typeId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "banners". All fields are combined with a logical 'AND'. */
export type Banners_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Banners_Bool_Exp>>>;
  _not?: Maybe<Banners_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Banners_Bool_Exp>>>;
  bannerProducts?: Maybe<Banner_Product_Bool_Exp>;
  bannerType?: Maybe<Banner_Type_Bool_Exp>;
  cost?: Maybe<Int_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  heading?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  isDeleted?: Maybe<Boolean_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  typeId?: Maybe<Int_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "banners" */
export enum Banners_Constraint {
  /** unique or primary key constraint */
  BannerPkey = 'banner_pkey'
}

/** input type for incrementing integer column in table "banners" */
export type Banners_Inc_Input = {
  cost?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  typeId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "banners" */
export type Banners_Insert_Input = {
  bannerProducts?: Maybe<Banner_Product_Arr_Rel_Insert_Input>;
  bannerType?: Maybe<Banner_Type_Obj_Rel_Insert_Input>;
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Banners_Max_Fields = {
  __typename?: 'banners_max_fields';
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "banners" */
export type Banners_Max_Order_By = {
  cost?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  heading?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  typeId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Banners_Min_Fields = {
  __typename?: 'banners_min_fields';
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "banners" */
export type Banners_Min_Order_By = {
  cost?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  heading?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  typeId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "banners" */
export type Banners_Mutation_Response = {
  __typename?: 'banners_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Banners>;
};

/** input type for inserting object relation for remote table "banners" */
export type Banners_Obj_Rel_Insert_Input = {
  data: Banners_Insert_Input;
  on_conflict?: Maybe<Banners_On_Conflict>;
};

/** on conflict condition type for table "banners" */
export type Banners_On_Conflict = {
  constraint: Banners_Constraint;
  update_columns: Array<Banners_Update_Column>;
  where?: Maybe<Banners_Bool_Exp>;
};

/** ordering options when selecting data from "banners" */
export type Banners_Order_By = {
  bannerProducts_aggregate?: Maybe<Banner_Product_Aggregate_Order_By>;
  bannerType?: Maybe<Banner_Type_Order_By>;
  cost?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  heading?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  isDeleted?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  typeId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "banners" */
export type Banners_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "banners" */
export enum Banners_Select_Column {
  /** column name */
  Cost = 'cost',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Heading = 'heading',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Title = 'title',
  /** column name */
  TypeId = 'typeId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "banners" */
export type Banners_Set_Input = {
  cost?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Banners_Stddev_Fields = {
  __typename?: 'banners_stddev_fields';
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  typeId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "banners" */
export type Banners_Stddev_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  typeId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Banners_Stddev_Pop_Fields = {
  __typename?: 'banners_stddev_pop_fields';
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  typeId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "banners" */
export type Banners_Stddev_Pop_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  typeId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Banners_Stddev_Samp_Fields = {
  __typename?: 'banners_stddev_samp_fields';
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  typeId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "banners" */
export type Banners_Stddev_Samp_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  typeId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Banners_Sum_Fields = {
  __typename?: 'banners_sum_fields';
  cost?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  typeId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "banners" */
export type Banners_Sum_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  typeId?: Maybe<Order_By>;
};

/** update columns of table "banners" */
export enum Banners_Update_Column {
  /** column name */
  Cost = 'cost',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Heading = 'heading',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Title = 'title',
  /** column name */
  TypeId = 'typeId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Banners_Var_Pop_Fields = {
  __typename?: 'banners_var_pop_fields';
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  typeId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "banners" */
export type Banners_Var_Pop_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  typeId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Banners_Var_Samp_Fields = {
  __typename?: 'banners_var_samp_fields';
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  typeId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "banners" */
export type Banners_Var_Samp_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  typeId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Banners_Variance_Fields = {
  __typename?: 'banners_variance_fields';
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  typeId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "banners" */
export type Banners_Variance_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  typeId?: Maybe<Order_By>;
};


/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "blogs" */
export type Blogs = {
  __typename?: 'blogs';
  /** An array relationship */
  bannerProducts: Array<Banner_Product>;
  /** An aggregated array relationship */
  bannerProducts_aggregate: Banner_Product_Aggregate;
  body: Scalars['String'];
  createdAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['bigint'];
  isDeleted: Scalars['Boolean'];
  summary: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "blogs" */
export type BlogsBannerProductsArgs = {
  distinct_on?: Maybe<Array<Banner_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Banner_Product_Order_By>>;
  where?: Maybe<Banner_Product_Bool_Exp>;
};


/** columns and relationships of "blogs" */
export type BlogsBannerProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Banner_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Banner_Product_Order_By>>;
  where?: Maybe<Banner_Product_Bool_Exp>;
};

/** aggregated selection of "blogs" */
export type Blogs_Aggregate = {
  __typename?: 'blogs_aggregate';
  aggregate?: Maybe<Blogs_Aggregate_Fields>;
  nodes: Array<Blogs>;
};

/** aggregate fields of "blogs" */
export type Blogs_Aggregate_Fields = {
  __typename?: 'blogs_aggregate_fields';
  avg?: Maybe<Blogs_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Blogs_Max_Fields>;
  min?: Maybe<Blogs_Min_Fields>;
  stddev?: Maybe<Blogs_Stddev_Fields>;
  stddev_pop?: Maybe<Blogs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Blogs_Stddev_Samp_Fields>;
  sum?: Maybe<Blogs_Sum_Fields>;
  var_pop?: Maybe<Blogs_Var_Pop_Fields>;
  var_samp?: Maybe<Blogs_Var_Samp_Fields>;
  variance?: Maybe<Blogs_Variance_Fields>;
};


/** aggregate fields of "blogs" */
export type Blogs_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Blogs_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "blogs" */
export type Blogs_Aggregate_Order_By = {
  avg?: Maybe<Blogs_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Blogs_Max_Order_By>;
  min?: Maybe<Blogs_Min_Order_By>;
  stddev?: Maybe<Blogs_Stddev_Order_By>;
  stddev_pop?: Maybe<Blogs_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Blogs_Stddev_Samp_Order_By>;
  sum?: Maybe<Blogs_Sum_Order_By>;
  var_pop?: Maybe<Blogs_Var_Pop_Order_By>;
  var_samp?: Maybe<Blogs_Var_Samp_Order_By>;
  variance?: Maybe<Blogs_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "blogs" */
export type Blogs_Arr_Rel_Insert_Input = {
  data: Array<Blogs_Insert_Input>;
  on_conflict?: Maybe<Blogs_On_Conflict>;
};

/** aggregate avg on columns */
export type Blogs_Avg_Fields = {
  __typename?: 'blogs_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "blogs" */
export type Blogs_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "blogs". All fields are combined with a logical 'AND'. */
export type Blogs_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Blogs_Bool_Exp>>>;
  _not?: Maybe<Blogs_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Blogs_Bool_Exp>>>;
  bannerProducts?: Maybe<Banner_Product_Bool_Exp>;
  body?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  isDeleted?: Maybe<Boolean_Comparison_Exp>;
  summary?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "blogs" */
export enum Blogs_Constraint {
  /** unique or primary key constraint */
  BlogsPkey = 'blogs_pkey'
}

/** input type for incrementing integer column in table "blogs" */
export type Blogs_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "blogs" */
export type Blogs_Insert_Input = {
  bannerProducts?: Maybe<Banner_Product_Arr_Rel_Insert_Input>;
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Blogs_Max_Fields = {
  __typename?: 'blogs_max_fields';
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "blogs" */
export type Blogs_Max_Order_By = {
  body?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  summary?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Blogs_Min_Fields = {
  __typename?: 'blogs_min_fields';
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "blogs" */
export type Blogs_Min_Order_By = {
  body?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  summary?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "blogs" */
export type Blogs_Mutation_Response = {
  __typename?: 'blogs_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Blogs>;
};

/** input type for inserting object relation for remote table "blogs" */
export type Blogs_Obj_Rel_Insert_Input = {
  data: Blogs_Insert_Input;
  on_conflict?: Maybe<Blogs_On_Conflict>;
};

/** on conflict condition type for table "blogs" */
export type Blogs_On_Conflict = {
  constraint: Blogs_Constraint;
  update_columns: Array<Blogs_Update_Column>;
  where?: Maybe<Blogs_Bool_Exp>;
};

/** ordering options when selecting data from "blogs" */
export type Blogs_Order_By = {
  bannerProducts_aggregate?: Maybe<Banner_Product_Aggregate_Order_By>;
  body?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isDeleted?: Maybe<Order_By>;
  summary?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "blogs" */
export type Blogs_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "blogs" */
export enum Blogs_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Summary = 'summary',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "blogs" */
export type Blogs_Set_Input = {
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Blogs_Stddev_Fields = {
  __typename?: 'blogs_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "blogs" */
export type Blogs_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Blogs_Stddev_Pop_Fields = {
  __typename?: 'blogs_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "blogs" */
export type Blogs_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Blogs_Stddev_Samp_Fields = {
  __typename?: 'blogs_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "blogs" */
export type Blogs_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Blogs_Sum_Fields = {
  __typename?: 'blogs_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "blogs" */
export type Blogs_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "blogs" */
export enum Blogs_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Summary = 'summary',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Blogs_Var_Pop_Fields = {
  __typename?: 'blogs_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "blogs" */
export type Blogs_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Blogs_Var_Samp_Fields = {
  __typename?: 'blogs_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "blogs" */
export type Blogs_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Blogs_Variance_Fields = {
  __typename?: 'blogs_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "blogs" */
export type Blogs_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "cart" */
export type Cart = {
  __typename?: 'cart';
  count: Scalars['Int'];
  createdAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['bigint'];
  productTypeId: Scalars['Int'];
  /** An object relationship */
  product_type: Product_Type;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  userId: Scalars['bigint'];
};

/** aggregated selection of "cart" */
export type Cart_Aggregate = {
  __typename?: 'cart_aggregate';
  aggregate?: Maybe<Cart_Aggregate_Fields>;
  nodes: Array<Cart>;
};

/** aggregate fields of "cart" */
export type Cart_Aggregate_Fields = {
  __typename?: 'cart_aggregate_fields';
  avg?: Maybe<Cart_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Cart_Max_Fields>;
  min?: Maybe<Cart_Min_Fields>;
  stddev?: Maybe<Cart_Stddev_Fields>;
  stddev_pop?: Maybe<Cart_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cart_Stddev_Samp_Fields>;
  sum?: Maybe<Cart_Sum_Fields>;
  var_pop?: Maybe<Cart_Var_Pop_Fields>;
  var_samp?: Maybe<Cart_Var_Samp_Fields>;
  variance?: Maybe<Cart_Variance_Fields>;
};


/** aggregate fields of "cart" */
export type Cart_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Cart_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "cart" */
export type Cart_Aggregate_Order_By = {
  avg?: Maybe<Cart_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Cart_Max_Order_By>;
  min?: Maybe<Cart_Min_Order_By>;
  stddev?: Maybe<Cart_Stddev_Order_By>;
  stddev_pop?: Maybe<Cart_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Cart_Stddev_Samp_Order_By>;
  sum?: Maybe<Cart_Sum_Order_By>;
  var_pop?: Maybe<Cart_Var_Pop_Order_By>;
  var_samp?: Maybe<Cart_Var_Samp_Order_By>;
  variance?: Maybe<Cart_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "cart" */
export type Cart_Arr_Rel_Insert_Input = {
  data: Array<Cart_Insert_Input>;
  on_conflict?: Maybe<Cart_On_Conflict>;
};

/** aggregate avg on columns */
export type Cart_Avg_Fields = {
  __typename?: 'cart_avg_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "cart" */
export type Cart_Avg_Order_By = {
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "cart". All fields are combined with a logical 'AND'. */
export type Cart_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Cart_Bool_Exp>>>;
  _not?: Maybe<Cart_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Cart_Bool_Exp>>>;
  count?: Maybe<Int_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  productTypeId?: Maybe<Int_Comparison_Exp>;
  product_type?: Maybe<Product_Type_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  userId?: Maybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "cart" */
export enum Cart_Constraint {
  /** unique or primary key constraint */
  CartPkey = 'cart_pkey'
}

/** input type for incrementing integer column in table "cart" */
export type Cart_Inc_Input = {
  count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "cart" */
export type Cart_Insert_Input = {
  count?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  product_type?: Maybe<Product_Type_Obj_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Cart_Max_Fields = {
  __typename?: 'cart_max_fields';
  count?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "cart" */
export type Cart_Max_Order_By = {
  count?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Cart_Min_Fields = {
  __typename?: 'cart_min_fields';
  count?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "cart" */
export type Cart_Min_Order_By = {
  count?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "cart" */
export type Cart_Mutation_Response = {
  __typename?: 'cart_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Cart>;
};

/** input type for inserting object relation for remote table "cart" */
export type Cart_Obj_Rel_Insert_Input = {
  data: Cart_Insert_Input;
  on_conflict?: Maybe<Cart_On_Conflict>;
};

/** on conflict condition type for table "cart" */
export type Cart_On_Conflict = {
  constraint: Cart_Constraint;
  update_columns: Array<Cart_Update_Column>;
  where?: Maybe<Cart_Bool_Exp>;
};

/** ordering options when selecting data from "cart" */
export type Cart_Order_By = {
  count?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  product_type?: Maybe<Product_Type_Order_By>;
  updatedAt?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "cart" */
export type Cart_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "cart" */
export enum Cart_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProductTypeId = 'productTypeId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "cart" */
export type Cart_Set_Input = {
  count?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Cart_Stddev_Fields = {
  __typename?: 'cart_stddev_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "cart" */
export type Cart_Stddev_Order_By = {
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Cart_Stddev_Pop_Fields = {
  __typename?: 'cart_stddev_pop_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "cart" */
export type Cart_Stddev_Pop_Order_By = {
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Cart_Stddev_Samp_Fields = {
  __typename?: 'cart_stddev_samp_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "cart" */
export type Cart_Stddev_Samp_Order_By = {
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Cart_Sum_Fields = {
  __typename?: 'cart_sum_fields';
  count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "cart" */
export type Cart_Sum_Order_By = {
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** update columns of table "cart" */
export enum Cart_Update_Column {
  /** column name */
  Count = 'count',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProductTypeId = 'productTypeId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type Cart_Var_Pop_Fields = {
  __typename?: 'cart_var_pop_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "cart" */
export type Cart_Var_Pop_Order_By = {
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Cart_Var_Samp_Fields = {
  __typename?: 'cart_var_samp_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "cart" */
export type Cart_Var_Samp_Order_By = {
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Cart_Variance_Fields = {
  __typename?: 'cart_variance_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "cart" */
export type Cart_Variance_Order_By = {
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  /** An array relationship */
  sub_categories: Array<Sub_Categories>;
  /** An aggregated array relationship */
  sub_categories_aggregate: Sub_Categories_Aggregate;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "categories" */
export type CategoriesSub_CategoriesArgs = {
  distinct_on?: Maybe<Array<Sub_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sub_Categories_Order_By>>;
  where?: Maybe<Sub_Categories_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesSub_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Sub_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sub_Categories_Order_By>>;
  where?: Maybe<Sub_Categories_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  avg?: Maybe<Categories_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
  stddev?: Maybe<Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Categories_Sum_Fields>;
  var_pop?: Maybe<Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Categories_Var_Samp_Fields>;
  variance?: Maybe<Categories_Variance_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Categories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "categories" */
export type Categories_Aggregate_Order_By = {
  avg?: Maybe<Categories_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Categories_Max_Order_By>;
  min?: Maybe<Categories_Min_Order_By>;
  stddev?: Maybe<Categories_Stddev_Order_By>;
  stddev_pop?: Maybe<Categories_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Categories_Stddev_Samp_Order_By>;
  sum?: Maybe<Categories_Sum_Order_By>;
  var_pop?: Maybe<Categories_Var_Pop_Order_By>;
  var_samp?: Maybe<Categories_Var_Samp_Order_By>;
  variance?: Maybe<Categories_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "categories" */
export type Categories_Arr_Rel_Insert_Input = {
  data: Array<Categories_Insert_Input>;
  on_conflict?: Maybe<Categories_On_Conflict>;
};

/** aggregate avg on columns */
export type Categories_Avg_Fields = {
  __typename?: 'categories_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "categories" */
export type Categories_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Categories_Bool_Exp>>>;
  _not?: Maybe<Categories_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Categories_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  isDeleted?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  sub_categories?: Maybe<Sub_Categories_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint */
  CategoriesPkey = 'categories_pkey'
}

/** input type for incrementing integer column in table "categories" */
export type Categories_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  sub_categories?: Maybe<Sub_Categories_Arr_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "categories" */
export type Categories_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "categories" */
export type Categories_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  on_conflict?: Maybe<Categories_On_Conflict>;
};

/** on conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns: Array<Categories_Update_Column>;
  where?: Maybe<Categories_Bool_Exp>;
};

/** ordering options when selecting data from "categories" */
export type Categories_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isDeleted?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  sub_categories_aggregate?: Maybe<Sub_Categories_Aggregate_Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "categories" */
export type Categories_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Categories_Stddev_Fields = {
  __typename?: 'categories_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "categories" */
export type Categories_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Categories_Stddev_Pop_Fields = {
  __typename?: 'categories_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "categories" */
export type Categories_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Categories_Stddev_Samp_Fields = {
  __typename?: 'categories_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "categories" */
export type Categories_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Categories_Sum_Fields = {
  __typename?: 'categories_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "categories" */
export type Categories_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Categories_Var_Pop_Fields = {
  __typename?: 'categories_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "categories" */
export type Categories_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Categories_Var_Samp_Fields = {
  __typename?: 'categories_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "categories" */
export type Categories_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Categories_Variance_Fields = {
  __typename?: 'categories_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "categories" */
export type Categories_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "countries" */
export type Countries = {
  __typename?: 'countries';
  /** An array relationship */
  addresses: Array<Addresses>;
  /** An aggregated array relationship */
  addresses_aggregate: Addresses_Aggregate;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "countries" */
export type CountriesAddressesArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};


/** columns and relationships of "countries" */
export type CountriesAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};

/** aggregated selection of "countries" */
export type Countries_Aggregate = {
  __typename?: 'countries_aggregate';
  aggregate?: Maybe<Countries_Aggregate_Fields>;
  nodes: Array<Countries>;
};

/** aggregate fields of "countries" */
export type Countries_Aggregate_Fields = {
  __typename?: 'countries_aggregate_fields';
  avg?: Maybe<Countries_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Countries_Max_Fields>;
  min?: Maybe<Countries_Min_Fields>;
  stddev?: Maybe<Countries_Stddev_Fields>;
  stddev_pop?: Maybe<Countries_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Countries_Stddev_Samp_Fields>;
  sum?: Maybe<Countries_Sum_Fields>;
  var_pop?: Maybe<Countries_Var_Pop_Fields>;
  var_samp?: Maybe<Countries_Var_Samp_Fields>;
  variance?: Maybe<Countries_Variance_Fields>;
};


/** aggregate fields of "countries" */
export type Countries_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Countries_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "countries" */
export type Countries_Aggregate_Order_By = {
  avg?: Maybe<Countries_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Countries_Max_Order_By>;
  min?: Maybe<Countries_Min_Order_By>;
  stddev?: Maybe<Countries_Stddev_Order_By>;
  stddev_pop?: Maybe<Countries_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Countries_Stddev_Samp_Order_By>;
  sum?: Maybe<Countries_Sum_Order_By>;
  var_pop?: Maybe<Countries_Var_Pop_Order_By>;
  var_samp?: Maybe<Countries_Var_Samp_Order_By>;
  variance?: Maybe<Countries_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "countries" */
export type Countries_Arr_Rel_Insert_Input = {
  data: Array<Countries_Insert_Input>;
  on_conflict?: Maybe<Countries_On_Conflict>;
};

/** aggregate avg on columns */
export type Countries_Avg_Fields = {
  __typename?: 'countries_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "countries" */
export type Countries_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "countries". All fields are combined with a logical 'AND'. */
export type Countries_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Countries_Bool_Exp>>>;
  _not?: Maybe<Countries_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Countries_Bool_Exp>>>;
  addresses?: Maybe<Addresses_Bool_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  isDeleted?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "countries" */
export enum Countries_Constraint {
  /** unique or primary key constraint */
  CountriesPkey = 'countries_pkey'
}

/** input type for incrementing integer column in table "countries" */
export type Countries_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "countries" */
export type Countries_Insert_Input = {
  addresses?: Maybe<Addresses_Arr_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Countries_Max_Fields = {
  __typename?: 'countries_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "countries" */
export type Countries_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Countries_Min_Fields = {
  __typename?: 'countries_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "countries" */
export type Countries_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "countries" */
export type Countries_Mutation_Response = {
  __typename?: 'countries_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Countries>;
};

/** input type for inserting object relation for remote table "countries" */
export type Countries_Obj_Rel_Insert_Input = {
  data: Countries_Insert_Input;
  on_conflict?: Maybe<Countries_On_Conflict>;
};

/** on conflict condition type for table "countries" */
export type Countries_On_Conflict = {
  constraint: Countries_Constraint;
  update_columns: Array<Countries_Update_Column>;
  where?: Maybe<Countries_Bool_Exp>;
};

/** ordering options when selecting data from "countries" */
export type Countries_Order_By = {
  addresses_aggregate?: Maybe<Addresses_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isDeleted?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "countries" */
export type Countries_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "countries" */
export enum Countries_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "countries" */
export type Countries_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Countries_Stddev_Fields = {
  __typename?: 'countries_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "countries" */
export type Countries_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Countries_Stddev_Pop_Fields = {
  __typename?: 'countries_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "countries" */
export type Countries_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Countries_Stddev_Samp_Fields = {
  __typename?: 'countries_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "countries" */
export type Countries_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Countries_Sum_Fields = {
  __typename?: 'countries_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "countries" */
export type Countries_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "countries" */
export enum Countries_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Countries_Var_Pop_Fields = {
  __typename?: 'countries_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "countries" */
export type Countries_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Countries_Var_Samp_Fields = {
  __typename?: 'countries_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "countries" */
export type Countries_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Countries_Variance_Fields = {
  __typename?: 'countries_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "countries" */
export type Countries_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "coupons" */
// export type Coupons = {
//   __typename?: 'coupons';
//   code: Scalars['String'];
//   createdAt?: Maybe<Scalars['timestamptz']>;
//   id: Scalars['Int'];
//   isValid: Scalars['Boolean'];
//   updatedAt?: Maybe<Scalars['timestamptz']>;
//   value: Scalars['Int'];
// };

/** aggregated selection of "coupons" */
export type Coupons_Aggregate = {
  __typename?: 'coupons_aggregate';
  aggregate?: Maybe<Coupons_Aggregate_Fields>;
  nodes: Array<Coupons>;
};

/** aggregate fields of "coupons" */
export type Coupons_Aggregate_Fields = {
  __typename?: 'coupons_aggregate_fields';
  avg?: Maybe<Coupons_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Coupons_Max_Fields>;
  min?: Maybe<Coupons_Min_Fields>;
  stddev?: Maybe<Coupons_Stddev_Fields>;
  stddev_pop?: Maybe<Coupons_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Coupons_Stddev_Samp_Fields>;
  sum?: Maybe<Coupons_Sum_Fields>;
  var_pop?: Maybe<Coupons_Var_Pop_Fields>;
  var_samp?: Maybe<Coupons_Var_Samp_Fields>;
  variance?: Maybe<Coupons_Variance_Fields>;
};


/** aggregate fields of "coupons" */
export type Coupons_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Coupons_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "coupons" */
export type Coupons_Aggregate_Order_By = {
  avg?: Maybe<Coupons_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Coupons_Max_Order_By>;
  min?: Maybe<Coupons_Min_Order_By>;
  stddev?: Maybe<Coupons_Stddev_Order_By>;
  stddev_pop?: Maybe<Coupons_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Coupons_Stddev_Samp_Order_By>;
  sum?: Maybe<Coupons_Sum_Order_By>;
  var_pop?: Maybe<Coupons_Var_Pop_Order_By>;
  var_samp?: Maybe<Coupons_Var_Samp_Order_By>;
  variance?: Maybe<Coupons_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "coupons" */
export type Coupons_Arr_Rel_Insert_Input = {
  data: Array<Coupons_Insert_Input>;
  on_conflict?: Maybe<Coupons_On_Conflict>;
};

/** aggregate avg on columns */
export type Coupons_Avg_Fields = {
  __typename?: 'coupons_avg_fields';
  id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "coupons" */
export type Coupons_Avg_Order_By = {
  id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "coupons". All fields are combined with a logical 'AND'. */
export type Coupons_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Coupons_Bool_Exp>>>;
  _not?: Maybe<Coupons_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Coupons_Bool_Exp>>>;
  code?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  isValid?: Maybe<Boolean_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  value?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "coupons" */
export enum Coupons_Constraint {
  /** unique or primary key constraint */
  CouponsCodeKey = 'coupons_code_key',
  /** unique or primary key constraint */
  CouponsPkey = 'coupons_pkey'
}

/** input type for incrementing integer column in table "coupons" */
export type Coupons_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "coupons" */
export type Coupons_Insert_Input = {
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  isValid?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Coupons_Max_Fields = {
  __typename?: 'coupons_max_fields';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "coupons" */
export type Coupons_Max_Order_By = {
  code?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Coupons_Min_Fields = {
  __typename?: 'coupons_min_fields';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "coupons" */
export type Coupons_Min_Order_By = {
  code?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "coupons" */
export type Coupons_Mutation_Response = {
  __typename?: 'coupons_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Coupons>;
};

/** input type for inserting object relation for remote table "coupons" */
export type Coupons_Obj_Rel_Insert_Input = {
  data: Coupons_Insert_Input;
  on_conflict?: Maybe<Coupons_On_Conflict>;
};

/** on conflict condition type for table "coupons" */
export type Coupons_On_Conflict = {
  constraint: Coupons_Constraint;
  update_columns: Array<Coupons_Update_Column>;
  where?: Maybe<Coupons_Bool_Exp>;
};

/** ordering options when selecting data from "coupons" */
export type Coupons_Order_By = {
  code?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isValid?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "coupons" */
export type Coupons_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "coupons" */
export enum Coupons_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsValid = 'isValid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "coupons" */
export type Coupons_Set_Input = {
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  isValid?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Coupons_Stddev_Fields = {
  __typename?: 'coupons_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "coupons" */
export type Coupons_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Coupons_Stddev_Pop_Fields = {
  __typename?: 'coupons_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "coupons" */
export type Coupons_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Coupons_Stddev_Samp_Fields = {
  __typename?: 'coupons_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "coupons" */
export type Coupons_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Coupons_Sum_Fields = {
  __typename?: 'coupons_sum_fields';
  id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "coupons" */
export type Coupons_Sum_Order_By = {
  id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** update columns of table "coupons" */
export enum Coupons_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsValid = 'isValid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

/** aggregate var_pop on columns */
export type Coupons_Var_Pop_Fields = {
  __typename?: 'coupons_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "coupons" */
export type Coupons_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Coupons_Var_Samp_Fields = {
  __typename?: 'coupons_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "coupons" */
export type Coupons_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Coupons_Variance_Fields = {
  __typename?: 'coupons_variance_fields';
  id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "coupons" */
export type Coupons_Variance_Order_By = {
  id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type CreateOrderInput = {
  addressId: Scalars['Int'];
  currency: Scalars['String'];
  productTypeIds: Array<ProductTypePair>;
  promoCode?: Maybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type CreateOrderResponse = {
  __typename?: 'createOrderResponse';
  order: Order;
  razorpayOrderId?: Maybe<Scalars['String']>;
};

export type CreateRazorpayOrderInput = {
  amount: Scalars['Int'];
  currency: Scalars['String'];
  orderId: Scalars['Int'];
};

export type CreateRazorpayOrderResponse = {
  __typename?: 'createRazorpayOrderResponse';
  razorpayOrderId?: Maybe<Scalars['String']>;
};

/** columns and relationships of "deal_of_the_day" */
export type Deal_Of_The_Day = {
  __typename?: 'deal_of_the_day';
  createdAt?: Maybe<Scalars['timestamptz']>;
  discount: Scalars['Int'];
  enable: Scalars['Boolean'];
  expiry: Scalars['timestamptz'];
  id: Scalars['bigint'];
  /** An object relationship */
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['Int']>;
  productTypeId?: Maybe<Scalars['Int']>;
  /** An object relationship */
  product_type?: Maybe<Product_Type>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "deal_of_the_day" */
export type Deal_Of_The_Day_Aggregate = {
  __typename?: 'deal_of_the_day_aggregate';
  aggregate?: Maybe<Deal_Of_The_Day_Aggregate_Fields>;
  nodes: Array<Deal_Of_The_Day>;
};

/** aggregate fields of "deal_of_the_day" */
export type Deal_Of_The_Day_Aggregate_Fields = {
  __typename?: 'deal_of_the_day_aggregate_fields';
  avg?: Maybe<Deal_Of_The_Day_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Deal_Of_The_Day_Max_Fields>;
  min?: Maybe<Deal_Of_The_Day_Min_Fields>;
  stddev?: Maybe<Deal_Of_The_Day_Stddev_Fields>;
  stddev_pop?: Maybe<Deal_Of_The_Day_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Deal_Of_The_Day_Stddev_Samp_Fields>;
  sum?: Maybe<Deal_Of_The_Day_Sum_Fields>;
  var_pop?: Maybe<Deal_Of_The_Day_Var_Pop_Fields>;
  var_samp?: Maybe<Deal_Of_The_Day_Var_Samp_Fields>;
  variance?: Maybe<Deal_Of_The_Day_Variance_Fields>;
};


/** aggregate fields of "deal_of_the_day" */
export type Deal_Of_The_Day_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Deal_Of_The_Day_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "deal_of_the_day" */
export type Deal_Of_The_Day_Aggregate_Order_By = {
  avg?: Maybe<Deal_Of_The_Day_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Deal_Of_The_Day_Max_Order_By>;
  min?: Maybe<Deal_Of_The_Day_Min_Order_By>;
  stddev?: Maybe<Deal_Of_The_Day_Stddev_Order_By>;
  stddev_pop?: Maybe<Deal_Of_The_Day_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Deal_Of_The_Day_Stddev_Samp_Order_By>;
  sum?: Maybe<Deal_Of_The_Day_Sum_Order_By>;
  var_pop?: Maybe<Deal_Of_The_Day_Var_Pop_Order_By>;
  var_samp?: Maybe<Deal_Of_The_Day_Var_Samp_Order_By>;
  variance?: Maybe<Deal_Of_The_Day_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "deal_of_the_day" */
export type Deal_Of_The_Day_Arr_Rel_Insert_Input = {
  data: Array<Deal_Of_The_Day_Insert_Input>;
  on_conflict?: Maybe<Deal_Of_The_Day_On_Conflict>;
};

/** aggregate avg on columns */
export type Deal_Of_The_Day_Avg_Fields = {
  __typename?: 'deal_of_the_day_avg_fields';
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "deal_of_the_day" */
export type Deal_Of_The_Day_Avg_Order_By = {
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "deal_of_the_day". All fields are combined with a logical 'AND'. */
export type Deal_Of_The_Day_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Deal_Of_The_Day_Bool_Exp>>>;
  _not?: Maybe<Deal_Of_The_Day_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Deal_Of_The_Day_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  discount?: Maybe<Int_Comparison_Exp>;
  enable?: Maybe<Boolean_Comparison_Exp>;
  expiry?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  product?: Maybe<Product_Bool_Exp>;
  productId?: Maybe<Int_Comparison_Exp>;
  productTypeId?: Maybe<Int_Comparison_Exp>;
  product_type?: Maybe<Product_Type_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "deal_of_the_day" */
export enum Deal_Of_The_Day_Constraint {
  /** unique or primary key constraint */
  DealOfTheDayPkey = 'deal_of_the_day_pkey'
}

/** input type for incrementing integer column in table "deal_of_the_day" */
export type Deal_Of_The_Day_Inc_Input = {
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  productId?: Maybe<Scalars['Int']>;
  productTypeId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "deal_of_the_day" */
export type Deal_Of_The_Day_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  discount?: Maybe<Scalars['Int']>;
  enable?: Maybe<Scalars['Boolean']>;
  expiry?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  product?: Maybe<Product_Obj_Rel_Insert_Input>;
  productId?: Maybe<Scalars['Int']>;
  productTypeId?: Maybe<Scalars['Int']>;
  product_type?: Maybe<Product_Type_Obj_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Deal_Of_The_Day_Max_Fields = {
  __typename?: 'deal_of_the_day_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  discount?: Maybe<Scalars['Int']>;
  expiry?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  productId?: Maybe<Scalars['Int']>;
  productTypeId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "deal_of_the_day" */
export type Deal_Of_The_Day_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  expiry?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Deal_Of_The_Day_Min_Fields = {
  __typename?: 'deal_of_the_day_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  discount?: Maybe<Scalars['Int']>;
  expiry?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  productId?: Maybe<Scalars['Int']>;
  productTypeId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "deal_of_the_day" */
export type Deal_Of_The_Day_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  expiry?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "deal_of_the_day" */
export type Deal_Of_The_Day_Mutation_Response = {
  __typename?: 'deal_of_the_day_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Deal_Of_The_Day>;
};

/** input type for inserting object relation for remote table "deal_of_the_day" */
export type Deal_Of_The_Day_Obj_Rel_Insert_Input = {
  data: Deal_Of_The_Day_Insert_Input;
  on_conflict?: Maybe<Deal_Of_The_Day_On_Conflict>;
};

/** on conflict condition type for table "deal_of_the_day" */
export type Deal_Of_The_Day_On_Conflict = {
  constraint: Deal_Of_The_Day_Constraint;
  update_columns: Array<Deal_Of_The_Day_Update_Column>;
  where?: Maybe<Deal_Of_The_Day_Bool_Exp>;
};

/** ordering options when selecting data from "deal_of_the_day" */
export type Deal_Of_The_Day_Order_By = {
  createdAt?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  enable?: Maybe<Order_By>;
  expiry?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product?: Maybe<Product_Order_By>;
  productId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  product_type?: Maybe<Product_Type_Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "deal_of_the_day" */
export type Deal_Of_The_Day_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "deal_of_the_day" */
export enum Deal_Of_The_Day_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Discount = 'discount',
  /** column name */
  Enable = 'enable',
  /** column name */
  Expiry = 'expiry',
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'productId',
  /** column name */
  ProductTypeId = 'productTypeId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "deal_of_the_day" */
export type Deal_Of_The_Day_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  discount?: Maybe<Scalars['Int']>;
  enable?: Maybe<Scalars['Boolean']>;
  expiry?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  productId?: Maybe<Scalars['Int']>;
  productTypeId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Deal_Of_The_Day_Stddev_Fields = {
  __typename?: 'deal_of_the_day_stddev_fields';
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "deal_of_the_day" */
export type Deal_Of_The_Day_Stddev_Order_By = {
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Deal_Of_The_Day_Stddev_Pop_Fields = {
  __typename?: 'deal_of_the_day_stddev_pop_fields';
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "deal_of_the_day" */
export type Deal_Of_The_Day_Stddev_Pop_Order_By = {
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Deal_Of_The_Day_Stddev_Samp_Fields = {
  __typename?: 'deal_of_the_day_stddev_samp_fields';
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "deal_of_the_day" */
export type Deal_Of_The_Day_Stddev_Samp_Order_By = {
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Deal_Of_The_Day_Sum_Fields = {
  __typename?: 'deal_of_the_day_sum_fields';
  discount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  productId?: Maybe<Scalars['Int']>;
  productTypeId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "deal_of_the_day" */
export type Deal_Of_The_Day_Sum_Order_By = {
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
};

/** update columns of table "deal_of_the_day" */
export enum Deal_Of_The_Day_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Discount = 'discount',
  /** column name */
  Enable = 'enable',
  /** column name */
  Expiry = 'expiry',
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'productId',
  /** column name */
  ProductTypeId = 'productTypeId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Deal_Of_The_Day_Var_Pop_Fields = {
  __typename?: 'deal_of_the_day_var_pop_fields';
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "deal_of_the_day" */
export type Deal_Of_The_Day_Var_Pop_Order_By = {
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Deal_Of_The_Day_Var_Samp_Fields = {
  __typename?: 'deal_of_the_day_var_samp_fields';
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "deal_of_the_day" */
export type Deal_Of_The_Day_Var_Samp_Order_By = {
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Deal_Of_The_Day_Variance_Fields = {
  __typename?: 'deal_of_the_day_variance_fields';
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "deal_of_the_day" */
export type Deal_Of_The_Day_Variance_Order_By = {
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
};

/** columns and relationships of "descriptions" */
export type Descriptions = {
  __typename?: 'descriptions';
  createdAt: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['bigint'];
  /** An object relationship */
  productType: Product_Type;
  productTypeId: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "descriptions" */
export type Descriptions_Aggregate = {
  __typename?: 'descriptions_aggregate';
  aggregate?: Maybe<Descriptions_Aggregate_Fields>;
  nodes: Array<Descriptions>;
};

/** aggregate fields of "descriptions" */
export type Descriptions_Aggregate_Fields = {
  __typename?: 'descriptions_aggregate_fields';
  avg?: Maybe<Descriptions_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Descriptions_Max_Fields>;
  min?: Maybe<Descriptions_Min_Fields>;
  stddev?: Maybe<Descriptions_Stddev_Fields>;
  stddev_pop?: Maybe<Descriptions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Descriptions_Stddev_Samp_Fields>;
  sum?: Maybe<Descriptions_Sum_Fields>;
  var_pop?: Maybe<Descriptions_Var_Pop_Fields>;
  var_samp?: Maybe<Descriptions_Var_Samp_Fields>;
  variance?: Maybe<Descriptions_Variance_Fields>;
};


/** aggregate fields of "descriptions" */
export type Descriptions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Descriptions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "descriptions" */
export type Descriptions_Aggregate_Order_By = {
  avg?: Maybe<Descriptions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Descriptions_Max_Order_By>;
  min?: Maybe<Descriptions_Min_Order_By>;
  stddev?: Maybe<Descriptions_Stddev_Order_By>;
  stddev_pop?: Maybe<Descriptions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Descriptions_Stddev_Samp_Order_By>;
  sum?: Maybe<Descriptions_Sum_Order_By>;
  var_pop?: Maybe<Descriptions_Var_Pop_Order_By>;
  var_samp?: Maybe<Descriptions_Var_Samp_Order_By>;
  variance?: Maybe<Descriptions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "descriptions" */
export type Descriptions_Arr_Rel_Insert_Input = {
  data: Array<Descriptions_Insert_Input>;
  on_conflict?: Maybe<Descriptions_On_Conflict>;
};

/** aggregate avg on columns */
export type Descriptions_Avg_Fields = {
  __typename?: 'descriptions_avg_fields';
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "descriptions" */
export type Descriptions_Avg_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "descriptions". All fields are combined with a logical 'AND'. */
export type Descriptions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Descriptions_Bool_Exp>>>;
  _not?: Maybe<Descriptions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Descriptions_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  productType?: Maybe<Product_Type_Bool_Exp>;
  productTypeId?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "descriptions" */
export enum Descriptions_Constraint {
  /** unique or primary key constraint */
  DescriptionsPkey = 'descriptions_pkey'
}

/** input type for incrementing integer column in table "descriptions" */
export type Descriptions_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "descriptions" */
export type Descriptions_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  productType?: Maybe<Product_Type_Obj_Rel_Insert_Input>;
  productTypeId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Descriptions_Max_Fields = {
  __typename?: 'descriptions_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "descriptions" */
export type Descriptions_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Descriptions_Min_Fields = {
  __typename?: 'descriptions_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "descriptions" */
export type Descriptions_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "descriptions" */
export type Descriptions_Mutation_Response = {
  __typename?: 'descriptions_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Descriptions>;
};

/** input type for inserting object relation for remote table "descriptions" */
export type Descriptions_Obj_Rel_Insert_Input = {
  data: Descriptions_Insert_Input;
  on_conflict?: Maybe<Descriptions_On_Conflict>;
};

/** on conflict condition type for table "descriptions" */
export type Descriptions_On_Conflict = {
  constraint: Descriptions_Constraint;
  update_columns: Array<Descriptions_Update_Column>;
  where?: Maybe<Descriptions_Bool_Exp>;
};

/** ordering options when selecting data from "descriptions" */
export type Descriptions_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productType?: Maybe<Product_Type_Order_By>;
  productTypeId?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "descriptions" */
export type Descriptions_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "descriptions" */
export enum Descriptions_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ProductTypeId = 'productTypeId',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "descriptions" */
export type Descriptions_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Descriptions_Stddev_Fields = {
  __typename?: 'descriptions_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "descriptions" */
export type Descriptions_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Descriptions_Stddev_Pop_Fields = {
  __typename?: 'descriptions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "descriptions" */
export type Descriptions_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Descriptions_Stddev_Samp_Fields = {
  __typename?: 'descriptions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "descriptions" */
export type Descriptions_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Descriptions_Sum_Fields = {
  __typename?: 'descriptions_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "descriptions" */
export type Descriptions_Sum_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
};

/** update columns of table "descriptions" */
export enum Descriptions_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ProductTypeId = 'productTypeId',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Descriptions_Var_Pop_Fields = {
  __typename?: 'descriptions_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "descriptions" */
export type Descriptions_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Descriptions_Var_Samp_Fields = {
  __typename?: 'descriptions_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "descriptions" */
export type Descriptions_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Descriptions_Variance_Fields = {
  __typename?: 'descriptions_variance_fields';
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "descriptions" */
export type Descriptions_Variance_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
};

/** columns and relationships of "email_list" */
export type Email_List = {
  __typename?: 'email_list';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email: Scalars['String'];
  id: Scalars['bigint'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "email_list" */
export type Email_List_Aggregate = {
  __typename?: 'email_list_aggregate';
  aggregate?: Maybe<Email_List_Aggregate_Fields>;
  nodes: Array<Email_List>;
};

/** aggregate fields of "email_list" */
export type Email_List_Aggregate_Fields = {
  __typename?: 'email_list_aggregate_fields';
  avg?: Maybe<Email_List_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Email_List_Max_Fields>;
  min?: Maybe<Email_List_Min_Fields>;
  stddev?: Maybe<Email_List_Stddev_Fields>;
  stddev_pop?: Maybe<Email_List_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Email_List_Stddev_Samp_Fields>;
  sum?: Maybe<Email_List_Sum_Fields>;
  var_pop?: Maybe<Email_List_Var_Pop_Fields>;
  var_samp?: Maybe<Email_List_Var_Samp_Fields>;
  variance?: Maybe<Email_List_Variance_Fields>;
};


/** aggregate fields of "email_list" */
export type Email_List_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Email_List_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "email_list" */
export type Email_List_Aggregate_Order_By = {
  avg?: Maybe<Email_List_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Email_List_Max_Order_By>;
  min?: Maybe<Email_List_Min_Order_By>;
  stddev?: Maybe<Email_List_Stddev_Order_By>;
  stddev_pop?: Maybe<Email_List_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Email_List_Stddev_Samp_Order_By>;
  sum?: Maybe<Email_List_Sum_Order_By>;
  var_pop?: Maybe<Email_List_Var_Pop_Order_By>;
  var_samp?: Maybe<Email_List_Var_Samp_Order_By>;
  variance?: Maybe<Email_List_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "email_list" */
export type Email_List_Arr_Rel_Insert_Input = {
  data: Array<Email_List_Insert_Input>;
  on_conflict?: Maybe<Email_List_On_Conflict>;
};

/** aggregate avg on columns */
export type Email_List_Avg_Fields = {
  __typename?: 'email_list_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "email_list" */
export type Email_List_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "email_list". All fields are combined with a logical 'AND'. */
export type Email_List_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Email_List_Bool_Exp>>>;
  _not?: Maybe<Email_List_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Email_List_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "email_list" */
export enum Email_List_Constraint {
  /** unique or primary key constraint */
  EmailListPkey = 'email_list_pkey'
}

/** input type for incrementing integer column in table "email_list" */
export type Email_List_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "email_list" */
export type Email_List_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Email_List_Max_Fields = {
  __typename?: 'email_list_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "email_list" */
export type Email_List_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Email_List_Min_Fields = {
  __typename?: 'email_list_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "email_list" */
export type Email_List_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "email_list" */
export type Email_List_Mutation_Response = {
  __typename?: 'email_list_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Email_List>;
};

/** input type for inserting object relation for remote table "email_list" */
export type Email_List_Obj_Rel_Insert_Input = {
  data: Email_List_Insert_Input;
  on_conflict?: Maybe<Email_List_On_Conflict>;
};

/** on conflict condition type for table "email_list" */
export type Email_List_On_Conflict = {
  constraint: Email_List_Constraint;
  update_columns: Array<Email_List_Update_Column>;
  where?: Maybe<Email_List_Bool_Exp>;
};

/** ordering options when selecting data from "email_list" */
export type Email_List_Order_By = {
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "email_list" */
export type Email_List_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "email_list" */
export enum Email_List_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "email_list" */
export type Email_List_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Email_List_Stddev_Fields = {
  __typename?: 'email_list_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "email_list" */
export type Email_List_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Email_List_Stddev_Pop_Fields = {
  __typename?: 'email_list_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "email_list" */
export type Email_List_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Email_List_Stddev_Samp_Fields = {
  __typename?: 'email_list_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "email_list" */
export type Email_List_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Email_List_Sum_Fields = {
  __typename?: 'email_list_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "email_list" */
export type Email_List_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "email_list" */
export enum Email_List_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Email_List_Var_Pop_Fields = {
  __typename?: 'email_list_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "email_list" */
export type Email_List_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Email_List_Var_Samp_Fields = {
  __typename?: 'email_list_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "email_list" */
export type Email_List_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Email_List_Variance_Fields = {
  __typename?: 'email_list_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "email_list" */
export type Email_List_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "faq_titles" */
export type Faq_Titles = {
  __typename?: 'faq_titles';
  createdAt: Scalars['timestamptz'];
  /** An array relationship */
  faqs: Array<Faqs>;
  /** An aggregated array relationship */
  faqs_aggregate: Faqs_Aggregate;
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "faq_titles" */
export type Faq_TitlesFaqsArgs = {
  distinct_on?: Maybe<Array<Faqs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Faqs_Order_By>>;
  where?: Maybe<Faqs_Bool_Exp>;
};


/** columns and relationships of "faq_titles" */
export type Faq_TitlesFaqs_AggregateArgs = {
  distinct_on?: Maybe<Array<Faqs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Faqs_Order_By>>;
  where?: Maybe<Faqs_Bool_Exp>;
};

/** aggregated selection of "faq_titles" */
export type Faq_Titles_Aggregate = {
  __typename?: 'faq_titles_aggregate';
  aggregate?: Maybe<Faq_Titles_Aggregate_Fields>;
  nodes: Array<Faq_Titles>;
};

/** aggregate fields of "faq_titles" */
export type Faq_Titles_Aggregate_Fields = {
  __typename?: 'faq_titles_aggregate_fields';
  avg?: Maybe<Faq_Titles_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Faq_Titles_Max_Fields>;
  min?: Maybe<Faq_Titles_Min_Fields>;
  stddev?: Maybe<Faq_Titles_Stddev_Fields>;
  stddev_pop?: Maybe<Faq_Titles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Faq_Titles_Stddev_Samp_Fields>;
  sum?: Maybe<Faq_Titles_Sum_Fields>;
  var_pop?: Maybe<Faq_Titles_Var_Pop_Fields>;
  var_samp?: Maybe<Faq_Titles_Var_Samp_Fields>;
  variance?: Maybe<Faq_Titles_Variance_Fields>;
};


/** aggregate fields of "faq_titles" */
export type Faq_Titles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Faq_Titles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "faq_titles" */
export type Faq_Titles_Aggregate_Order_By = {
  avg?: Maybe<Faq_Titles_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Faq_Titles_Max_Order_By>;
  min?: Maybe<Faq_Titles_Min_Order_By>;
  stddev?: Maybe<Faq_Titles_Stddev_Order_By>;
  stddev_pop?: Maybe<Faq_Titles_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Faq_Titles_Stddev_Samp_Order_By>;
  sum?: Maybe<Faq_Titles_Sum_Order_By>;
  var_pop?: Maybe<Faq_Titles_Var_Pop_Order_By>;
  var_samp?: Maybe<Faq_Titles_Var_Samp_Order_By>;
  variance?: Maybe<Faq_Titles_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "faq_titles" */
export type Faq_Titles_Arr_Rel_Insert_Input = {
  data: Array<Faq_Titles_Insert_Input>;
  on_conflict?: Maybe<Faq_Titles_On_Conflict>;
};

/** aggregate avg on columns */
export type Faq_Titles_Avg_Fields = {
  __typename?: 'faq_titles_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "faq_titles" */
export type Faq_Titles_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "faq_titles". All fields are combined with a logical 'AND'. */
export type Faq_Titles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Faq_Titles_Bool_Exp>>>;
  _not?: Maybe<Faq_Titles_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Faq_Titles_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  faqs?: Maybe<Faqs_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  isDeleted?: Maybe<Boolean_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "faq_titles" */
export enum Faq_Titles_Constraint {
  /** unique or primary key constraint */
  FaqTitlesPkey = 'faq_titles_pkey'
}

/** input type for incrementing integer column in table "faq_titles" */
export type Faq_Titles_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "faq_titles" */
export type Faq_Titles_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  faqs?: Maybe<Faqs_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Faq_Titles_Max_Fields = {
  __typename?: 'faq_titles_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "faq_titles" */
export type Faq_Titles_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Faq_Titles_Min_Fields = {
  __typename?: 'faq_titles_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "faq_titles" */
export type Faq_Titles_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "faq_titles" */
export type Faq_Titles_Mutation_Response = {
  __typename?: 'faq_titles_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Faq_Titles>;
};

/** input type for inserting object relation for remote table "faq_titles" */
export type Faq_Titles_Obj_Rel_Insert_Input = {
  data: Faq_Titles_Insert_Input;
  on_conflict?: Maybe<Faq_Titles_On_Conflict>;
};

/** on conflict condition type for table "faq_titles" */
export type Faq_Titles_On_Conflict = {
  constraint: Faq_Titles_Constraint;
  update_columns: Array<Faq_Titles_Update_Column>;
  where?: Maybe<Faq_Titles_Bool_Exp>;
};

/** ordering options when selecting data from "faq_titles" */
export type Faq_Titles_Order_By = {
  createdAt?: Maybe<Order_By>;
  faqs_aggregate?: Maybe<Faqs_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  isDeleted?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "faq_titles" */
export type Faq_Titles_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "faq_titles" */
export enum Faq_Titles_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "faq_titles" */
export type Faq_Titles_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Faq_Titles_Stddev_Fields = {
  __typename?: 'faq_titles_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "faq_titles" */
export type Faq_Titles_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Faq_Titles_Stddev_Pop_Fields = {
  __typename?: 'faq_titles_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "faq_titles" */
export type Faq_Titles_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Faq_Titles_Stddev_Samp_Fields = {
  __typename?: 'faq_titles_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "faq_titles" */
export type Faq_Titles_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Faq_Titles_Sum_Fields = {
  __typename?: 'faq_titles_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "faq_titles" */
export type Faq_Titles_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "faq_titles" */
export enum Faq_Titles_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Faq_Titles_Var_Pop_Fields = {
  __typename?: 'faq_titles_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "faq_titles" */
export type Faq_Titles_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Faq_Titles_Var_Samp_Fields = {
  __typename?: 'faq_titles_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "faq_titles" */
export type Faq_Titles_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Faq_Titles_Variance_Fields = {
  __typename?: 'faq_titles_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "faq_titles" */
export type Faq_Titles_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "faqs" */
export type Faqs = {
  __typename?: 'faqs';
  answer: Scalars['String'];
  createdAt?: Maybe<Scalars['timestamptz']>;
  faqTitleId: Scalars['Int'];
  /** An object relationship */
  faq_title: Faq_Titles;
  id: Scalars['Int'];
  question: Scalars['String'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "faqs" */
export type Faqs_Aggregate = {
  __typename?: 'faqs_aggregate';
  aggregate?: Maybe<Faqs_Aggregate_Fields>;
  nodes: Array<Faqs>;
};

/** aggregate fields of "faqs" */
export type Faqs_Aggregate_Fields = {
  __typename?: 'faqs_aggregate_fields';
  avg?: Maybe<Faqs_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Faqs_Max_Fields>;
  min?: Maybe<Faqs_Min_Fields>;
  stddev?: Maybe<Faqs_Stddev_Fields>;
  stddev_pop?: Maybe<Faqs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Faqs_Stddev_Samp_Fields>;
  sum?: Maybe<Faqs_Sum_Fields>;
  var_pop?: Maybe<Faqs_Var_Pop_Fields>;
  var_samp?: Maybe<Faqs_Var_Samp_Fields>;
  variance?: Maybe<Faqs_Variance_Fields>;
};


/** aggregate fields of "faqs" */
export type Faqs_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Faqs_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "faqs" */
export type Faqs_Aggregate_Order_By = {
  avg?: Maybe<Faqs_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Faqs_Max_Order_By>;
  min?: Maybe<Faqs_Min_Order_By>;
  stddev?: Maybe<Faqs_Stddev_Order_By>;
  stddev_pop?: Maybe<Faqs_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Faqs_Stddev_Samp_Order_By>;
  sum?: Maybe<Faqs_Sum_Order_By>;
  var_pop?: Maybe<Faqs_Var_Pop_Order_By>;
  var_samp?: Maybe<Faqs_Var_Samp_Order_By>;
  variance?: Maybe<Faqs_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "faqs" */
export type Faqs_Arr_Rel_Insert_Input = {
  data: Array<Faqs_Insert_Input>;
  on_conflict?: Maybe<Faqs_On_Conflict>;
};

/** aggregate avg on columns */
export type Faqs_Avg_Fields = {
  __typename?: 'faqs_avg_fields';
  faqTitleId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "faqs" */
export type Faqs_Avg_Order_By = {
  faqTitleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "faqs". All fields are combined with a logical 'AND'. */
export type Faqs_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Faqs_Bool_Exp>>>;
  _not?: Maybe<Faqs_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Faqs_Bool_Exp>>>;
  answer?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  faqTitleId?: Maybe<Int_Comparison_Exp>;
  faq_title?: Maybe<Faq_Titles_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  question?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "faqs" */
export enum Faqs_Constraint {
  /** unique or primary key constraint */
  FaqsPkey = 'faqs_pkey'
}

/** input type for incrementing integer column in table "faqs" */
export type Faqs_Inc_Input = {
  faqTitleId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "faqs" */
export type Faqs_Insert_Input = {
  answer?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  faqTitleId?: Maybe<Scalars['Int']>;
  faq_title?: Maybe<Faq_Titles_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  question?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Faqs_Max_Fields = {
  __typename?: 'faqs_max_fields';
  answer?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  faqTitleId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  question?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "faqs" */
export type Faqs_Max_Order_By = {
  answer?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  faqTitleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  question?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Faqs_Min_Fields = {
  __typename?: 'faqs_min_fields';
  answer?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  faqTitleId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  question?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "faqs" */
export type Faqs_Min_Order_By = {
  answer?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  faqTitleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  question?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "faqs" */
export type Faqs_Mutation_Response = {
  __typename?: 'faqs_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Faqs>;
};

/** input type for inserting object relation for remote table "faqs" */
export type Faqs_Obj_Rel_Insert_Input = {
  data: Faqs_Insert_Input;
  on_conflict?: Maybe<Faqs_On_Conflict>;
};

/** on conflict condition type for table "faqs" */
export type Faqs_On_Conflict = {
  constraint: Faqs_Constraint;
  update_columns: Array<Faqs_Update_Column>;
  where?: Maybe<Faqs_Bool_Exp>;
};

/** ordering options when selecting data from "faqs" */
export type Faqs_Order_By = {
  answer?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  faqTitleId?: Maybe<Order_By>;
  faq_title?: Maybe<Faq_Titles_Order_By>;
  id?: Maybe<Order_By>;
  question?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "faqs" */
export type Faqs_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "faqs" */
export enum Faqs_Select_Column {
  /** column name */
  Answer = 'answer',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FaqTitleId = 'faqTitleId',
  /** column name */
  Id = 'id',
  /** column name */
  Question = 'question',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "faqs" */
export type Faqs_Set_Input = {
  answer?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  faqTitleId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  question?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Faqs_Stddev_Fields = {
  __typename?: 'faqs_stddev_fields';
  faqTitleId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "faqs" */
export type Faqs_Stddev_Order_By = {
  faqTitleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Faqs_Stddev_Pop_Fields = {
  __typename?: 'faqs_stddev_pop_fields';
  faqTitleId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "faqs" */
export type Faqs_Stddev_Pop_Order_By = {
  faqTitleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Faqs_Stddev_Samp_Fields = {
  __typename?: 'faqs_stddev_samp_fields';
  faqTitleId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "faqs" */
export type Faqs_Stddev_Samp_Order_By = {
  faqTitleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Faqs_Sum_Fields = {
  __typename?: 'faqs_sum_fields';
  faqTitleId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "faqs" */
export type Faqs_Sum_Order_By = {
  faqTitleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "faqs" */
export enum Faqs_Update_Column {
  /** column name */
  Answer = 'answer',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FaqTitleId = 'faqTitleId',
  /** column name */
  Id = 'id',
  /** column name */
  Question = 'question',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Faqs_Var_Pop_Fields = {
  __typename?: 'faqs_var_pop_fields';
  faqTitleId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "faqs" */
export type Faqs_Var_Pop_Order_By = {
  faqTitleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Faqs_Var_Samp_Fields = {
  __typename?: 'faqs_var_samp_fields';
  faqTitleId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "faqs" */
export type Faqs_Var_Samp_Order_By = {
  faqTitleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Faqs_Variance_Fields = {
  __typename?: 'faqs_variance_fields';
  faqTitleId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "faqs" */
export type Faqs_Variance_Order_By = {
  faqTitleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "instruction_titles" */
export type Instruction_Titles = {
  __typename?: 'instruction_titles';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  index: Scalars['Int'];
  /** An array relationship */
  instructions: Array<Instructions>;
  /** An aggregated array relationship */
  instructions_aggregate: Instructions_Aggregate;
  /** An object relationship */
  instructions_type: Instructions_Types;
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  /** An object relationship */
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['Int']>;
  typeId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "instruction_titles" */
export type Instruction_TitlesInstructionsArgs = {
  distinct_on?: Maybe<Array<Instructions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instructions_Order_By>>;
  where?: Maybe<Instructions_Bool_Exp>;
};


/** columns and relationships of "instruction_titles" */
export type Instruction_TitlesInstructions_AggregateArgs = {
  distinct_on?: Maybe<Array<Instructions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instructions_Order_By>>;
  where?: Maybe<Instructions_Bool_Exp>;
};

/** aggregated selection of "instruction_titles" */
export type Instruction_Titles_Aggregate = {
  __typename?: 'instruction_titles_aggregate';
  aggregate?: Maybe<Instruction_Titles_Aggregate_Fields>;
  nodes: Array<Instruction_Titles>;
};

/** aggregate fields of "instruction_titles" */
export type Instruction_Titles_Aggregate_Fields = {
  __typename?: 'instruction_titles_aggregate_fields';
  avg?: Maybe<Instruction_Titles_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Instruction_Titles_Max_Fields>;
  min?: Maybe<Instruction_Titles_Min_Fields>;
  stddev?: Maybe<Instruction_Titles_Stddev_Fields>;
  stddev_pop?: Maybe<Instruction_Titles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Instruction_Titles_Stddev_Samp_Fields>;
  sum?: Maybe<Instruction_Titles_Sum_Fields>;
  var_pop?: Maybe<Instruction_Titles_Var_Pop_Fields>;
  var_samp?: Maybe<Instruction_Titles_Var_Samp_Fields>;
  variance?: Maybe<Instruction_Titles_Variance_Fields>;
};


/** aggregate fields of "instruction_titles" */
export type Instruction_Titles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Instruction_Titles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "instruction_titles" */
export type Instruction_Titles_Aggregate_Order_By = {
  avg?: Maybe<Instruction_Titles_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Instruction_Titles_Max_Order_By>;
  min?: Maybe<Instruction_Titles_Min_Order_By>;
  stddev?: Maybe<Instruction_Titles_Stddev_Order_By>;
  stddev_pop?: Maybe<Instruction_Titles_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Instruction_Titles_Stddev_Samp_Order_By>;
  sum?: Maybe<Instruction_Titles_Sum_Order_By>;
  var_pop?: Maybe<Instruction_Titles_Var_Pop_Order_By>;
  var_samp?: Maybe<Instruction_Titles_Var_Samp_Order_By>;
  variance?: Maybe<Instruction_Titles_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "instruction_titles" */
export type Instruction_Titles_Arr_Rel_Insert_Input = {
  data: Array<Instruction_Titles_Insert_Input>;
  on_conflict?: Maybe<Instruction_Titles_On_Conflict>;
};

/** aggregate avg on columns */
export type Instruction_Titles_Avg_Fields = {
  __typename?: 'instruction_titles_avg_fields';
  id?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  typeId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "instruction_titles" */
export type Instruction_Titles_Avg_Order_By = {
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  typeId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "instruction_titles". All fields are combined with a logical 'AND'. */
export type Instruction_Titles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Instruction_Titles_Bool_Exp>>>;
  _not?: Maybe<Instruction_Titles_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Instruction_Titles_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  index?: Maybe<Int_Comparison_Exp>;
  instructions?: Maybe<Instructions_Bool_Exp>;
  instructions_type?: Maybe<Instructions_Types_Bool_Exp>;
  isDeleted?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  product?: Maybe<Product_Bool_Exp>;
  productId?: Maybe<Int_Comparison_Exp>;
  typeId?: Maybe<Int_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "instruction_titles" */
export enum Instruction_Titles_Constraint {
  /** unique or primary key constraint */
  InstructionTitlesPkey = 'instruction_titles_pkey'
}

/** input type for incrementing integer column in table "instruction_titles" */
export type Instruction_Titles_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  typeId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "instruction_titles" */
export type Instruction_Titles_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  instructions?: Maybe<Instructions_Arr_Rel_Insert_Input>;
  instructions_type?: Maybe<Instructions_Types_Obj_Rel_Insert_Input>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  product?: Maybe<Product_Obj_Rel_Insert_Input>;
  productId?: Maybe<Scalars['Int']>;
  typeId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Instruction_Titles_Max_Fields = {
  __typename?: 'instruction_titles_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  typeId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "instruction_titles" */
export type Instruction_Titles_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  typeId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Instruction_Titles_Min_Fields = {
  __typename?: 'instruction_titles_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  typeId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "instruction_titles" */
export type Instruction_Titles_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  typeId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "instruction_titles" */
export type Instruction_Titles_Mutation_Response = {
  __typename?: 'instruction_titles_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Instruction_Titles>;
};

/** input type for inserting object relation for remote table "instruction_titles" */
export type Instruction_Titles_Obj_Rel_Insert_Input = {
  data: Instruction_Titles_Insert_Input;
  on_conflict?: Maybe<Instruction_Titles_On_Conflict>;
};

/** on conflict condition type for table "instruction_titles" */
export type Instruction_Titles_On_Conflict = {
  constraint: Instruction_Titles_Constraint;
  update_columns: Array<Instruction_Titles_Update_Column>;
  where?: Maybe<Instruction_Titles_Bool_Exp>;
};

/** ordering options when selecting data from "instruction_titles" */
export type Instruction_Titles_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  instructions_aggregate?: Maybe<Instructions_Aggregate_Order_By>;
  instructions_type?: Maybe<Instructions_Types_Order_By>;
  isDeleted?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  product?: Maybe<Product_Order_By>;
  productId?: Maybe<Order_By>;
  typeId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "instruction_titles" */
export type Instruction_Titles_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "instruction_titles" */
export enum Instruction_Titles_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  ProductId = 'productId',
  /** column name */
  TypeId = 'typeId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "instruction_titles" */
export type Instruction_Titles_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  typeId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Instruction_Titles_Stddev_Fields = {
  __typename?: 'instruction_titles_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  typeId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "instruction_titles" */
export type Instruction_Titles_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  typeId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Instruction_Titles_Stddev_Pop_Fields = {
  __typename?: 'instruction_titles_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  typeId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "instruction_titles" */
export type Instruction_Titles_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  typeId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Instruction_Titles_Stddev_Samp_Fields = {
  __typename?: 'instruction_titles_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  typeId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "instruction_titles" */
export type Instruction_Titles_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  typeId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Instruction_Titles_Sum_Fields = {
  __typename?: 'instruction_titles_sum_fields';
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  typeId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "instruction_titles" */
export type Instruction_Titles_Sum_Order_By = {
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  typeId?: Maybe<Order_By>;
};

/** update columns of table "instruction_titles" */
export enum Instruction_Titles_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  ProductId = 'productId',
  /** column name */
  TypeId = 'typeId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Instruction_Titles_Var_Pop_Fields = {
  __typename?: 'instruction_titles_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  typeId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "instruction_titles" */
export type Instruction_Titles_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  typeId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Instruction_Titles_Var_Samp_Fields = {
  __typename?: 'instruction_titles_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  typeId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "instruction_titles" */
export type Instruction_Titles_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  typeId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Instruction_Titles_Variance_Fields = {
  __typename?: 'instruction_titles_variance_fields';
  id?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  typeId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "instruction_titles" */
export type Instruction_Titles_Variance_Order_By = {
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  typeId?: Maybe<Order_By>;
};

/** columns and relationships of "instructions" */
export type Instructions = {
  __typename?: 'instructions';
  createdAt: Scalars['timestamptz'];
  description: Scalars['String'];
  extraData?: Maybe<Scalars['jsonb']>;
  id: Scalars['Int'];
  index: Scalars['Int'];
  instructionTitleId: Scalars['Int'];
  /** An object relationship */
  instruction_title: Instruction_Titles;
  isDeleted: Scalars['Boolean'];
  mediaUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "instructions" */
export type InstructionsExtraDataArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "instructions" */
export type Instructions_Aggregate = {
  __typename?: 'instructions_aggregate';
  aggregate?: Maybe<Instructions_Aggregate_Fields>;
  nodes: Array<Instructions>;
};

/** aggregate fields of "instructions" */
export type Instructions_Aggregate_Fields = {
  __typename?: 'instructions_aggregate_fields';
  avg?: Maybe<Instructions_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Instructions_Max_Fields>;
  min?: Maybe<Instructions_Min_Fields>;
  stddev?: Maybe<Instructions_Stddev_Fields>;
  stddev_pop?: Maybe<Instructions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Instructions_Stddev_Samp_Fields>;
  sum?: Maybe<Instructions_Sum_Fields>;
  var_pop?: Maybe<Instructions_Var_Pop_Fields>;
  var_samp?: Maybe<Instructions_Var_Samp_Fields>;
  variance?: Maybe<Instructions_Variance_Fields>;
};


/** aggregate fields of "instructions" */
export type Instructions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Instructions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "instructions" */
export type Instructions_Aggregate_Order_By = {
  avg?: Maybe<Instructions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Instructions_Max_Order_By>;
  min?: Maybe<Instructions_Min_Order_By>;
  stddev?: Maybe<Instructions_Stddev_Order_By>;
  stddev_pop?: Maybe<Instructions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Instructions_Stddev_Samp_Order_By>;
  sum?: Maybe<Instructions_Sum_Order_By>;
  var_pop?: Maybe<Instructions_Var_Pop_Order_By>;
  var_samp?: Maybe<Instructions_Var_Samp_Order_By>;
  variance?: Maybe<Instructions_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Instructions_Append_Input = {
  extraData?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "instructions" */
export type Instructions_Arr_Rel_Insert_Input = {
  data: Array<Instructions_Insert_Input>;
  on_conflict?: Maybe<Instructions_On_Conflict>;
};

/** aggregate avg on columns */
export type Instructions_Avg_Fields = {
  __typename?: 'instructions_avg_fields';
  id?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  instructionTitleId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "instructions" */
export type Instructions_Avg_Order_By = {
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  instructionTitleId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "instructions". All fields are combined with a logical 'AND'. */
export type Instructions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Instructions_Bool_Exp>>>;
  _not?: Maybe<Instructions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Instructions_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  extraData?: Maybe<Jsonb_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  index?: Maybe<Int_Comparison_Exp>;
  instructionTitleId?: Maybe<Int_Comparison_Exp>;
  instruction_title?: Maybe<Instruction_Titles_Bool_Exp>;
  isDeleted?: Maybe<Boolean_Comparison_Exp>;
  mediaUrl?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "instructions" */
export enum Instructions_Constraint {
  /** unique or primary key constraint */
  InstructionsPkey = 'instructions_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Instructions_Delete_At_Path_Input = {
  extraData?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Instructions_Delete_Elem_Input = {
  extraData?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Instructions_Delete_Key_Input = {
  extraData?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "instructions" */
export type Instructions_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  instructionTitleId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "instructions" */
export type Instructions_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  extraData?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  instructionTitleId?: Maybe<Scalars['Int']>;
  instruction_title?: Maybe<Instruction_Titles_Obj_Rel_Insert_Input>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  mediaUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Instructions_Max_Fields = {
  __typename?: 'instructions_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  instructionTitleId?: Maybe<Scalars['Int']>;
  mediaUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "instructions" */
export type Instructions_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  instructionTitleId?: Maybe<Order_By>;
  mediaUrl?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Instructions_Min_Fields = {
  __typename?: 'instructions_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  instructionTitleId?: Maybe<Scalars['Int']>;
  mediaUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "instructions" */
export type Instructions_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  instructionTitleId?: Maybe<Order_By>;
  mediaUrl?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "instructions" */
export type Instructions_Mutation_Response = {
  __typename?: 'instructions_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Instructions>;
};

/** input type for inserting object relation for remote table "instructions" */
export type Instructions_Obj_Rel_Insert_Input = {
  data: Instructions_Insert_Input;
  on_conflict?: Maybe<Instructions_On_Conflict>;
};

/** on conflict condition type for table "instructions" */
export type Instructions_On_Conflict = {
  constraint: Instructions_Constraint;
  update_columns: Array<Instructions_Update_Column>;
  where?: Maybe<Instructions_Bool_Exp>;
};

/** ordering options when selecting data from "instructions" */
export type Instructions_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  extraData?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  instructionTitleId?: Maybe<Order_By>;
  instruction_title?: Maybe<Instruction_Titles_Order_By>;
  isDeleted?: Maybe<Order_By>;
  mediaUrl?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "instructions" */
export type Instructions_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Instructions_Prepend_Input = {
  extraData?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "instructions" */
export enum Instructions_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  ExtraData = 'extraData',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  InstructionTitleId = 'instructionTitleId',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  MediaUrl = 'mediaUrl',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "instructions" */
export type Instructions_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  extraData?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  instructionTitleId?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  mediaUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Instructions_Stddev_Fields = {
  __typename?: 'instructions_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  instructionTitleId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "instructions" */
export type Instructions_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  instructionTitleId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Instructions_Stddev_Pop_Fields = {
  __typename?: 'instructions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  instructionTitleId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "instructions" */
export type Instructions_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  instructionTitleId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Instructions_Stddev_Samp_Fields = {
  __typename?: 'instructions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  instructionTitleId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "instructions" */
export type Instructions_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  instructionTitleId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Instructions_Sum_Fields = {
  __typename?: 'instructions_sum_fields';
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  instructionTitleId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "instructions" */
export type Instructions_Sum_Order_By = {
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  instructionTitleId?: Maybe<Order_By>;
};

/** columns and relationships of "instructions_types" */
export type Instructions_Types = {
  __typename?: 'instructions_types';
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  /** An array relationship */
  instruction_titles: Array<Instruction_Titles>;
  /** An aggregated array relationship */
  instruction_titles_aggregate: Instruction_Titles_Aggregate;
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "instructions_types" */
export type Instructions_TypesInstruction_TitlesArgs = {
  distinct_on?: Maybe<Array<Instruction_Titles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instruction_Titles_Order_By>>;
  where?: Maybe<Instruction_Titles_Bool_Exp>;
};


/** columns and relationships of "instructions_types" */
export type Instructions_TypesInstruction_Titles_AggregateArgs = {
  distinct_on?: Maybe<Array<Instruction_Titles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instruction_Titles_Order_By>>;
  where?: Maybe<Instruction_Titles_Bool_Exp>;
};

/** aggregated selection of "instructions_types" */
export type Instructions_Types_Aggregate = {
  __typename?: 'instructions_types_aggregate';
  aggregate?: Maybe<Instructions_Types_Aggregate_Fields>;
  nodes: Array<Instructions_Types>;
};

/** aggregate fields of "instructions_types" */
export type Instructions_Types_Aggregate_Fields = {
  __typename?: 'instructions_types_aggregate_fields';
  avg?: Maybe<Instructions_Types_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Instructions_Types_Max_Fields>;
  min?: Maybe<Instructions_Types_Min_Fields>;
  stddev?: Maybe<Instructions_Types_Stddev_Fields>;
  stddev_pop?: Maybe<Instructions_Types_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Instructions_Types_Stddev_Samp_Fields>;
  sum?: Maybe<Instructions_Types_Sum_Fields>;
  var_pop?: Maybe<Instructions_Types_Var_Pop_Fields>;
  var_samp?: Maybe<Instructions_Types_Var_Samp_Fields>;
  variance?: Maybe<Instructions_Types_Variance_Fields>;
};


/** aggregate fields of "instructions_types" */
export type Instructions_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Instructions_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "instructions_types" */
export type Instructions_Types_Aggregate_Order_By = {
  avg?: Maybe<Instructions_Types_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Instructions_Types_Max_Order_By>;
  min?: Maybe<Instructions_Types_Min_Order_By>;
  stddev?: Maybe<Instructions_Types_Stddev_Order_By>;
  stddev_pop?: Maybe<Instructions_Types_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Instructions_Types_Stddev_Samp_Order_By>;
  sum?: Maybe<Instructions_Types_Sum_Order_By>;
  var_pop?: Maybe<Instructions_Types_Var_Pop_Order_By>;
  var_samp?: Maybe<Instructions_Types_Var_Samp_Order_By>;
  variance?: Maybe<Instructions_Types_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "instructions_types" */
export type Instructions_Types_Arr_Rel_Insert_Input = {
  data: Array<Instructions_Types_Insert_Input>;
  on_conflict?: Maybe<Instructions_Types_On_Conflict>;
};

/** aggregate avg on columns */
export type Instructions_Types_Avg_Fields = {
  __typename?: 'instructions_types_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "instructions_types" */
export type Instructions_Types_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "instructions_types". All fields are combined with a logical 'AND'. */
export type Instructions_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Instructions_Types_Bool_Exp>>>;
  _not?: Maybe<Instructions_Types_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Instructions_Types_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  instruction_titles?: Maybe<Instruction_Titles_Bool_Exp>;
  isDeleted?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "instructions_types" */
export enum Instructions_Types_Constraint {
  /** unique or primary key constraint */
  InstructionsTypesPkey = 'instructions_types_pkey'
}

/** input type for incrementing integer column in table "instructions_types" */
export type Instructions_Types_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "instructions_types" */
export type Instructions_Types_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  instruction_titles?: Maybe<Instruction_Titles_Arr_Rel_Insert_Input>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Instructions_Types_Max_Fields = {
  __typename?: 'instructions_types_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "instructions_types" */
export type Instructions_Types_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Instructions_Types_Min_Fields = {
  __typename?: 'instructions_types_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "instructions_types" */
export type Instructions_Types_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "instructions_types" */
export type Instructions_Types_Mutation_Response = {
  __typename?: 'instructions_types_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Instructions_Types>;
};

/** input type for inserting object relation for remote table "instructions_types" */
export type Instructions_Types_Obj_Rel_Insert_Input = {
  data: Instructions_Types_Insert_Input;
  on_conflict?: Maybe<Instructions_Types_On_Conflict>;
};

/** on conflict condition type for table "instructions_types" */
export type Instructions_Types_On_Conflict = {
  constraint: Instructions_Types_Constraint;
  update_columns: Array<Instructions_Types_Update_Column>;
  where?: Maybe<Instructions_Types_Bool_Exp>;
};

/** ordering options when selecting data from "instructions_types" */
export type Instructions_Types_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  instruction_titles_aggregate?: Maybe<Instruction_Titles_Aggregate_Order_By>;
  isDeleted?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "instructions_types" */
export type Instructions_Types_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "instructions_types" */
export enum Instructions_Types_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "instructions_types" */
export type Instructions_Types_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Instructions_Types_Stddev_Fields = {
  __typename?: 'instructions_types_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "instructions_types" */
export type Instructions_Types_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Instructions_Types_Stddev_Pop_Fields = {
  __typename?: 'instructions_types_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "instructions_types" */
export type Instructions_Types_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Instructions_Types_Stddev_Samp_Fields = {
  __typename?: 'instructions_types_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "instructions_types" */
export type Instructions_Types_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Instructions_Types_Sum_Fields = {
  __typename?: 'instructions_types_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "instructions_types" */
export type Instructions_Types_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "instructions_types" */
export enum Instructions_Types_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Instructions_Types_Var_Pop_Fields = {
  __typename?: 'instructions_types_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "instructions_types" */
export type Instructions_Types_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Instructions_Types_Var_Samp_Fields = {
  __typename?: 'instructions_types_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "instructions_types" */
export type Instructions_Types_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Instructions_Types_Variance_Fields = {
  __typename?: 'instructions_types_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "instructions_types" */
export type Instructions_Types_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "instructions" */
export enum Instructions_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  ExtraData = 'extraData',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  InstructionTitleId = 'instructionTitleId',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  MediaUrl = 'mediaUrl',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Instructions_Var_Pop_Fields = {
  __typename?: 'instructions_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  instructionTitleId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "instructions" */
export type Instructions_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  instructionTitleId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Instructions_Var_Samp_Fields = {
  __typename?: 'instructions_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  instructionTitleId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "instructions" */
export type Instructions_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  instructionTitleId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Instructions_Variance_Fields = {
  __typename?: 'instructions_variance_fields';
  id?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  instructionTitleId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "instructions" */
export type Instructions_Variance_Order_By = {
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  instructionTitleId?: Maybe<Order_By>;
};


/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  AdminGoogleSignUp?: Maybe<AdminSignUpResponse>;
  AdminSignUp?: Maybe<AdminSignUpResponse>;
  UserGoogleSignUp?: Maybe<SignUpResponse>;
  UserSignUp?: Maybe<SignUpResponse>;
  createOrder?: Maybe<CreateOrderResponse>;
  createRazorpayOrder?: Maybe<CreateRazorpayOrderResponse>;
  /** delete data from the table: "addresses" */
  delete_addresses?: Maybe<Addresses_Mutation_Response>;
  /** delete single row from the table: "addresses" */
  delete_addresses_by_pk?: Maybe<Addresses>;
  /** delete data from the table: "admins" */
  delete_admins?: Maybe<Admins_Mutation_Response>;
  /** delete single row from the table: "admins" */
  delete_admins_by_pk?: Maybe<Admins>;
  /** delete data from the table: "banner_product" */
  delete_banner_product?: Maybe<Banner_Product_Mutation_Response>;
  /** delete single row from the table: "banner_product" */
  delete_banner_product_by_pk?: Maybe<Banner_Product>;
  /** delete data from the table: "banner_type" */
  delete_banner_type?: Maybe<Banner_Type_Mutation_Response>;
  /** delete single row from the table: "banner_type" */
  delete_banner_type_by_pk?: Maybe<Banner_Type>;
  /** delete data from the table: "banners" */
  delete_banners?: Maybe<Banners_Mutation_Response>;
  /** delete single row from the table: "banners" */
  delete_banners_by_pk?: Maybe<Banners>;
  /** delete data from the table: "blogs" */
  delete_blogs?: Maybe<Blogs_Mutation_Response>;
  /** delete single row from the table: "blogs" */
  delete_blogs_by_pk?: Maybe<Blogs>;
  /** delete data from the table: "cart" */
  delete_cart?: Maybe<Cart_Mutation_Response>;
  /** delete single row from the table: "cart" */
  delete_cart_by_pk?: Maybe<Cart>;
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "countries" */
  delete_countries?: Maybe<Countries_Mutation_Response>;
  /** delete single row from the table: "countries" */
  delete_countries_by_pk?: Maybe<Countries>;
  /** delete data from the table: "coupons" */
  delete_coupons?: Maybe<Coupons_Mutation_Response>;
  /** delete single row from the table: "coupons" */
  delete_coupons_by_pk?: Maybe<Coupons>;
  /** delete data from the table: "deal_of_the_day" */
  delete_deal_of_the_day?: Maybe<Deal_Of_The_Day_Mutation_Response>;
  /** delete single row from the table: "deal_of_the_day" */
  delete_deal_of_the_day_by_pk?: Maybe<Deal_Of_The_Day>;
  /** delete data from the table: "descriptions" */
  delete_descriptions?: Maybe<Descriptions_Mutation_Response>;
  /** delete single row from the table: "descriptions" */
  delete_descriptions_by_pk?: Maybe<Descriptions>;
  /** delete data from the table: "email_list" */
  delete_email_list?: Maybe<Email_List_Mutation_Response>;
  /** delete single row from the table: "email_list" */
  delete_email_list_by_pk?: Maybe<Email_List>;
  /** delete data from the table: "faq_titles" */
  delete_faq_titles?: Maybe<Faq_Titles_Mutation_Response>;
  /** delete single row from the table: "faq_titles" */
  delete_faq_titles_by_pk?: Maybe<Faq_Titles>;
  /** delete data from the table: "faqs" */
  delete_faqs?: Maybe<Faqs_Mutation_Response>;
  /** delete single row from the table: "faqs" */
  delete_faqs_by_pk?: Maybe<Faqs>;
  /** delete data from the table: "instruction_titles" */
  delete_instruction_titles?: Maybe<Instruction_Titles_Mutation_Response>;
  /** delete single row from the table: "instruction_titles" */
  delete_instruction_titles_by_pk?: Maybe<Instruction_Titles>;
  /** delete data from the table: "instructions" */
  delete_instructions?: Maybe<Instructions_Mutation_Response>;
  /** delete single row from the table: "instructions" */
  delete_instructions_by_pk?: Maybe<Instructions>;
  /** delete data from the table: "instructions_types" */
  delete_instructions_types?: Maybe<Instructions_Types_Mutation_Response>;
  /** delete single row from the table: "instructions_types" */
  delete_instructions_types_by_pk?: Maybe<Instructions_Types>;
  /** delete data from the table: "order_product_types" */
  delete_order_product_types?: Maybe<Order_Product_Types_Mutation_Response>;
  /** delete single row from the table: "order_product_types" */
  delete_order_product_types_by_pk?: Maybe<Order_Product_Types>;
  /** delete data from the table: "order_status" */
  delete_order_status?: Maybe<Order_Status_Mutation_Response>;
  /** delete single row from the table: "order_status" */
  delete_order_status_by_pk?: Maybe<Order_Status>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "product" */
  delete_product?: Maybe<Product_Mutation_Response>;
  /** delete single row from the table: "product" */
  delete_product_by_pk?: Maybe<Product>;
  /** delete data from the table: "product_seasons" */
  delete_product_seasons?: Maybe<Product_Seasons_Mutation_Response>;
  /** delete single row from the table: "product_seasons" */
  delete_product_seasons_by_pk?: Maybe<Product_Seasons>;
  /** delete data from the table: "product_type" */
  delete_product_type?: Maybe<Product_Type_Mutation_Response>;
  /** delete single row from the table: "product_type" */
  delete_product_type_by_pk?: Maybe<Product_Type>;
  /** delete data from the table: "recommendations" */
  delete_recommendations?: Maybe<Recommendations_Mutation_Response>;
  /** delete single row from the table: "recommendations" */
  delete_recommendations_by_pk?: Maybe<Recommendations>;
  /** delete data from the table: "seasons" */
  delete_seasons?: Maybe<Seasons_Mutation_Response>;
  /** delete single row from the table: "seasons" */
  delete_seasons_by_pk?: Maybe<Seasons>;
  /** delete data from the table: "store_locations" */
  delete_store_locations?: Maybe<Store_Locations_Mutation_Response>;
  /** delete single row from the table: "store_locations" */
  delete_store_locations_by_pk?: Maybe<Store_Locations>;
  /** delete data from the table: "sub_categories" */
  delete_sub_categories?: Maybe<Sub_Categories_Mutation_Response>;
  /** delete single row from the table: "sub_categories" */
  delete_sub_categories_by_pk?: Maybe<Sub_Categories>;
  /** delete data from the table: "user_ratings" */
  delete_user_ratings?: Maybe<User_Ratings_Mutation_Response>;
  /** delete single row from the table: "user_ratings" */
  delete_user_ratings_by_pk?: Maybe<User_Ratings>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "wishlists" */
  delete_wishlists?: Maybe<Wishlists_Mutation_Response>;
  /** delete single row from the table: "wishlists" */
  delete_wishlists_by_pk?: Maybe<Wishlists>;
  /** insert data into the table: "addresses" */
  insert_addresses?: Maybe<Addresses_Mutation_Response>;
  /** insert a single row into the table: "addresses" */
  insert_addresses_one?: Maybe<Addresses>;
  /** insert data into the table: "admins" */
  insert_admins?: Maybe<Admins_Mutation_Response>;
  /** insert a single row into the table: "admins" */
  insert_admins_one?: Maybe<Admins>;
  /** insert data into the table: "banner_product" */
  insert_banner_product?: Maybe<Banner_Product_Mutation_Response>;
  /** insert a single row into the table: "banner_product" */
  insert_banner_product_one?: Maybe<Banner_Product>;
  /** insert data into the table: "banner_type" */
  insert_banner_type?: Maybe<Banner_Type_Mutation_Response>;
  /** insert a single row into the table: "banner_type" */
  insert_banner_type_one?: Maybe<Banner_Type>;
  /** insert data into the table: "banners" */
  insert_banners?: Maybe<Banners_Mutation_Response>;
  /** insert a single row into the table: "banners" */
  insert_banners_one?: Maybe<Banners>;
  /** insert data into the table: "blogs" */
  insert_blogs?: Maybe<Blogs_Mutation_Response>;
  /** insert a single row into the table: "blogs" */
  insert_blogs_one?: Maybe<Blogs>;
  /** insert data into the table: "cart" */
  insert_cart?: Maybe<Cart_Mutation_Response>;
  /** insert a single row into the table: "cart" */
  insert_cart_one?: Maybe<Cart>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "countries" */
  insert_countries?: Maybe<Countries_Mutation_Response>;
  /** insert a single row into the table: "countries" */
  insert_countries_one?: Maybe<Countries>;
  /** insert data into the table: "coupons" */
  insert_coupons?: Maybe<Coupons_Mutation_Response>;
  /** insert a single row into the table: "coupons" */
  insert_coupons_one?: Maybe<Coupons>;
  /** insert data into the table: "deal_of_the_day" */
  insert_deal_of_the_day?: Maybe<Deal_Of_The_Day_Mutation_Response>;
  /** insert a single row into the table: "deal_of_the_day" */
  insert_deal_of_the_day_one?: Maybe<Deal_Of_The_Day>;
  /** insert data into the table: "descriptions" */
  insert_descriptions?: Maybe<Descriptions_Mutation_Response>;
  /** insert a single row into the table: "descriptions" */
  insert_descriptions_one?: Maybe<Descriptions>;
  /** insert data into the table: "email_list" */
  insert_email_list?: Maybe<Email_List_Mutation_Response>;
  /** insert a single row into the table: "email_list" */
  insert_email_list_one?: Maybe<Email_List>;
  /** insert data into the table: "faq_titles" */
  insert_faq_titles?: Maybe<Faq_Titles_Mutation_Response>;
  /** insert a single row into the table: "faq_titles" */
  insert_faq_titles_one?: Maybe<Faq_Titles>;
  /** insert data into the table: "faqs" */
  insert_faqs?: Maybe<Faqs_Mutation_Response>;
  /** insert a single row into the table: "faqs" */
  insert_faqs_one?: Maybe<Faqs>;
  /** insert data into the table: "instruction_titles" */
  insert_instruction_titles?: Maybe<Instruction_Titles_Mutation_Response>;
  /** insert a single row into the table: "instruction_titles" */
  insert_instruction_titles_one?: Maybe<Instruction_Titles>;
  /** insert data into the table: "instructions" */
  insert_instructions?: Maybe<Instructions_Mutation_Response>;
  /** insert a single row into the table: "instructions" */
  insert_instructions_one?: Maybe<Instructions>;
  /** insert data into the table: "instructions_types" */
  insert_instructions_types?: Maybe<Instructions_Types_Mutation_Response>;
  /** insert a single row into the table: "instructions_types" */
  insert_instructions_types_one?: Maybe<Instructions_Types>;
  /** insert data into the table: "order_product_types" */
  insert_order_product_types?: Maybe<Order_Product_Types_Mutation_Response>;
  /** insert a single row into the table: "order_product_types" */
  insert_order_product_types_one?: Maybe<Order_Product_Types>;
  /** insert data into the table: "order_status" */
  insert_order_status?: Maybe<Order_Status_Mutation_Response>;
  /** insert a single row into the table: "order_status" */
  insert_order_status_one?: Maybe<Order_Status>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "product" */
  insert_product?: Maybe<Product_Mutation_Response>;
  /** insert a single row into the table: "product" */
  insert_product_one?: Maybe<Product>;
  /** insert data into the table: "product_seasons" */
  insert_product_seasons?: Maybe<Product_Seasons_Mutation_Response>;
  /** insert a single row into the table: "product_seasons" */
  insert_product_seasons_one?: Maybe<Product_Seasons>;
  /** insert data into the table: "product_type" */
  insert_product_type?: Maybe<Product_Type_Mutation_Response>;
  /** insert a single row into the table: "product_type" */
  insert_product_type_one?: Maybe<Product_Type>;
  /** insert data into the table: "recommendations" */
  insert_recommendations?: Maybe<Recommendations_Mutation_Response>;
  /** insert a single row into the table: "recommendations" */
  insert_recommendations_one?: Maybe<Recommendations>;
  /** insert data into the table: "seasons" */
  insert_seasons?: Maybe<Seasons_Mutation_Response>;
  /** insert a single row into the table: "seasons" */
  insert_seasons_one?: Maybe<Seasons>;
  /** insert data into the table: "store_locations" */
  insert_store_locations?: Maybe<Store_Locations_Mutation_Response>;
  /** insert a single row into the table: "store_locations" */
  insert_store_locations_one?: Maybe<Store_Locations>;
  /** insert data into the table: "sub_categories" */
  insert_sub_categories?: Maybe<Sub_Categories_Mutation_Response>;
  /** insert a single row into the table: "sub_categories" */
  insert_sub_categories_one?: Maybe<Sub_Categories>;
  /** insert data into the table: "user_ratings" */
  insert_user_ratings?: Maybe<User_Ratings_Mutation_Response>;
  /** insert a single row into the table: "user_ratings" */
  insert_user_ratings_one?: Maybe<User_Ratings>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "wishlists" */
  insert_wishlists?: Maybe<Wishlists_Mutation_Response>;
  /** insert a single row into the table: "wishlists" */
  insert_wishlists_one?: Maybe<Wishlists>;
  /** update data of the table: "addresses" */
  update_addresses?: Maybe<Addresses_Mutation_Response>;
  /** update single row of the table: "addresses" */
  update_addresses_by_pk?: Maybe<Addresses>;
  /** update data of the table: "admins" */
  update_admins?: Maybe<Admins_Mutation_Response>;
  /** update single row of the table: "admins" */
  update_admins_by_pk?: Maybe<Admins>;
  /** update data of the table: "banner_product" */
  update_banner_product?: Maybe<Banner_Product_Mutation_Response>;
  /** update single row of the table: "banner_product" */
  update_banner_product_by_pk?: Maybe<Banner_Product>;
  /** update data of the table: "banner_type" */
  update_banner_type?: Maybe<Banner_Type_Mutation_Response>;
  /** update single row of the table: "banner_type" */
  update_banner_type_by_pk?: Maybe<Banner_Type>;
  /** update data of the table: "banners" */
  update_banners?: Maybe<Banners_Mutation_Response>;
  /** update single row of the table: "banners" */
  update_banners_by_pk?: Maybe<Banners>;
  /** update data of the table: "blogs" */
  update_blogs?: Maybe<Blogs_Mutation_Response>;
  /** update single row of the table: "blogs" */
  update_blogs_by_pk?: Maybe<Blogs>;
  /** update data of the table: "cart" */
  update_cart?: Maybe<Cart_Mutation_Response>;
  /** update single row of the table: "cart" */
  update_cart_by_pk?: Maybe<Cart>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update data of the table: "countries" */
  update_countries?: Maybe<Countries_Mutation_Response>;
  /** update single row of the table: "countries" */
  update_countries_by_pk?: Maybe<Countries>;
  /** update data of the table: "coupons" */
  update_coupons?: Maybe<Coupons_Mutation_Response>;
  /** update single row of the table: "coupons" */
  update_coupons_by_pk?: Maybe<Coupons>;
  /** update data of the table: "deal_of_the_day" */
  update_deal_of_the_day?: Maybe<Deal_Of_The_Day_Mutation_Response>;
  /** update single row of the table: "deal_of_the_day" */
  update_deal_of_the_day_by_pk?: Maybe<Deal_Of_The_Day>;
  /** update data of the table: "descriptions" */
  update_descriptions?: Maybe<Descriptions_Mutation_Response>;
  /** update single row of the table: "descriptions" */
  update_descriptions_by_pk?: Maybe<Descriptions>;
  /** update data of the table: "email_list" */
  update_email_list?: Maybe<Email_List_Mutation_Response>;
  /** update single row of the table: "email_list" */
  update_email_list_by_pk?: Maybe<Email_List>;
  /** update data of the table: "faq_titles" */
  update_faq_titles?: Maybe<Faq_Titles_Mutation_Response>;
  /** update single row of the table: "faq_titles" */
  update_faq_titles_by_pk?: Maybe<Faq_Titles>;
  /** update data of the table: "faqs" */
  update_faqs?: Maybe<Faqs_Mutation_Response>;
  /** update single row of the table: "faqs" */
  update_faqs_by_pk?: Maybe<Faqs>;
  /** update data of the table: "instruction_titles" */
  update_instruction_titles?: Maybe<Instruction_Titles_Mutation_Response>;
  /** update single row of the table: "instruction_titles" */
  update_instruction_titles_by_pk?: Maybe<Instruction_Titles>;
  /** update data of the table: "instructions" */
  update_instructions?: Maybe<Instructions_Mutation_Response>;
  /** update single row of the table: "instructions" */
  update_instructions_by_pk?: Maybe<Instructions>;
  /** update data of the table: "instructions_types" */
  update_instructions_types?: Maybe<Instructions_Types_Mutation_Response>;
  /** update single row of the table: "instructions_types" */
  update_instructions_types_by_pk?: Maybe<Instructions_Types>;
  /** update data of the table: "order_product_types" */
  update_order_product_types?: Maybe<Order_Product_Types_Mutation_Response>;
  /** update single row of the table: "order_product_types" */
  update_order_product_types_by_pk?: Maybe<Order_Product_Types>;
  /** update data of the table: "order_status" */
  update_order_status?: Maybe<Order_Status_Mutation_Response>;
  /** update single row of the table: "order_status" */
  update_order_status_by_pk?: Maybe<Order_Status>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update data of the table: "product" */
  update_product?: Maybe<Product_Mutation_Response>;
  /** update single row of the table: "product" */
  update_product_by_pk?: Maybe<Product>;
  /** update data of the table: "product_seasons" */
  update_product_seasons?: Maybe<Product_Seasons_Mutation_Response>;
  /** update single row of the table: "product_seasons" */
  update_product_seasons_by_pk?: Maybe<Product_Seasons>;
  /** update data of the table: "product_type" */
  update_product_type?: Maybe<Product_Type_Mutation_Response>;
  /** update single row of the table: "product_type" */
  update_product_type_by_pk?: Maybe<Product_Type>;
  /** update data of the table: "recommendations" */
  update_recommendations?: Maybe<Recommendations_Mutation_Response>;
  /** update single row of the table: "recommendations" */
  update_recommendations_by_pk?: Maybe<Recommendations>;
  /** update data of the table: "seasons" */
  update_seasons?: Maybe<Seasons_Mutation_Response>;
  /** update single row of the table: "seasons" */
  update_seasons_by_pk?: Maybe<Seasons>;
  /** update data of the table: "store_locations" */
  update_store_locations?: Maybe<Store_Locations_Mutation_Response>;
  /** update single row of the table: "store_locations" */
  update_store_locations_by_pk?: Maybe<Store_Locations>;
  /** update data of the table: "sub_categories" */
  update_sub_categories?: Maybe<Sub_Categories_Mutation_Response>;
  /** update single row of the table: "sub_categories" */
  update_sub_categories_by_pk?: Maybe<Sub_Categories>;
  /** update data of the table: "user_ratings" */
  update_user_ratings?: Maybe<User_Ratings_Mutation_Response>;
  /** update single row of the table: "user_ratings" */
  update_user_ratings_by_pk?: Maybe<User_Ratings>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "wishlists" */
  update_wishlists?: Maybe<Wishlists_Mutation_Response>;
  /** update single row of the table: "wishlists" */
  update_wishlists_by_pk?: Maybe<Wishlists>;
};


/** mutation root */
export type Mutation_RootAdminGoogleSignUpArgs = {
  input?: Maybe<AdminGoogleSignUpInput>;
};


/** mutation root */
export type Mutation_RootAdminSignUpArgs = {
  input?: Maybe<AdminSignUpInput>;
};


/** mutation root */
export type Mutation_RootUserGoogleSignUpArgs = {
  input?: Maybe<GoogleSignUpInput>;
};


/** mutation root */
export type Mutation_RootUserSignUpArgs = {
  input?: Maybe<SignUpInput>;
};


/** mutation root */
export type Mutation_RootCreateOrderArgs = {
  input?: Maybe<CreateOrderInput>;
};


/** mutation root */
export type Mutation_RootCreateRazorpayOrderArgs = {
  input?: Maybe<CreateRazorpayOrderInput>;
};


/** mutation root */
export type Mutation_RootDelete_AddressesArgs = {
  where: Addresses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Addresses_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_AdminsArgs = {
  where: Admins_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Admins_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Banner_ProductArgs = {
  where: Banner_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Banner_Product_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Banner_TypeArgs = {
  where: Banner_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Banner_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_BannersArgs = {
  where: Banners_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Banners_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_BlogsArgs = {
  where: Blogs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Blogs_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_CartArgs = {
  where: Cart_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cart_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CountriesArgs = {
  where: Countries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Countries_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CouponsArgs = {
  where: Coupons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Coupons_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Deal_Of_The_DayArgs = {
  where: Deal_Of_The_Day_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Deal_Of_The_Day_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_DescriptionsArgs = {
  where: Descriptions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Descriptions_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Email_ListArgs = {
  where: Email_List_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Email_List_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Faq_TitlesArgs = {
  where: Faq_Titles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Faq_Titles_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_FaqsArgs = {
  where: Faqs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Faqs_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Instruction_TitlesArgs = {
  where: Instruction_Titles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Instruction_Titles_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_InstructionsArgs = {
  where: Instructions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Instructions_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Instructions_TypesArgs = {
  where: Instructions_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Instructions_Types_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Order_Product_TypesArgs = {
  where: Order_Product_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Product_Types_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Order_StatusArgs = {
  where: Order_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Status_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_ProductArgs = {
  where: Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Product_SeasonsArgs = {
  where: Product_Seasons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Seasons_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Product_TypeArgs = {
  where: Product_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_RecommendationsArgs = {
  where: Recommendations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Recommendations_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_SeasonsArgs = {
  where: Seasons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Seasons_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Store_LocationsArgs = {
  where: Store_Locations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Store_Locations_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Sub_CategoriesArgs = {
  where: Sub_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sub_Categories_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_User_RatingsArgs = {
  where: User_Ratings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Ratings_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_WishlistsArgs = {
  where: Wishlists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Wishlists_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootInsert_AddressesArgs = {
  objects: Array<Addresses_Insert_Input>;
  on_conflict?: Maybe<Addresses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Addresses_OneArgs = {
  object: Addresses_Insert_Input;
  on_conflict?: Maybe<Addresses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AdminsArgs = {
  objects: Array<Admins_Insert_Input>;
  on_conflict?: Maybe<Admins_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Admins_OneArgs = {
  object: Admins_Insert_Input;
  on_conflict?: Maybe<Admins_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Banner_ProductArgs = {
  objects: Array<Banner_Product_Insert_Input>;
  on_conflict?: Maybe<Banner_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Banner_Product_OneArgs = {
  object: Banner_Product_Insert_Input;
  on_conflict?: Maybe<Banner_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Banner_TypeArgs = {
  objects: Array<Banner_Type_Insert_Input>;
  on_conflict?: Maybe<Banner_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Banner_Type_OneArgs = {
  object: Banner_Type_Insert_Input;
  on_conflict?: Maybe<Banner_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BannersArgs = {
  objects: Array<Banners_Insert_Input>;
  on_conflict?: Maybe<Banners_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Banners_OneArgs = {
  object: Banners_Insert_Input;
  on_conflict?: Maybe<Banners_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BlogsArgs = {
  objects: Array<Blogs_Insert_Input>;
  on_conflict?: Maybe<Blogs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Blogs_OneArgs = {
  object: Blogs_Insert_Input;
  on_conflict?: Maybe<Blogs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CartArgs = {
  objects: Array<Cart_Insert_Input>;
  on_conflict?: Maybe<Cart_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cart_OneArgs = {
  object: Cart_Insert_Input;
  on_conflict?: Maybe<Cart_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: Maybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: Maybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CountriesArgs = {
  objects: Array<Countries_Insert_Input>;
  on_conflict?: Maybe<Countries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Countries_OneArgs = {
  object: Countries_Insert_Input;
  on_conflict?: Maybe<Countries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CouponsArgs = {
  objects: Array<Coupons_Insert_Input>;
  on_conflict?: Maybe<Coupons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Coupons_OneArgs = {
  object: Coupons_Insert_Input;
  on_conflict?: Maybe<Coupons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Deal_Of_The_DayArgs = {
  objects: Array<Deal_Of_The_Day_Insert_Input>;
  on_conflict?: Maybe<Deal_Of_The_Day_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Deal_Of_The_Day_OneArgs = {
  object: Deal_Of_The_Day_Insert_Input;
  on_conflict?: Maybe<Deal_Of_The_Day_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DescriptionsArgs = {
  objects: Array<Descriptions_Insert_Input>;
  on_conflict?: Maybe<Descriptions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Descriptions_OneArgs = {
  object: Descriptions_Insert_Input;
  on_conflict?: Maybe<Descriptions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Email_ListArgs = {
  objects: Array<Email_List_Insert_Input>;
  on_conflict?: Maybe<Email_List_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Email_List_OneArgs = {
  object: Email_List_Insert_Input;
  on_conflict?: Maybe<Email_List_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Faq_TitlesArgs = {
  objects: Array<Faq_Titles_Insert_Input>;
  on_conflict?: Maybe<Faq_Titles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Faq_Titles_OneArgs = {
  object: Faq_Titles_Insert_Input;
  on_conflict?: Maybe<Faq_Titles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FaqsArgs = {
  objects: Array<Faqs_Insert_Input>;
  on_conflict?: Maybe<Faqs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Faqs_OneArgs = {
  object: Faqs_Insert_Input;
  on_conflict?: Maybe<Faqs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Instruction_TitlesArgs = {
  objects: Array<Instruction_Titles_Insert_Input>;
  on_conflict?: Maybe<Instruction_Titles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Instruction_Titles_OneArgs = {
  object: Instruction_Titles_Insert_Input;
  on_conflict?: Maybe<Instruction_Titles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_InstructionsArgs = {
  objects: Array<Instructions_Insert_Input>;
  on_conflict?: Maybe<Instructions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Instructions_OneArgs = {
  object: Instructions_Insert_Input;
  on_conflict?: Maybe<Instructions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Instructions_TypesArgs = {
  objects: Array<Instructions_Types_Insert_Input>;
  on_conflict?: Maybe<Instructions_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Instructions_Types_OneArgs = {
  object: Instructions_Types_Insert_Input;
  on_conflict?: Maybe<Instructions_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Product_TypesArgs = {
  objects: Array<Order_Product_Types_Insert_Input>;
  on_conflict?: Maybe<Order_Product_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Product_Types_OneArgs = {
  object: Order_Product_Types_Insert_Input;
  on_conflict?: Maybe<Order_Product_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_StatusArgs = {
  objects: Array<Order_Status_Insert_Input>;
  on_conflict?: Maybe<Order_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Status_OneArgs = {
  object: Order_Status_Insert_Input;
  on_conflict?: Maybe<Order_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: Maybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: Maybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductArgs = {
  objects: Array<Product_Insert_Input>;
  on_conflict?: Maybe<Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_OneArgs = {
  object: Product_Insert_Input;
  on_conflict?: Maybe<Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_SeasonsArgs = {
  objects: Array<Product_Seasons_Insert_Input>;
  on_conflict?: Maybe<Product_Seasons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Seasons_OneArgs = {
  object: Product_Seasons_Insert_Input;
  on_conflict?: Maybe<Product_Seasons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_TypeArgs = {
  objects: Array<Product_Type_Insert_Input>;
  on_conflict?: Maybe<Product_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Type_OneArgs = {
  object: Product_Type_Insert_Input;
  on_conflict?: Maybe<Product_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RecommendationsArgs = {
  objects: Array<Recommendations_Insert_Input>;
  on_conflict?: Maybe<Recommendations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Recommendations_OneArgs = {
  object: Recommendations_Insert_Input;
  on_conflict?: Maybe<Recommendations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SeasonsArgs = {
  objects: Array<Seasons_Insert_Input>;
  on_conflict?: Maybe<Seasons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Seasons_OneArgs = {
  object: Seasons_Insert_Input;
  on_conflict?: Maybe<Seasons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Store_LocationsArgs = {
  objects: Array<Store_Locations_Insert_Input>;
  on_conflict?: Maybe<Store_Locations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Store_Locations_OneArgs = {
  object: Store_Locations_Insert_Input;
  on_conflict?: Maybe<Store_Locations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sub_CategoriesArgs = {
  objects: Array<Sub_Categories_Insert_Input>;
  on_conflict?: Maybe<Sub_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sub_Categories_OneArgs = {
  object: Sub_Categories_Insert_Input;
  on_conflict?: Maybe<Sub_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_RatingsArgs = {
  objects: Array<User_Ratings_Insert_Input>;
  on_conflict?: Maybe<User_Ratings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Ratings_OneArgs = {
  object: User_Ratings_Insert_Input;
  on_conflict?: Maybe<User_Ratings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WishlistsArgs = {
  objects: Array<Wishlists_Insert_Input>;
  on_conflict?: Maybe<Wishlists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Wishlists_OneArgs = {
  object: Wishlists_Insert_Input;
  on_conflict?: Maybe<Wishlists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AddressesArgs = {
  _inc?: Maybe<Addresses_Inc_Input>;
  _set?: Maybe<Addresses_Set_Input>;
  where: Addresses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Addresses_By_PkArgs = {
  _inc?: Maybe<Addresses_Inc_Input>;
  _set?: Maybe<Addresses_Set_Input>;
  pk_columns: Addresses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_AdminsArgs = {
  _inc?: Maybe<Admins_Inc_Input>;
  _set?: Maybe<Admins_Set_Input>;
  where: Admins_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Admins_By_PkArgs = {
  _inc?: Maybe<Admins_Inc_Input>;
  _set?: Maybe<Admins_Set_Input>;
  pk_columns: Admins_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Banner_ProductArgs = {
  _inc?: Maybe<Banner_Product_Inc_Input>;
  _set?: Maybe<Banner_Product_Set_Input>;
  where: Banner_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Banner_Product_By_PkArgs = {
  _inc?: Maybe<Banner_Product_Inc_Input>;
  _set?: Maybe<Banner_Product_Set_Input>;
  pk_columns: Banner_Product_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Banner_TypeArgs = {
  _inc?: Maybe<Banner_Type_Inc_Input>;
  _set?: Maybe<Banner_Type_Set_Input>;
  where: Banner_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Banner_Type_By_PkArgs = {
  _inc?: Maybe<Banner_Type_Inc_Input>;
  _set?: Maybe<Banner_Type_Set_Input>;
  pk_columns: Banner_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_BannersArgs = {
  _inc?: Maybe<Banners_Inc_Input>;
  _set?: Maybe<Banners_Set_Input>;
  where: Banners_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Banners_By_PkArgs = {
  _inc?: Maybe<Banners_Inc_Input>;
  _set?: Maybe<Banners_Set_Input>;
  pk_columns: Banners_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_BlogsArgs = {
  _inc?: Maybe<Blogs_Inc_Input>;
  _set?: Maybe<Blogs_Set_Input>;
  where: Blogs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Blogs_By_PkArgs = {
  _inc?: Maybe<Blogs_Inc_Input>;
  _set?: Maybe<Blogs_Set_Input>;
  pk_columns: Blogs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CartArgs = {
  _inc?: Maybe<Cart_Inc_Input>;
  _set?: Maybe<Cart_Set_Input>;
  where: Cart_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cart_By_PkArgs = {
  _inc?: Maybe<Cart_Inc_Input>;
  _set?: Maybe<Cart_Set_Input>;
  pk_columns: Cart_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _inc?: Maybe<Categories_Inc_Input>;
  _set?: Maybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _inc?: Maybe<Categories_Inc_Input>;
  _set?: Maybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CountriesArgs = {
  _inc?: Maybe<Countries_Inc_Input>;
  _set?: Maybe<Countries_Set_Input>;
  where: Countries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Countries_By_PkArgs = {
  _inc?: Maybe<Countries_Inc_Input>;
  _set?: Maybe<Countries_Set_Input>;
  pk_columns: Countries_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CouponsArgs = {
  _inc?: Maybe<Coupons_Inc_Input>;
  _set?: Maybe<Coupons_Set_Input>;
  where: Coupons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Coupons_By_PkArgs = {
  _inc?: Maybe<Coupons_Inc_Input>;
  _set?: Maybe<Coupons_Set_Input>;
  pk_columns: Coupons_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Deal_Of_The_DayArgs = {
  _inc?: Maybe<Deal_Of_The_Day_Inc_Input>;
  _set?: Maybe<Deal_Of_The_Day_Set_Input>;
  where: Deal_Of_The_Day_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Deal_Of_The_Day_By_PkArgs = {
  _inc?: Maybe<Deal_Of_The_Day_Inc_Input>;
  _set?: Maybe<Deal_Of_The_Day_Set_Input>;
  pk_columns: Deal_Of_The_Day_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DescriptionsArgs = {
  _inc?: Maybe<Descriptions_Inc_Input>;
  _set?: Maybe<Descriptions_Set_Input>;
  where: Descriptions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Descriptions_By_PkArgs = {
  _inc?: Maybe<Descriptions_Inc_Input>;
  _set?: Maybe<Descriptions_Set_Input>;
  pk_columns: Descriptions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Email_ListArgs = {
  _inc?: Maybe<Email_List_Inc_Input>;
  _set?: Maybe<Email_List_Set_Input>;
  where: Email_List_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Email_List_By_PkArgs = {
  _inc?: Maybe<Email_List_Inc_Input>;
  _set?: Maybe<Email_List_Set_Input>;
  pk_columns: Email_List_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Faq_TitlesArgs = {
  _inc?: Maybe<Faq_Titles_Inc_Input>;
  _set?: Maybe<Faq_Titles_Set_Input>;
  where: Faq_Titles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Faq_Titles_By_PkArgs = {
  _inc?: Maybe<Faq_Titles_Inc_Input>;
  _set?: Maybe<Faq_Titles_Set_Input>;
  pk_columns: Faq_Titles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_FaqsArgs = {
  _inc?: Maybe<Faqs_Inc_Input>;
  _set?: Maybe<Faqs_Set_Input>;
  where: Faqs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Faqs_By_PkArgs = {
  _inc?: Maybe<Faqs_Inc_Input>;
  _set?: Maybe<Faqs_Set_Input>;
  pk_columns: Faqs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Instruction_TitlesArgs = {
  _inc?: Maybe<Instruction_Titles_Inc_Input>;
  _set?: Maybe<Instruction_Titles_Set_Input>;
  where: Instruction_Titles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Instruction_Titles_By_PkArgs = {
  _inc?: Maybe<Instruction_Titles_Inc_Input>;
  _set?: Maybe<Instruction_Titles_Set_Input>;
  pk_columns: Instruction_Titles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_InstructionsArgs = {
  _append?: Maybe<Instructions_Append_Input>;
  _delete_at_path?: Maybe<Instructions_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Instructions_Delete_Elem_Input>;
  _delete_key?: Maybe<Instructions_Delete_Key_Input>;
  _inc?: Maybe<Instructions_Inc_Input>;
  _prepend?: Maybe<Instructions_Prepend_Input>;
  _set?: Maybe<Instructions_Set_Input>;
  where: Instructions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Instructions_By_PkArgs = {
  _append?: Maybe<Instructions_Append_Input>;
  _delete_at_path?: Maybe<Instructions_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Instructions_Delete_Elem_Input>;
  _delete_key?: Maybe<Instructions_Delete_Key_Input>;
  _inc?: Maybe<Instructions_Inc_Input>;
  _prepend?: Maybe<Instructions_Prepend_Input>;
  _set?: Maybe<Instructions_Set_Input>;
  pk_columns: Instructions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Instructions_TypesArgs = {
  _inc?: Maybe<Instructions_Types_Inc_Input>;
  _set?: Maybe<Instructions_Types_Set_Input>;
  where: Instructions_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Instructions_Types_By_PkArgs = {
  _inc?: Maybe<Instructions_Types_Inc_Input>;
  _set?: Maybe<Instructions_Types_Set_Input>;
  pk_columns: Instructions_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Product_TypesArgs = {
  _inc?: Maybe<Order_Product_Types_Inc_Input>;
  _set?: Maybe<Order_Product_Types_Set_Input>;
  where: Order_Product_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Product_Types_By_PkArgs = {
  _inc?: Maybe<Order_Product_Types_Inc_Input>;
  _set?: Maybe<Order_Product_Types_Set_Input>;
  pk_columns: Order_Product_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_StatusArgs = {
  _inc?: Maybe<Order_Status_Inc_Input>;
  _set?: Maybe<Order_Status_Set_Input>;
  where: Order_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Status_By_PkArgs = {
  _inc?: Maybe<Order_Status_Inc_Input>;
  _set?: Maybe<Order_Status_Set_Input>;
  pk_columns: Order_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _inc?: Maybe<Orders_Inc_Input>;
  _set?: Maybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _inc?: Maybe<Orders_Inc_Input>;
  _set?: Maybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProductArgs = {
  _inc?: Maybe<Product_Inc_Input>;
  _set?: Maybe<Product_Set_Input>;
  where: Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_By_PkArgs = {
  _inc?: Maybe<Product_Inc_Input>;
  _set?: Maybe<Product_Set_Input>;
  pk_columns: Product_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_SeasonsArgs = {
  _inc?: Maybe<Product_Seasons_Inc_Input>;
  _set?: Maybe<Product_Seasons_Set_Input>;
  where: Product_Seasons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Seasons_By_PkArgs = {
  _inc?: Maybe<Product_Seasons_Inc_Input>;
  _set?: Maybe<Product_Seasons_Set_Input>;
  pk_columns: Product_Seasons_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_TypeArgs = {
  _inc?: Maybe<Product_Type_Inc_Input>;
  _set?: Maybe<Product_Type_Set_Input>;
  where: Product_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Type_By_PkArgs = {
  _inc?: Maybe<Product_Type_Inc_Input>;
  _set?: Maybe<Product_Type_Set_Input>;
  pk_columns: Product_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RecommendationsArgs = {
  _inc?: Maybe<Recommendations_Inc_Input>;
  _set?: Maybe<Recommendations_Set_Input>;
  where: Recommendations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Recommendations_By_PkArgs = {
  _inc?: Maybe<Recommendations_Inc_Input>;
  _set?: Maybe<Recommendations_Set_Input>;
  pk_columns: Recommendations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SeasonsArgs = {
  _inc?: Maybe<Seasons_Inc_Input>;
  _set?: Maybe<Seasons_Set_Input>;
  where: Seasons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Seasons_By_PkArgs = {
  _inc?: Maybe<Seasons_Inc_Input>;
  _set?: Maybe<Seasons_Set_Input>;
  pk_columns: Seasons_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Store_LocationsArgs = {
  _inc?: Maybe<Store_Locations_Inc_Input>;
  _set?: Maybe<Store_Locations_Set_Input>;
  where: Store_Locations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Store_Locations_By_PkArgs = {
  _inc?: Maybe<Store_Locations_Inc_Input>;
  _set?: Maybe<Store_Locations_Set_Input>;
  pk_columns: Store_Locations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Sub_CategoriesArgs = {
  _inc?: Maybe<Sub_Categories_Inc_Input>;
  _set?: Maybe<Sub_Categories_Set_Input>;
  where: Sub_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sub_Categories_By_PkArgs = {
  _inc?: Maybe<Sub_Categories_Inc_Input>;
  _set?: Maybe<Sub_Categories_Set_Input>;
  pk_columns: Sub_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_RatingsArgs = {
  _inc?: Maybe<User_Ratings_Inc_Input>;
  _set?: Maybe<User_Ratings_Set_Input>;
  where: User_Ratings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Ratings_By_PkArgs = {
  _inc?: Maybe<User_Ratings_Inc_Input>;
  _set?: Maybe<User_Ratings_Set_Input>;
  pk_columns: User_Ratings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_WishlistsArgs = {
  _inc?: Maybe<Wishlists_Inc_Input>;
  _set?: Maybe<Wishlists_Set_Input>;
  where: Wishlists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Wishlists_By_PkArgs = {
  _inc?: Maybe<Wishlists_Inc_Input>;
  _set?: Maybe<Wishlists_Set_Input>;
  pk_columns: Wishlists_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/**
 * pivot table for orders and productType
 *
 *
 * columns and relationships of "order_product_types"
 */
export type Order_Product_Types = {
  __typename?: 'order_product_types';
  count: Scalars['Int'];
  createdAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['bigint'];
  /** An object relationship */
  order: Orders;
  orderId: Scalars['bigint'];
  productTypeId: Scalars['Int'];
  /** An object relationship */
  product_type: Product_Type;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "order_product_types" */
export type Order_Product_Types_Aggregate = {
  __typename?: 'order_product_types_aggregate';
  aggregate?: Maybe<Order_Product_Types_Aggregate_Fields>;
  nodes: Array<Order_Product_Types>;
};

/** aggregate fields of "order_product_types" */
export type Order_Product_Types_Aggregate_Fields = {
  __typename?: 'order_product_types_aggregate_fields';
  avg?: Maybe<Order_Product_Types_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Order_Product_Types_Max_Fields>;
  min?: Maybe<Order_Product_Types_Min_Fields>;
  stddev?: Maybe<Order_Product_Types_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Product_Types_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Product_Types_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Product_Types_Sum_Fields>;
  var_pop?: Maybe<Order_Product_Types_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Product_Types_Var_Samp_Fields>;
  variance?: Maybe<Order_Product_Types_Variance_Fields>;
};


/** aggregate fields of "order_product_types" */
export type Order_Product_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Order_Product_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order_product_types" */
export type Order_Product_Types_Aggregate_Order_By = {
  avg?: Maybe<Order_Product_Types_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Order_Product_Types_Max_Order_By>;
  min?: Maybe<Order_Product_Types_Min_Order_By>;
  stddev?: Maybe<Order_Product_Types_Stddev_Order_By>;
  stddev_pop?: Maybe<Order_Product_Types_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Order_Product_Types_Stddev_Samp_Order_By>;
  sum?: Maybe<Order_Product_Types_Sum_Order_By>;
  var_pop?: Maybe<Order_Product_Types_Var_Pop_Order_By>;
  var_samp?: Maybe<Order_Product_Types_Var_Samp_Order_By>;
  variance?: Maybe<Order_Product_Types_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order_product_types" */
export type Order_Product_Types_Arr_Rel_Insert_Input = {
  data: Array<Order_Product_Types_Insert_Input>;
  on_conflict?: Maybe<Order_Product_Types_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Product_Types_Avg_Fields = {
  __typename?: 'order_product_types_avg_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  orderId?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order_product_types" */
export type Order_Product_Types_Avg_Order_By = {
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  orderId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order_product_types". All fields are combined with a logical 'AND'. */
export type Order_Product_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Order_Product_Types_Bool_Exp>>>;
  _not?: Maybe<Order_Product_Types_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Order_Product_Types_Bool_Exp>>>;
  count?: Maybe<Int_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  order?: Maybe<Orders_Bool_Exp>;
  orderId?: Maybe<Bigint_Comparison_Exp>;
  productTypeId?: Maybe<Int_Comparison_Exp>;
  product_type?: Maybe<Product_Type_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_product_types" */
export enum Order_Product_Types_Constraint {
  /** unique or primary key constraint */
  OrderProductTypesPkey = 'order_product_types_pkey'
}

/** input type for incrementing integer column in table "order_product_types" */
export type Order_Product_Types_Inc_Input = {
  count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  orderId?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "order_product_types" */
export type Order_Product_Types_Insert_Input = {
  count?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  order?: Maybe<Orders_Obj_Rel_Insert_Input>;
  orderId?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  product_type?: Maybe<Product_Type_Obj_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Order_Product_Types_Max_Fields = {
  __typename?: 'order_product_types_max_fields';
  count?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  orderId?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "order_product_types" */
export type Order_Product_Types_Max_Order_By = {
  count?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  orderId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Product_Types_Min_Fields = {
  __typename?: 'order_product_types_min_fields';
  count?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  orderId?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "order_product_types" */
export type Order_Product_Types_Min_Order_By = {
  count?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  orderId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "order_product_types" */
export type Order_Product_Types_Mutation_Response = {
  __typename?: 'order_product_types_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Order_Product_Types>;
};

/** input type for inserting object relation for remote table "order_product_types" */
export type Order_Product_Types_Obj_Rel_Insert_Input = {
  data: Order_Product_Types_Insert_Input;
  on_conflict?: Maybe<Order_Product_Types_On_Conflict>;
};

/** on conflict condition type for table "order_product_types" */
export type Order_Product_Types_On_Conflict = {
  constraint: Order_Product_Types_Constraint;
  update_columns: Array<Order_Product_Types_Update_Column>;
  where?: Maybe<Order_Product_Types_Bool_Exp>;
};

/** ordering options when selecting data from "order_product_types" */
export type Order_Product_Types_Order_By = {
  count?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Orders_Order_By>;
  orderId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  product_type?: Maybe<Product_Type_Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "order_product_types" */
export type Order_Product_Types_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "order_product_types" */
export enum Order_Product_Types_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'orderId',
  /** column name */
  ProductTypeId = 'productTypeId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "order_product_types" */
export type Order_Product_Types_Set_Input = {
  count?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  orderId?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Order_Product_Types_Stddev_Fields = {
  __typename?: 'order_product_types_stddev_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  orderId?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order_product_types" */
export type Order_Product_Types_Stddev_Order_By = {
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  orderId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Product_Types_Stddev_Pop_Fields = {
  __typename?: 'order_product_types_stddev_pop_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  orderId?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order_product_types" */
export type Order_Product_Types_Stddev_Pop_Order_By = {
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  orderId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Product_Types_Stddev_Samp_Fields = {
  __typename?: 'order_product_types_stddev_samp_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  orderId?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order_product_types" */
export type Order_Product_Types_Stddev_Samp_Order_By = {
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  orderId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Order_Product_Types_Sum_Fields = {
  __typename?: 'order_product_types_sum_fields';
  count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  orderId?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "order_product_types" */
export type Order_Product_Types_Sum_Order_By = {
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  orderId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
};

/** update columns of table "order_product_types" */
export enum Order_Product_Types_Update_Column {
  /** column name */
  Count = 'count',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'orderId',
  /** column name */
  ProductTypeId = 'productTypeId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Order_Product_Types_Var_Pop_Fields = {
  __typename?: 'order_product_types_var_pop_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  orderId?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order_product_types" */
export type Order_Product_Types_Var_Pop_Order_By = {
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  orderId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Product_Types_Var_Samp_Fields = {
  __typename?: 'order_product_types_var_samp_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  orderId?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order_product_types" */
export type Order_Product_Types_Var_Samp_Order_By = {
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  orderId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Product_Types_Variance_Fields = {
  __typename?: 'order_product_types_variance_fields';
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  orderId?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order_product_types" */
export type Order_Product_Types_Variance_Order_By = {
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  orderId?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
};

/** columns and relationships of "order_status" */
export type Order_Status = {
  __typename?: 'order_status';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description: Scalars['String'];
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregated array relationship */
  orders_aggregate: Orders_Aggregate;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "order_status" */
export type Order_StatusOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** columns and relationships of "order_status" */
export type Order_StatusOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** aggregated selection of "order_status" */
export type Order_Status_Aggregate = {
  __typename?: 'order_status_aggregate';
  aggregate?: Maybe<Order_Status_Aggregate_Fields>;
  nodes: Array<Order_Status>;
};

/** aggregate fields of "order_status" */
export type Order_Status_Aggregate_Fields = {
  __typename?: 'order_status_aggregate_fields';
  avg?: Maybe<Order_Status_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Order_Status_Max_Fields>;
  min?: Maybe<Order_Status_Min_Fields>;
  stddev?: Maybe<Order_Status_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Status_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Status_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Status_Sum_Fields>;
  var_pop?: Maybe<Order_Status_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Status_Var_Samp_Fields>;
  variance?: Maybe<Order_Status_Variance_Fields>;
};


/** aggregate fields of "order_status" */
export type Order_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Order_Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order_status" */
export type Order_Status_Aggregate_Order_By = {
  avg?: Maybe<Order_Status_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Order_Status_Max_Order_By>;
  min?: Maybe<Order_Status_Min_Order_By>;
  stddev?: Maybe<Order_Status_Stddev_Order_By>;
  stddev_pop?: Maybe<Order_Status_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Order_Status_Stddev_Samp_Order_By>;
  sum?: Maybe<Order_Status_Sum_Order_By>;
  var_pop?: Maybe<Order_Status_Var_Pop_Order_By>;
  var_samp?: Maybe<Order_Status_Var_Samp_Order_By>;
  variance?: Maybe<Order_Status_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order_status" */
export type Order_Status_Arr_Rel_Insert_Input = {
  data: Array<Order_Status_Insert_Input>;
  on_conflict?: Maybe<Order_Status_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Status_Avg_Fields = {
  __typename?: 'order_status_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order_status" */
export type Order_Status_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order_status". All fields are combined with a logical 'AND'. */
export type Order_Status_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Order_Status_Bool_Exp>>>;
  _not?: Maybe<Order_Status_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Order_Status_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  isDeleted?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  orders?: Maybe<Orders_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_status" */
export enum Order_Status_Constraint {
  /** unique or primary key constraint */
  OrderStatusPkey = 'orderStatus_pkey'
}

/** input type for incrementing integer column in table "order_status" */
export type Order_Status_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "order_status" */
export type Order_Status_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  orders?: Maybe<Orders_Arr_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Order_Status_Max_Fields = {
  __typename?: 'order_status_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "order_status" */
export type Order_Status_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Status_Min_Fields = {
  __typename?: 'order_status_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "order_status" */
export type Order_Status_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "order_status" */
export type Order_Status_Mutation_Response = {
  __typename?: 'order_status_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Order_Status>;
};

/** input type for inserting object relation for remote table "order_status" */
export type Order_Status_Obj_Rel_Insert_Input = {
  data: Order_Status_Insert_Input;
  on_conflict?: Maybe<Order_Status_On_Conflict>;
};

/** on conflict condition type for table "order_status" */
export type Order_Status_On_Conflict = {
  constraint: Order_Status_Constraint;
  update_columns: Array<Order_Status_Update_Column>;
  where?: Maybe<Order_Status_Bool_Exp>;
};

/** ordering options when selecting data from "order_status" */
export type Order_Status_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isDeleted?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  orders_aggregate?: Maybe<Orders_Aggregate_Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "order_status" */
export type Order_Status_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "order_status" */
export enum Order_Status_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "order_status" */
export type Order_Status_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Order_Status_Stddev_Fields = {
  __typename?: 'order_status_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order_status" */
export type Order_Status_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Status_Stddev_Pop_Fields = {
  __typename?: 'order_status_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order_status" */
export type Order_Status_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Status_Stddev_Samp_Fields = {
  __typename?: 'order_status_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order_status" */
export type Order_Status_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Order_Status_Sum_Fields = {
  __typename?: 'order_status_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "order_status" */
export type Order_Status_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "order_status" */
export enum Order_Status_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Order_Status_Var_Pop_Fields = {
  __typename?: 'order_status_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order_status" */
export type Order_Status_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Status_Var_Samp_Fields = {
  __typename?: 'order_status_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order_status" */
export type Order_Status_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Status_Variance_Fields = {
  __typename?: 'order_status_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order_status" */
export type Order_Status_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  /** An object relationship */
  address: Addresses;
  addressId: Scalars['bigint'];
  createdAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['bigint'];
  isDeleted: Scalars['Boolean'];
  /** An array relationship */
  order_product_types: Array<Order_Product_Types>;
  /** An aggregated array relationship */
  order_product_types_aggregate: Order_Product_Types_Aggregate;
  /** An object relationship */
  order_status: Order_Status;
  razorPayOrderId?: Maybe<Scalars['String']>;
  razorPayPaymentId?: Maybe<Scalars['String']>;
  razorPaySignature?: Maybe<Scalars['String']>;
  shippingFee?: Maybe<Scalars['Int']>;
  statusId: Scalars['Int'];
  totalAmount: Scalars['Int'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  userId: Scalars['bigint'];
};


/** columns and relationships of "orders" */
export type OrdersOrder_Product_TypesArgs = {
  distinct_on?: Maybe<Array<Order_Product_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Product_Types_Order_By>>;
  where?: Maybe<Order_Product_Types_Bool_Exp>;
};


/** columns and relationships of "orders" */
export type OrdersOrder_Product_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Product_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Product_Types_Order_By>>;
  where?: Maybe<Order_Product_Types_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  avg?: Maybe<Orders_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
  stddev?: Maybe<Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Sum_Fields>;
  var_pop?: Maybe<Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Var_Samp_Fields>;
  variance?: Maybe<Orders_Variance_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Orders_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "orders" */
export type Orders_Aggregate_Order_By = {
  avg?: Maybe<Orders_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Orders_Max_Order_By>;
  min?: Maybe<Orders_Min_Order_By>;
  stddev?: Maybe<Orders_Stddev_Order_By>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Order_By>;
  sum?: Maybe<Orders_Sum_Order_By>;
  var_pop?: Maybe<Orders_Var_Pop_Order_By>;
  var_samp?: Maybe<Orders_Var_Samp_Order_By>;
  variance?: Maybe<Orders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "orders" */
export type Orders_Arr_Rel_Insert_Input = {
  data: Array<Orders_Insert_Input>;
  on_conflict?: Maybe<Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: 'orders_avg_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  shippingFee?: Maybe<Scalars['Float']>;
  statusId?: Maybe<Scalars['Float']>;
  totalAmount?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "orders" */
export type Orders_Avg_Order_By = {
  addressId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shippingFee?: Maybe<Order_By>;
  statusId?: Maybe<Order_By>;
  totalAmount?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Orders_Bool_Exp>>>;
  _not?: Maybe<Orders_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Orders_Bool_Exp>>>;
  address?: Maybe<Addresses_Bool_Exp>;
  addressId?: Maybe<Bigint_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  isDeleted?: Maybe<Boolean_Comparison_Exp>;
  order_product_types?: Maybe<Order_Product_Types_Bool_Exp>;
  order_status?: Maybe<Order_Status_Bool_Exp>;
  razorPayOrderId?: Maybe<String_Comparison_Exp>;
  razorPayPaymentId?: Maybe<String_Comparison_Exp>;
  razorPaySignature?: Maybe<String_Comparison_Exp>;
  shippingFee?: Maybe<Int_Comparison_Exp>;
  statusId?: Maybe<Int_Comparison_Exp>;
  totalAmount?: Maybe<Int_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  userId?: Maybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint */
  OrdersPkey = 'orders_pkey'
}

/** input type for incrementing integer column in table "orders" */
export type Orders_Inc_Input = {
  addressId?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  shippingFee?: Maybe<Scalars['Int']>;
  statusId?: Maybe<Scalars['Int']>;
  totalAmount?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  address?: Maybe<Addresses_Obj_Rel_Insert_Input>;
  addressId?: Maybe<Scalars['bigint']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  order_product_types?: Maybe<Order_Product_Types_Arr_Rel_Insert_Input>;
  order_status?: Maybe<Order_Status_Obj_Rel_Insert_Input>;
  razorPayOrderId?: Maybe<Scalars['String']>;
  razorPayPaymentId?: Maybe<Scalars['String']>;
  razorPaySignature?: Maybe<Scalars['String']>;
  shippingFee?: Maybe<Scalars['Int']>;
  statusId?: Maybe<Scalars['Int']>;
  totalAmount?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  addressId?: Maybe<Scalars['bigint']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  razorPayOrderId?: Maybe<Scalars['String']>;
  razorPayPaymentId?: Maybe<Scalars['String']>;
  razorPaySignature?: Maybe<Scalars['String']>;
  shippingFee?: Maybe<Scalars['Int']>;
  statusId?: Maybe<Scalars['Int']>;
  totalAmount?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  addressId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  razorPayOrderId?: Maybe<Order_By>;
  razorPayPaymentId?: Maybe<Order_By>;
  razorPaySignature?: Maybe<Order_By>;
  shippingFee?: Maybe<Order_By>;
  statusId?: Maybe<Order_By>;
  totalAmount?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  addressId?: Maybe<Scalars['bigint']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  razorPayOrderId?: Maybe<Scalars['String']>;
  razorPayPaymentId?: Maybe<Scalars['String']>;
  razorPaySignature?: Maybe<Scalars['String']>;
  shippingFee?: Maybe<Scalars['Int']>;
  statusId?: Maybe<Scalars['Int']>;
  totalAmount?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  addressId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  razorPayOrderId?: Maybe<Order_By>;
  razorPayPaymentId?: Maybe<Order_By>;
  razorPaySignature?: Maybe<Order_By>;
  shippingFee?: Maybe<Order_By>;
  statusId?: Maybe<Order_By>;
  totalAmount?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Orders>;
};

/** input type for inserting object relation for remote table "orders" */
export type Orders_Obj_Rel_Insert_Input = {
  data: Orders_Insert_Input;
  on_conflict?: Maybe<Orders_On_Conflict>;
};

/** on conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns: Array<Orders_Update_Column>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** ordering options when selecting data from "orders" */
export type Orders_Order_By = {
  address?: Maybe<Addresses_Order_By>;
  addressId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isDeleted?: Maybe<Order_By>;
  order_product_types_aggregate?: Maybe<Order_Product_Types_Aggregate_Order_By>;
  order_status?: Maybe<Order_Status_Order_By>;
  razorPayOrderId?: Maybe<Order_By>;
  razorPayPaymentId?: Maybe<Order_By>;
  razorPaySignature?: Maybe<Order_By>;
  shippingFee?: Maybe<Order_By>;
  statusId?: Maybe<Order_By>;
  totalAmount?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "orders" */
export type Orders_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  AddressId = 'addressId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  RazorPayOrderId = 'razorPayOrderId',
  /** column name */
  RazorPayPaymentId = 'razorPayPaymentId',
  /** column name */
  RazorPaySignature = 'razorPaySignature',
  /** column name */
  ShippingFee = 'shippingFee',
  /** column name */
  StatusId = 'statusId',
  /** column name */
  TotalAmount = 'totalAmount',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  addressId?: Maybe<Scalars['bigint']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  razorPayOrderId?: Maybe<Scalars['String']>;
  razorPayPaymentId?: Maybe<Scalars['String']>;
  razorPaySignature?: Maybe<Scalars['String']>;
  shippingFee?: Maybe<Scalars['Int']>;
  statusId?: Maybe<Scalars['Int']>;
  totalAmount?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: 'orders_stddev_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  shippingFee?: Maybe<Scalars['Float']>;
  statusId?: Maybe<Scalars['Float']>;
  totalAmount?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "orders" */
export type Orders_Stddev_Order_By = {
  addressId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shippingFee?: Maybe<Order_By>;
  statusId?: Maybe<Order_By>;
  totalAmount?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: 'orders_stddev_pop_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  shippingFee?: Maybe<Scalars['Float']>;
  statusId?: Maybe<Scalars['Float']>;
  totalAmount?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "orders" */
export type Orders_Stddev_Pop_Order_By = {
  addressId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shippingFee?: Maybe<Order_By>;
  statusId?: Maybe<Order_By>;
  totalAmount?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: 'orders_stddev_samp_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  shippingFee?: Maybe<Scalars['Float']>;
  statusId?: Maybe<Scalars['Float']>;
  totalAmount?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "orders" */
export type Orders_Stddev_Samp_Order_By = {
  addressId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shippingFee?: Maybe<Order_By>;
  statusId?: Maybe<Order_By>;
  totalAmount?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: 'orders_sum_fields';
  addressId?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  shippingFee?: Maybe<Scalars['Int']>;
  statusId?: Maybe<Scalars['Int']>;
  totalAmount?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "orders" */
export type Orders_Sum_Order_By = {
  addressId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shippingFee?: Maybe<Order_By>;
  statusId?: Maybe<Order_By>;
  totalAmount?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  AddressId = 'addressId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  RazorPayOrderId = 'razorPayOrderId',
  /** column name */
  RazorPayPaymentId = 'razorPayPaymentId',
  /** column name */
  RazorPaySignature = 'razorPaySignature',
  /** column name */
  ShippingFee = 'shippingFee',
  /** column name */
  StatusId = 'statusId',
  /** column name */
  TotalAmount = 'totalAmount',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: 'orders_var_pop_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  shippingFee?: Maybe<Scalars['Float']>;
  statusId?: Maybe<Scalars['Float']>;
  totalAmount?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "orders" */
export type Orders_Var_Pop_Order_By = {
  addressId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shippingFee?: Maybe<Order_By>;
  statusId?: Maybe<Order_By>;
  totalAmount?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: 'orders_var_samp_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  shippingFee?: Maybe<Scalars['Float']>;
  statusId?: Maybe<Scalars['Float']>;
  totalAmount?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "orders" */
export type Orders_Var_Samp_Order_By = {
  addressId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shippingFee?: Maybe<Order_By>;
  statusId?: Maybe<Order_By>;
  totalAmount?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: 'orders_variance_fields';
  addressId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  shippingFee?: Maybe<Scalars['Float']>;
  statusId?: Maybe<Scalars['Float']>;
  totalAmount?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "orders" */
export type Orders_Variance_Order_By = {
  addressId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shippingFee?: Maybe<Order_By>;
  statusId?: Maybe<Order_By>;
  totalAmount?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** columns and relationships of "product" */
export type Product = {
  __typename?: 'product';
  /** An array relationship */
  bannerProducts: Array<Banner_Product>;
  /** An aggregated array relationship */
  bannerProducts_aggregate: Banner_Product_Aggregate;
  coverImageUrl: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  /** An array relationship */
  deal_of_the_days: Array<Deal_Of_The_Day>;
  /** An aggregated array relationship */
  deal_of_the_days_aggregate: Deal_Of_The_Day_Aggregate;
  description: Scalars['String'];
  hoverImageUrl: Scalars['String'];
  id: Scalars['bigint'];
  imageUrl: Scalars['String'];
  /** An array relationship */
  instruction_titles: Array<Instruction_Titles>;
  /** An aggregated array relationship */
  instruction_titles_aggregate: Instruction_Titles_Aggregate;
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  nutritiveValue: Scalars['String'];
  /** An array relationship */
  productTypes: Array<Product_Type>;
  /** An aggregated array relationship */
  productTypes_aggregate: Product_Type_Aggregate;
  /** An array relationship */
  recommendations: Array<Recommendations>;
  /** An aggregated array relationship */
  recommendations_aggregate: Recommendations_Aggregate;
  subCategoryId: Scalars['Int'];
  /** An object relationship */
  sub_category: Sub_Categories;
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "product" */
export type ProductBannerProductsArgs = {
  distinct_on?: Maybe<Array<Banner_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Banner_Product_Order_By>>;
  where?: Maybe<Banner_Product_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductBannerProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Banner_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Banner_Product_Order_By>>;
  where?: Maybe<Banner_Product_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductDeal_Of_The_DaysArgs = {
  distinct_on?: Maybe<Array<Deal_Of_The_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Deal_Of_The_Day_Order_By>>;
  where?: Maybe<Deal_Of_The_Day_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductDeal_Of_The_Days_AggregateArgs = {
  distinct_on?: Maybe<Array<Deal_Of_The_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Deal_Of_The_Day_Order_By>>;
  where?: Maybe<Deal_Of_The_Day_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductInstruction_TitlesArgs = {
  distinct_on?: Maybe<Array<Instruction_Titles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instruction_Titles_Order_By>>;
  where?: Maybe<Instruction_Titles_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductInstruction_Titles_AggregateArgs = {
  distinct_on?: Maybe<Array<Instruction_Titles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instruction_Titles_Order_By>>;
  where?: Maybe<Instruction_Titles_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductProductTypesArgs = {
  distinct_on?: Maybe<Array<Product_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Type_Order_By>>;
  where?: Maybe<Product_Type_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductProductTypes_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Type_Order_By>>;
  where?: Maybe<Product_Type_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductRecommendationsArgs = {
  distinct_on?: Maybe<Array<Recommendations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recommendations_Order_By>>;
  where?: Maybe<Recommendations_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductRecommendations_AggregateArgs = {
  distinct_on?: Maybe<Array<Recommendations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recommendations_Order_By>>;
  where?: Maybe<Recommendations_Bool_Exp>;
};

/** aggregated selection of "product" */
export type Product_Aggregate = {
  __typename?: 'product_aggregate';
  aggregate?: Maybe<Product_Aggregate_Fields>;
  nodes: Array<Product>;
};

/** aggregate fields of "product" */
export type Product_Aggregate_Fields = {
  __typename?: 'product_aggregate_fields';
  avg?: Maybe<Product_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Product_Max_Fields>;
  min?: Maybe<Product_Min_Fields>;
  stddev?: Maybe<Product_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Sum_Fields>;
  var_pop?: Maybe<Product_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Var_Samp_Fields>;
  variance?: Maybe<Product_Variance_Fields>;
};


/** aggregate fields of "product" */
export type Product_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product" */
export type Product_Aggregate_Order_By = {
  avg?: Maybe<Product_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Product_Max_Order_By>;
  min?: Maybe<Product_Min_Order_By>;
  stddev?: Maybe<Product_Stddev_Order_By>;
  stddev_pop?: Maybe<Product_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Product_Stddev_Samp_Order_By>;
  sum?: Maybe<Product_Sum_Order_By>;
  var_pop?: Maybe<Product_Var_Pop_Order_By>;
  var_samp?: Maybe<Product_Var_Samp_Order_By>;
  variance?: Maybe<Product_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "product" */
export type Product_Arr_Rel_Insert_Input = {
  data: Array<Product_Insert_Input>;
  on_conflict?: Maybe<Product_On_Conflict>;
};

/** aggregate avg on columns */
export type Product_Avg_Fields = {
  __typename?: 'product_avg_fields';
  id?: Maybe<Scalars['Float']>;
  subCategoryId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "product" */
export type Product_Avg_Order_By = {
  id?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product". All fields are combined with a logical 'AND'. */
export type Product_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Product_Bool_Exp>>>;
  _not?: Maybe<Product_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Product_Bool_Exp>>>;
  bannerProducts?: Maybe<Banner_Product_Bool_Exp>;
  coverImageUrl?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  deal_of_the_days?: Maybe<Deal_Of_The_Day_Bool_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  hoverImageUrl?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  imageUrl?: Maybe<String_Comparison_Exp>;
  instruction_titles?: Maybe<Instruction_Titles_Bool_Exp>;
  isDeleted?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  nutritiveValue?: Maybe<String_Comparison_Exp>;
  productTypes?: Maybe<Product_Type_Bool_Exp>;
  recommendations?: Maybe<Recommendations_Bool_Exp>;
  subCategoryId?: Maybe<Int_Comparison_Exp>;
  sub_category?: Maybe<Sub_Categories_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "product" */
export enum Product_Constraint {
  /** unique or primary key constraint */
  ProductPkey = 'product_pkey'
}

/** input type for incrementing integer column in table "product" */
export type Product_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
  subCategoryId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "product" */
export type Product_Insert_Input = {
  bannerProducts?: Maybe<Banner_Product_Arr_Rel_Insert_Input>;
  coverImageUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deal_of_the_days?: Maybe<Deal_Of_The_Day_Arr_Rel_Insert_Input>;
  description?: Maybe<Scalars['String']>;
  hoverImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  imageUrl?: Maybe<Scalars['String']>;
  instruction_titles?: Maybe<Instruction_Titles_Arr_Rel_Insert_Input>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  nutritiveValue?: Maybe<Scalars['String']>;
  productTypes?: Maybe<Product_Type_Arr_Rel_Insert_Input>;
  recommendations?: Maybe<Recommendations_Arr_Rel_Insert_Input>;
  subCategoryId?: Maybe<Scalars['Int']>;
  sub_category?: Maybe<Sub_Categories_Obj_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Product_Max_Fields = {
  __typename?: 'product_max_fields';
  coverImageUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  hoverImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  imageUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nutritiveValue?: Maybe<Scalars['String']>;
  subCategoryId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "product" */
export type Product_Max_Order_By = {
  coverImageUrl?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  hoverImageUrl?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageUrl?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  nutritiveValue?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Min_Fields = {
  __typename?: 'product_min_fields';
  coverImageUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  hoverImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  imageUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nutritiveValue?: Maybe<Scalars['String']>;
  subCategoryId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "product" */
export type Product_Min_Order_By = {
  coverImageUrl?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  hoverImageUrl?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageUrl?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  nutritiveValue?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "product" */
export type Product_Mutation_Response = {
  __typename?: 'product_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Product>;
};

/** input type for inserting object relation for remote table "product" */
export type Product_Obj_Rel_Insert_Input = {
  data: Product_Insert_Input;
  on_conflict?: Maybe<Product_On_Conflict>;
};

/** on conflict condition type for table "product" */
export type Product_On_Conflict = {
  constraint: Product_Constraint;
  update_columns: Array<Product_Update_Column>;
  where?: Maybe<Product_Bool_Exp>;
};

/** ordering options when selecting data from "product" */
export type Product_Order_By = {
  bannerProducts_aggregate?: Maybe<Banner_Product_Aggregate_Order_By>;
  coverImageUrl?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  deal_of_the_days_aggregate?: Maybe<Deal_Of_The_Day_Aggregate_Order_By>;
  description?: Maybe<Order_By>;
  hoverImageUrl?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageUrl?: Maybe<Order_By>;
  instruction_titles_aggregate?: Maybe<Instruction_Titles_Aggregate_Order_By>;
  isDeleted?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  nutritiveValue?: Maybe<Order_By>;
  productTypes_aggregate?: Maybe<Product_Type_Aggregate_Order_By>;
  recommendations_aggregate?: Maybe<Recommendations_Aggregate_Order_By>;
  subCategoryId?: Maybe<Order_By>;
  sub_category?: Maybe<Sub_Categories_Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "product" */
export type Product_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** columns and relationships of "product_seasons" */
export type Product_Seasons = {
  __typename?: 'product_seasons';
  createdAt: Scalars['timestamptz'];
  id: Scalars['bigint'];
  productTypeId: Scalars['Int'];
  /** An object relationship */
  product_type: Product_Type;
  /** An object relationship */
  season: Seasons;
  seasonId: Scalars['bigint'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "product_seasons" */
export type Product_Seasons_Aggregate = {
  __typename?: 'product_seasons_aggregate';
  aggregate?: Maybe<Product_Seasons_Aggregate_Fields>;
  nodes: Array<Product_Seasons>;
};

/** aggregate fields of "product_seasons" */
export type Product_Seasons_Aggregate_Fields = {
  __typename?: 'product_seasons_aggregate_fields';
  avg?: Maybe<Product_Seasons_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Product_Seasons_Max_Fields>;
  min?: Maybe<Product_Seasons_Min_Fields>;
  stddev?: Maybe<Product_Seasons_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Seasons_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Seasons_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Seasons_Sum_Fields>;
  var_pop?: Maybe<Product_Seasons_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Seasons_Var_Samp_Fields>;
  variance?: Maybe<Product_Seasons_Variance_Fields>;
};


/** aggregate fields of "product_seasons" */
export type Product_Seasons_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_Seasons_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product_seasons" */
export type Product_Seasons_Aggregate_Order_By = {
  avg?: Maybe<Product_Seasons_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Product_Seasons_Max_Order_By>;
  min?: Maybe<Product_Seasons_Min_Order_By>;
  stddev?: Maybe<Product_Seasons_Stddev_Order_By>;
  stddev_pop?: Maybe<Product_Seasons_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Product_Seasons_Stddev_Samp_Order_By>;
  sum?: Maybe<Product_Seasons_Sum_Order_By>;
  var_pop?: Maybe<Product_Seasons_Var_Pop_Order_By>;
  var_samp?: Maybe<Product_Seasons_Var_Samp_Order_By>;
  variance?: Maybe<Product_Seasons_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "product_seasons" */
export type Product_Seasons_Arr_Rel_Insert_Input = {
  data: Array<Product_Seasons_Insert_Input>;
  on_conflict?: Maybe<Product_Seasons_On_Conflict>;
};

/** aggregate avg on columns */
export type Product_Seasons_Avg_Fields = {
  __typename?: 'product_seasons_avg_fields';
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  seasonId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "product_seasons" */
export type Product_Seasons_Avg_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  seasonId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product_seasons". All fields are combined with a logical 'AND'. */
export type Product_Seasons_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Product_Seasons_Bool_Exp>>>;
  _not?: Maybe<Product_Seasons_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Product_Seasons_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  productTypeId?: Maybe<Int_Comparison_Exp>;
  product_type?: Maybe<Product_Type_Bool_Exp>;
  season?: Maybe<Seasons_Bool_Exp>;
  seasonId?: Maybe<Bigint_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_seasons" */
export enum Product_Seasons_Constraint {
  /** unique or primary key constraint */
  ProductSeasonsPkey = 'product_seasons_pkey'
}

/** input type for incrementing integer column in table "product_seasons" */
export type Product_Seasons_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  seasonId?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "product_seasons" */
export type Product_Seasons_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  product_type?: Maybe<Product_Type_Obj_Rel_Insert_Input>;
  season?: Maybe<Seasons_Obj_Rel_Insert_Input>;
  seasonId?: Maybe<Scalars['bigint']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Product_Seasons_Max_Fields = {
  __typename?: 'product_seasons_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  seasonId?: Maybe<Scalars['bigint']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "product_seasons" */
export type Product_Seasons_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  seasonId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Seasons_Min_Fields = {
  __typename?: 'product_seasons_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  seasonId?: Maybe<Scalars['bigint']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "product_seasons" */
export type Product_Seasons_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  seasonId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "product_seasons" */
export type Product_Seasons_Mutation_Response = {
  __typename?: 'product_seasons_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Product_Seasons>;
};

/** input type for inserting object relation for remote table "product_seasons" */
export type Product_Seasons_Obj_Rel_Insert_Input = {
  data: Product_Seasons_Insert_Input;
  on_conflict?: Maybe<Product_Seasons_On_Conflict>;
};

/** on conflict condition type for table "product_seasons" */
export type Product_Seasons_On_Conflict = {
  constraint: Product_Seasons_Constraint;
  update_columns: Array<Product_Seasons_Update_Column>;
  where?: Maybe<Product_Seasons_Bool_Exp>;
};

/** ordering options when selecting data from "product_seasons" */
export type Product_Seasons_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  product_type?: Maybe<Product_Type_Order_By>;
  season?: Maybe<Seasons_Order_By>;
  seasonId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "product_seasons" */
export type Product_Seasons_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "product_seasons" */
export enum Product_Seasons_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProductTypeId = 'productTypeId',
  /** column name */
  SeasonId = 'seasonId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "product_seasons" */
export type Product_Seasons_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  seasonId?: Maybe<Scalars['bigint']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Product_Seasons_Stddev_Fields = {
  __typename?: 'product_seasons_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  seasonId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "product_seasons" */
export type Product_Seasons_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  seasonId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Seasons_Stddev_Pop_Fields = {
  __typename?: 'product_seasons_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  seasonId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "product_seasons" */
export type Product_Seasons_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  seasonId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Seasons_Stddev_Samp_Fields = {
  __typename?: 'product_seasons_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  seasonId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "product_seasons" */
export type Product_Seasons_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  seasonId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Product_Seasons_Sum_Fields = {
  __typename?: 'product_seasons_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  seasonId?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "product_seasons" */
export type Product_Seasons_Sum_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  seasonId?: Maybe<Order_By>;
};

/** update columns of table "product_seasons" */
export enum Product_Seasons_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProductTypeId = 'productTypeId',
  /** column name */
  SeasonId = 'seasonId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Product_Seasons_Var_Pop_Fields = {
  __typename?: 'product_seasons_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  seasonId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "product_seasons" */
export type Product_Seasons_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  seasonId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Seasons_Var_Samp_Fields = {
  __typename?: 'product_seasons_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  seasonId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "product_seasons" */
export type Product_Seasons_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  seasonId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Seasons_Variance_Fields = {
  __typename?: 'product_seasons_variance_fields';
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  seasonId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "product_seasons" */
export type Product_Seasons_Variance_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  seasonId?: Maybe<Order_By>;
};

/** select columns of table "product" */
export enum Product_Select_Column {
  /** column name */
  CoverImageUrl = 'coverImageUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  HoverImageUrl = 'hoverImageUrl',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageUrl',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  NutritiveValue = 'nutritiveValue',
  /** column name */
  SubCategoryId = 'subCategoryId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "product" */
export type Product_Set_Input = {
  coverImageUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  hoverImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  imageUrl?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  nutritiveValue?: Maybe<Scalars['String']>;
  subCategoryId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Product_Stddev_Fields = {
  __typename?: 'product_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  subCategoryId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "product" */
export type Product_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Stddev_Pop_Fields = {
  __typename?: 'product_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  subCategoryId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "product" */
export type Product_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Stddev_Samp_Fields = {
  __typename?: 'product_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  subCategoryId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "product" */
export type Product_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Product_Sum_Fields = {
  __typename?: 'product_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  subCategoryId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "product" */
export type Product_Sum_Order_By = {
  id?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
};

/** columns and relationships of "product_type" */
export type Product_Type = {
  __typename?: 'product_type';
  SKU: Scalars['String'];
  /** An array relationship */
  banner_products: Array<Banner_Product>;
  /** An aggregated array relationship */
  banner_products_aggregate: Banner_Product_Aggregate;
  /** An array relationship */
  carts: Array<Cart>;
  /** An aggregated array relationship */
  carts_aggregate: Cart_Aggregate;
  createdAt: Scalars['timestamptz'];
  /** An array relationship */
  deal_of_the_days: Array<Deal_Of_The_Day>;
  /** An aggregated array relationship */
  deal_of_the_days_aggregate: Deal_Of_The_Day_Aggregate;
  /** An array relationship */
  descriptions: Array<Descriptions>;
  /** An aggregated array relationship */
  descriptions_aggregate: Descriptions_Aggregate;
  discountedPrice?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  imageUrl?: Maybe<Scalars['String']>;
  isDeleted: Scalars['Boolean'];
  isFeatured: Scalars['Boolean'];
  name: Scalars['String'];
  /** An array relationship */
  order_product_types: Array<Order_Product_Types>;
  /** An aggregated array relationship */
  order_product_types_aggregate: Order_Product_Types_Aggregate;
  originalPrice?: Maybe<Scalars['Int']>;
  plant?: Maybe<Scalars['String']>;
  /** An object relationship */
  product: Product;
  productId: Scalars['Int'];
  /** An array relationship */
  product_seasons: Array<Product_Seasons>;
  /** An aggregated array relationship */
  product_seasons_aggregate: Product_Seasons_Aggregate;
  /** An array relationship */
  recommendations: Array<Recommendations>;
  /** An aggregated array relationship */
  recommendations_aggregate: Recommendations_Aggregate;
  recommendedCoverImage?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  /** An object relationship */
  season?: Maybe<Seasons>;
  seasonId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  user_ratings: Array<User_Ratings>;
  /** An aggregated array relationship */
  user_ratings_aggregate: User_Ratings_Aggregate;
  /** An array relationship */
  wishlists: Array<Wishlists>;
  /** An aggregated array relationship */
  wishlists_aggregate: Wishlists_Aggregate;
};


/** columns and relationships of "product_type" */
export type Product_TypeBanner_ProductsArgs = {
  distinct_on?: Maybe<Array<Banner_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Banner_Product_Order_By>>;
  where?: Maybe<Banner_Product_Bool_Exp>;
};


/** columns and relationships of "product_type" */
export type Product_TypeBanner_Products_AggregateArgs = {
  distinct_on?: Maybe<Array<Banner_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Banner_Product_Order_By>>;
  where?: Maybe<Banner_Product_Bool_Exp>;
};


/** columns and relationships of "product_type" */
export type Product_TypeCartsArgs = {
  distinct_on?: Maybe<Array<Cart_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cart_Order_By>>;
  where?: Maybe<Cart_Bool_Exp>;
};


/** columns and relationships of "product_type" */
export type Product_TypeCarts_AggregateArgs = {
  distinct_on?: Maybe<Array<Cart_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cart_Order_By>>;
  where?: Maybe<Cart_Bool_Exp>;
};


/** columns and relationships of "product_type" */
export type Product_TypeDeal_Of_The_DaysArgs = {
  distinct_on?: Maybe<Array<Deal_Of_The_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Deal_Of_The_Day_Order_By>>;
  where?: Maybe<Deal_Of_The_Day_Bool_Exp>;
};


/** columns and relationships of "product_type" */
export type Product_TypeDeal_Of_The_Days_AggregateArgs = {
  distinct_on?: Maybe<Array<Deal_Of_The_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Deal_Of_The_Day_Order_By>>;
  where?: Maybe<Deal_Of_The_Day_Bool_Exp>;
};


/** columns and relationships of "product_type" */
export type Product_TypeDescriptionsArgs = {
  distinct_on?: Maybe<Array<Descriptions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Descriptions_Order_By>>;
  where?: Maybe<Descriptions_Bool_Exp>;
};


/** columns and relationships of "product_type" */
export type Product_TypeDescriptions_AggregateArgs = {
  distinct_on?: Maybe<Array<Descriptions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Descriptions_Order_By>>;
  where?: Maybe<Descriptions_Bool_Exp>;
};


/** columns and relationships of "product_type" */
export type Product_TypeOrder_Product_TypesArgs = {
  distinct_on?: Maybe<Array<Order_Product_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Product_Types_Order_By>>;
  where?: Maybe<Order_Product_Types_Bool_Exp>;
};


/** columns and relationships of "product_type" */
export type Product_TypeOrder_Product_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Product_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Product_Types_Order_By>>;
  where?: Maybe<Order_Product_Types_Bool_Exp>;
};


/** columns and relationships of "product_type" */
export type Product_TypeProduct_SeasonsArgs = {
  distinct_on?: Maybe<Array<Product_Seasons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Seasons_Order_By>>;
  where?: Maybe<Product_Seasons_Bool_Exp>;
};


/** columns and relationships of "product_type" */
export type Product_TypeProduct_Seasons_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Seasons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Seasons_Order_By>>;
  where?: Maybe<Product_Seasons_Bool_Exp>;
};


/** columns and relationships of "product_type" */
export type Product_TypeRecommendationsArgs = {
  distinct_on?: Maybe<Array<Recommendations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recommendations_Order_By>>;
  where?: Maybe<Recommendations_Bool_Exp>;
};


/** columns and relationships of "product_type" */
export type Product_TypeRecommendations_AggregateArgs = {
  distinct_on?: Maybe<Array<Recommendations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recommendations_Order_By>>;
  where?: Maybe<Recommendations_Bool_Exp>;
};


/** columns and relationships of "product_type" */
export type Product_TypeUser_RatingsArgs = {
  distinct_on?: Maybe<Array<User_Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Ratings_Order_By>>;
  where?: Maybe<User_Ratings_Bool_Exp>;
};


/** columns and relationships of "product_type" */
export type Product_TypeUser_Ratings_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Ratings_Order_By>>;
  where?: Maybe<User_Ratings_Bool_Exp>;
};


/** columns and relationships of "product_type" */
export type Product_TypeWishlistsArgs = {
  distinct_on?: Maybe<Array<Wishlists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Wishlists_Order_By>>;
  where?: Maybe<Wishlists_Bool_Exp>;
};


/** columns and relationships of "product_type" */
export type Product_TypeWishlists_AggregateArgs = {
  distinct_on?: Maybe<Array<Wishlists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Wishlists_Order_By>>;
  where?: Maybe<Wishlists_Bool_Exp>;
};

/** aggregated selection of "product_type" */
export type Product_Type_Aggregate = {
  __typename?: 'product_type_aggregate';
  aggregate?: Maybe<Product_Type_Aggregate_Fields>;
  nodes: Array<Product_Type>;
};

/** aggregate fields of "product_type" */
export type Product_Type_Aggregate_Fields = {
  __typename?: 'product_type_aggregate_fields';
  avg?: Maybe<Product_Type_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Product_Type_Max_Fields>;
  min?: Maybe<Product_Type_Min_Fields>;
  stddev?: Maybe<Product_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Type_Sum_Fields>;
  var_pop?: Maybe<Product_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Type_Var_Samp_Fields>;
  variance?: Maybe<Product_Type_Variance_Fields>;
};


/** aggregate fields of "product_type" */
export type Product_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Product_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product_type" */
export type Product_Type_Aggregate_Order_By = {
  avg?: Maybe<Product_Type_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Product_Type_Max_Order_By>;
  min?: Maybe<Product_Type_Min_Order_By>;
  stddev?: Maybe<Product_Type_Stddev_Order_By>;
  stddev_pop?: Maybe<Product_Type_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Product_Type_Stddev_Samp_Order_By>;
  sum?: Maybe<Product_Type_Sum_Order_By>;
  var_pop?: Maybe<Product_Type_Var_Pop_Order_By>;
  var_samp?: Maybe<Product_Type_Var_Samp_Order_By>;
  variance?: Maybe<Product_Type_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "product_type" */
export type Product_Type_Arr_Rel_Insert_Input = {
  data: Array<Product_Type_Insert_Input>;
  on_conflict?: Maybe<Product_Type_On_Conflict>;
};

/** aggregate avg on columns */
export type Product_Type_Avg_Fields = {
  __typename?: 'product_type_avg_fields';
  discountedPrice?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  originalPrice?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  seasonId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "product_type" */
export type Product_Type_Avg_Order_By = {
  discountedPrice?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  originalPrice?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  seasonId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product_type". All fields are combined with a logical 'AND'. */
export type Product_Type_Bool_Exp = {
  SKU?: Maybe<String_Comparison_Exp>;
  _and?: Maybe<Array<Maybe<Product_Type_Bool_Exp>>>;
  _not?: Maybe<Product_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Product_Type_Bool_Exp>>>;
  banner_products?: Maybe<Banner_Product_Bool_Exp>;
  carts?: Maybe<Cart_Bool_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  deal_of_the_days?: Maybe<Deal_Of_The_Day_Bool_Exp>;
  descriptions?: Maybe<Descriptions_Bool_Exp>;
  discountedPrice?: Maybe<Int_Comparison_Exp>;
  duration?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  imageUrl?: Maybe<String_Comparison_Exp>;
  isDeleted?: Maybe<Boolean_Comparison_Exp>;
  isFeatured?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  order_product_types?: Maybe<Order_Product_Types_Bool_Exp>;
  originalPrice?: Maybe<Int_Comparison_Exp>;
  plant?: Maybe<String_Comparison_Exp>;
  product?: Maybe<Product_Bool_Exp>;
  productId?: Maybe<Int_Comparison_Exp>;
  product_seasons?: Maybe<Product_Seasons_Bool_Exp>;
  recommendations?: Maybe<Recommendations_Bool_Exp>;
  recommendedCoverImage?: Maybe<String_Comparison_Exp>;
  remark?: Maybe<String_Comparison_Exp>;
  season?: Maybe<Seasons_Bool_Exp>;
  seasonId?: Maybe<Int_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  user_ratings?: Maybe<User_Ratings_Bool_Exp>;
  wishlists?: Maybe<Wishlists_Bool_Exp>;
};

/** unique or primary key constraints on table "product_type" */
export enum Product_Type_Constraint {
  /** unique or primary key constraint */
  ProductTypePkey = 'productType_pkey'
}

/** input type for incrementing integer column in table "product_type" */
export type Product_Type_Inc_Input = {
  discountedPrice?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  originalPrice?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  seasonId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "product_type" */
export type Product_Type_Insert_Input = {
  SKU?: Maybe<Scalars['String']>;
  banner_products?: Maybe<Banner_Product_Arr_Rel_Insert_Input>;
  carts?: Maybe<Cart_Arr_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  deal_of_the_days?: Maybe<Deal_Of_The_Day_Arr_Rel_Insert_Input>;
  descriptions?: Maybe<Descriptions_Arr_Rel_Insert_Input>;
  discountedPrice?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  imageUrl?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  order_product_types?: Maybe<Order_Product_Types_Arr_Rel_Insert_Input>;
  originalPrice?: Maybe<Scalars['Int']>;
  plant?: Maybe<Scalars['String']>;
  product?: Maybe<Product_Obj_Rel_Insert_Input>;
  productId?: Maybe<Scalars['Int']>;
  product_seasons?: Maybe<Product_Seasons_Arr_Rel_Insert_Input>;
  recommendations?: Maybe<Recommendations_Arr_Rel_Insert_Input>;
  recommendedCoverImage?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  season?: Maybe<Seasons_Obj_Rel_Insert_Input>;
  seasonId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user_ratings?: Maybe<User_Ratings_Arr_Rel_Insert_Input>;
  wishlists?: Maybe<Wishlists_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Product_Type_Max_Fields = {
  __typename?: 'product_type_max_fields';
  SKU?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  discountedPrice?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  imageUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  originalPrice?: Maybe<Scalars['Int']>;
  plant?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  recommendedCoverImage?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  seasonId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "product_type" */
export type Product_Type_Max_Order_By = {
  SKU?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  discountedPrice?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageUrl?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  originalPrice?: Maybe<Order_By>;
  plant?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  recommendedCoverImage?: Maybe<Order_By>;
  remark?: Maybe<Order_By>;
  seasonId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Type_Min_Fields = {
  __typename?: 'product_type_min_fields';
  SKU?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  discountedPrice?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  imageUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  originalPrice?: Maybe<Scalars['Int']>;
  plant?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  recommendedCoverImage?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  seasonId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "product_type" */
export type Product_Type_Min_Order_By = {
  SKU?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  discountedPrice?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageUrl?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  originalPrice?: Maybe<Order_By>;
  plant?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  recommendedCoverImage?: Maybe<Order_By>;
  remark?: Maybe<Order_By>;
  seasonId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "product_type" */
export type Product_Type_Mutation_Response = {
  __typename?: 'product_type_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Product_Type>;
};

/** input type for inserting object relation for remote table "product_type" */
export type Product_Type_Obj_Rel_Insert_Input = {
  data: Product_Type_Insert_Input;
  on_conflict?: Maybe<Product_Type_On_Conflict>;
};

/** on conflict condition type for table "product_type" */
export type Product_Type_On_Conflict = {
  constraint: Product_Type_Constraint;
  update_columns: Array<Product_Type_Update_Column>;
  where?: Maybe<Product_Type_Bool_Exp>;
};

/** ordering options when selecting data from "product_type" */
export type Product_Type_Order_By = {
  SKU?: Maybe<Order_By>;
  banner_products_aggregate?: Maybe<Banner_Product_Aggregate_Order_By>;
  carts_aggregate?: Maybe<Cart_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  deal_of_the_days_aggregate?: Maybe<Deal_Of_The_Day_Aggregate_Order_By>;
  descriptions_aggregate?: Maybe<Descriptions_Aggregate_Order_By>;
  discountedPrice?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageUrl?: Maybe<Order_By>;
  isDeleted?: Maybe<Order_By>;
  isFeatured?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  order_product_types_aggregate?: Maybe<Order_Product_Types_Aggregate_Order_By>;
  originalPrice?: Maybe<Order_By>;
  plant?: Maybe<Order_By>;
  product?: Maybe<Product_Order_By>;
  productId?: Maybe<Order_By>;
  product_seasons_aggregate?: Maybe<Product_Seasons_Aggregate_Order_By>;
  recommendations_aggregate?: Maybe<Recommendations_Aggregate_Order_By>;
  recommendedCoverImage?: Maybe<Order_By>;
  remark?: Maybe<Order_By>;
  season?: Maybe<Seasons_Order_By>;
  seasonId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  user_ratings_aggregate?: Maybe<User_Ratings_Aggregate_Order_By>;
  wishlists_aggregate?: Maybe<Wishlists_Aggregate_Order_By>;
};

/** primary key columns input for table: "product_type" */
export type Product_Type_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "product_type" */
export enum Product_Type_Select_Column {
  /** column name */
  Sku = 'SKU',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DiscountedPrice = 'discountedPrice',
  /** column name */
  Duration = 'duration',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageUrl',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  IsFeatured = 'isFeatured',
  /** column name */
  Name = 'name',
  /** column name */
  OriginalPrice = 'originalPrice',
  /** column name */
  Plant = 'plant',
  /** column name */
  ProductId = 'productId',
  /** column name */
  RecommendedCoverImage = 'recommendedCoverImage',
  /** column name */
  Remark = 'remark',
  /** column name */
  SeasonId = 'seasonId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "product_type" */
export type Product_Type_Set_Input = {
  SKU?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  discountedPrice?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  imageUrl?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  originalPrice?: Maybe<Scalars['Int']>;
  plant?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  recommendedCoverImage?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  seasonId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Product_Type_Stddev_Fields = {
  __typename?: 'product_type_stddev_fields';
  discountedPrice?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  originalPrice?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  seasonId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "product_type" */
export type Product_Type_Stddev_Order_By = {
  discountedPrice?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  originalPrice?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  seasonId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Type_Stddev_Pop_Fields = {
  __typename?: 'product_type_stddev_pop_fields';
  discountedPrice?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  originalPrice?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  seasonId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "product_type" */
export type Product_Type_Stddev_Pop_Order_By = {
  discountedPrice?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  originalPrice?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  seasonId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Type_Stddev_Samp_Fields = {
  __typename?: 'product_type_stddev_samp_fields';
  discountedPrice?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  originalPrice?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  seasonId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "product_type" */
export type Product_Type_Stddev_Samp_Order_By = {
  discountedPrice?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  originalPrice?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  seasonId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Product_Type_Sum_Fields = {
  __typename?: 'product_type_sum_fields';
  discountedPrice?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  originalPrice?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  seasonId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "product_type" */
export type Product_Type_Sum_Order_By = {
  discountedPrice?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  originalPrice?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  seasonId?: Maybe<Order_By>;
};

/** update columns of table "product_type" */
export enum Product_Type_Update_Column {
  /** column name */
  Sku = 'SKU',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DiscountedPrice = 'discountedPrice',
  /** column name */
  Duration = 'duration',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageUrl',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  IsFeatured = 'isFeatured',
  /** column name */
  Name = 'name',
  /** column name */
  OriginalPrice = 'originalPrice',
  /** column name */
  Plant = 'plant',
  /** column name */
  ProductId = 'productId',
  /** column name */
  RecommendedCoverImage = 'recommendedCoverImage',
  /** column name */
  Remark = 'remark',
  /** column name */
  SeasonId = 'seasonId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Product_Type_Var_Pop_Fields = {
  __typename?: 'product_type_var_pop_fields';
  discountedPrice?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  originalPrice?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  seasonId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "product_type" */
export type Product_Type_Var_Pop_Order_By = {
  discountedPrice?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  originalPrice?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  seasonId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Type_Var_Samp_Fields = {
  __typename?: 'product_type_var_samp_fields';
  discountedPrice?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  originalPrice?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  seasonId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "product_type" */
export type Product_Type_Var_Samp_Order_By = {
  discountedPrice?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  originalPrice?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  seasonId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Type_Variance_Fields = {
  __typename?: 'product_type_variance_fields';
  discountedPrice?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  originalPrice?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  seasonId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "product_type" */
export type Product_Type_Variance_Order_By = {
  discountedPrice?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  originalPrice?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  seasonId?: Maybe<Order_By>;
};

/** update columns of table "product" */
export enum Product_Update_Column {
  /** column name */
  CoverImageUrl = 'coverImageUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  HoverImageUrl = 'hoverImageUrl',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageUrl',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  NutritiveValue = 'nutritiveValue',
  /** column name */
  SubCategoryId = 'subCategoryId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Product_Var_Pop_Fields = {
  __typename?: 'product_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  subCategoryId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "product" */
export type Product_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Var_Samp_Fields = {
  __typename?: 'product_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  subCategoryId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "product" */
export type Product_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Variance_Fields = {
  __typename?: 'product_variance_fields';
  id?: Maybe<Scalars['Float']>;
  subCategoryId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "product" */
export type Product_Variance_Order_By = {
  id?: Maybe<Order_By>;
  subCategoryId?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  _dummy: Scalars['String'];
  /** fetch data from the table: "addresses" */
  addresses: Array<Addresses>;
  /** fetch aggregated fields from the table: "addresses" */
  addresses_aggregate: Addresses_Aggregate;
  /** fetch data from the table: "addresses" using primary key columns */
  addresses_by_pk?: Maybe<Addresses>;
  /** fetch data from the table: "admins" */
  admins: Array<Admins>;
  /** fetch aggregated fields from the table: "admins" */
  admins_aggregate: Admins_Aggregate;
  /** fetch data from the table: "admins" using primary key columns */
  admins_by_pk?: Maybe<Admins>;
  /** fetch data from the table: "banner_product" */
  banner_product: Array<Banner_Product>;
  /** fetch aggregated fields from the table: "banner_product" */
  banner_product_aggregate: Banner_Product_Aggregate;
  /** fetch data from the table: "banner_product" using primary key columns */
  banner_product_by_pk?: Maybe<Banner_Product>;
  /** fetch data from the table: "banner_type" */
  banner_type: Array<Banner_Type>;
  /** fetch aggregated fields from the table: "banner_type" */
  banner_type_aggregate: Banner_Type_Aggregate;
  /** fetch data from the table: "banner_type" using primary key columns */
  banner_type_by_pk?: Maybe<Banner_Type>;
  /** fetch data from the table: "banners" */
  banners: Array<Banners>;
  /** fetch aggregated fields from the table: "banners" */
  banners_aggregate: Banners_Aggregate;
  /** fetch data from the table: "banners" using primary key columns */
  banners_by_pk?: Maybe<Banners>;
  /** fetch data from the table: "blogs" */
  blogs: Array<Blogs>;
  /** fetch aggregated fields from the table: "blogs" */
  blogs_aggregate: Blogs_Aggregate;
  /** fetch data from the table: "blogs" using primary key columns */
  blogs_by_pk?: Maybe<Blogs>;
  /** fetch data from the table: "cart" */
  cart: Array<Cart>;
  /** fetch aggregated fields from the table: "cart" */
  cart_aggregate: Cart_Aggregate;
  /** fetch data from the table: "cart" using primary key columns */
  cart_by_pk?: Maybe<Cart>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "countries" */
  countries: Array<Countries>;
  /** fetch aggregated fields from the table: "countries" */
  countries_aggregate: Countries_Aggregate;
  /** fetch data from the table: "countries" using primary key columns */
  countries_by_pk?: Maybe<Countries>;
  /** fetch data from the table: "coupons" */
  coupons: Array<Coupons>;
  /** fetch aggregated fields from the table: "coupons" */
  coupons_aggregate: Coupons_Aggregate;
  /** fetch data from the table: "coupons" using primary key columns */
  coupons_by_pk?: Maybe<Coupons>;
  /** fetch data from the table: "deal_of_the_day" */
  deal_of_the_day: Array<Deal_Of_The_Day>;
  /** fetch aggregated fields from the table: "deal_of_the_day" */
  deal_of_the_day_aggregate: Deal_Of_The_Day_Aggregate;
  /** fetch data from the table: "deal_of_the_day" using primary key columns */
  deal_of_the_day_by_pk?: Maybe<Deal_Of_The_Day>;
  /** fetch data from the table: "descriptions" */
  descriptions: Array<Descriptions>;
  /** fetch aggregated fields from the table: "descriptions" */
  descriptions_aggregate: Descriptions_Aggregate;
  /** fetch data from the table: "descriptions" using primary key columns */
  descriptions_by_pk?: Maybe<Descriptions>;
  /** fetch data from the table: "email_list" */
  email_list: Array<Email_List>;
  /** fetch aggregated fields from the table: "email_list" */
  email_list_aggregate: Email_List_Aggregate;
  /** fetch data from the table: "email_list" using primary key columns */
  email_list_by_pk?: Maybe<Email_List>;
  /** fetch data from the table: "faq_titles" */
  faq_titles: Array<Faq_Titles>;
  /** fetch aggregated fields from the table: "faq_titles" */
  faq_titles_aggregate: Faq_Titles_Aggregate;
  /** fetch data from the table: "faq_titles" using primary key columns */
  faq_titles_by_pk?: Maybe<Faq_Titles>;
  /** fetch data from the table: "faqs" */
  faqs: Array<Faqs>;
  /** fetch aggregated fields from the table: "faqs" */
  faqs_aggregate: Faqs_Aggregate;
  /** fetch data from the table: "faqs" using primary key columns */
  faqs_by_pk?: Maybe<Faqs>;
  /** fetch data from the table: "instruction_titles" */
  instruction_titles: Array<Instruction_Titles>;
  /** fetch aggregated fields from the table: "instruction_titles" */
  instruction_titles_aggregate: Instruction_Titles_Aggregate;
  /** fetch data from the table: "instruction_titles" using primary key columns */
  instruction_titles_by_pk?: Maybe<Instruction_Titles>;
  /** fetch data from the table: "instructions" */
  instructions: Array<Instructions>;
  /** fetch aggregated fields from the table: "instructions" */
  instructions_aggregate: Instructions_Aggregate;
  /** fetch data from the table: "instructions" using primary key columns */
  instructions_by_pk?: Maybe<Instructions>;
  /** fetch data from the table: "instructions_types" */
  instructions_types: Array<Instructions_Types>;
  /** fetch aggregated fields from the table: "instructions_types" */
  instructions_types_aggregate: Instructions_Types_Aggregate;
  /** fetch data from the table: "instructions_types" using primary key columns */
  instructions_types_by_pk?: Maybe<Instructions_Types>;
  /** fetch data from the table: "order_product_types" */
  order_product_types: Array<Order_Product_Types>;
  /** fetch aggregated fields from the table: "order_product_types" */
  order_product_types_aggregate: Order_Product_Types_Aggregate;
  /** fetch data from the table: "order_product_types" using primary key columns */
  order_product_types_by_pk?: Maybe<Order_Product_Types>;
  /** fetch data from the table: "order_status" */
  order_status: Array<Order_Status>;
  /** fetch aggregated fields from the table: "order_status" */
  order_status_aggregate: Order_Status_Aggregate;
  /** fetch data from the table: "order_status" using primary key columns */
  order_status_by_pk?: Maybe<Order_Status>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "product" */
  product: Array<Product>;
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: Product_Aggregate;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>;
  /** fetch data from the table: "product_seasons" */
  product_seasons: Array<Product_Seasons>;
  /** fetch aggregated fields from the table: "product_seasons" */
  product_seasons_aggregate: Product_Seasons_Aggregate;
  /** fetch data from the table: "product_seasons" using primary key columns */
  product_seasons_by_pk?: Maybe<Product_Seasons>;
  /** fetch data from the table: "product_type" */
  product_type: Array<Product_Type>;
  /** fetch aggregated fields from the table: "product_type" */
  product_type_aggregate: Product_Type_Aggregate;
  /** fetch data from the table: "product_type" using primary key columns */
  product_type_by_pk?: Maybe<Product_Type>;
  /** fetch data from the table: "recommendations" */
  recommendations: Array<Recommendations>;
  /** fetch aggregated fields from the table: "recommendations" */
  recommendations_aggregate: Recommendations_Aggregate;
  /** fetch data from the table: "recommendations" using primary key columns */
  recommendations_by_pk?: Maybe<Recommendations>;
  /** fetch data from the table: "seasons" */
  seasons: Array<Seasons>;
  /** fetch aggregated fields from the table: "seasons" */
  seasons_aggregate: Seasons_Aggregate;
  /** fetch data from the table: "seasons" using primary key columns */
  seasons_by_pk?: Maybe<Seasons>;
  /** fetch data from the table: "store_locations" */
  store_locations: Array<Store_Locations>;
  /** fetch aggregated fields from the table: "store_locations" */
  store_locations_aggregate: Store_Locations_Aggregate;
  /** fetch data from the table: "store_locations" using primary key columns */
  store_locations_by_pk?: Maybe<Store_Locations>;
  /** fetch data from the table: "sub_categories" */
  sub_categories: Array<Sub_Categories>;
  /** fetch aggregated fields from the table: "sub_categories" */
  sub_categories_aggregate: Sub_Categories_Aggregate;
  /** fetch data from the table: "sub_categories" using primary key columns */
  sub_categories_by_pk?: Maybe<Sub_Categories>;
  /** fetch data from the table: "user_ratings" */
  user_ratings: Array<User_Ratings>;
  /** fetch aggregated fields from the table: "user_ratings" */
  user_ratings_aggregate: User_Ratings_Aggregate;
  /** fetch data from the table: "user_ratings" using primary key columns */
  user_ratings_by_pk?: Maybe<User_Ratings>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "wishlists" */
  wishlists: Array<Wishlists>;
  /** fetch aggregated fields from the table: "wishlists" */
  wishlists_aggregate: Wishlists_Aggregate;
  /** fetch data from the table: "wishlists" using primary key columns */
  wishlists_by_pk?: Maybe<Wishlists>;
};


/** query root */
export type Query_RootAddressesArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};


/** query root */
export type Query_RootAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};


/** query root */
export type Query_RootAddresses_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootAdminsArgs = {
  distinct_on?: Maybe<Array<Admins_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Admins_Order_By>>;
  where?: Maybe<Admins_Bool_Exp>;
};


/** query root */
export type Query_RootAdmins_AggregateArgs = {
  distinct_on?: Maybe<Array<Admins_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Admins_Order_By>>;
  where?: Maybe<Admins_Bool_Exp>;
};


/** query root */
export type Query_RootAdmins_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootBanner_ProductArgs = {
  distinct_on?: Maybe<Array<Banner_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Banner_Product_Order_By>>;
  where?: Maybe<Banner_Product_Bool_Exp>;
};


/** query root */
export type Query_RootBanner_Product_AggregateArgs = {
  distinct_on?: Maybe<Array<Banner_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Banner_Product_Order_By>>;
  where?: Maybe<Banner_Product_Bool_Exp>;
};


/** query root */
export type Query_RootBanner_Product_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootBanner_TypeArgs = {
  distinct_on?: Maybe<Array<Banner_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Banner_Type_Order_By>>;
  where?: Maybe<Banner_Type_Bool_Exp>;
};


/** query root */
export type Query_RootBanner_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Banner_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Banner_Type_Order_By>>;
  where?: Maybe<Banner_Type_Bool_Exp>;
};


/** query root */
export type Query_RootBanner_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootBannersArgs = {
  distinct_on?: Maybe<Array<Banners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Banners_Order_By>>;
  where?: Maybe<Banners_Bool_Exp>;
};


/** query root */
export type Query_RootBanners_AggregateArgs = {
  distinct_on?: Maybe<Array<Banners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Banners_Order_By>>;
  where?: Maybe<Banners_Bool_Exp>;
};


/** query root */
export type Query_RootBanners_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootBlogsArgs = {
  distinct_on?: Maybe<Array<Blogs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Blogs_Order_By>>;
  where?: Maybe<Blogs_Bool_Exp>;
};


/** query root */
export type Query_RootBlogs_AggregateArgs = {
  distinct_on?: Maybe<Array<Blogs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Blogs_Order_By>>;
  where?: Maybe<Blogs_Bool_Exp>;
};


/** query root */
export type Query_RootBlogs_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootCartArgs = {
  distinct_on?: Maybe<Array<Cart_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cart_Order_By>>;
  where?: Maybe<Cart_Bool_Exp>;
};


/** query root */
export type Query_RootCart_AggregateArgs = {
  distinct_on?: Maybe<Array<Cart_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cart_Order_By>>;
  where?: Maybe<Cart_Bool_Exp>;
};


/** query root */
export type Query_RootCart_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


/** query root */
export type Query_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


/** query root */
export type Query_RootCategories_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootCountriesArgs = {
  distinct_on?: Maybe<Array<Countries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Order_By>>;
  where?: Maybe<Countries_Bool_Exp>;
};


/** query root */
export type Query_RootCountries_AggregateArgs = {
  distinct_on?: Maybe<Array<Countries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Order_By>>;
  where?: Maybe<Countries_Bool_Exp>;
};


/** query root */
export type Query_RootCountries_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootCouponsArgs = {
  distinct_on?: Maybe<Array<Coupons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Coupons_Order_By>>;
  where?: Maybe<Coupons_Bool_Exp>;
};


/** query root */
export type Query_RootCoupons_AggregateArgs = {
  distinct_on?: Maybe<Array<Coupons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Coupons_Order_By>>;
  where?: Maybe<Coupons_Bool_Exp>;
};


/** query root */
export type Query_RootCoupons_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootDeal_Of_The_DayArgs = {
  distinct_on?: Maybe<Array<Deal_Of_The_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Deal_Of_The_Day_Order_By>>;
  where?: Maybe<Deal_Of_The_Day_Bool_Exp>;
};


/** query root */
export type Query_RootDeal_Of_The_Day_AggregateArgs = {
  distinct_on?: Maybe<Array<Deal_Of_The_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Deal_Of_The_Day_Order_By>>;
  where?: Maybe<Deal_Of_The_Day_Bool_Exp>;
};


/** query root */
export type Query_RootDeal_Of_The_Day_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootDescriptionsArgs = {
  distinct_on?: Maybe<Array<Descriptions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Descriptions_Order_By>>;
  where?: Maybe<Descriptions_Bool_Exp>;
};


/** query root */
export type Query_RootDescriptions_AggregateArgs = {
  distinct_on?: Maybe<Array<Descriptions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Descriptions_Order_By>>;
  where?: Maybe<Descriptions_Bool_Exp>;
};


/** query root */
export type Query_RootDescriptions_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootEmail_ListArgs = {
  distinct_on?: Maybe<Array<Email_List_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Email_List_Order_By>>;
  where?: Maybe<Email_List_Bool_Exp>;
};


/** query root */
export type Query_RootEmail_List_AggregateArgs = {
  distinct_on?: Maybe<Array<Email_List_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Email_List_Order_By>>;
  where?: Maybe<Email_List_Bool_Exp>;
};


/** query root */
export type Query_RootEmail_List_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootFaq_TitlesArgs = {
  distinct_on?: Maybe<Array<Faq_Titles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Faq_Titles_Order_By>>;
  where?: Maybe<Faq_Titles_Bool_Exp>;
};


/** query root */
export type Query_RootFaq_Titles_AggregateArgs = {
  distinct_on?: Maybe<Array<Faq_Titles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Faq_Titles_Order_By>>;
  where?: Maybe<Faq_Titles_Bool_Exp>;
};


/** query root */
export type Query_RootFaq_Titles_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootFaqsArgs = {
  distinct_on?: Maybe<Array<Faqs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Faqs_Order_By>>;
  where?: Maybe<Faqs_Bool_Exp>;
};


/** query root */
export type Query_RootFaqs_AggregateArgs = {
  distinct_on?: Maybe<Array<Faqs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Faqs_Order_By>>;
  where?: Maybe<Faqs_Bool_Exp>;
};


/** query root */
export type Query_RootFaqs_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootInstruction_TitlesArgs = {
  distinct_on?: Maybe<Array<Instruction_Titles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instruction_Titles_Order_By>>;
  where?: Maybe<Instruction_Titles_Bool_Exp>;
};


/** query root */
export type Query_RootInstruction_Titles_AggregateArgs = {
  distinct_on?: Maybe<Array<Instruction_Titles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instruction_Titles_Order_By>>;
  where?: Maybe<Instruction_Titles_Bool_Exp>;
};


/** query root */
export type Query_RootInstruction_Titles_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootInstructionsArgs = {
  distinct_on?: Maybe<Array<Instructions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instructions_Order_By>>;
  where?: Maybe<Instructions_Bool_Exp>;
};


/** query root */
export type Query_RootInstructions_AggregateArgs = {
  distinct_on?: Maybe<Array<Instructions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instructions_Order_By>>;
  where?: Maybe<Instructions_Bool_Exp>;
};


/** query root */
export type Query_RootInstructions_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootInstructions_TypesArgs = {
  distinct_on?: Maybe<Array<Instructions_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instructions_Types_Order_By>>;
  where?: Maybe<Instructions_Types_Bool_Exp>;
};


/** query root */
export type Query_RootInstructions_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Instructions_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instructions_Types_Order_By>>;
  where?: Maybe<Instructions_Types_Bool_Exp>;
};


/** query root */
export type Query_RootInstructions_Types_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootOrder_Product_TypesArgs = {
  distinct_on?: Maybe<Array<Order_Product_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Product_Types_Order_By>>;
  where?: Maybe<Order_Product_Types_Bool_Exp>;
};


/** query root */
export type Query_RootOrder_Product_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Product_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Product_Types_Order_By>>;
  where?: Maybe<Order_Product_Types_Bool_Exp>;
};


/** query root */
export type Query_RootOrder_Product_Types_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootOrder_StatusArgs = {
  distinct_on?: Maybe<Array<Order_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Status_Order_By>>;
  where?: Maybe<Order_Status_Bool_Exp>;
};


/** query root */
export type Query_RootOrder_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Status_Order_By>>;
  where?: Maybe<Order_Status_Bool_Exp>;
};


/** query root */
export type Query_RootOrder_Status_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** query root */
export type Query_RootOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** query root */
export type Query_RootOrders_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootProductArgs = {
  distinct_on?: Maybe<Array<Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Order_By>>;
  where?: Maybe<Product_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Order_By>>;
  where?: Maybe<Product_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootProduct_SeasonsArgs = {
  distinct_on?: Maybe<Array<Product_Seasons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Seasons_Order_By>>;
  where?: Maybe<Product_Seasons_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_Seasons_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Seasons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Seasons_Order_By>>;
  where?: Maybe<Product_Seasons_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_Seasons_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootProduct_TypeArgs = {
  distinct_on?: Maybe<Array<Product_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Type_Order_By>>;
  where?: Maybe<Product_Type_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Type_Order_By>>;
  where?: Maybe<Product_Type_Bool_Exp>;
};


/** query root */
export type Query_RootProduct_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootRecommendationsArgs = {
  distinct_on?: Maybe<Array<Recommendations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recommendations_Order_By>>;
  where?: Maybe<Recommendations_Bool_Exp>;
};


/** query root */
export type Query_RootRecommendations_AggregateArgs = {
  distinct_on?: Maybe<Array<Recommendations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recommendations_Order_By>>;
  where?: Maybe<Recommendations_Bool_Exp>;
};


/** query root */
export type Query_RootRecommendations_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootSeasonsArgs = {
  distinct_on?: Maybe<Array<Seasons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seasons_Order_By>>;
  where?: Maybe<Seasons_Bool_Exp>;
};


/** query root */
export type Query_RootSeasons_AggregateArgs = {
  distinct_on?: Maybe<Array<Seasons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seasons_Order_By>>;
  where?: Maybe<Seasons_Bool_Exp>;
};


/** query root */
export type Query_RootSeasons_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootStore_LocationsArgs = {
  distinct_on?: Maybe<Array<Store_Locations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Locations_Order_By>>;
  where?: Maybe<Store_Locations_Bool_Exp>;
};


/** query root */
export type Query_RootStore_Locations_AggregateArgs = {
  distinct_on?: Maybe<Array<Store_Locations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Locations_Order_By>>;
  where?: Maybe<Store_Locations_Bool_Exp>;
};


/** query root */
export type Query_RootStore_Locations_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootSub_CategoriesArgs = {
  distinct_on?: Maybe<Array<Sub_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sub_Categories_Order_By>>;
  where?: Maybe<Sub_Categories_Bool_Exp>;
};


/** query root */
export type Query_RootSub_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Sub_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sub_Categories_Order_By>>;
  where?: Maybe<Sub_Categories_Bool_Exp>;
};


/** query root */
export type Query_RootSub_Categories_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUser_RatingsArgs = {
  distinct_on?: Maybe<Array<User_Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Ratings_Order_By>>;
  where?: Maybe<User_Ratings_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Ratings_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Ratings_Order_By>>;
  where?: Maybe<User_Ratings_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Ratings_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootWishlistsArgs = {
  distinct_on?: Maybe<Array<Wishlists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Wishlists_Order_By>>;
  where?: Maybe<Wishlists_Bool_Exp>;
};


/** query root */
export type Query_RootWishlists_AggregateArgs = {
  distinct_on?: Maybe<Array<Wishlists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Wishlists_Order_By>>;
  where?: Maybe<Wishlists_Bool_Exp>;
};


/** query root */
export type Query_RootWishlists_By_PkArgs = {
  id: Scalars['bigint'];
};

/** columns and relationships of "recommendations" */
export type Recommendations = {
  __typename?: 'recommendations';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  /** An object relationship */
  product: Product;
  productId: Scalars['bigint'];
  /** An object relationship */
  product_type: Product_Type;
  recommended: Scalars['Int'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "recommendations" */
export type Recommendations_Aggregate = {
  __typename?: 'recommendations_aggregate';
  aggregate?: Maybe<Recommendations_Aggregate_Fields>;
  nodes: Array<Recommendations>;
};

/** aggregate fields of "recommendations" */
export type Recommendations_Aggregate_Fields = {
  __typename?: 'recommendations_aggregate_fields';
  avg?: Maybe<Recommendations_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Recommendations_Max_Fields>;
  min?: Maybe<Recommendations_Min_Fields>;
  stddev?: Maybe<Recommendations_Stddev_Fields>;
  stddev_pop?: Maybe<Recommendations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Recommendations_Stddev_Samp_Fields>;
  sum?: Maybe<Recommendations_Sum_Fields>;
  var_pop?: Maybe<Recommendations_Var_Pop_Fields>;
  var_samp?: Maybe<Recommendations_Var_Samp_Fields>;
  variance?: Maybe<Recommendations_Variance_Fields>;
};


/** aggregate fields of "recommendations" */
export type Recommendations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Recommendations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "recommendations" */
export type Recommendations_Aggregate_Order_By = {
  avg?: Maybe<Recommendations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Recommendations_Max_Order_By>;
  min?: Maybe<Recommendations_Min_Order_By>;
  stddev?: Maybe<Recommendations_Stddev_Order_By>;
  stddev_pop?: Maybe<Recommendations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Recommendations_Stddev_Samp_Order_By>;
  sum?: Maybe<Recommendations_Sum_Order_By>;
  var_pop?: Maybe<Recommendations_Var_Pop_Order_By>;
  var_samp?: Maybe<Recommendations_Var_Samp_Order_By>;
  variance?: Maybe<Recommendations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "recommendations" */
export type Recommendations_Arr_Rel_Insert_Input = {
  data: Array<Recommendations_Insert_Input>;
  on_conflict?: Maybe<Recommendations_On_Conflict>;
};

/** aggregate avg on columns */
export type Recommendations_Avg_Fields = {
  __typename?: 'recommendations_avg_fields';
  id?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  recommended?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "recommendations" */
export type Recommendations_Avg_Order_By = {
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  recommended?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "recommendations". All fields are combined with a logical 'AND'. */
export type Recommendations_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Recommendations_Bool_Exp>>>;
  _not?: Maybe<Recommendations_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Recommendations_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  product?: Maybe<Product_Bool_Exp>;
  productId?: Maybe<Bigint_Comparison_Exp>;
  product_type?: Maybe<Product_Type_Bool_Exp>;
  recommended?: Maybe<Int_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "recommendations" */
export enum Recommendations_Constraint {
  /** unique or primary key constraint */
  RecommendedsPkey = 'recommendeds_pkey'
}

/** input type for incrementing integer column in table "recommendations" */
export type Recommendations_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['bigint']>;
  recommended?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "recommendations" */
export type Recommendations_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  product?: Maybe<Product_Obj_Rel_Insert_Input>;
  productId?: Maybe<Scalars['bigint']>;
  product_type?: Maybe<Product_Type_Obj_Rel_Insert_Input>;
  recommended?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Recommendations_Max_Fields = {
  __typename?: 'recommendations_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['bigint']>;
  recommended?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "recommendations" */
export type Recommendations_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  recommended?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Recommendations_Min_Fields = {
  __typename?: 'recommendations_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['bigint']>;
  recommended?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "recommendations" */
export type Recommendations_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  recommended?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "recommendations" */
export type Recommendations_Mutation_Response = {
  __typename?: 'recommendations_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Recommendations>;
};

/** input type for inserting object relation for remote table "recommendations" */
export type Recommendations_Obj_Rel_Insert_Input = {
  data: Recommendations_Insert_Input;
  on_conflict?: Maybe<Recommendations_On_Conflict>;
};

/** on conflict condition type for table "recommendations" */
export type Recommendations_On_Conflict = {
  constraint: Recommendations_Constraint;
  update_columns: Array<Recommendations_Update_Column>;
  where?: Maybe<Recommendations_Bool_Exp>;
};

/** ordering options when selecting data from "recommendations" */
export type Recommendations_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  product?: Maybe<Product_Order_By>;
  productId?: Maybe<Order_By>;
  product_type?: Maybe<Product_Type_Order_By>;
  recommended?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "recommendations" */
export type Recommendations_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "recommendations" */
export enum Recommendations_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'productId',
  /** column name */
  Recommended = 'recommended',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "recommendations" */
export type Recommendations_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['bigint']>;
  recommended?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Recommendations_Stddev_Fields = {
  __typename?: 'recommendations_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  recommended?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "recommendations" */
export type Recommendations_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  recommended?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Recommendations_Stddev_Pop_Fields = {
  __typename?: 'recommendations_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  recommended?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "recommendations" */
export type Recommendations_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  recommended?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Recommendations_Stddev_Samp_Fields = {
  __typename?: 'recommendations_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  recommended?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "recommendations" */
export type Recommendations_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  recommended?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Recommendations_Sum_Fields = {
  __typename?: 'recommendations_sum_fields';
  id?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['bigint']>;
  recommended?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "recommendations" */
export type Recommendations_Sum_Order_By = {
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  recommended?: Maybe<Order_By>;
};

/** update columns of table "recommendations" */
export enum Recommendations_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'productId',
  /** column name */
  Recommended = 'recommended',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Recommendations_Var_Pop_Fields = {
  __typename?: 'recommendations_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  recommended?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "recommendations" */
export type Recommendations_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  recommended?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Recommendations_Var_Samp_Fields = {
  __typename?: 'recommendations_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  recommended?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "recommendations" */
export type Recommendations_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  recommended?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Recommendations_Variance_Fields = {
  __typename?: 'recommendations_variance_fields';
  id?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  recommended?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "recommendations" */
export type Recommendations_Variance_Order_By = {
  id?: Maybe<Order_By>;
  productId?: Maybe<Order_By>;
  recommended?: Maybe<Order_By>;
};

/** columns and relationships of "seasons" */
export type Seasons = {
  __typename?: 'seasons';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  /** An array relationship */
  productTypes: Array<Product_Type>;
  /** An aggregated array relationship */
  productTypes_aggregate: Product_Type_Aggregate;
  /** An array relationship */
  product_seasons: Array<Product_Seasons>;
  /** An aggregated array relationship */
  product_seasons_aggregate: Product_Seasons_Aggregate;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "seasons" */
export type SeasonsProductTypesArgs = {
  distinct_on?: Maybe<Array<Product_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Type_Order_By>>;
  where?: Maybe<Product_Type_Bool_Exp>;
};


/** columns and relationships of "seasons" */
export type SeasonsProductTypes_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Type_Order_By>>;
  where?: Maybe<Product_Type_Bool_Exp>;
};


/** columns and relationships of "seasons" */
export type SeasonsProduct_SeasonsArgs = {
  distinct_on?: Maybe<Array<Product_Seasons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Seasons_Order_By>>;
  where?: Maybe<Product_Seasons_Bool_Exp>;
};


/** columns and relationships of "seasons" */
export type SeasonsProduct_Seasons_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Seasons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Seasons_Order_By>>;
  where?: Maybe<Product_Seasons_Bool_Exp>;
};

/** aggregated selection of "seasons" */
export type Seasons_Aggregate = {
  __typename?: 'seasons_aggregate';
  aggregate?: Maybe<Seasons_Aggregate_Fields>;
  nodes: Array<Seasons>;
};

/** aggregate fields of "seasons" */
export type Seasons_Aggregate_Fields = {
  __typename?: 'seasons_aggregate_fields';
  avg?: Maybe<Seasons_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Seasons_Max_Fields>;
  min?: Maybe<Seasons_Min_Fields>;
  stddev?: Maybe<Seasons_Stddev_Fields>;
  stddev_pop?: Maybe<Seasons_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Seasons_Stddev_Samp_Fields>;
  sum?: Maybe<Seasons_Sum_Fields>;
  var_pop?: Maybe<Seasons_Var_Pop_Fields>;
  var_samp?: Maybe<Seasons_Var_Samp_Fields>;
  variance?: Maybe<Seasons_Variance_Fields>;
};


/** aggregate fields of "seasons" */
export type Seasons_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Seasons_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "seasons" */
export type Seasons_Aggregate_Order_By = {
  avg?: Maybe<Seasons_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Seasons_Max_Order_By>;
  min?: Maybe<Seasons_Min_Order_By>;
  stddev?: Maybe<Seasons_Stddev_Order_By>;
  stddev_pop?: Maybe<Seasons_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Seasons_Stddev_Samp_Order_By>;
  sum?: Maybe<Seasons_Sum_Order_By>;
  var_pop?: Maybe<Seasons_Var_Pop_Order_By>;
  var_samp?: Maybe<Seasons_Var_Samp_Order_By>;
  variance?: Maybe<Seasons_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "seasons" */
export type Seasons_Arr_Rel_Insert_Input = {
  data: Array<Seasons_Insert_Input>;
  on_conflict?: Maybe<Seasons_On_Conflict>;
};

/** aggregate avg on columns */
export type Seasons_Avg_Fields = {
  __typename?: 'seasons_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "seasons" */
export type Seasons_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "seasons". All fields are combined with a logical 'AND'. */
export type Seasons_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Seasons_Bool_Exp>>>;
  _not?: Maybe<Seasons_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Seasons_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  isDeleted?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  productTypes?: Maybe<Product_Type_Bool_Exp>;
  product_seasons?: Maybe<Product_Seasons_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "seasons" */
export enum Seasons_Constraint {
  /** unique or primary key constraint */
  SeasonsPkey = 'seasons_pkey'
}

/** input type for incrementing integer column in table "seasons" */
export type Seasons_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "seasons" */
export type Seasons_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  productTypes?: Maybe<Product_Type_Arr_Rel_Insert_Input>;
  product_seasons?: Maybe<Product_Seasons_Arr_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Seasons_Max_Fields = {
  __typename?: 'seasons_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "seasons" */
export type Seasons_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Seasons_Min_Fields = {
  __typename?: 'seasons_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "seasons" */
export type Seasons_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "seasons" */
export type Seasons_Mutation_Response = {
  __typename?: 'seasons_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Seasons>;
};

/** input type for inserting object relation for remote table "seasons" */
export type Seasons_Obj_Rel_Insert_Input = {
  data: Seasons_Insert_Input;
  on_conflict?: Maybe<Seasons_On_Conflict>;
};

/** on conflict condition type for table "seasons" */
export type Seasons_On_Conflict = {
  constraint: Seasons_Constraint;
  update_columns: Array<Seasons_Update_Column>;
  where?: Maybe<Seasons_Bool_Exp>;
};

/** ordering options when selecting data from "seasons" */
export type Seasons_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isDeleted?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  productTypes_aggregate?: Maybe<Product_Type_Aggregate_Order_By>;
  product_seasons_aggregate?: Maybe<Product_Seasons_Aggregate_Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "seasons" */
export type Seasons_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "seasons" */
export enum Seasons_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "seasons" */
export type Seasons_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Seasons_Stddev_Fields = {
  __typename?: 'seasons_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "seasons" */
export type Seasons_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Seasons_Stddev_Pop_Fields = {
  __typename?: 'seasons_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "seasons" */
export type Seasons_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Seasons_Stddev_Samp_Fields = {
  __typename?: 'seasons_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "seasons" */
export type Seasons_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Seasons_Sum_Fields = {
  __typename?: 'seasons_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "seasons" */
export type Seasons_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "seasons" */
export enum Seasons_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Seasons_Var_Pop_Fields = {
  __typename?: 'seasons_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "seasons" */
export type Seasons_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Seasons_Var_Samp_Fields = {
  __typename?: 'seasons_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "seasons" */
export type Seasons_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Seasons_Variance_Fields = {
  __typename?: 'seasons_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "seasons" */
export type Seasons_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "store_locations" */
export type Store_Locations = {
  __typename?: 'store_locations';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "store_locations" */
export type Store_Locations_Aggregate = {
  __typename?: 'store_locations_aggregate';
  aggregate?: Maybe<Store_Locations_Aggregate_Fields>;
  nodes: Array<Store_Locations>;
};

/** aggregate fields of "store_locations" */
export type Store_Locations_Aggregate_Fields = {
  __typename?: 'store_locations_aggregate_fields';
  avg?: Maybe<Store_Locations_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Store_Locations_Max_Fields>;
  min?: Maybe<Store_Locations_Min_Fields>;
  stddev?: Maybe<Store_Locations_Stddev_Fields>;
  stddev_pop?: Maybe<Store_Locations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Store_Locations_Stddev_Samp_Fields>;
  sum?: Maybe<Store_Locations_Sum_Fields>;
  var_pop?: Maybe<Store_Locations_Var_Pop_Fields>;
  var_samp?: Maybe<Store_Locations_Var_Samp_Fields>;
  variance?: Maybe<Store_Locations_Variance_Fields>;
};


/** aggregate fields of "store_locations" */
export type Store_Locations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Store_Locations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "store_locations" */
export type Store_Locations_Aggregate_Order_By = {
  avg?: Maybe<Store_Locations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Store_Locations_Max_Order_By>;
  min?: Maybe<Store_Locations_Min_Order_By>;
  stddev?: Maybe<Store_Locations_Stddev_Order_By>;
  stddev_pop?: Maybe<Store_Locations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Store_Locations_Stddev_Samp_Order_By>;
  sum?: Maybe<Store_Locations_Sum_Order_By>;
  var_pop?: Maybe<Store_Locations_Var_Pop_Order_By>;
  var_samp?: Maybe<Store_Locations_Var_Samp_Order_By>;
  variance?: Maybe<Store_Locations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "store_locations" */
export type Store_Locations_Arr_Rel_Insert_Input = {
  data: Array<Store_Locations_Insert_Input>;
  on_conflict?: Maybe<Store_Locations_On_Conflict>;
};

/** aggregate avg on columns */
export type Store_Locations_Avg_Fields = {
  __typename?: 'store_locations_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "store_locations" */
export type Store_Locations_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "store_locations". All fields are combined with a logical 'AND'. */
export type Store_Locations_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Store_Locations_Bool_Exp>>>;
  _not?: Maybe<Store_Locations_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Store_Locations_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  latitude?: Maybe<String_Comparison_Exp>;
  longitude?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "store_locations" */
export enum Store_Locations_Constraint {
  /** unique or primary key constraint */
  StoreLocationsPkey = 'store_locations_pkey'
}

/** input type for incrementing integer column in table "store_locations" */
export type Store_Locations_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "store_locations" */
export type Store_Locations_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Store_Locations_Max_Fields = {
  __typename?: 'store_locations_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "store_locations" */
export type Store_Locations_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Store_Locations_Min_Fields = {
  __typename?: 'store_locations_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "store_locations" */
export type Store_Locations_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "store_locations" */
export type Store_Locations_Mutation_Response = {
  __typename?: 'store_locations_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Store_Locations>;
};

/** input type for inserting object relation for remote table "store_locations" */
export type Store_Locations_Obj_Rel_Insert_Input = {
  data: Store_Locations_Insert_Input;
  on_conflict?: Maybe<Store_Locations_On_Conflict>;
};

/** on conflict condition type for table "store_locations" */
export type Store_Locations_On_Conflict = {
  constraint: Store_Locations_Constraint;
  update_columns: Array<Store_Locations_Update_Column>;
  where?: Maybe<Store_Locations_Bool_Exp>;
};

/** ordering options when selecting data from "store_locations" */
export type Store_Locations_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "store_locations" */
export type Store_Locations_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "store_locations" */
export enum Store_Locations_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "store_locations" */
export type Store_Locations_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Store_Locations_Stddev_Fields = {
  __typename?: 'store_locations_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "store_locations" */
export type Store_Locations_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Store_Locations_Stddev_Pop_Fields = {
  __typename?: 'store_locations_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "store_locations" */
export type Store_Locations_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Store_Locations_Stddev_Samp_Fields = {
  __typename?: 'store_locations_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "store_locations" */
export type Store_Locations_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Store_Locations_Sum_Fields = {
  __typename?: 'store_locations_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "store_locations" */
export type Store_Locations_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "store_locations" */
export enum Store_Locations_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Store_Locations_Var_Pop_Fields = {
  __typename?: 'store_locations_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "store_locations" */
export type Store_Locations_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Store_Locations_Var_Samp_Fields = {
  __typename?: 'store_locations_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "store_locations" */
export type Store_Locations_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Store_Locations_Variance_Fields = {
  __typename?: 'store_locations_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "store_locations" */
export type Store_Locations_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "sub_categories" */
export type Sub_Categories = {
  __typename?: 'sub_categories';
  /** An array relationship */
  bannerProducts: Array<Banner_Product>;
  /** An aggregated array relationship */
  bannerProducts_aggregate: Banner_Product_Aggregate;
  /** An object relationship */
  category: Categories;
  categoryId: Scalars['Int'];
  coverImageUrl: Scalars['String'];
  createdAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  /** An array relationship */
  products: Array<Product>;
  /** An aggregated array relationship */
  products_aggregate: Product_Aggregate;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "sub_categories" */
export type Sub_CategoriesBannerProductsArgs = {
  distinct_on?: Maybe<Array<Banner_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Banner_Product_Order_By>>;
  where?: Maybe<Banner_Product_Bool_Exp>;
};


/** columns and relationships of "sub_categories" */
export type Sub_CategoriesBannerProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Banner_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Banner_Product_Order_By>>;
  where?: Maybe<Banner_Product_Bool_Exp>;
};


/** columns and relationships of "sub_categories" */
export type Sub_CategoriesProductsArgs = {
  distinct_on?: Maybe<Array<Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Order_By>>;
  where?: Maybe<Product_Bool_Exp>;
};


/** columns and relationships of "sub_categories" */
export type Sub_CategoriesProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Order_By>>;
  where?: Maybe<Product_Bool_Exp>;
};

/** aggregated selection of "sub_categories" */
export type Sub_Categories_Aggregate = {
  __typename?: 'sub_categories_aggregate';
  aggregate?: Maybe<Sub_Categories_Aggregate_Fields>;
  nodes: Array<Sub_Categories>;
};

/** aggregate fields of "sub_categories" */
export type Sub_Categories_Aggregate_Fields = {
  __typename?: 'sub_categories_aggregate_fields';
  avg?: Maybe<Sub_Categories_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Sub_Categories_Max_Fields>;
  min?: Maybe<Sub_Categories_Min_Fields>;
  stddev?: Maybe<Sub_Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Sub_Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sub_Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Sub_Categories_Sum_Fields>;
  var_pop?: Maybe<Sub_Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Sub_Categories_Var_Samp_Fields>;
  variance?: Maybe<Sub_Categories_Variance_Fields>;
};


/** aggregate fields of "sub_categories" */
export type Sub_Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sub_Categories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "sub_categories" */
export type Sub_Categories_Aggregate_Order_By = {
  avg?: Maybe<Sub_Categories_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Sub_Categories_Max_Order_By>;
  min?: Maybe<Sub_Categories_Min_Order_By>;
  stddev?: Maybe<Sub_Categories_Stddev_Order_By>;
  stddev_pop?: Maybe<Sub_Categories_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Sub_Categories_Stddev_Samp_Order_By>;
  sum?: Maybe<Sub_Categories_Sum_Order_By>;
  var_pop?: Maybe<Sub_Categories_Var_Pop_Order_By>;
  var_samp?: Maybe<Sub_Categories_Var_Samp_Order_By>;
  variance?: Maybe<Sub_Categories_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "sub_categories" */
export type Sub_Categories_Arr_Rel_Insert_Input = {
  data: Array<Sub_Categories_Insert_Input>;
  on_conflict?: Maybe<Sub_Categories_On_Conflict>;
};

/** aggregate avg on columns */
export type Sub_Categories_Avg_Fields = {
  __typename?: 'sub_categories_avg_fields';
  categoryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "sub_categories" */
export type Sub_Categories_Avg_Order_By = {
  categoryId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "sub_categories". All fields are combined with a logical 'AND'. */
export type Sub_Categories_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Sub_Categories_Bool_Exp>>>;
  _not?: Maybe<Sub_Categories_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Sub_Categories_Bool_Exp>>>;
  bannerProducts?: Maybe<Banner_Product_Bool_Exp>;
  category?: Maybe<Categories_Bool_Exp>;
  categoryId?: Maybe<Int_Comparison_Exp>;
  coverImageUrl?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  isDeleted?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  products?: Maybe<Product_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "sub_categories" */
export enum Sub_Categories_Constraint {
  /** unique or primary key constraint */
  SubCategoriesPkey = 'subCategories_pkey'
}

/** input type for incrementing integer column in table "sub_categories" */
export type Sub_Categories_Inc_Input = {
  categoryId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "sub_categories" */
export type Sub_Categories_Insert_Input = {
  bannerProducts?: Maybe<Banner_Product_Arr_Rel_Insert_Input>;
  category?: Maybe<Categories_Obj_Rel_Insert_Input>;
  categoryId?: Maybe<Scalars['Int']>;
  coverImageUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<Product_Arr_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Sub_Categories_Max_Fields = {
  __typename?: 'sub_categories_max_fields';
  categoryId?: Maybe<Scalars['Int']>;
  coverImageUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "sub_categories" */
export type Sub_Categories_Max_Order_By = {
  categoryId?: Maybe<Order_By>;
  coverImageUrl?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Sub_Categories_Min_Fields = {
  __typename?: 'sub_categories_min_fields';
  categoryId?: Maybe<Scalars['Int']>;
  coverImageUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "sub_categories" */
export type Sub_Categories_Min_Order_By = {
  categoryId?: Maybe<Order_By>;
  coverImageUrl?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "sub_categories" */
export type Sub_Categories_Mutation_Response = {
  __typename?: 'sub_categories_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Sub_Categories>;
};

/** input type for inserting object relation for remote table "sub_categories" */
export type Sub_Categories_Obj_Rel_Insert_Input = {
  data: Sub_Categories_Insert_Input;
  on_conflict?: Maybe<Sub_Categories_On_Conflict>;
};

/** on conflict condition type for table "sub_categories" */
export type Sub_Categories_On_Conflict = {
  constraint: Sub_Categories_Constraint;
  update_columns: Array<Sub_Categories_Update_Column>;
  where?: Maybe<Sub_Categories_Bool_Exp>;
};

/** ordering options when selecting data from "sub_categories" */
export type Sub_Categories_Order_By = {
  bannerProducts_aggregate?: Maybe<Banner_Product_Aggregate_Order_By>;
  category?: Maybe<Categories_Order_By>;
  categoryId?: Maybe<Order_By>;
  coverImageUrl?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isDeleted?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  products_aggregate?: Maybe<Product_Aggregate_Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "sub_categories" */
export type Sub_Categories_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "sub_categories" */
export enum Sub_Categories_Select_Column {
  /** column name */
  CategoryId = 'categoryId',
  /** column name */
  CoverImageUrl = 'coverImageUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "sub_categories" */
export type Sub_Categories_Set_Input = {
  categoryId?: Maybe<Scalars['Int']>;
  coverImageUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Sub_Categories_Stddev_Fields = {
  __typename?: 'sub_categories_stddev_fields';
  categoryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "sub_categories" */
export type Sub_Categories_Stddev_Order_By = {
  categoryId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Sub_Categories_Stddev_Pop_Fields = {
  __typename?: 'sub_categories_stddev_pop_fields';
  categoryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "sub_categories" */
export type Sub_Categories_Stddev_Pop_Order_By = {
  categoryId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Sub_Categories_Stddev_Samp_Fields = {
  __typename?: 'sub_categories_stddev_samp_fields';
  categoryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "sub_categories" */
export type Sub_Categories_Stddev_Samp_Order_By = {
  categoryId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Sub_Categories_Sum_Fields = {
  __typename?: 'sub_categories_sum_fields';
  categoryId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "sub_categories" */
export type Sub_Categories_Sum_Order_By = {
  categoryId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "sub_categories" */
export enum Sub_Categories_Update_Column {
  /** column name */
  CategoryId = 'categoryId',
  /** column name */
  CoverImageUrl = 'coverImageUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Sub_Categories_Var_Pop_Fields = {
  __typename?: 'sub_categories_var_pop_fields';
  categoryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "sub_categories" */
export type Sub_Categories_Var_Pop_Order_By = {
  categoryId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Sub_Categories_Var_Samp_Fields = {
  __typename?: 'sub_categories_var_samp_fields';
  categoryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "sub_categories" */
export type Sub_Categories_Var_Samp_Order_By = {
  categoryId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Sub_Categories_Variance_Fields = {
  __typename?: 'sub_categories_variance_fields';
  categoryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "sub_categories" */
export type Sub_Categories_Variance_Order_By = {
  categoryId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "addresses" */
  addresses: Array<Addresses>;
  /** fetch aggregated fields from the table: "addresses" */
  addresses_aggregate: Addresses_Aggregate;
  /** fetch data from the table: "addresses" using primary key columns */
  addresses_by_pk?: Maybe<Addresses>;
  /** fetch data from the table: "admins" */
  admins: Array<Admins>;
  /** fetch aggregated fields from the table: "admins" */
  admins_aggregate: Admins_Aggregate;
  /** fetch data from the table: "admins" using primary key columns */
  admins_by_pk?: Maybe<Admins>;
  /** fetch data from the table: "banner_product" */
  banner_product: Array<Banner_Product>;
  /** fetch aggregated fields from the table: "banner_product" */
  banner_product_aggregate: Banner_Product_Aggregate;
  /** fetch data from the table: "banner_product" using primary key columns */
  banner_product_by_pk?: Maybe<Banner_Product>;
  /** fetch data from the table: "banner_type" */
  banner_type: Array<Banner_Type>;
  /** fetch aggregated fields from the table: "banner_type" */
  banner_type_aggregate: Banner_Type_Aggregate;
  /** fetch data from the table: "banner_type" using primary key columns */
  banner_type_by_pk?: Maybe<Banner_Type>;
  /** fetch data from the table: "banners" */
  banners: Array<Banners>;
  /** fetch aggregated fields from the table: "banners" */
  banners_aggregate: Banners_Aggregate;
  /** fetch data from the table: "banners" using primary key columns */
  banners_by_pk?: Maybe<Banners>;
  /** fetch data from the table: "blogs" */
  blogs: Array<Blogs>;
  /** fetch aggregated fields from the table: "blogs" */
  blogs_aggregate: Blogs_Aggregate;
  /** fetch data from the table: "blogs" using primary key columns */
  blogs_by_pk?: Maybe<Blogs>;
  /** fetch data from the table: "cart" */
  cart: Array<Cart>;
  /** fetch aggregated fields from the table: "cart" */
  cart_aggregate: Cart_Aggregate;
  /** fetch data from the table: "cart" using primary key columns */
  cart_by_pk?: Maybe<Cart>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "countries" */
  countries: Array<Countries>;
  /** fetch aggregated fields from the table: "countries" */
  countries_aggregate: Countries_Aggregate;
  /** fetch data from the table: "countries" using primary key columns */
  countries_by_pk?: Maybe<Countries>;
  /** fetch data from the table: "coupons" */
  coupons: Array<Coupons>;
  /** fetch aggregated fields from the table: "coupons" */
  coupons_aggregate: Coupons_Aggregate;
  /** fetch data from the table: "coupons" using primary key columns */
  coupons_by_pk?: Maybe<Coupons>;
  /** fetch data from the table: "deal_of_the_day" */
  deal_of_the_day: Array<Deal_Of_The_Day>;
  /** fetch aggregated fields from the table: "deal_of_the_day" */
  deal_of_the_day_aggregate: Deal_Of_The_Day_Aggregate;
  /** fetch data from the table: "deal_of_the_day" using primary key columns */
  deal_of_the_day_by_pk?: Maybe<Deal_Of_The_Day>;
  /** fetch data from the table: "descriptions" */
  descriptions: Array<Descriptions>;
  /** fetch aggregated fields from the table: "descriptions" */
  descriptions_aggregate: Descriptions_Aggregate;
  /** fetch data from the table: "descriptions" using primary key columns */
  descriptions_by_pk?: Maybe<Descriptions>;
  /** fetch data from the table: "email_list" */
  email_list: Array<Email_List>;
  /** fetch aggregated fields from the table: "email_list" */
  email_list_aggregate: Email_List_Aggregate;
  /** fetch data from the table: "email_list" using primary key columns */
  email_list_by_pk?: Maybe<Email_List>;
  /** fetch data from the table: "faq_titles" */
  faq_titles: Array<Faq_Titles>;
  /** fetch aggregated fields from the table: "faq_titles" */
  faq_titles_aggregate: Faq_Titles_Aggregate;
  /** fetch data from the table: "faq_titles" using primary key columns */
  faq_titles_by_pk?: Maybe<Faq_Titles>;
  /** fetch data from the table: "faqs" */
  faqs: Array<Faqs>;
  /** fetch aggregated fields from the table: "faqs" */
  faqs_aggregate: Faqs_Aggregate;
  /** fetch data from the table: "faqs" using primary key columns */
  faqs_by_pk?: Maybe<Faqs>;
  /** fetch data from the table: "instruction_titles" */
  instruction_titles: Array<Instruction_Titles>;
  /** fetch aggregated fields from the table: "instruction_titles" */
  instruction_titles_aggregate: Instruction_Titles_Aggregate;
  /** fetch data from the table: "instruction_titles" using primary key columns */
  instruction_titles_by_pk?: Maybe<Instruction_Titles>;
  /** fetch data from the table: "instructions" */
  instructions: Array<Instructions>;
  /** fetch aggregated fields from the table: "instructions" */
  instructions_aggregate: Instructions_Aggregate;
  /** fetch data from the table: "instructions" using primary key columns */
  instructions_by_pk?: Maybe<Instructions>;
  /** fetch data from the table: "instructions_types" */
  instructions_types: Array<Instructions_Types>;
  /** fetch aggregated fields from the table: "instructions_types" */
  instructions_types_aggregate: Instructions_Types_Aggregate;
  /** fetch data from the table: "instructions_types" using primary key columns */
  instructions_types_by_pk?: Maybe<Instructions_Types>;
  /** fetch data from the table: "order_product_types" */
  order_product_types: Array<Order_Product_Types>;
  /** fetch aggregated fields from the table: "order_product_types" */
  order_product_types_aggregate: Order_Product_Types_Aggregate;
  /** fetch data from the table: "order_product_types" using primary key columns */
  order_product_types_by_pk?: Maybe<Order_Product_Types>;
  /** fetch data from the table: "order_status" */
  order_status: Array<Order_Status>;
  /** fetch aggregated fields from the table: "order_status" */
  order_status_aggregate: Order_Status_Aggregate;
  /** fetch data from the table: "order_status" using primary key columns */
  order_status_by_pk?: Maybe<Order_Status>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "product" */
  product: Array<Product>;
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: Product_Aggregate;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>;
  /** fetch data from the table: "product_seasons" */
  product_seasons: Array<Product_Seasons>;
  /** fetch aggregated fields from the table: "product_seasons" */
  product_seasons_aggregate: Product_Seasons_Aggregate;
  /** fetch data from the table: "product_seasons" using primary key columns */
  product_seasons_by_pk?: Maybe<Product_Seasons>;
  /** fetch data from the table: "product_type" */
  product_type: Array<Product_Type>;
  /** fetch aggregated fields from the table: "product_type" */
  product_type_aggregate: Product_Type_Aggregate;
  /** fetch data from the table: "product_type" using primary key columns */
  product_type_by_pk?: Maybe<Product_Type>;
  /** fetch data from the table: "recommendations" */
  recommendations: Array<Recommendations>;
  /** fetch aggregated fields from the table: "recommendations" */
  recommendations_aggregate: Recommendations_Aggregate;
  /** fetch data from the table: "recommendations" using primary key columns */
  recommendations_by_pk?: Maybe<Recommendations>;
  /** fetch data from the table: "seasons" */
  seasons: Array<Seasons>;
  /** fetch aggregated fields from the table: "seasons" */
  seasons_aggregate: Seasons_Aggregate;
  /** fetch data from the table: "seasons" using primary key columns */
  seasons_by_pk?: Maybe<Seasons>;
  /** fetch data from the table: "store_locations" */
  store_locations: Array<Store_Locations>;
  /** fetch aggregated fields from the table: "store_locations" */
  store_locations_aggregate: Store_Locations_Aggregate;
  /** fetch data from the table: "store_locations" using primary key columns */
  store_locations_by_pk?: Maybe<Store_Locations>;
  /** fetch data from the table: "sub_categories" */
  sub_categories: Array<Sub_Categories>;
  /** fetch aggregated fields from the table: "sub_categories" */
  sub_categories_aggregate: Sub_Categories_Aggregate;
  /** fetch data from the table: "sub_categories" using primary key columns */
  sub_categories_by_pk?: Maybe<Sub_Categories>;
  /** fetch data from the table: "user_ratings" */
  user_ratings: Array<User_Ratings>;
  /** fetch aggregated fields from the table: "user_ratings" */
  user_ratings_aggregate: User_Ratings_Aggregate;
  /** fetch data from the table: "user_ratings" using primary key columns */
  user_ratings_by_pk?: Maybe<User_Ratings>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "wishlists" */
  wishlists: Array<Wishlists>;
  /** fetch aggregated fields from the table: "wishlists" */
  wishlists_aggregate: Wishlists_Aggregate;
  /** fetch data from the table: "wishlists" using primary key columns */
  wishlists_by_pk?: Maybe<Wishlists>;
};


/** subscription root */
export type Subscription_RootAddressesArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAddresses_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootAdminsArgs = {
  distinct_on?: Maybe<Array<Admins_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Admins_Order_By>>;
  where?: Maybe<Admins_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAdmins_AggregateArgs = {
  distinct_on?: Maybe<Array<Admins_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Admins_Order_By>>;
  where?: Maybe<Admins_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAdmins_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootBanner_ProductArgs = {
  distinct_on?: Maybe<Array<Banner_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Banner_Product_Order_By>>;
  where?: Maybe<Banner_Product_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBanner_Product_AggregateArgs = {
  distinct_on?: Maybe<Array<Banner_Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Banner_Product_Order_By>>;
  where?: Maybe<Banner_Product_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBanner_Product_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootBanner_TypeArgs = {
  distinct_on?: Maybe<Array<Banner_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Banner_Type_Order_By>>;
  where?: Maybe<Banner_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBanner_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Banner_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Banner_Type_Order_By>>;
  where?: Maybe<Banner_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBanner_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootBannersArgs = {
  distinct_on?: Maybe<Array<Banners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Banners_Order_By>>;
  where?: Maybe<Banners_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBanners_AggregateArgs = {
  distinct_on?: Maybe<Array<Banners_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Banners_Order_By>>;
  where?: Maybe<Banners_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBanners_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootBlogsArgs = {
  distinct_on?: Maybe<Array<Blogs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Blogs_Order_By>>;
  where?: Maybe<Blogs_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBlogs_AggregateArgs = {
  distinct_on?: Maybe<Array<Blogs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Blogs_Order_By>>;
  where?: Maybe<Blogs_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBlogs_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootCartArgs = {
  distinct_on?: Maybe<Array<Cart_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cart_Order_By>>;
  where?: Maybe<Cart_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCart_AggregateArgs = {
  distinct_on?: Maybe<Array<Cart_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cart_Order_By>>;
  where?: Maybe<Cart_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCart_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootCountriesArgs = {
  distinct_on?: Maybe<Array<Countries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Order_By>>;
  where?: Maybe<Countries_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCountries_AggregateArgs = {
  distinct_on?: Maybe<Array<Countries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Order_By>>;
  where?: Maybe<Countries_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCountries_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootCouponsArgs = {
  distinct_on?: Maybe<Array<Coupons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Coupons_Order_By>>;
  where?: Maybe<Coupons_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCoupons_AggregateArgs = {
  distinct_on?: Maybe<Array<Coupons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Coupons_Order_By>>;
  where?: Maybe<Coupons_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCoupons_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootDeal_Of_The_DayArgs = {
  distinct_on?: Maybe<Array<Deal_Of_The_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Deal_Of_The_Day_Order_By>>;
  where?: Maybe<Deal_Of_The_Day_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDeal_Of_The_Day_AggregateArgs = {
  distinct_on?: Maybe<Array<Deal_Of_The_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Deal_Of_The_Day_Order_By>>;
  where?: Maybe<Deal_Of_The_Day_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDeal_Of_The_Day_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootDescriptionsArgs = {
  distinct_on?: Maybe<Array<Descriptions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Descriptions_Order_By>>;
  where?: Maybe<Descriptions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDescriptions_AggregateArgs = {
  distinct_on?: Maybe<Array<Descriptions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Descriptions_Order_By>>;
  where?: Maybe<Descriptions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDescriptions_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootEmail_ListArgs = {
  distinct_on?: Maybe<Array<Email_List_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Email_List_Order_By>>;
  where?: Maybe<Email_List_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootEmail_List_AggregateArgs = {
  distinct_on?: Maybe<Array<Email_List_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Email_List_Order_By>>;
  where?: Maybe<Email_List_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootEmail_List_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootFaq_TitlesArgs = {
  distinct_on?: Maybe<Array<Faq_Titles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Faq_Titles_Order_By>>;
  where?: Maybe<Faq_Titles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFaq_Titles_AggregateArgs = {
  distinct_on?: Maybe<Array<Faq_Titles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Faq_Titles_Order_By>>;
  where?: Maybe<Faq_Titles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFaq_Titles_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootFaqsArgs = {
  distinct_on?: Maybe<Array<Faqs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Faqs_Order_By>>;
  where?: Maybe<Faqs_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFaqs_AggregateArgs = {
  distinct_on?: Maybe<Array<Faqs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Faqs_Order_By>>;
  where?: Maybe<Faqs_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFaqs_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootInstruction_TitlesArgs = {
  distinct_on?: Maybe<Array<Instruction_Titles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instruction_Titles_Order_By>>;
  where?: Maybe<Instruction_Titles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootInstruction_Titles_AggregateArgs = {
  distinct_on?: Maybe<Array<Instruction_Titles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instruction_Titles_Order_By>>;
  where?: Maybe<Instruction_Titles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootInstruction_Titles_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootInstructionsArgs = {
  distinct_on?: Maybe<Array<Instructions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instructions_Order_By>>;
  where?: Maybe<Instructions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootInstructions_AggregateArgs = {
  distinct_on?: Maybe<Array<Instructions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instructions_Order_By>>;
  where?: Maybe<Instructions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootInstructions_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootInstructions_TypesArgs = {
  distinct_on?: Maybe<Array<Instructions_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instructions_Types_Order_By>>;
  where?: Maybe<Instructions_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootInstructions_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Instructions_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instructions_Types_Order_By>>;
  where?: Maybe<Instructions_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootInstructions_Types_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootOrder_Product_TypesArgs = {
  distinct_on?: Maybe<Array<Order_Product_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Product_Types_Order_By>>;
  where?: Maybe<Order_Product_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrder_Product_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Product_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Product_Types_Order_By>>;
  where?: Maybe<Order_Product_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrder_Product_Types_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootOrder_StatusArgs = {
  distinct_on?: Maybe<Array<Order_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Status_Order_By>>;
  where?: Maybe<Order_Status_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrder_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Status_Order_By>>;
  where?: Maybe<Order_Status_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrder_Status_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootProductArgs = {
  distinct_on?: Maybe<Array<Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Order_By>>;
  where?: Maybe<Product_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Order_By>>;
  where?: Maybe<Product_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootProduct_SeasonsArgs = {
  distinct_on?: Maybe<Array<Product_Seasons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Seasons_Order_By>>;
  where?: Maybe<Product_Seasons_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_Seasons_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Seasons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Seasons_Order_By>>;
  where?: Maybe<Product_Seasons_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_Seasons_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootProduct_TypeArgs = {
  distinct_on?: Maybe<Array<Product_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Type_Order_By>>;
  where?: Maybe<Product_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Product_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Product_Type_Order_By>>;
  where?: Maybe<Product_Type_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProduct_Type_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRecommendationsArgs = {
  distinct_on?: Maybe<Array<Recommendations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recommendations_Order_By>>;
  where?: Maybe<Recommendations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRecommendations_AggregateArgs = {
  distinct_on?: Maybe<Array<Recommendations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recommendations_Order_By>>;
  where?: Maybe<Recommendations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRecommendations_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootSeasonsArgs = {
  distinct_on?: Maybe<Array<Seasons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seasons_Order_By>>;
  where?: Maybe<Seasons_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSeasons_AggregateArgs = {
  distinct_on?: Maybe<Array<Seasons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seasons_Order_By>>;
  where?: Maybe<Seasons_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSeasons_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootStore_LocationsArgs = {
  distinct_on?: Maybe<Array<Store_Locations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Locations_Order_By>>;
  where?: Maybe<Store_Locations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStore_Locations_AggregateArgs = {
  distinct_on?: Maybe<Array<Store_Locations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Store_Locations_Order_By>>;
  where?: Maybe<Store_Locations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStore_Locations_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootSub_CategoriesArgs = {
  distinct_on?: Maybe<Array<Sub_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sub_Categories_Order_By>>;
  where?: Maybe<Sub_Categories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSub_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Sub_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sub_Categories_Order_By>>;
  where?: Maybe<Sub_Categories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSub_Categories_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUser_RatingsArgs = {
  distinct_on?: Maybe<Array<User_Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Ratings_Order_By>>;
  where?: Maybe<User_Ratings_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Ratings_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Ratings_Order_By>>;
  where?: Maybe<User_Ratings_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Ratings_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootWishlistsArgs = {
  distinct_on?: Maybe<Array<Wishlists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Wishlists_Order_By>>;
  where?: Maybe<Wishlists_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWishlists_AggregateArgs = {
  distinct_on?: Maybe<Array<Wishlists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Wishlists_Order_By>>;
  where?: Maybe<Wishlists_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWishlists_By_PkArgs = {
  id: Scalars['bigint'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/**
 * user rating pivot table
 *
 *
 * columns and relationships of "user_ratings"
 */
export type User_Ratings = {
  __typename?: 'user_ratings';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['bigint'];
  productTypeId: Scalars['Int'];
  /** An object relationship */
  product_type: Product_Type;
  rating: Scalars['Int'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  userId: Scalars['bigint'];
};

/** aggregated selection of "user_ratings" */
export type User_Ratings_Aggregate = {
  __typename?: 'user_ratings_aggregate';
  aggregate?: Maybe<User_Ratings_Aggregate_Fields>;
  nodes: Array<User_Ratings>;
};

/** aggregate fields of "user_ratings" */
export type User_Ratings_Aggregate_Fields = {
  __typename?: 'user_ratings_aggregate_fields';
  avg?: Maybe<User_Ratings_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Ratings_Max_Fields>;
  min?: Maybe<User_Ratings_Min_Fields>;
  stddev?: Maybe<User_Ratings_Stddev_Fields>;
  stddev_pop?: Maybe<User_Ratings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Ratings_Stddev_Samp_Fields>;
  sum?: Maybe<User_Ratings_Sum_Fields>;
  var_pop?: Maybe<User_Ratings_Var_Pop_Fields>;
  var_samp?: Maybe<User_Ratings_Var_Samp_Fields>;
  variance?: Maybe<User_Ratings_Variance_Fields>;
};


/** aggregate fields of "user_ratings" */
export type User_Ratings_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Ratings_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_ratings" */
export type User_Ratings_Aggregate_Order_By = {
  avg?: Maybe<User_Ratings_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Ratings_Max_Order_By>;
  min?: Maybe<User_Ratings_Min_Order_By>;
  stddev?: Maybe<User_Ratings_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Ratings_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Ratings_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Ratings_Sum_Order_By>;
  var_pop?: Maybe<User_Ratings_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Ratings_Var_Samp_Order_By>;
  variance?: Maybe<User_Ratings_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_ratings" */
export type User_Ratings_Arr_Rel_Insert_Input = {
  data: Array<User_Ratings_Insert_Input>;
  on_conflict?: Maybe<User_Ratings_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Ratings_Avg_Fields = {
  __typename?: 'user_ratings_avg_fields';
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_ratings" */
export type User_Ratings_Avg_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_ratings". All fields are combined with a logical 'AND'. */
export type User_Ratings_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Ratings_Bool_Exp>>>;
  _not?: Maybe<User_Ratings_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Ratings_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  productTypeId?: Maybe<Int_Comparison_Exp>;
  product_type?: Maybe<Product_Type_Bool_Exp>;
  rating?: Maybe<Int_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  userId?: Maybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_ratings" */
export enum User_Ratings_Constraint {
  /** unique or primary key constraint */
  UserRatingsPkey = 'user_ratings_pkey'
}

/** input type for incrementing integer column in table "user_ratings" */
export type User_Ratings_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "user_ratings" */
export type User_Ratings_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  product_type?: Maybe<Product_Type_Obj_Rel_Insert_Input>;
  rating?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type User_Ratings_Max_Fields = {
  __typename?: 'user_ratings_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "user_ratings" */
export type User_Ratings_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Ratings_Min_Fields = {
  __typename?: 'user_ratings_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "user_ratings" */
export type User_Ratings_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_ratings" */
export type User_Ratings_Mutation_Response = {
  __typename?: 'user_ratings_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User_Ratings>;
};

/** input type for inserting object relation for remote table "user_ratings" */
export type User_Ratings_Obj_Rel_Insert_Input = {
  data: User_Ratings_Insert_Input;
  on_conflict?: Maybe<User_Ratings_On_Conflict>;
};

/** on conflict condition type for table "user_ratings" */
export type User_Ratings_On_Conflict = {
  constraint: User_Ratings_Constraint;
  update_columns: Array<User_Ratings_Update_Column>;
  where?: Maybe<User_Ratings_Bool_Exp>;
};

/** ordering options when selecting data from "user_ratings" */
export type User_Ratings_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  product_type?: Maybe<Product_Type_Order_By>;
  rating?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "user_ratings" */
export type User_Ratings_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "user_ratings" */
export enum User_Ratings_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProductTypeId = 'productTypeId',
  /** column name */
  Rating = 'rating',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "user_ratings" */
export type User_Ratings_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type User_Ratings_Stddev_Fields = {
  __typename?: 'user_ratings_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_ratings" */
export type User_Ratings_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Ratings_Stddev_Pop_Fields = {
  __typename?: 'user_ratings_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_ratings" */
export type User_Ratings_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Ratings_Stddev_Samp_Fields = {
  __typename?: 'user_ratings_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_ratings" */
export type User_Ratings_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Ratings_Sum_Fields = {
  __typename?: 'user_ratings_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "user_ratings" */
export type User_Ratings_Sum_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** update columns of table "user_ratings" */
export enum User_Ratings_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProductTypeId = 'productTypeId',
  /** column name */
  Rating = 'rating',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type User_Ratings_Var_Pop_Fields = {
  __typename?: 'user_ratings_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_ratings" */
export type User_Ratings_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Ratings_Var_Samp_Fields = {
  __typename?: 'user_ratings_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_ratings" */
export type User_Ratings_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Ratings_Variance_Fields = {
  __typename?: 'user_ratings_variance_fields';
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_ratings" */
export type User_Ratings_Variance_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  addresses: Array<Addresses>;
  /** An aggregated array relationship */
  addresses_aggregate: Addresses_Aggregate;
  /** An array relationship */
  carts: Array<Cart>;
  /** An aggregated array relationship */
  carts_aggregate: Cart_Aggregate;
  createdAt?: Maybe<Scalars['timestamptz']>;
  email: Scalars['String'];
  firebaseUUID: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['bigint'];
  isDeleted: Scalars['Boolean'];
  lastName: Scalars['String'];
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregated array relationship */
  orders_aggregate: Orders_Aggregate;
  phoneNumber: Scalars['String'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  user_ratings: Array<User_Ratings>;
  /** An aggregated array relationship */
  user_ratings_aggregate: User_Ratings_Aggregate;
  /** An array relationship */
  wishlists: Array<Wishlists>;
  /** An aggregated array relationship */
  wishlists_aggregate: Wishlists_Aggregate;
};


/** columns and relationships of "users" */
export type UsersAddressesArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCartsArgs = {
  distinct_on?: Maybe<Array<Cart_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cart_Order_By>>;
  where?: Maybe<Cart_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCarts_AggregateArgs = {
  distinct_on?: Maybe<Array<Cart_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cart_Order_By>>;
  where?: Maybe<Cart_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_RatingsArgs = {
  distinct_on?: Maybe<Array<User_Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Ratings_Order_By>>;
  where?: Maybe<User_Ratings_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_Ratings_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Ratings_Order_By>>;
  where?: Maybe<User_Ratings_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWishlistsArgs = {
  distinct_on?: Maybe<Array<Wishlists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Wishlists_Order_By>>;
  where?: Maybe<Wishlists_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWishlists_AggregateArgs = {
  distinct_on?: Maybe<Array<Wishlists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Wishlists_Order_By>>;
  where?: Maybe<Wishlists_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: Maybe<Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
  stddev?: Maybe<Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Users_Sum_Order_By>;
  var_pop?: Maybe<Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Users_Var_Samp_Order_By>;
  variance?: Maybe<Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  addresses?: Maybe<Addresses_Bool_Exp>;
  carts?: Maybe<Cart_Bool_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  firebaseUUID?: Maybe<String_Comparison_Exp>;
  firstName?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  isDeleted?: Maybe<Boolean_Comparison_Exp>;
  lastName?: Maybe<String_Comparison_Exp>;
  orders?: Maybe<Orders_Bool_Exp>;
  phoneNumber?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  user_ratings?: Maybe<User_Ratings_Bool_Exp>;
  wishlists?: Maybe<Wishlists_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersFirebaseUuidKey = 'users_firebaseUUID_key',
  /** unique or primary key constraint */
  UsersPhoneNumberKey = 'users_phoneNumber_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing integer column in table "users" */
export type Users_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  addresses?: Maybe<Addresses_Arr_Rel_Insert_Input>;
  carts?: Maybe<Cart_Arr_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firebaseUUID?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  orders?: Maybe<Orders_Arr_Rel_Insert_Input>;
  phoneNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user_ratings?: Maybe<User_Ratings_Arr_Rel_Insert_Input>;
  wishlists?: Maybe<Wishlists_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firebaseUUID?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firebaseUUID?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
  phoneNumber?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firebaseUUID?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firebaseUUID?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
  phoneNumber?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  addresses_aggregate?: Maybe<Addresses_Aggregate_Order_By>;
  carts_aggregate?: Maybe<Cart_Aggregate_Order_By>;
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firebaseUUID?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isDeleted?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
  orders_aggregate?: Maybe<Orders_Aggregate_Order_By>;
  phoneNumber?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  user_ratings_aggregate?: Maybe<User_Ratings_Aggregate_Order_By>;
  wishlists_aggregate?: Maybe<Wishlists_Aggregate_Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  FirebaseUuid = 'firebaseUUID',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  LastName = 'lastName',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firebaseUUID?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  FirebaseUuid = 'firebaseUUID',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  LastName = 'lastName',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type VerifyRazorpaySignatureInput = {
  orderId: Scalars['Int'];
  razorPayOrderId: Scalars['String'];
  razorPayPaymentId: Scalars['String'];
  razorPaySignature: Scalars['String'];
};

export type VerifyRazorpaySignatureResponse = {
  __typename?: 'verifyRazorpaySignatureResponse';
  code?: Maybe<Scalars['Int']>;
  message: Scalars['String'];
};

/** columns and relationships of "wishlists" */
export type Wishlists = {
  __typename?: 'wishlists';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['bigint'];
  productTypeId: Scalars['Int'];
  /** An object relationship */
  product_type: Product_Type;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  userId: Scalars['bigint'];
};

/** aggregated selection of "wishlists" */
export type Wishlists_Aggregate = {
  __typename?: 'wishlists_aggregate';
  aggregate?: Maybe<Wishlists_Aggregate_Fields>;
  nodes: Array<Wishlists>;
};

/** aggregate fields of "wishlists" */
export type Wishlists_Aggregate_Fields = {
  __typename?: 'wishlists_aggregate_fields';
  avg?: Maybe<Wishlists_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Wishlists_Max_Fields>;
  min?: Maybe<Wishlists_Min_Fields>;
  stddev?: Maybe<Wishlists_Stddev_Fields>;
  stddev_pop?: Maybe<Wishlists_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Wishlists_Stddev_Samp_Fields>;
  sum?: Maybe<Wishlists_Sum_Fields>;
  var_pop?: Maybe<Wishlists_Var_Pop_Fields>;
  var_samp?: Maybe<Wishlists_Var_Samp_Fields>;
  variance?: Maybe<Wishlists_Variance_Fields>;
};


/** aggregate fields of "wishlists" */
export type Wishlists_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Wishlists_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "wishlists" */
export type Wishlists_Aggregate_Order_By = {
  avg?: Maybe<Wishlists_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Wishlists_Max_Order_By>;
  min?: Maybe<Wishlists_Min_Order_By>;
  stddev?: Maybe<Wishlists_Stddev_Order_By>;
  stddev_pop?: Maybe<Wishlists_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Wishlists_Stddev_Samp_Order_By>;
  sum?: Maybe<Wishlists_Sum_Order_By>;
  var_pop?: Maybe<Wishlists_Var_Pop_Order_By>;
  var_samp?: Maybe<Wishlists_Var_Samp_Order_By>;
  variance?: Maybe<Wishlists_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "wishlists" */
export type Wishlists_Arr_Rel_Insert_Input = {
  data: Array<Wishlists_Insert_Input>;
  on_conflict?: Maybe<Wishlists_On_Conflict>;
};

/** aggregate avg on columns */
export type Wishlists_Avg_Fields = {
  __typename?: 'wishlists_avg_fields';
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "wishlists" */
export type Wishlists_Avg_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "wishlists". All fields are combined with a logical 'AND'. */
export type Wishlists_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Wishlists_Bool_Exp>>>;
  _not?: Maybe<Wishlists_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Wishlists_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  productTypeId?: Maybe<Int_Comparison_Exp>;
  product_type?: Maybe<Product_Type_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  userId?: Maybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "wishlists" */
export enum Wishlists_Constraint {
  /** unique or primary key constraint */
  WishlistsPkey = 'wishlists_pkey'
}

/** input type for incrementing integer column in table "wishlists" */
export type Wishlists_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "wishlists" */
export type Wishlists_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  product_type?: Maybe<Product_Type_Obj_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Wishlists_Max_Fields = {
  __typename?: 'wishlists_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "wishlists" */
export type Wishlists_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Wishlists_Min_Fields = {
  __typename?: 'wishlists_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "wishlists" */
export type Wishlists_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "wishlists" */
export type Wishlists_Mutation_Response = {
  __typename?: 'wishlists_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Wishlists>;
};

/** input type for inserting object relation for remote table "wishlists" */
export type Wishlists_Obj_Rel_Insert_Input = {
  data: Wishlists_Insert_Input;
  on_conflict?: Maybe<Wishlists_On_Conflict>;
};

/** on conflict condition type for table "wishlists" */
export type Wishlists_On_Conflict = {
  constraint: Wishlists_Constraint;
  update_columns: Array<Wishlists_Update_Column>;
  where?: Maybe<Wishlists_Bool_Exp>;
};

/** ordering options when selecting data from "wishlists" */
export type Wishlists_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  product_type?: Maybe<Product_Type_Order_By>;
  updatedAt?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "wishlists" */
export type Wishlists_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "wishlists" */
export enum Wishlists_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProductTypeId = 'productTypeId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "wishlists" */
export type Wishlists_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Wishlists_Stddev_Fields = {
  __typename?: 'wishlists_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "wishlists" */
export type Wishlists_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Wishlists_Stddev_Pop_Fields = {
  __typename?: 'wishlists_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "wishlists" */
export type Wishlists_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Wishlists_Stddev_Samp_Fields = {
  __typename?: 'wishlists_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "wishlists" */
export type Wishlists_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Wishlists_Sum_Fields = {
  __typename?: 'wishlists_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  productTypeId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "wishlists" */
export type Wishlists_Sum_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** update columns of table "wishlists" */
export enum Wishlists_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProductTypeId = 'productTypeId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type Wishlists_Var_Pop_Fields = {
  __typename?: 'wishlists_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "wishlists" */
export type Wishlists_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Wishlists_Var_Samp_Fields = {
  __typename?: 'wishlists_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "wishlists" */
export type Wishlists_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Wishlists_Variance_Fields = {
  __typename?: 'wishlists_variance_fields';
  id?: Maybe<Scalars['Float']>;
  productTypeId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "wishlists" */
export type Wishlists_Variance_Order_By = {
  id?: Maybe<Order_By>;
  productTypeId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};
