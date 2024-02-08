# Domain Classes

- [Inmate](#inmate)
- [Correctional Officer](#correctionalofficer)
- [Disciplinary Committee](#disciplinarycommittee)
- [Rehabilitation Program Coordinator](#rehabilitationprogramcoordinator)
- [Incident Report](#incidentreport)
- [Punishment](#punishment)
- [Appeal](#appeal)
- [Rehabilitation Program](#rehabilitationprogram)


---
title: Punishment Management System
---
classDiagram
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
  class CorrectionalOfficer {
    -id : int
    -name : string
    -rank : enum
    -department : enum
    -fileIncidentReport()
    -conductCheckIn()
    -reviewIncidentReport()
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
  class Appeal {
    -id : int
    -inmate_id : int
    -appeal_date : datetime
    -appeal_reason : string
    -status : enum
    -fileAppeal()
    -updateStatus()
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


## Inmate

### Attributes
- ID
- name
- age
- gender
- photograph
- medical history
- behavioral history
- disciplinary records

### Methods
`updateProfile()` - Updates the inmate's profile information.<br/>
`getBehavioralHistory()` - Retrieves the inmate's behavioral history.<br/>
`assignPunishment()` - Assigns a punishment to the inmate.

## CorrectionalOfficer

### Attributes
- ID
- name
- rank
- department

### Methods
`fileIncidentReport()` - Files an incident report for a rule violation or disruptive incident.<br/>
`conductCheckIn()` - Conducts a check-in with an inmate under disciplinary supervision.<br/>
`reviewIncidentReport()` - Reviews incident reports submitted by other officers.

## DisciplinaryCommittee

### Attributes
- ID
- members
- meetingDate

### Methods
`reviewAppeal()` - Reviews an inmate's appeal of a disciplinary decision.<br/>
`assessProgress()` - Assesses an inmate's progress in compliance with assigned punishments.<br/>
`makeDecision()` - Makes a decision regarding the outcome of an appeal or progress assessment.

## RehabilitationProgramCoordinator

### Attributes
- ID
- name
- department

### Methods
`identifyEligibleInmates()` - Identifies eligible inmates for participation in rehabilitation programs.<br/>
`monitorParticipation()` - Monitors inmate participation and progress in rehabilitation programs.<br/>
`trackProgramEffectiveness()` - Tracks the effectiveness of rehabilitation programs in reducing recidivism rates.

## IncidentReport

### Attributes
- ID
- date
- time
- location
- description
- evidence
- inmatesInvolved
- staffInvolved

### Methods
`addEvidence()` - Adds evidence to the incident report.<br/>
`notifyAuthorities()` - Notifies supervisory staff or the disciplinary committee about the incident.

## Punishment

### Attributes
- ID
- type
- severity
- duration
- conditions
- status (e.g., pending, active, completed)

### Methods
`assignPunishment()` - Assigns a punishment to an inmate for a rule violation.<br/>
`updateStatus()` - Updates the status of the punishment (e.g., completed, revoked).

## Appeal

### Attributes
- ID
- inmateID
- appealDate
- appealReason
- status (e.g., pending, reviewed, upheld, overturned)

### Methods
`fileAppeal()` - Files an appeal against a disciplinary decision.<br/>
`updateStatus()` - Updates the status of the appeal based on the outcome of the review.

## RehabilitationProgram

### Attributes
- ID
- name
- description
- duration
- participants

### Methods
`enrollParticipants()` - Enrolls eligible inmates in the rehabilitation program.<br/>
`trackProgress()` - Tracks participant progress and completion of program milestones.
