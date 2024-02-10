# Inmate

``` mermaid
classDiagram
Appeal *-- Inmate
Inmate *-- Punishment
Inmate --o IncidentReport
Inmate <-- CorrectionalOfficer
Inmate <-- DisciplinaryCommittee
Inmate --o RehabilitationProgram
Inmate <-- RehabilitationProgramCoordinator
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
```

## Attributes

| Name                  | Type      | Description   |
| -                     | -         | -             |
| id                    | `integer` |               |
| name                  | `string`  |               |
| age                   | `integer` |               |
| gender                | `enum`    |               |
| photograph            | `base64`  |               |
| medical history       | `array`   |               |
| behavioral history    | `array`   |               |
| disciplinary records  | `array`   |               |

## Methods
`updateProfile()` - Updates the inmate's profile information.<br/>
`getBehavioralHistory()` - Retrieves the inmate's behavioral history.<br/>
`assignPunishment()` - Assigns a punishment to the inmate.
