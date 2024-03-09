export interface ExternalFormState {
    [key: string]: string;
    ParticipantName: string;
    ParticipantGender: string;
    ParticipantPhone: string;
    ParticipantEmail: string;
    ParticipantOrganizationName: string;
    ParticipantAccomodation: string;
    CommitteePreference1: string;
    Committee1AllotmentPreference1: string;
    Committee1AllotmentPreference2: string;
    Committee1AllotmentPreference3: string;
    CommitteePreference2: string;
    Committee2AllotmentPreference1: string;
    Committee2AllotmentPreference2: string;
    Committee2AllotmentPreference3: string;
    CommitteePreference3: string;
    Committee3AllotmentPreference1: string;
    Committee3AllotmentPreference2: string;
    Committee3AllotmentPreference3: string;
    MUNDelegateCount: string;
    MUNDelegateExperience: string;
    MUNExecutiveCount: string;
    MUNExecutiveExperience: string;
  };

export interface InternalFormState {
  [key: string]: string;
  ParticipantName: string;
  ParticipantRegNumber: string;
  ParticipantPhone: string;
  ParticipantEmail: string;
  CommitteePreference1: string;
  Committee1AllotmentPreference1: string;
  Committee1AllotmentPreference2: string;
  Committee1AllotmentPreference3: string;
  CommitteePreference2: string;
  Committee2AllotmentPreference1: string;
  Committee2AllotmentPreference2: string;
  Committee2AllotmentPreference3: string;
  CommitteePreference3: string;
  Committee3AllotmentPreference1: string;
  Committee3AllotmentPreference2: string;
  Committee3AllotmentPreference3: string;
  MUNDelegateCount: string;
  MUNDelegateExperience: string;
  MUNExecutiveCount: string;
  MUNExecutiveExperience: string;
}

export interface DelegatesType {
  [key: string]: string;
  OrganizationName: string;
  HeadDelegate: string;
  EmailID: string;
  ContactNumber: string;
  DelegationStrength: string;
  AllotmentPreferences: string;
}