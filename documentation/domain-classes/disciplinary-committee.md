# Disciplinary Committee

``` mermaid
classDiagram
Inmate <-- DisciplinaryCommittee
Appeal <-- DisciplinaryCommittee
IncidentReport --> DisciplinaryCommittee
DisciplinaryCommittee --> RehabilitationProgramCoordinator
  class DisciplinaryCommittee {
    -id : int
    -members : array
    -meetingDate : datetime
    -reviewAppeal()
    -assessProgress()
    -makeDecision()
  }
```

## Attributes

| Name                  | Type      | Description   |
| -                     | -         | -             |
| id                    | `integer` |               |
| members               | `array`   |               |
| meeting date          | `datetime`|               |

## Methods
`reviewAppeal()` - Reviews an inmate's appeal of a disciplinary decision.<br/>
`assessProgress()` - Assesses an inmate's progress in compliance with assigned punishments.<br/>
`makeDecision()` - Makes a decision regarding the outcome of an appeal or progress assessment.
