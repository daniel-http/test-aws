/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAgeGroup = /* GraphQL */ `
  query GetAgeGroup($id: ID!) {
    getAgeGroup(id: $id) {
      active
      createdAt
      id
      name
      participants {
        nextToken
        __typename
      }
      trainingType {
        active
        code
        createdAt
        id
        name
        tenantId
        updatedAt
        __typename
      }
      trainingTypeId
      updatedAt
      __typename
    }
  }
`;
export const getAudience = /* GraphQL */ `
  query GetAudience($id: ID!) {
    getAudience(id: $id) {
      active
      createdAt
      id
      name
      participants {
        nextToken
        __typename
      }
      trainingType {
        active
        code
        createdAt
        id
        name
        tenantId
        updatedAt
        __typename
      }
      trainingTypeId
      updatedAt
      __typename
    }
  }
`;
export const getCompetencySubType = /* GraphQL */ `
  query GetCompetencySubType($id: ID!) {
    getCompetencySubType(id: $id) {
      active
      competencyType {
        active
        createdAt
        id
        name
        trainingTypeId
        updatedAt
        __typename
      }
      competencyTypeId
      createdAt
      id
      name
      sort
      trainings {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const getCompetencyType = /* GraphQL */ `
  query GetCompetencyType($id: ID!) {
    getCompetencyType(id: $id) {
      active
      competencySubTypes {
        nextToken
        __typename
      }
      createdAt
      id
      name
      trainingType {
        active
        code
        createdAt
        id
        name
        tenantId
        updatedAt
        __typename
      }
      trainingTypeId
      trainings {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const getCredentialType = /* GraphQL */ `
  query GetCredentialType($id: ID!) {
    getCredentialType(id: $id) {
      active
      createdAt
      id
      name
      trainingType {
        active
        code
        createdAt
        id
        name
        tenantId
        updatedAt
        __typename
      }
      trainingTypeId
      trainings {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const getDelivery = /* GraphQL */ `
  query GetDelivery($id: ID!) {
    getDelivery(id: $id) {
      active
      createdAt
      id
      name
      trainingType {
        active
        code
        createdAt
        id
        name
        tenantId
        updatedAt
        __typename
      }
      trainingTypeId
      trainings {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
      createdAt
      duration
      email
      id
      name
      organization
      position
      site
      training {
        comments
        competencySubTypeId
        competencyTypeId
        createdAt
        credentialTypeId
        deliveryId
        duration
        hasCorrectiveActionPlan
        hasCredential
        hasReferralEmail
        hasSafetyPlan
        id
        lookupId
        referralId
        reportCardScore
        requestedReason
        sharedTraining
        startDate
        targetId
        tenantId
        trainingTypeId
        typeId
        updatedAt
        __typename
      }
      trainingId
      updatedAt
      __typename
    }
  }
`;
export const getParticipant = /* GraphQL */ `
  query GetParticipant($id: ID!) {
    getParticipant(id: $id) {
      ageGroup {
        active
        createdAt
        id
        name
        trainingTypeId
        updatedAt
        __typename
      }
      ageGroupId
      audience {
        active
        createdAt
        id
        name
        trainingTypeId
        updatedAt
        __typename
      }
      audienceId
      certicateIssued
      contactTime
      county
      createdAt
      email
      facilityName
      fein
      feinExt
      firstName
      followUpDate
      followUpIssued
      followUpMethod
      id
      lastName
      position
      postalCode
      searchId
      tnpalId
      training {
        comments
        competencySubTypeId
        competencyTypeId
        createdAt
        credentialTypeId
        deliveryId
        duration
        hasCorrectiveActionPlan
        hasCredential
        hasReferralEmail
        hasSafetyPlan
        id
        lookupId
        referralId
        reportCardScore
        requestedReason
        sharedTraining
        startDate
        targetId
        tenantId
        trainingTypeId
        typeId
        updatedAt
        __typename
      }
      trainingId
      updatedAt
      __typename
    }
  }
`;
export const getReferral = /* GraphQL */ `
  query GetReferral($id: ID!) {
    getReferral(id: $id) {
      active
      createdAt
      id
      name
      trainingType {
        active
        code
        createdAt
        id
        name
        tenantId
        updatedAt
        __typename
      }
      trainingTypeId
      trainings {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const getTarget = /* GraphQL */ `
  query GetTarget($id: ID!) {
    getTarget(id: $id) {
      active
      createdAt
      id
      name
      trainingType {
        active
        code
        createdAt
        id
        name
        tenantId
        updatedAt
        __typename
      }
      trainingTypeId
      trainings {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const getTenant = /* GraphQL */ `
  query GetTenant($id: ID!) {
    getTenant(id: $id) {
      active
      code
      createdAt
      id
      name
      trainingTypes {
        nextToken
        __typename
      }
      trainings {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const getTraining = /* GraphQL */ `
  query GetTraining($id: ID!) {
    getTraining(id: $id) {
      agencyReferral {
        email
        referralId
        requestorName
        __typename
      }
      comments
      competencySubType {
        active
        competencyTypeId
        createdAt
        id
        name
        sort
        updatedAt
        __typename
      }
      competencySubTypeId
      competencyType {
        active
        createdAt
        id
        name
        trainingTypeId
        updatedAt
        __typename
      }
      competencyTypeId
      correctiveActionPlan {
        startDate
        __typename
      }
      createdAt
      credentialType {
        active
        createdAt
        id
        name
        trainingTypeId
        updatedAt
        __typename
      }
      credentialTypeId
      delivery {
        active
        createdAt
        id
        name
        trainingTypeId
        updatedAt
        __typename
      }
      deliveryId
      duration
      employees {
        nextToken
        __typename
      }
      hasCorrectiveActionPlan
      hasCredential
      hasReferralEmail
      hasSafetyPlan
      id
      lookupId
      participants {
        nextToken
        __typename
      }
      referral {
        active
        createdAt
        id
        name
        trainingTypeId
        updatedAt
        __typename
      }
      referralId
      reportCardScore
      requestedReason
      safetyPlan {
        priorityLevel
        startDate
        __typename
      }
      sharedTraining
      startDate
      target {
        active
        createdAt
        id
        name
        trainingTypeId
        updatedAt
        __typename
      }
      targetId
      tenant {
        active
        code
        createdAt
        id
        name
        updatedAt
        __typename
      }
      tenantId
      trainingType {
        active
        code
        createdAt
        id
        name
        tenantId
        updatedAt
        __typename
      }
      trainingTypeId
      type {
        active
        createdAt
        id
        name
        trainingTypeId
        updatedAt
        __typename
      }
      typeId
      updatedAt
      __typename
    }
  }
`;
export const getTrainingType = /* GraphQL */ `
  query GetTrainingType($id: ID!) {
    getTrainingType(id: $id) {
      active
      ageGroups {
        nextToken
        __typename
      }
      audiences {
        nextToken
        __typename
      }
      code
      competencyTypes {
        nextToken
        __typename
      }
      createdAt
      credentialTypes {
        nextToken
        __typename
      }
      deliveries {
        nextToken
        __typename
      }
      id
      name
      referrals {
        nextToken
        __typename
      }
      targets {
        nextToken
        __typename
      }
      tenant {
        active
        code
        createdAt
        id
        name
        updatedAt
        __typename
      }
      tenantId
      trainings {
        nextToken
        __typename
      }
      types {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const getType = /* GraphQL */ `
  query GetType($id: ID!) {
    getType(id: $id) {
      active
      createdAt
      id
      name
      trainingType {
        active
        code
        createdAt
        id
        name
        tenantId
        updatedAt
        __typename
      }
      trainingTypeId
      trainings {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const listAgeGroups = /* GraphQL */ `
  query ListAgeGroups(
    $filter: ModelAgeGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAgeGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        active
        createdAt
        id
        name
        trainingTypeId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listAudiences = /* GraphQL */ `
  query ListAudiences(
    $filter: ModelAudienceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAudiences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        active
        createdAt
        id
        name
        trainingTypeId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listCompetencySubTypes = /* GraphQL */ `
  query ListCompetencySubTypes(
    $filter: ModelCompetencySubTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompetencySubTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        active
        competencyTypeId
        createdAt
        id
        name
        sort
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listCompetencyTypes = /* GraphQL */ `
  query ListCompetencyTypes(
    $filter: ModelCompetencyTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompetencyTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        active
        createdAt
        id
        name
        trainingTypeId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listCredentialTypes = /* GraphQL */ `
  query ListCredentialTypes(
    $filter: ModelCredentialTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCredentialTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        active
        createdAt
        id
        name
        trainingTypeId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listDeliveries = /* GraphQL */ `
  query ListDeliveries(
    $filter: ModelDeliveryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeliveries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        active
        createdAt
        id
        name
        trainingTypeId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        duration
        email
        id
        name
        organization
        position
        site
        trainingId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listParticipants = /* GraphQL */ `
  query ListParticipants(
    $filter: ModelParticipantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParticipants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        ageGroupId
        audienceId
        certicateIssued
        contactTime
        county
        createdAt
        email
        facilityName
        fein
        feinExt
        firstName
        followUpDate
        followUpIssued
        followUpMethod
        id
        lastName
        position
        postalCode
        searchId
        tnpalId
        trainingId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listReferrals = /* GraphQL */ `
  query ListReferrals(
    $filter: ModelReferralFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReferrals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        active
        createdAt
        id
        name
        trainingTypeId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTargets = /* GraphQL */ `
  query ListTargets(
    $filter: ModelTargetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTargets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        active
        createdAt
        id
        name
        trainingTypeId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTenants = /* GraphQL */ `
  query ListTenants(
    $filter: ModelTenantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTenants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        active
        code
        createdAt
        id
        name
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTrainingTypes = /* GraphQL */ `
  query ListTrainingTypes(
    $filter: ModelTrainingTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrainingTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        active
        code
        createdAt
        id
        name
        tenantId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTrainings = /* GraphQL */ `
  query ListTrainings(
    $filter: ModelTrainingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrainings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        comments
        competencySubTypeId
        competencyTypeId
        createdAt
        credentialTypeId
        deliveryId
        duration
        hasCorrectiveActionPlan
        hasCredential
        hasReferralEmail
        hasSafetyPlan
        id
        lookupId
        referralId
        reportCardScore
        requestedReason
        sharedTraining
        startDate
        targetId
        tenantId
        trainingTypeId
        typeId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTypes = /* GraphQL */ `
  query ListTypes(
    $filter: ModelTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        active
        createdAt
        id
        name
        trainingTypeId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
