import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
const CODES = {
  'REQUESTED_REASON': [
    { label: 'Prior Report Card Score', key: 'PriorReportCardScore'},
    { label: 'Desire to Improve Program', key: 'DesireToImproveProgram'},
    { label: 'Professional Development Plan', key: 'ProfessionalDevelopmentPlan'},
    { label: 'Not Applicable', key: 'NotApplicable'},
    { label: 'TECTA Orientation', key: 'TectaOrientation'},
    { label: 'CDA', key: 'Cda'},
    { label: 'Academic Preparation', key: 'AcademicPreparation'},
    { label: 'Accreditation', key: 'Accreditation'},
    { label: 'TECPAC', key: 'Tecpac'},
  ],
  'CREDENTIAL_TYPE': ['Administrator', 'CDA', { key: 'InfantToddler', label: 'Infant/Toddler'}],
  'PRIORITY_LEVEL': [
    { key: 'FiveBusinessDays', label: '5 Business Days'}, 
    { key: 'TenBusinessDays', label: '10 Business Days'}, 
    { key: 'ThirtyBusinessDays', label: '30 Business Days'},
  ],
  'FOLLOW_UP_METHOD': [
    { key: 'PhoneCall', label: 'Phone Call' }, 
    'Visit', 'Text', 'Other', 'Email'
  ],
  'POSITION': ['Educator', 'Director', 'Other', { key: 'FccGcc', label: 'FCC/GCC'}],
  'COUNTY': [
    'Anderson', 'Bedford', 'Benton', 'Bledsoe', 'Blount', 'Bradley',
    'Campbell', 'Cannon', 'Carroll', 'Carter', 'Cheatham', 'Chester',
    'Claiborne', 'Clay', 'Cocke', 'Coffee', 'Crockett', 'Cumberland',
    'Davidson', 'Decatur', 'Dekalb', 'Dickson', 'Dyer', 'Fayette',
    'Fentress', 'Franklin', 'Gibson', 'Giles', 'Grainger', 'Greene',
    'Grundy', 'Hamblen', 'Hamilton', 'Hancock', 'Hardeman', 'Hardin',
    'Hawkins', 'Haywood', 'Henderson', 'Henry', 'Hickman', 'Houston',
    'Humphreys', 'Jackson', 'Jefferson', 'Johnson', 'Knox', 'Lake',
    'Lauderdale', 'Lawrence', 'Lewis', 'Lincoln', 'Loudon', 'Macon',
    'Madison', 'Marion', 'Marshall', 'Maury', 'McMinn', 'McNairy',
    'Meigs', 'Monroe', 'Montgomery', 'Moore', 'Morgan', 'Obion',
    'Overton', 'Perry', 'Pickett', 'Polk', 'Putnam', 'Rhea', 'Roane',
    'Robertson', 'Rutherford', 'Scott', 'Sequatchie', 'Sevier', 'Shelby',
    'Smith', 'Stewart', 'Sullivan', 'Sumner', 'Tipton', 'Trousdale',
    'Unicoi', 'Union', { key: 'VanBuren', label: 'Van Buren' }, 'Warren', 
    'Washington', 'Wayne', 'Weakley', 'White', 'Williamson', 'Wilson',
 ],
};

function authorize (allow: any) {
  return [allow.publicApiKey()];
}
const schema = a.schema({
    // _____________________________________
  // tenant_id | tenant_code | tenant_name
  // 1         | ccrr        | Child Care Resource and Referral
  // 2         | tecta       | Tennessee Early Childhood Training Alliance
  // 3         | tfccn       | Tennessee Family Child Care Network
  // 4         | tdhs_pl     | Tennessee Department of Human Services - Pre-Licensure
  // 5         | aimhitn     | Association of Infant Mental Health in Tennessee
  // 6         | traintn     | TrainTN
  // _____________________________________

  Tenant: a.model({
    name: a.string().required(),
    code: a.string().required(),
    active: a.boolean(),

    trainings: a.hasMany('Training', 'tenantId'),
    // audiences: a.hasMany('Audience', 'tenantId'),
    // deliveries: a.hasMany('Delivery', 'tenantId'),
    trainingTypes: a.hasMany('TrainingType', 'tenantId'),
  }),
  // _____________________________________________
  // training_type_id | training_type_code | training_type_description
  // 1                | ce                 | Community Events
  // 2                | ta                 | Technical Assistance
  // 3                | pta                | Parent Technical Assistance
  // 4                | tta                | Targeted Technical Assistance
  // 5                | ptta               | Parent Targeted Technical Assistance
  // 6                | trn                | Training
  // 7                | ptrn               | Parent Training
  // 8                | plg                | Peer Learning Group
  // 9                | ss                 | Self Study
  // 10               | cc                 | Community Cafe
  // 11               | cpr                | CPR
  // 12               | ff                 | Family First
  // 13               | mtr                | Mentoring
  // 14               | ccd                | Child Care Director
  // 15               | cnf                | Conference
  // 16               | et                 | External Training
  // 17               | ist                | In-Service Training
  // 18               | paa                | Pre-Approved Agency

  
  TrainingType: a.model({
    name: a.string().required(),
    code: a.string().required(),
    active: a.boolean(),
    tenantId: a.id().required(),
    tenant: a.belongsTo('Tenant',    'tenantId'),
    trainings: a.hasMany('Training', 'trainingTypeId'),
    audiences: a.hasMany('Audience', 'trainingTypeId'),
    ageGroups: a.hasMany('AgeGroup', 'trainingTypeId'),
    types:     a.hasMany('Type',     'trainingTypeId'),
    targets:   a.hasMany('Target',   'trainingTypeId'),
    deliveries:a.hasMany('Delivery', 'trainingTypeId'),
    referrals: a.hasMany('Referral', 'trainingTypeId'),
    credentialTypes: a.hasMany('CredentialType', 'trainingTypeId'),
    competencyTypes: a.hasMany('CompetencyType', 'trainingTypeId'),
  }),

  Employee: a
    .model({
      // TODO: We dont need these because we ahve a training
      //       and that has a tenant record which is the same 
      //       thing as this
      // organizationId: a.id().required(),
      // organization: a.belongsTo('Organization', 'organizationId'),
      organization: a.string(),
      name: a.string().required(),
      email: a.email().required(),
      site: a.string().required(),
      duration: a.time().required(), // aka staff time 1|2
      trainingId: a.id().required(),
      training: a.belongsTo('Training', 'trainingId'),
      position: a.enum(['Primary', 'Secondary']),
  }),

  AgeGroup: a.model({
    name: a.string().required(),
    active: a.boolean(),
    trainingTypeId: a.id().required(),
    trainingType: a.belongsTo('TrainingType', 'trainingTypeId'),
    participants: a.hasMany('Participant', 'ageGroupId'),
  }),

  Audience: a.model({
    name: a.string().required(),
    active: a.boolean(),
    trainingTypeId: a.id().required(),
    trainingType: a.belongsTo('TrainingType', 'trainingTypeId'),
    participants: a.hasMany('Participant', 'audienceId'),
  }),

  Type: a.model({
    name: a.string().required(),
    active: a.boolean(),
    trainingTypeId: a.id().required(),
    trainingType: a.belongsTo('TrainingType', 'trainingTypeId'),
    trainings: a.hasMany('Training', 'typeId'),
  }),

  Target: a.model({
    name: a.string().required(),
    active: a.boolean(),
    trainingTypeId: a.id().required(),
    trainingType: a.belongsTo('TrainingType', 'trainingTypeId'),
    trainings: a.hasMany('Training', 'targetId'),
  }),

  Delivery: a.model({
    name: a.string().required(),
    active: a.boolean(),
    trainingTypeId: a.id().required(),
    trainingType: a.belongsTo('TrainingType', 'trainingTypeId'),
    trainings: a.hasMany('Training', 'deliveryId'),
  }),

  Referral: a.model({
    name: a.string().required(),
    active: a.boolean(),
    trainingTypeId: a.id().required(),
    trainingType: a.belongsTo('TrainingType', 'trainingTypeId'),
    trainings: a.hasMany('Training', 'referralId'),
  }),

  CredentialType: a.model({
    name: a.string().required(),
    active: a.boolean(),
    trainingTypeId: a.id().required(),
    trainingType: a.belongsTo('TrainingType', 'trainingTypeId'),
    trainings: a.hasMany('Training', 'credentialTypeId'),
  }),

  CompetencyType: a.model({
    name: a.string().required(),
    active: a.boolean(),
    trainingTypeId: a.id().required(),
    trainingType: a.belongsTo('TrainingType', 'trainingTypeId'),
    trainings: a.hasMany('Training', 'competencyTypeId'),
    competencySubTypes: a.hasMany('CompetencySubType', 'competencyTypeId'),
  }),
  CompetencySubType: a.model({
    name: a.string().required(),
    active: a.boolean(),
    sort: a.integer(),
    competencyTypeId: a.id().required(),
    competencyType: a.belongsTo('CompetencyType', 'competencyTypeId'),
    trainings: a.hasMany('Training', 'competencySubTypeId'),
  }),

  Training: a.model({
    lookupId: a.integer().required(),
    duration: a.string(), // aka delivery time
    startDate: a.string(), // trainingdate
    employees: a.hasMany('Employee', 'trainingId'),
    tenantId: a.id().required(),
    tenant: a.belongsTo('Tenant', 'tenantId'),

    trainingTypeId: a.id().required(),
    trainingType: a.belongsTo('TrainingType', 'trainingTypeId'),

    participants: a.hasMany('Participant', 'trainingId'),

    typeId: a.id().required(),
    type: a.belongsTo('Type', 'typeId'),

    targetId: a.id().required(),
    target: a.belongsTo('Target', 'targetId'),
    
    deliveryId: a.id().required(),
    delivery: a.belongsTo('Delivery', 'deliveryId'),

    referralId: a.id().required(),
    referral: a.belongsTo('Referral', 'referralId'),

    sharedTraining: a.boolean(), // Is true if more than one employee

    hasCorrectiveActionPlan: a.boolean(),
    correctiveActionPlan: a.customType({
      startDate: a.date(),
    }),

    hasSafetyPlan: a.boolean(),
    safetyPlan: a.customType({
      startDate: a.date(),
      priorityLevel: a.enum([...CODES['PRIORITY_LEVEL'].map(v => (typeof v === 'string' ? v : v.key))]),
    }),

    hasCredential: a.boolean(),

    // credentialType: a.enum([...CODES['CREDENTIAL_TYPE'].map(v => (typeof v === 'string' ? v : v.key))]),
    credentialTypeId: a.id().required(),
    credentialType: a.belongsTo('CredentialType', 'credentialTypeId'),

    hasReferralEmail: a.boolean(),
    agencyReferral: a.customType({
      referralId: a.string(),
      requestorName: a.string(),
      email: a.email(),
    }),

    competencyTypeId: a.id().required(),
    competencyType: a.belongsTo('CompetencyType', 'competencyTypeId'),

    competencySubTypeId: a.id().required(),
    competencySubType: a.belongsTo('CompetencySubType', 'competencySubTypeId'),

    requestedReason: a.enum([...CODES['REQUESTED_REASON'].map(v=> typeof v === 'string' ? v : v.key)]),
    reportCardScore: a.float(),
    comments: a.string(),
    
  }),

  Participant: a
    .model({
      trainingId: a.id().required(),
      training: a.belongsTo('Training', 'trainingId'),
      searchId: a.integer().required(),
      firstName: a.string().required(),
      lastName: a.string().required(),
      email: a.email().required(),
      tnpalId: a.string(),

      fein: a.string(),
      feinExt: a.string(),
      facilityName: a.string().required(),
      contactTime: a.string().required(),
      postalCode: a.string().required(),
      county: a.enum([...CODES['COUNTY'].map(v => (typeof v === 'string' ? v : v.key))]),

      audienceId: a.id().required(),
      audience: a.belongsTo('Audience', 'audienceId'),
      ageGroupId: a.id().required(),
      ageGroup: a.belongsTo('AgeGroup', 'ageGroupId'),
      position: a.enum([...CODES['POSITION'].map(v => (typeof v === 'string' ? v : v.key))]),

      certicateIssued: a.boolean(),
      followUpIssued: a.boolean(),
      followUpMethod: a.enum([...CODES['FOLLOW_UP_METHOD'].map(v => (typeof v === 'string' ? v : v.key))]),
      followUpDate: a.date(),
    }),
}).authorization(authorize);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
