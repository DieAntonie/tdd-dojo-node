# Rehabilitation Program

``` mermaid
classDiagram
Inmate --o RehabilitationProgram
RehabilitationProgram *-- RehabilitationProgramCoordinator
  class RehabilitationProgram {
    -id : int
    -name : string
    -description : string
    -duration : int
    -participants : array
    -enrollParticipants()
    -trackProgress()
  }
```

## Attributes

| Name                  | Type      | Description   |
| -                     | -         | -             |
| id                    | `integer` |               |
| name                  | `string`  |               |
| description           | `string`  |               |
| duration              | `int`     |               |
| participants          | `array`   |               |

## Methods
`enrollParticipants()` - Enrolls eligible inmates in the rehabilitation program.<br/>
`trackProgress()` - Tracks participant progress and completion of program milestones.
