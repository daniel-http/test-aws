"use client";

import { useState, useEffect } from "react";
import { generateClient, SelectionSet } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator, Button, Flex, Text } from "@aws-amplify/ui-react";
import TenantCreateForm from "@/ui-components/TenantCreateForm";
import TrainingCreateForm from "@/ui-components/TrainingCreateForm";
import TenantUpdateForm from "@/ui-components/TenantUpdateForm";
import TrainingUpdateForm from "@/ui-components/TrainingUpdateForm";
import TrainingTypeCreateForm from "@/ui-components/TrainingTypeCreateForm";
import TrainingTypeUpdateForm from "@/ui-components/TrainingTypeUpdateForm";
import AgeGroupCreateForm from "@/ui-components/AgeGroupCreateForm";
import AgeGroupUpdateForm from "@/ui-components/AgeGroupUpdateForm";
import AudienceCreateForm from "@/ui-components/AudienceCreateForm";
import AudienceUpdateForm from "@/ui-components/AudienceUpdateForm";
import CompetencyTypeCreateForm from "@/ui-components/CompetencyTypeCreateForm";
import CompetencyTypeUpdateForm from "@/ui-components/CompetencyTypeUpdateForm";
import CompetencySubTypeCreateForm from "@/ui-components/CompetencySubTypeCreateForm";
import CompetencySubTypeUpdateForm from "@/ui-components/CompetencySubTypeUpdateForm";
import CredentialTypeCreateForm from "@/ui-components/CredentialTypeCreateForm";
import CredentialTypeUpdateForm from "@/ui-components/CredentialTypeUpdateForm";
import DeliveryCreateForm from "@/ui-components/DeliveryCreateForm";
import DeliveryUpdateForm from "@/ui-components/DeliveryUpdateForm";
import EmployeeCreateForm from "@/ui-components/EmployeeCreateForm";
import EmployeeUpdateForm from "@/ui-components/EmployeeUpdateForm";
import ParticipantCreateForm from "@/ui-components/ParticipantCreateForm";
import ParticipantUpdateForm from "@/ui-components/ParticipantUpdateForm";
import ReferralCreateForm from "@/ui-components/ReferralCreateForm";
import ReferralUpdateForm from "@/ui-components/ReferralUpdateForm";
import TargetCreateForm from "@/ui-components/TargetCreateForm";
import TargetUpdateForm from "@/ui-components/TargetUpdateForm";
import TypeCreateForm from "@/ui-components/TypeCreateForm";
import TypeUpdateForm from "@/ui-components/TypeUpdateForm";

Amplify.configure(outputs);

const client = generateClient<Schema>();

const codesFields = ['id', 'name', 'active', 'trainingType.*'] as const;
const codesFieldsParticipants = [...codesFields, 'participants.*'] as const;
const codesFieldsTrainings = [...codesFields, 'trainings.*'] as const;
type AgeGroup = SelectionSet<Schema["AgeGroup"]["type"], typeof codesFieldsParticipants>;
type Audience = SelectionSet<Schema["Audience"]["type"], typeof codesFieldsParticipants>;
type CredentialType = SelectionSet<Schema["CredentialType"]["type"], typeof codesFieldsTrainings>;
type Delivery = SelectionSet<Schema["Delivery"]["type"], typeof codesFieldsTrainings>;
type Referral = SelectionSet<Schema["Referral"]["type"], typeof codesFieldsTrainings>;
type Target = SelectionSet<Schema["Target"]["type"], typeof codesFieldsTrainings>;
type Type = SelectionSet<Schema["Type"]["type"], typeof codesFieldsTrainings>;

const employeeFields = ['id', 'organization', 'name', 'email', 'site', 'duration', 'position', 'training.*'] as const;
type Employee = SelectionSet<Schema["Employee"]["type"], typeof employeeFields>;
const participantFields = ['id', 'searchId', 'firstName', 'lastName', 'email', 'tnpalId', 'fein', 'feinExt', 'facilityName', 'contactTime', 'postalCode', 'county', 'audience.*', 'ageGroup.*', 'position', 'certificateIssued', 'followUpIssued', 'followUpMethod', 'followUpDate', 'training.*'] as const;
type Participant = SelectionSet<Schema["Participant"]["type"], typeof participantFields>;
const competencyTypeFields = ['id', 'name', 'active', 'trainingType.*', 'competencySubTypes.*'] as const;
type CompetencyType = SelectionSet<Schema["CompetencyType"]["type"], typeof competencyTypeFields>;

const competencySubTypeFields = ['id', 'name', 'active', 'sort', 'competencyType.*', 'trainings.*'] as const;
type CompetencySubType = SelectionSet<Schema["CompetencySubType"]["type"], typeof competencySubTypeFields>;

const tenantFields = ['id', 'name', 'code', 'active', 'trainings.*'] as const;
// type Tenant = Pick<Schema["Tenant"]["type"], "id" | "name" | "code" | "active" | "trainings">;
type Tenant = SelectionSet<Schema["Tenant"]["type"], typeof tenantFields>;

const trainingTypefields = ['id', 'name', 'code', 'active', 'tenant.*', 'trainings.*'] as const;
type TrainingType = SelectionSet<Schema["TrainingType"]["type"], typeof trainingTypefields>;

const trainingFields = ['id', 'lookupId', 'duration', 'startDate', 'employees.*', 'trainingType.*', 'trainingType.tenant.*'] as const;
// type Training = Pick<Schema["Training"]["type"], "id" | "lookupId" | "duration" | "startDate" | "employees" | "tenant">;
type Training = SelectionSet<Schema["Training"]["type"], typeof trainingFields>;


export default function App() {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<AgeGroup>();
  const [ageGroups, setAgeGroups] = useState<AgeGroup[]>([]);

  const [selectedAudience, setSelectedAudience] = useState<Audience>();
  const [audiences, setAudiences] = useState<Audience[]>([]);

  const [selectedCompetencyType, setSelectedCompetencyType] = useState<CompetencyType>();
  const [competencyTypes, setCompetencyTypes] = useState<CompetencyType[]>([]);

  const [selectedCredentialType, setSelectedCredentialType] = useState<CredentialType>();
  const [credentialTypes, setCredentialTypes] = useState<CredentialType[]>([]);

  const [selectedCompetencySubType, setSelectedCompetencySubType] = useState<CompetencySubType>();
  const [competencySubTypes, setCompetencySubTypes] = useState<CompetencySubType[]>([]);

  const [selectedDelivery, setSelectedDelivery] = useState<Delivery>();
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);

  const [selectedEmployee, setSelectedEmployee] = useState<Employee>();
  const [employees, setEmployees] = useState<Employee[]>([]);

  const [selectedParticipant, setSelectedParticipant] = useState<Participant>();
  const [participants, setParticipants] = useState<Participant[]>([]);

  const [selectedReferral, setSelectedReferral] = useState<Referral>();
  const [referrals, setReferrals] = useState<Referral[]>([]);

  const [selectedTarget, setSelectedTarget] = useState<Target>();
  const [targets, setTargets] = useState<Target[]>([]);

  const [selectedTenant, setSelectedTenant] = useState<Tenant>();
  const [tenants, setTenants] = useState<Tenant[]>([]);

  const [selectedTrainingType, setSelectedTrainingType] = useState<TrainingType>();
  const [trainingTypes, setTrainingTypes] = useState<TrainingType[]>([]);

  const [selectedTraining, setSelectedTraining] = useState<Training>();
  const [trainings, setTrainings] = useState<Training[]>([]);

  const [selectedType, setSelectedType] = useState<Type>();
  const [types, setTypes] = useState<Type[]>([]);

  useEffect(() => {
    function listAgeGroups() {
      return client.models.AgeGroup.observeQuery({ selectionSet: [...codesFieldsParticipants]}).subscribe({
        next: (data) => setAgeGroups([...data.items as unknown as AgeGroup[]]),
        error: (err) => {},
      });
    }
    function listAudiences() {
      return client.models.Audience.observeQuery({ selectionSet: [...codesFieldsParticipants]}).subscribe({
        next: (data) => setAudiences([...data.items as unknown as Audience[]]),
        error: (err) => {},
      });
    }
    function listCompetencyTypes() {
      return client.models.CompetencyType.observeQuery({ selectionSet: [...competencyTypeFields]}).subscribe({
        next: (data) => setCompetencyTypes([...data.items as unknown as CompetencyType[]]),
        error: (err) => {},
      });
    }    
    function listCredentialTypes() {
      return client.models.CredentialType.observeQuery({ selectionSet: [...codesFieldsTrainings]}).subscribe({
        next: (data) => setCredentialTypes([...data.items as unknown as CredentialType[]]),
        error: (err) => {},
      });
    }    
    function listCompetencySubTypes() {
      return client.models.CompetencySubType.observeQuery({ selectionSet: [...competencySubTypeFields]}).subscribe({
        next: (data) => setCompetencySubTypes([...data.items as unknown as CompetencySubType[]]),
        error: (err) => {},
      });
    }

    function listDeliveries() {
      return client.models.Delivery.observeQuery({ selectionSet: [...codesFieldsTrainings]}).subscribe({
        next: (data) => setDeliveries([...data.items as unknown as Delivery[]]),
        error: (err) => {},
      });
    }
    
    function listEmployees() {
      return client.models.Employee.observeQuery({ selectionSet: [...employeeFields]}).subscribe({
        next: (data) => setEmployees([...data.items as unknown as Employee[]]),
        error: (err) => {},
      });
    }
    
    function listParticipants() {
      return client.models.Participant.observeQuery({ selectionSet: [...participantFields]}).subscribe({
        next: (data) => setParticipants([...data.items as unknown as Participant[]]),
        error: (err) => {},
      });
    }
        
    function listReferrals() {
      return client.models.Referral.observeQuery({ selectionSet: [...codesFieldsTrainings]}).subscribe({
        next: (data) => setReferrals([...data.items as unknown as Referral[]]),
        error: (err) => {},
      });
    }
        
    function listTargets() {
      return client.models.Target.observeQuery({ selectionSet: [...codesFieldsTrainings]}).subscribe({
        next: (data) => setTargets([...data.items as unknown as Target[]]),
        error: (err) => {},
      });
    }

    function listTenants() {
      return client.models.Tenant.observeQuery({ selectionSet: [...tenantFields]}).subscribe({
        next: (data) => setTenants([...data.items as unknown as Tenant[]]),
        error: (err) => {},
      });
    }
    function listTrainings() {
      return client.models.Training.observeQuery({ filter: { trainingTypeId: { eq: selectedTrainingType?.id } }, selectionSet: [...trainingFields] }).subscribe({
        next: (data) => setTrainings([...data.items as unknown as Training[]]),
      });
    }
    function listTrainingTypes() {
      return client.models.TrainingType.observeQuery({ selectionSet: [...trainingTypefields]}).subscribe({
        next: (data) => setTrainingTypes([...data.items]),
      })
    }
    
    function listTypes() {
      return client.models.Type.observeQuery({ selectionSet: [...codesFieldsTrainings]}).subscribe({
        next: (data) => setTypes([...data.items as unknown as Type[]]),
        error: (err) => {},
      });
    }
    const ageGroupsSubscription = listAgeGroups();
    const audiencesSubscription = listAudiences();
    const competencyTypesSubscription = listCompetencyTypes();
    const credentialTypesSubscription = listCredentialTypes();
    const competencySubTypesSubscription = listCompetencySubTypes();
    const deliveriesSubscription = listDeliveries();
    const employeesSubscription = listEmployees();
    const participantsSubscription = listParticipants();
    const referralsSubscription = listReferrals();
    const targetsSubscription = listTargets();
    const tenantsSubscription = listTenants();
    const trainingsSubscription = listTrainings();
    const trainingTypesSubscription = listTrainingTypes();
    const typesSubscription = listTypes();
    return () => {
      ageGroupsSubscription.unsubscribe();
      audiencesSubscription.unsubscribe();
      competencyTypesSubscription.unsubscribe();
      credentialTypesSubscription.unsubscribe();
      competencySubTypesSubscription.unsubscribe();
      deliveriesSubscription.unsubscribe();
      employeesSubscription.unsubscribe();
      participantsSubscription.unsubscribe();
      referralsSubscription.unsubscribe();
      targetsSubscription.unsubscribe();
      tenantsSubscription.unsubscribe();
      trainingsSubscription.unsubscribe();
      trainingTypesSubscription.unsubscribe();
      typesSubscription.unsubscribe();
    }
  }, [setAgeGroups, setAudiences, setCompetencyTypes, setCompetencySubTypes, setDeliveries, setEmployees, setParticipants, setReferrals, setTargets, setTenants, setTrainings, setTrainingTypes, setTypes]);

  return (
        <main>
        <Authenticator>
        {({ signOut, user }) => (
        <Flex direction="column">
          <Flex direction="column">
            <h1>Hello {user?.signInDetails?.loginId}</h1>
            <button onClick={signOut}>Sign out</button>
          </Flex>
          <Flex direction="column">
            <h1>Age Group</h1>
            <Flex direction="row">
              <div>
                <h4>Create</h4>
                <AgeGroupCreateForm />
              </div>
              <div>
                <h4>Update</h4>
                <AgeGroupUpdateForm id={selectedAgeGroup?.id} />
              </div>
            </Flex>
            <ul>
                {ageGroups.map((ageGroup) => (
                  <li key={ageGroup.id}>
                    <Text>
                      Name: {ageGroup.name} | Active: {ageGroup.active ? "y" : "n"} | Training Type: {ageGroup.trainingType.name} | Participants: {ageGroup.participants?.length} 
                      <Button size="small"  variation="link" onClick={() => setSelectedAgeGroup(ageGroup)}>Edit</Button>
                    </Text>                  
                  </li>
                ))}
              </ul>
          </Flex>
          <Flex direction="column">
            <h1>Audience</h1>
            <Flex direction="row">
              <div>
                <h4>Create</h4>
                <AudienceCreateForm />
              </div>
              <div>
                <h4>Update</h4>
                <AudienceUpdateForm id={selectedAudience?.id} />
              </div>
            </Flex>
            <ul>
                {audiences.map((audience) => (
                  <li key={audience.id}>
                    <Text>
                      Name: {audience.name} | Active: {audience.active ? "y" : "n"} | Training Type: {audience.trainingType.name} | Participants: {audience.participants?.length} 
                      <Button size="small"  variation="link" onClick={() => setSelectedAudience(audience)}>Edit</Button>
                    </Text>                  
                  </li>
                ))}
              </ul>
          </Flex>
          <Flex direction="column">
            <h1>Competency Type</h1>
            <Flex direction="row">
              <div>
                <h4>Create</h4>
                <CompetencyTypeCreateForm />
              </div>
              <div>
                <h4>Update</h4>
                <CompetencyTypeUpdateForm id={selectedCompetencyType?.id} />
              </div>
            </Flex>
            <ul>
                {competencyTypes.map((competencyType) => (
                  <li key={competencyType.id}>
                    <Text>
                      Name: {competencyType.name} | Active: {competencyType.active ? "y" : "n"} | Training Type: {competencyType.trainingType.name} | Competency Sub Types: {competencyType.competencySubTypes?.length} 
                      <Button size="small"  variation="link" onClick={() => setSelectedCompetencyType(competencyType)}>Edit</Button>
                    </Text>                  
                  </li>
                ))}
              </ul>
          </Flex>
          <Flex direction="column">
            <h1>Credential Type</h1>
            <Flex direction="row">
              <div>
                <h4>Create</h4>
                <CredentialTypeCreateForm />
              </div>
              <div>
                <h4>Update</h4>
                <CredentialTypeUpdateForm id={selectedAudience?.id} />
              </div>
            </Flex>
            <ul>
                {credentialTypes.map((credentialType) => (
                  <li key={credentialType.id}>
                    <Text>
                      Name: {credentialType.name} | Active: {credentialType.active ? "y" : "n"} | Training Type: {credentialType.trainingType.name} 
                      <Button size="small"  variation="link" onClick={() => setSelectedCredentialType(credentialType)}>Edit</Button>
                    </Text>                  
                  </li>
                ))}
              </ul>
          </Flex>
          <Flex direction="column">
            <h1>Competency SubType</h1>
            <Flex direction="row">
              <div>
                <h4>Create</h4>
                <CompetencySubTypeCreateForm />
              </div>
              <div>
                <h4>Update</h4>
                <CompetencySubTypeUpdateForm id={selectedCompetencySubType?.id} />
              </div>
            </Flex>
            <ul>
                {competencySubTypes.map((competencySubType) => (
                  <li key={competencySubType.id}>
                    <Text>
                      Name: {competencySubType.name} | Actives: {competencySubType.active ? "y" : "n"} | Sort order: {competencySubType.sort} | Competency Type: {competencySubType.competencyType?.name} | Trainings: {competencySubType.trainings?.length} 
                      <Button size="small"  variation="link" onClick={() => setSelectedCompetencySubType(competencySubType)}>Edit</Button>
                    </Text>                  
                  </li>
                ))}
              </ul>
          </Flex>
          <Flex direction="column">
            <h1>Delivery</h1>
            <Flex direction="row">
              <div>
                <h4>Create</h4>
                <DeliveryCreateForm />
              </div>
              <div>
                <h4>Update</h4>
                <DeliveryUpdateForm id={selectedDelivery?.id} />
              </div>
            </Flex>
            <ul>
                {deliveries.map((delivery) => (
                  <li key={delivery.id}>
                    <Text>
                      Name: {delivery.name} | Active: {delivery.active ? "y" : "n"} | Training Type: {delivery.trainingType?.name} | Trainings: {delivery.trainings?.length} 
                      <Button size="small"  variation="link" onClick={() => setSelectedDelivery(delivery)}>Edit</Button>
                    </Text>                  
                  </li>
                ))}
              </ul>
          </Flex>
          <Flex direction="column">
            <h1>Employee</h1>
            <Flex direction="row">
              <div>
                <h4>Create</h4>
                <EmployeeCreateForm />
              </div>
              <div>
                <h4>Update</h4>
                <EmployeeUpdateForm id={selectedEmployee?.id} />
              </div>
            </Flex>
            <ul>
                {employees.map((employee) => (
                  <li key={employee.id}>
                    <Text>
                      Name: {employee.name} | Organization: {employee.organization} | Email: {employee.email} | Site: {employee.site} | Training Hours: {employee.duration} | Training: {employee.training.id} | Position: {employee.position}
                      <Button size="small"  variation="link" onClick={() => setSelectedEmployee(employee)}>Edit</Button>
                    </Text>                  
                  </li>
                ))}
              </ul>
          </Flex>
          <Flex direction="column">
            <h1>Participant</h1>
            <Flex direction="row">
              <div>
                <h4>Create</h4>
                <ParticipantCreateForm />
              </div>
              <div>
                <h4>Update</h4>
                <ParticipantUpdateForm id={selectedParticipant?.id} />
              </div>
            </Flex>
            <ul>
                {participants.map((participant) => (
                  <li key={participant.id}>
                    <Text>
                      Name: {participant.firstName} {participant.lastName} | Email: {participant.email} | TNPAL ID: {participant.tnpalId} | Duration: {participant.contactTime} | FEIN: {participant.fein} EXT: {participant.feinExt} | Facility Name: {participant.facilityName} | Postal Code: {participant.postalCode} | County {participant.county} | Audience {participant.audience?.name} | Age Group: {participant.ageGroup?.name} | Position: {participant.position} | Certificate Issued: {participant.certificateIssued ? "y" : "n"} | Follow Up Issued: {participant.followUpIssued ? "y" : "n"} | Follow Up Method: {participant.followUpMethod} | Follow Up Date: {participant.followUpDate}
                      <Button size="small"  variation="link" onClick={() => setSelectedParticipant(participant)}>Edit</Button>
                    </Text>                  
                  </li>
                ))}
              </ul>
          </Flex>
          <Flex direction="column">
            <h1>Referral</h1>
            <Flex direction="row">
              <div>
                <h4>Create</h4>
                <ReferralCreateForm />
              </div>
              <div>
                <h4>Update</h4>
                <ReferralUpdateForm id={selectedReferral?.id} />
              </div>
            </Flex>
            <ul>
                {referrals.map((referral) => (
                  <li key={referral.id}>
                    <Text>
                      Name: {referral.name} | Active: {referral.active ? "y" : "n"} | Training Type: {referral.trainingType.name} | Trainings: {referral.trainings?.length}
                      <Button size="small"  variation="link" onClick={() => setSelectedReferral(referral)}>Edit</Button>
                    </Text>                  
                  </li>
                ))}
              </ul>
          </Flex>
          <Flex direction="column">
            <h1>Target</h1>
            <Flex direction="row">
              <div>
                <h4>Create</h4>
                <TargetCreateForm />
              </div>
              <div>
                <h4>Update</h4>
                <TargetUpdateForm id={selectedTarget?.id} />
              </div>
            </Flex>
            <ul>
                {targets.map((target) => (
                  <li key={target.id}>
                    <Text>
                      Name: {target.name} | Active: {target.active ? "y" : "n"} | Training Type: {target.trainingType.name} | Trainings: {target.trainings?.length}
                      <Button size="small"  variation="link" onClick={() => setSelectedTarget(target)}>Edit</Button>
                    </Text>                  
                  </li>
                ))}
              </ul>
          </Flex>
          <Flex direction="column">
            <h1>Tenant</h1>
            <Flex direction="row">
              <div>
                <h4>Create</h4>
                <TenantCreateForm />
              </div>
              <div>
                <h4>Update</h4>
                <TenantUpdateForm id={selectedTenant?.id} />
              </div>
            </Flex>
            <ul>
                {tenants.map((tenant) => (
                  <li key={tenant.id}>
                    <Text>
                      {tenant.name} | {tenant.code} | {tenant.active ? "y" : "n"} | {tenant.trainings?.length} 
                      <Button size="small"  variation="link" onClick={() => setSelectedTenant(tenant)}>Edit</Button>
                    </Text>
                    
                  </li>
                ))}
              </ul>
          </Flex>
  
          <Flex direction="column">
            <h1>Training</h1>
            <Flex direction="row">
              <div>
                <h4>Create</h4>
                <TrainingCreateForm overrides={{tenantId: { value: selectedTenant?.id }}} />
              </div>
              <div>
                <h4>Update</h4>
                <TrainingUpdateForm id={selectedTraining?.id} />
              </div>
            </Flex>
            <ul>
              {trainings.map((training) => (
                <li key={training.id}>
                  <Text>
                  {training.lookupId} | {training.duration} | {training.startDate} | {training.trainingType?.name}  | {training.trainingType?.tenant?.name} 
                  <Button size="small"  variation="link" onClick={() => setSelectedTraining(training)}>Edit</Button>
                  </Text>
                  </li>
              ))}
            </ul>
          </Flex>
          <Flex direction="column">
            <h1>Training Type</h1>
            <Flex direction="row">
              <div>
                <h4>Create</h4>
                <TrainingTypeCreateForm overrides={{tenantId: { value: selectedTenant?.id }}} />
              </div>
              <div>
                <h4>Update</h4>
                <TrainingTypeUpdateForm id={selectedTrainingType?.id} />
              </div>
            </Flex>
            <ul>
              {trainingTypes.map((trainingType) => (
                <li key={trainingType.id}>
                  <Text flex={"flex"}>
                  {trainingType.name} | {trainingType.code} | {trainingType.active} | {trainingType.tenant?.name} 
                  <Button size="small"  variation="link" onClick={() => setSelectedTrainingType(trainingType)}>Edit</Button>
                  </Text>
                  </li>
              ))}
            </ul>
          </Flex>
          <Flex direction="column">
            <h1>Type</h1>
            <Flex direction="row">
              <div>
                <h4>Create</h4>
                <TypeCreateForm />
              </div>
              <div>
                <h4>Update</h4>
                <TypeUpdateForm id={selectedType?.id} />
              </div>
            </Flex>
            <ul>
                {types.map((type) => (
                  <li key={type.id}>
                    <Text>
                      Name: {type.name} | Active: {type.active ? "y" : "n"} | Training Type: {type.trainingType?.name} | Trainings: {type.trainings?.length} 
                      <Button size="small"  variation="link" onClick={() => setSelectedType(type)}>Edit</Button>
                    </Text>                  
                  </li>
                ))}
              </ul>
          </Flex>
        </Flex>)}
        </Authenticator>
      </main>    
  );
}
