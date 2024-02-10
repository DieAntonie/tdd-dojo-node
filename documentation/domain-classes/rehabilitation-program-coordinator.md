# Rehabilitation Program Coordinator

``` mermaid
classDiagram
Inmate <-- RehabilitationProgramCoordinator
IncidentReport o--> RehabilitationProgramCoordinator
DisciplinaryCommittee --> RehabilitationProgramCoordinator
RehabilitationProgram *-- RehabilitationProgramCoordinator
  class RehabilitationProgramCoordinator {
    -id : int
    -name : string
    -department : enum
    -identifyEligibleInmates()
    -monitorParticipation()
    -trackProgramEffectiveness()
  }
```

## Attributes

| Name                  | Type      | Description   |
| -                     | -         | -             |
| id                    | `integer` |               |
| name                  | `string`  |               |
| department            | `enum`    |               |

## Methods
`identifyEligibleInmates()` - Identifies eligible inmates for participation in rehabilitation programs.<br/>
`monitorParticipation()` - Monitors inmate participation and progress in rehabilitation programs.<br/>
`trackProgramEffectiveness()` - Tracks the effectiveness of rehabilitation programs in reducing recidivism rates.
