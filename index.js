let balance = 500.00;

class Account {
  constructor(username){
    this.username = username;
    //this.balance = 0;
    this.transactions = [];
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
  get balance() {
    let sum = 0;
    for(let item of this.transactions) {
      sum += item.value;
    }
    return sum;
  }

}

class Transaction {
  constructor(amount,account) {
    this.amount = amount;
    this.account = account;
  }

  get isAllowed() {
    if ((this.account.balance + this.value) > 0 ) {
      return true;
    } else {
      return false;
    }
  }

  commit() {
    this.time = new Date();
    if(this.isAllowed){
      this.account.addTransaction(this);
      return true;
    } else {
      console.log('Insufficient Funds');
      return false;
    }

  }
}

class Withdrawal extends Transaction {

  get value() {
    return -(this.amount);
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

}





// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account('Sriya');
console.log('Starting Balance:', myAccount.balance);

console.log('Attempting to deposit $120.');
t1 = new Deposit(120, myAccount);
console.log(t1.commit());
//console.log('Transaction 2:', t1);

console.log('Attempting to withdraw $150.25.');
t2 = new Withdrawal(150.25,myAccount);
console.log(t2.commit());
//console.log('Transaction 1:', t2);

console.log('Attempting to withdraw $9.99.');
t3 = new Withdrawal(9.99, myAccount);
console.log(t3.commit());
//console.log('Transaction 2:', t3);

//console.log(myAccount.transactions);

console.log('Ending Balance:', myAccount.balance);




