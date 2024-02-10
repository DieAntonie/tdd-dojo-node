# Correctional Officer

``` mermaid
classDiagram
Inmate <-- CorrectionalOfficer
IncidentReport o-- CorrectionalOfficer
  class CorrectionalOfficer {
    -id : int
    -name : string
    -rank : enum
    -department : enum
    -fileIncidentReport()
    -conductCheckIn()
    -reviewIncidentReport()
  }
```

## Attributes

| Name                  | Type      | Description   |
| -                     | -         | -             |
| id                    | `integer` |               |
| name                  | `string`  |               |
| rank                  | `enum`    |               |
| department            | `enum`    |               |

## Methods
`fileIncidentReport()` - Files an incident report for a rule violation or disruptive incident.<br/>
`conductCheckIn()` - Conducts a check-in with an inmate under disciplinary supervision.<br/>
`reviewIncidentReport()` - Reviews incident reports submitted by other officers.
