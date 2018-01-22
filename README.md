# Bank tech test

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

### Approach
To start with, I thought about the main objects I would need for the program. I settled with two initially. a) a Bank object, which would handle the balance, deposits, withdrawals and recording the transaction history and b) a Printer object which would handle taking the transaction history and printing it out as a table. I thought each account would be represented as a new instance of Bank. In terms of error handling, the one I thought to expect was the withdrawal of more money than was currently in the bank.

### Structure
I started with the aforementioned two objects and then concluded that the history of transactions warranted its own object. Thus, the program has three objects:
- Bank: responsible for knowing the current balance and depositing and withdrawal
- History: responsible for recording each transaction
- Printer: responsible for taking the history and printing it as a table

History and Printer are dependencies of Bank. I did it in this manner because I believed it established a good separation of the roles of each object. It made the code more structured and hence easier to understand.

### Using the program and running tests
To interact with the program, do the following and then open the browser console:
```
$ git clone https://github.com/cazwazacz/bank-tech-test.git
$ cd bank-tech-test
$ open index.html
```
Create a new bank, passing Printer, History and Date
```javascript
var bank = new Bank(Printer, History, Date);
```
To deposit and withdraw money, pass in the amount
```javascript
bank.deposit(4000);
bank.withdraw(2000);
```
To print out the statement
```javascript
bank.printStatement();
```
Errors are thrown when trying to withdraw more money than the current balance.

To run tests
```
$ open SpecRunner.html
```

![img](/img/screenshot_small.png)
