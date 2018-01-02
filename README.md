# Bank tech test

### Approach
To start with, I thought about the main objects I would need for the program. I settled with two initially. a) a Bank object, which would handle the balance, deposits, withdrawals and recording the transaction history and b) a Printer object which would handle taking the transaction history and printing it out as a table. I thought each account would be represented as a new instance of Bank. In terms of error handling, the two I thought I could expect were a) trying to withdraw more money than the current balance and b) trying to make a transaction on a date that was earlier than the last transaction.

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
Create a new bank, passing Printer and History
```javascript
var bank = new Bank(Printer, History);
```
To deposit and withdraw money, pass in the amount and date in MM-DD-YYYY format
```javascript
bank.deposit(4000, '11-11-2011');
bank.widthraw(2000, '12-11-2011');
```
To print out the statement
```javascript
bank.printStatement();
```
Errors are thrown when trying to withdraw more money than the current balance and when trying to make a transaction on a date earlier than the last transaction.

![img](/img/screenshot.png)
