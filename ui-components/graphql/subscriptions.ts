/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAgeGroup = /* GraphQL */ `
  subscription OnCreateAgeGroup($filter: ModelSubscriptionAgeGroupFilterInput) {
    onCreateAgeGroup(filter: $filter) {
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
export const onCreateAudience = /* GraphQL */ `
  subscription OnCreateAudience($filter: ModelSubscriptionAudienceFilterInput) {
    onCreateAudience(filter: $filter) {
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
export const onCreateCompetencySubType = /* GraphQL */ `
  subscription OnCreateCompetencySubType(
    $filter: ModelSubscriptionCompetencySubTypeFilterInput
  ) {
    onCreateCompetencySubType(filter: $filter) {
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
export const onCreateCompetencyType = /* GraphQL */ `
  subscription OnCreateCompetencyType(
    $filter: ModelSubscriptionCompetencyTypeFilterInput
  ) {
    onCreateCompetencyType(filter: $filter) {
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
export const onCreateCredentialType = /* GraphQL */ `
  subscription OnCreateCredentialType(
    $filter: ModelSubscriptionCredentialTypeFilterInput
  ) {
    onCreateCredentialType(filter: $filter) {
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
export const onCreateDelivery = /* GraphQL */ `
  subscription OnCreateDelivery($filter: ModelSubscriptionDeliveryFilterInput) {
    onCreateDelivery(filter: $filter) {
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
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onCreateEmployee(filter: $filter) {
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
export const onCreateParticipant = /* GraphQL */ `
  subscription OnCreateParticipant(
    $filter: ModelSubscriptionParticipantFilterInput
  ) {
    onCreateParticipant(filter: $filter) {
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
export const onCreateReferral = /* GraphQL */ `
  subscription OnCreateReferral($filter: ModelSubscriptionReferralFilterInput) {
    onCreateReferral(filter: $filter) {
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
export const onCreateTarget = /* GraphQL */ `
  subscription OnCreateTarget($filter: ModelSubscriptionTargetFilterInput) {
    onCreateTarget(filter: $filter) {
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
export const onCreateTenant = /* GraphQL */ `
  subscription OnCreateTenant($filter: ModelSubscriptionTenantFilterInput) {
    onCreateTenant(filter: $filter) {
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
export const onCreateTraining = /* GraphQL */ `
  subscription OnCreateTraining($filter: ModelSubscriptionTrainingFilterInput) {
    onCreateTraining(filter: $filter) {
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
export const onCreateTrainingType = /* GraphQL */ `
  subscription OnCreateTrainingType(
    $filter: ModelSubscriptionTrainingTypeFilterInput
  ) {
    onCreateTrainingType(filter: $filter) {
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
export const onCreateType = /* GraphQL */ `
  subscription OnCreateType($filter: ModelSubscriptionTypeFilterInput) {
    onCreateType(filter: $filter) {
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
export const onDeleteAgeGroup = /* GraphQL */ `
  subscription OnDeleteAgeGroup($filter: ModelSubscriptionAgeGroupFilterInput) {
    onDeleteAgeGroup(filter: $filter) {
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
export const onDeleteAudience = /* GraphQL */ `
  subscription OnDeleteAudience($filter: ModelSubscriptionAudienceFilterInput) {
    onDeleteAudience(filter: $filter) {
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
export const onDeleteCompetencySubType = /* GraphQL */ `
  subscription OnDeleteCompetencySubType(
    $filter: ModelSubscriptionCompetencySubTypeFilterInput
  ) {
    onDeleteCompetencySubType(filter: $filter) {
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
export const onDeleteCompetencyType = /* GraphQL */ `
  subscription OnDeleteCompetencyType(
    $filter: ModelSubscriptionCompetencyTypeFilterInput
  ) {
    onDeleteCompetencyType(filter: $filter) {
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
export const onDeleteCredentialType = /* GraphQL */ `
  subscription OnDeleteCredentialType(
    $filter: ModelSubscriptionCredentialTypeFilterInput
  ) {
    onDeleteCredentialType(filter: $filter) {
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
export const onDeleteDelivery = /* GraphQL */ `
  subscription OnDeleteDelivery($filter: ModelSubscriptionDeliveryFilterInput) {
    onDeleteDelivery(filter: $filter) {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onDeleteEmployee(filter: $filter) {
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
export const onDeleteParticipant = /* GraphQL */ `
  subscription OnDeleteParticipant(
    $filter: ModelSubscriptionParticipantFilterInput
  ) {
    onDeleteParticipant(filter: $filter) {
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
export const onDeleteReferral = /* GraphQL */ `
  subscription OnDeleteReferral($filter: ModelSubscriptionReferralFilterInput) {
    onDeleteReferral(filter: $filter) {
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
export const onDeleteTarget = /* GraphQL */ `
  subscription OnDeleteTarget($filter: ModelSubscriptionTargetFilterInput) {
    onDeleteTarget(filter: $filter) {
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
export const onDeleteTenant = /* GraphQL */ `
  subscription OnDeleteTenant($filter: ModelSubscriptionTenantFilterInput) {
    onDeleteTenant(filter: $filter) {
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
export const onDeleteTraining = /* GraphQL */ `
  subscription OnDeleteTraining($filter: ModelSubscriptionTrainingFilterInput) {
    onDeleteTraining(filter: $filter) {
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
export const onDeleteTrainingType = /* GraphQL */ `
  subscription OnDeleteTrainingType(
    $filter: ModelSubscriptionTrainingTypeFilterInput
  ) {
    onDeleteTrainingType(filter: $filter) {
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
export const onDeleteType = /* GraphQL */ `
  subscription OnDeleteType($filter: ModelSubscriptionTypeFilterInput) {
    onDeleteType(filter: $filter) {
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
export const onUpdateAgeGroup = /* GraphQL */ `
  subscription OnUpdateAgeGroup($filter: ModelSubscriptionAgeGroupFilterInput) {
    onUpdateAgeGroup(filter: $filter) {
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
export const onUpdateAudience = /* GraphQL */ `
  subscription OnUpdateAudience($filter: ModelSubscriptionAudienceFilterInput) {
    onUpdateAudience(filter: $filter) {
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
export const onUpdateCompetencySubType = /* GraphQL */ `
  subscription OnUpdateCompetencySubType(
    $filter: ModelSubscriptionCompetencySubTypeFilterInput
  ) {
    onUpdateCompetencySubType(filter: $filter) {
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
export const onUpdateCompetencyType = /* GraphQL */ `
  subscription OnUpdateCompetencyType(
    $filter: ModelSubscriptionCompetencyTypeFilterInput
  ) {
    onUpdateCompetencyType(filter: $filter) {
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
export const onUpdateCredentialType = /* GraphQL */ `
  subscription OnUpdateCredentialType(
    $filter: ModelSubscriptionCredentialTypeFilterInput
  ) {
    onUpdateCredentialType(filter: $filter) {
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
export const onUpdateDelivery = /* GraphQL */ `
  subscription OnUpdateDelivery($filter: ModelSubscriptionDeliveryFilterInput) {
    onUpdateDelivery(filter: $filter) {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onUpdateEmployee(filter: $filter) {
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
export const onUpdateParticipant = /* GraphQL */ `
  subscription OnUpdateParticipant(
    $filter: ModelSubscriptionParticipantFilterInput
  ) {
    onUpdateParticipant(filter: $filter) {
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
export const onUpdateReferral = /* GraphQL */ `
  subscription OnUpdateReferral($filter: ModelSubscriptionReferralFilterInput) {
    onUpdateReferral(filter: $filter) {
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
export const onUpdateTarget = /* GraphQL */ `
  subscription OnUpdateTarget($filter: ModelSubscriptionTargetFilterInput) {
    onUpdateTarget(filter: $filter) {
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
export const onUpdateTenant = /* GraphQL */ `
  subscription OnUpdateTenant($filter: ModelSubscriptionTenantFilterInput) {
    onUpdateTenant(filter: $filter) {
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
export const onUpdateTraining = /* GraphQL */ `
  subscription OnUpdateTraining($filter: ModelSubscriptionTrainingFilterInput) {
    onUpdateTraining(filter: $filter) {
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
export const onUpdateTrainingType = /* GraphQL */ `
  subscription OnUpdateTrainingType(
    $filter: ModelSubscriptionTrainingTypeFilterInput
  ) {
    onUpdateTrainingType(filter: $filter) {
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
export const onUpdateType = /* GraphQL */ `
  subscription OnUpdateType($filter: ModelSubscriptionTypeFilterInput) {
    onUpdateType(filter: $filter) {
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
