# Domain Classes

``` mermaid
---
title: Punishment Management System
---
classDiagram
IncidentReport --> DisciplinaryCommittee
Inmate <-- DisciplinaryCommittee
Appeal *-- Inmate
Appeal --> Punishment
Appeal <-- DisciplinaryCommittee
Inmate *-- Punishment
Inmate --o IncidentReport
Inmate <-- CorrectionalOfficer
Inmate --o RehabilitationProgram
Inmate <-- RehabilitationProgramCoordinator
IncidentReport o-- CorrectionalOfficer
IncidentReport o--> RehabilitationProgramCoordinator
DisciplinaryCommittee --> RehabilitationProgramCoordinator
RehabilitationProgram *-- RehabilitationProgramCoordinator

  direction LR
  class Appeal {
    -id : int
    -inmate_id : int
    -appeal_date : datetime
    -appeal_reason : string
    -status : enum
    -fileAppeal()
    -updateStatus()
  }
  class Inmate {
    -id : int
    -name : string
    -age : int
    -gender : enum
    -photograph : base64
    -medical_history : array
    -behavioral_history : array
    -disciplinary_records : array
    -updateProfile()
    -getBehavioralHistory()
    -assignPunishment()
  }
  class Punishment {
    -id : int
    -type : enum
    -severity : enum
    -duration : int
    -conditions : array
    -status : enum
    -assignPunishment()
    -updateStatus()
  }
  class IncidentReport {
    -id : int
    -date : datetime
    -location : coords
    -description : string
    -evidence : array
    -inmates_involved : array
    -staff_involved : array
    -addEvidence()
    -notifyAuthorities()
  }
  class CorrectionalOfficer {
    -id : int
    -name : string
    -rank : enum
    -department : enum
    -fileIncidentReport()
    -conductCheckIn()
    -reviewIncidentReport()
  }
  class RehabilitationProgram {
    -id : int
    -name : string
    -description : string
    -duration : int
    -participants : array
    -enrollParticipants()
    -trackProgress()
  }
  class DisciplinaryCommittee {
    -id : int
    -members : array
    -meetingDate : datetime
    -reviewAppeal()
    -assessProgress()
    -makeDecision()
  }
  class RehabilitationProgramCoordinator {
    -id : int
    -name : string
    -department : enum
    -identifyEligibleInmates()
    -monitorParticipation()
    -trackProgramEffectiveness()
  }

```

## [Inmate](domain-classes/inmate.md)

**Attributes**: id, name, age, gender, photograph, medical history, behavioral history, disciplinary records

**Methods**:
- `updateProfile()`
- `getBehavioralHistory()`
- `assignPunishment()`

## [Correctional Officer](domain-classes/correctional-officer.md)

**Attributes**: id, name, rank, department

**Methods**
- `fileIncidentReport()`
- `conductCheckIn()`
- `reviewIncidentReport()`

## [Disciplinary Committee](domain-classes/disciplinary-committee.md)

**Attributes**: id, members, meeting date

**Methods**
- `reviewAppeal()`
- `assessProgress()`
- `makeDecision()`

## [Rehabilitation Program Coordinator](domain-classes/rehabilitation-program-coordinator.md)

**Attributes**: id, name, department

**Methods**
- `identifyEligibleInmates()`
- `monitorParticipation()`
- `trackProgramEffectiveness()`

## [Incident Report](domain-classes/incident-report.md)

**Attributes**: id, date, time, location, description, evidence, inmates involved, staff involved

**Methods**
- `addEvidence()`
- `notifyAuthorities()`

## [Punishment](domain-classes/punishment.md)

**Attributes**: id, type, severity, duration, conditions, status (*e.g., pending, active, completed*)

**Methods**
- `assignPunishment()`
- `updateStatus()`

## [Appeal](domain-classes/appeal.md)

**Attributes**: id, inmate id, appeal date, appeal reason, status (*e.g., pending, reviewed, upheld, overturned*)

**Methods**
- `fileAppeal()`
- `updateStatus()`

## [Rehabilitation Program](domain-classes/rehabilitation-program.md)

**Attributes**: id, name, description, duration, participants

**Methods**
- `enrollParticipants()`
- `trackProgress()`
