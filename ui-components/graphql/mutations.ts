/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAgeGroup = /* GraphQL */ `
  mutation CreateAgeGroup(
    $condition: ModelAgeGroupConditionInput
    $input: CreateAgeGroupInput!
  ) {
    createAgeGroup(condition: $condition, input: $input) {
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
export const createAudience = /* GraphQL */ `
  mutation CreateAudience(
    $condition: ModelAudienceConditionInput
    $input: CreateAudienceInput!
  ) {
    createAudience(condition: $condition, input: $input) {
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
export const createCompetencySubType = /* GraphQL */ `
  mutation CreateCompetencySubType(
    $condition: ModelCompetencySubTypeConditionInput
    $input: CreateCompetencySubTypeInput!
  ) {
    createCompetencySubType(condition: $condition, input: $input) {
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
export const createCompetencyType = /* GraphQL */ `
  mutation CreateCompetencyType(
    $condition: ModelCompetencyTypeConditionInput
    $input: CreateCompetencyTypeInput!
  ) {
    createCompetencyType(condition: $condition, input: $input) {
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
export const createCredentialType = /* GraphQL */ `
  mutation CreateCredentialType(
    $condition: ModelCredentialTypeConditionInput
    $input: CreateCredentialTypeInput!
  ) {
    createCredentialType(condition: $condition, input: $input) {
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
export const createDelivery = /* GraphQL */ `
  mutation CreateDelivery(
    $condition: ModelDeliveryConditionInput
    $input: CreateDeliveryInput!
  ) {
    createDelivery(condition: $condition, input: $input) {
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
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $condition: ModelEmployeeConditionInput
    $input: CreateEmployeeInput!
  ) {
    createEmployee(condition: $condition, input: $input) {
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
export const createParticipant = /* GraphQL */ `
  mutation CreateParticipant(
    $condition: ModelParticipantConditionInput
    $input: CreateParticipantInput!
  ) {
    createParticipant(condition: $condition, input: $input) {
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
export const createReferral = /* GraphQL */ `
  mutation CreateReferral(
    $condition: ModelReferralConditionInput
    $input: CreateReferralInput!
  ) {
    createReferral(condition: $condition, input: $input) {
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
export const createTarget = /* GraphQL */ `
  mutation CreateTarget(
    $condition: ModelTargetConditionInput
    $input: CreateTargetInput!
  ) {
    createTarget(condition: $condition, input: $input) {
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
export const createTenant = /* GraphQL */ `
  mutation CreateTenant(
    $condition: ModelTenantConditionInput
    $input: CreateTenantInput!
  ) {
    createTenant(condition: $condition, input: $input) {
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
export const createTraining = /* GraphQL */ `
  mutation CreateTraining(
    $condition: ModelTrainingConditionInput
    $input: CreateTrainingInput!
  ) {
    createTraining(condition: $condition, input: $input) {
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
export const createTrainingType = /* GraphQL */ `
  mutation CreateTrainingType(
    $condition: ModelTrainingTypeConditionInput
    $input: CreateTrainingTypeInput!
  ) {
    createTrainingType(condition: $condition, input: $input) {
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
export const createType = /* GraphQL */ `
  mutation CreateType(
    $condition: ModelTypeConditionInput
    $input: CreateTypeInput!
  ) {
    createType(condition: $condition, input: $input) {
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
export const deleteAgeGroup = /* GraphQL */ `
  mutation DeleteAgeGroup(
    $condition: ModelAgeGroupConditionInput
    $input: DeleteAgeGroupInput!
  ) {
    deleteAgeGroup(condition: $condition, input: $input) {
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
export const deleteAudience = /* GraphQL */ `
  mutation DeleteAudience(
    $condition: ModelAudienceConditionInput
    $input: DeleteAudienceInput!
  ) {
    deleteAudience(condition: $condition, input: $input) {
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
export const deleteCompetencySubType = /* GraphQL */ `
  mutation DeleteCompetencySubType(
    $condition: ModelCompetencySubTypeConditionInput
    $input: DeleteCompetencySubTypeInput!
  ) {
    deleteCompetencySubType(condition: $condition, input: $input) {
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
export const deleteCompetencyType = /* GraphQL */ `
  mutation DeleteCompetencyType(
    $condition: ModelCompetencyTypeConditionInput
    $input: DeleteCompetencyTypeInput!
  ) {
    deleteCompetencyType(condition: $condition, input: $input) {
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
export const deleteCredentialType = /* GraphQL */ `
  mutation DeleteCredentialType(
    $condition: ModelCredentialTypeConditionInput
    $input: DeleteCredentialTypeInput!
  ) {
    deleteCredentialType(condition: $condition, input: $input) {
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
export const deleteDelivery = /* GraphQL */ `
  mutation DeleteDelivery(
    $condition: ModelDeliveryConditionInput
    $input: DeleteDeliveryInput!
  ) {
    deleteDelivery(condition: $condition, input: $input) {
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
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $condition: ModelEmployeeConditionInput
    $input: DeleteEmployeeInput!
  ) {
    deleteEmployee(condition: $condition, input: $input) {
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
export const deleteParticipant = /* GraphQL */ `
  mutation DeleteParticipant(
    $condition: ModelParticipantConditionInput
    $input: DeleteParticipantInput!
  ) {
    deleteParticipant(condition: $condition, input: $input) {
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
export const deleteReferral = /* GraphQL */ `
  mutation DeleteReferral(
    $condition: ModelReferralConditionInput
    $input: DeleteReferralInput!
  ) {
    deleteReferral(condition: $condition, input: $input) {
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
export const deleteTarget = /* GraphQL */ `
  mutation DeleteTarget(
    $condition: ModelTargetConditionInput
    $input: DeleteTargetInput!
  ) {
    deleteTarget(condition: $condition, input: $input) {
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
export const deleteTenant = /* GraphQL */ `
  mutation DeleteTenant(
    $condition: ModelTenantConditionInput
    $input: DeleteTenantInput!
  ) {
    deleteTenant(condition: $condition, input: $input) {
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
export const deleteTraining = /* GraphQL */ `
  mutation DeleteTraining(
    $condition: ModelTrainingConditionInput
    $input: DeleteTrainingInput!
  ) {
    deleteTraining(condition: $condition, input: $input) {
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
export const deleteTrainingType = /* GraphQL */ `
  mutation DeleteTrainingType(
    $condition: ModelTrainingTypeConditionInput
    $input: DeleteTrainingTypeInput!
  ) {
    deleteTrainingType(condition: $condition, input: $input) {
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
export const deleteType = /* GraphQL */ `
  mutation DeleteType(
    $condition: ModelTypeConditionInput
    $input: DeleteTypeInput!
  ) {
    deleteType(condition: $condition, input: $input) {
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
export const updateAgeGroup = /* GraphQL */ `
  mutation UpdateAgeGroup(
    $condition: ModelAgeGroupConditionInput
    $input: UpdateAgeGroupInput!
  ) {
    updateAgeGroup(condition: $condition, input: $input) {
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
export const updateAudience = /* GraphQL */ `
  mutation UpdateAudience(
    $condition: ModelAudienceConditionInput
    $input: UpdateAudienceInput!
  ) {
    updateAudience(condition: $condition, input: $input) {
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
export const updateCompetencySubType = /* GraphQL */ `
  mutation UpdateCompetencySubType(
    $condition: ModelCompetencySubTypeConditionInput
    $input: UpdateCompetencySubTypeInput!
  ) {
    updateCompetencySubType(condition: $condition, input: $input) {
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
export const updateCompetencyType = /* GraphQL */ `
  mutation UpdateCompetencyType(
    $condition: ModelCompetencyTypeConditionInput
    $input: UpdateCompetencyTypeInput!
  ) {
    updateCompetencyType(condition: $condition, input: $input) {
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
export const updateCredentialType = /* GraphQL */ `
  mutation UpdateCredentialType(
    $condition: ModelCredentialTypeConditionInput
    $input: UpdateCredentialTypeInput!
  ) {
    updateCredentialType(condition: $condition, input: $input) {
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
export const updateDelivery = /* GraphQL */ `
  mutation UpdateDelivery(
    $condition: ModelDeliveryConditionInput
    $input: UpdateDeliveryInput!
  ) {
    updateDelivery(condition: $condition, input: $input) {
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
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $condition: ModelEmployeeConditionInput
    $input: UpdateEmployeeInput!
  ) {
    updateEmployee(condition: $condition, input: $input) {
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
export const updateParticipant = /* GraphQL */ `
  mutation UpdateParticipant(
    $condition: ModelParticipantConditionInput
    $input: UpdateParticipantInput!
  ) {
    updateParticipant(condition: $condition, input: $input) {
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
export const updateReferral = /* GraphQL */ `
  mutation UpdateReferral(
    $condition: ModelReferralConditionInput
    $input: UpdateReferralInput!
  ) {
    updateReferral(condition: $condition, input: $input) {
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
export const updateTarget = /* GraphQL */ `
  mutation UpdateTarget(
    $condition: ModelTargetConditionInput
    $input: UpdateTargetInput!
  ) {
    updateTarget(condition: $condition, input: $input) {
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
export const updateTenant = /* GraphQL */ `
  mutation UpdateTenant(
    $condition: ModelTenantConditionInput
    $input: UpdateTenantInput!
  ) {
    updateTenant(condition: $condition, input: $input) {
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
export const updateTraining = /* GraphQL */ `
  mutation UpdateTraining(
    $condition: ModelTrainingConditionInput
    $input: UpdateTrainingInput!
  ) {
    updateTraining(condition: $condition, input: $input) {
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
export const updateTrainingType = /* GraphQL */ `
  mutation UpdateTrainingType(
    $condition: ModelTrainingTypeConditionInput
    $input: UpdateTrainingTypeInput!
  ) {
    updateTrainingType(condition: $condition, input: $input) {
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
export const updateType = /* GraphQL */ `
  mutation UpdateType(
    $condition: ModelTypeConditionInput
    $input: UpdateTypeInput!
  ) {
    updateType(condition: $condition, input: $input) {
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
