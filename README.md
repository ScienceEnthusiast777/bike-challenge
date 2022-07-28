# BikEEE

### to run: 

from the projects root directory:

```
npm install 
npm run start
```

### to run tests: 

```
ng test --browsers ChromeHeadless
```

### Further Improvements:
- Ideally, once the database items have been parsed and counted taking in to account possible variations in format (capital letters/ special characters etc), the top three Model names would be checked against a record to ensure the correct standard is used.
- The CSV conversion service I have made works for the specific data supplied for the challenge, but in reality it would be better to either use a dedicated npm package to handle this, or write a more in-depth service to deal with possible formatting variations (because CSV is not a standardised format).
- The styling of the components is a little awkward (for example the layout does not scale nicely when the browser size changes), I would add breakpoints for example to change the layout when the browser size changes. I would also like to set a more accurate color pallette.
- At the moment the browser component draws from all the listings for each of the top three models. In reality, where there would many more listings, it would be better to have another service to provide a smaller sample. Maybe it would be better if this would be a backend process which would send the top three bikes as a response and a small selection of listings for each- to avoid having to process all of the listings in the front end. 
- I would also add more tests for the CSV service to check data is correctly processed when model names have different formats. 