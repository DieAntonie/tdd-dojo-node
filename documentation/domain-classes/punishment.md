# Punishment

``` mermaid
classDiagram
Appeal --> Punishment
Inmate *-- Punishment
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
```

## Attributes

| Name                  | Type      | Description   |
| -                     | -         | -             |
| id                    | `integer` |               |
| type                  | `enum`    |               |
| severity              | `enum`    |               |
| duration              | `integer` |               |
| conditions            | `array`   |               |
| status                | `enum`    |               |

## Methods
`assignPunishment()` - Assigns a punishment to an inmate for a rule violation.<br/>
`updateStatus()` - Updates the status of the punishment (e.g., completed, revoked).
