# Json data lessons

- use server side nesting instead of client side filtering
 - e.g. 

```json
            "races": {
                "University Boat Race": {
                    "2014" : {
                        "Mens" :{ "id":1, "between":"Cambridge", "and":"Oxford", "winner":"??", "time":"??", "location":"??" },
```
 - instead of 

 ```json
    "races":[ 
        { "raceId":"University Boat Race", "year":"2014", "sex":"Mens", "resultId":1, "between":"Cambridge", "and":"Oxford", "winner":"??", "time":"??", "location":"??" }
        ...
        ]
 ```

- choose your aggregate roots based on first usage to avoid filtering data
- prefer dictionaries over arrays : To be confirmed. Depending on server indexing and guidelines. (to be confirmed for Firebase.)
- dont use guids unless you're building something massive that HAS to scale (in the next 90 days) by partitioning on that exact key. i.e. keep it human readable. Or need to trim your api payloads, e.g. for compression
 - e.g. `"id":"University Boat Race"` during prototyping instead of `"id":"47E9AF4A-87AE-4BDB-AF61-FD844E40F3CF"` 
- for prototypes, the UI might define the simplest nesting, and often flesh out a more natural aggregate root for data, and this ebbs and flows a bit during prototyping.
 - e.g. in the two examples below the filtering in the UX was determined by first selecting the race, allowing for a very simple filtering : `this._races=this.data[this.raceId] ... this.racesBySex = this._races[this.sex];`

```json
            "races": {
                "University Boat Race": {
                    "2014" : {
                        "Mens" :{ "id":1, "between":"Cambridge", "and":"Oxford", "winner":"??", "time":"??", "location":"??" },
                        "Women":{ "id":2, "between":"Cambridge", "and":"Oxford", "winner":"??", "time":"??", "location":"??" }},  
```

 - becomes

```
            "races": {
                "University Boat Race": {
                    "Mens": { 
                        "2016" : {"id":5, "between":"Cambridge", "and":"Oxford", "winner":"Cambridge", "time":"18m41s", "location":"River Thames Tideway"},
                        "2015": {"id":3, "between":"Cambridge", "and":"Oxford", "winner":"??", "time":"??", "location":"??"},

```

- might need to create a fake 'derp' pipe, that does nothing if you use deeply nested object graphs. see this link https://github.com/angular/angular/issues/6392
- if you're binding to dictionaries, then you need to jump through a bit of hoops : see http://stackoverflow.com/questions/31490713/iterate-over-typescript-dictionary-in-angular-2 