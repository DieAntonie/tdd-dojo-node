# Incident Report

``` mermaid
classDiagram
Inmate --o IncidentReport
IncidentReport --> DisciplinaryCommittee
IncidentReport o-- CorrectionalOfficer
IncidentReport o--> RehabilitationProgramCoordinator
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
```

## Attributes

| Name                  | Type      | Description   |
| -                     | -         | -             |
| id                    | `integer` |               |
| date                  | `datetime`|               |
| location              | `coords`  |               |
| description           | `string`  |               |
| evidence              | `array`   |               |
| inmates involved      | `array`   |               |
| staff involved        | `array`   |               |

## Methods
`addEvidence()` - Adds evidence to the incident report.<br/>
`notifyAuthorities()` - Notifies supervisory staff or the disciplinary committee about the incident.
