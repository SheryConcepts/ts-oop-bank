import inquirer from "inquirer";
import Consumer from "./consumer.js";

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your name',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email',
    },
    {
        type: 'input',
        name: 'age',
        message: 'Please enter your age',
    },

]).then(
    ans => {
        console.log(`           Welcome to toka bank               `);
        const {name, email, age} = ans;
        const user = new Consumer(name, email, age);
        console.log(user.status())
        home(user)
    }
)


function home(u: Consumer) {
    inquirer.prompt([{
        type: 'list',
        name: 'op',
        message: 'Home',
        choices: ["Deposit", "Withdraw", "Logout"],
    }]).then(
        a => {
            if (a.op === "Deposit"){
                inquirer.prompt([{
                    type: "input",
                    name: "dep_am",
                    message: "How much to deposit?",
                    validate: v => {
                        if (typeof Number(v) === 'number'){
                            return true
                        } else {
                            return "Please enter a number"
                        }
                    }
                }]).then(
                    a => {
                        let message = u.deposit(Number(a.dep_am));
                        console.log(message);
                        console.log(u.status());
                        home(u)
                    }
                )
            } else if (a.op === "Withdraw") {
                inquirer.prompt([{
                    type: "input",
                    name: "with_am",
                    message: "How much to withdraw?",
                    validate: v => {
                        if (typeof Number(v) === 'number'){
                            return true
                        } else {
                            return "Please enter a number"
                        }
                    }
                }]).then(
                    a => {
                        let message = u.withdraw(Number(a.dep_am));
                        console.log(message);
                        console.log(u.status());
                        home(u)
                    }
                )

            } else {
                console.log(`           Thanks for trusting TOKA Bank Limited           `)
            }
        }
    )
}