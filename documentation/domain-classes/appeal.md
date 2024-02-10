# Appeal

``` mermaid
classDiagram
Appeal *-- Inmate
Appeal --> Punishment
Appeal <-- DisciplinaryCommittee
  class Appeal {
    -id : int
    -inmate_id : int
    -appeal_date : datetime
    -appeal_reason : string
    -status : enum
    -fileAppeal()
    -updateStatus()
  }
```

## Attributes

| Name                  | Type      | Description   |
| -                     | -         | -             |
| id                    | `integer` |               |
| inmate id             | `integer` |               |
| appeal date           | `datetime`|               |
| appeal reason         | `string`  |               |
| status                | `enum`    |               |

## Methods
`fileAppeal()` - Files an appeal against a disciplinary decision.<br/>
`updateStatus()` - Updates the status of the appeal based on the outcome of the review.
