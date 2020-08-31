Step 0:
- open gitbash & type `open-cli`
- open terminal in vscode


- Lets install plugin on zowe cli, we have made a new framework 
which is extensible, "imperative"
it lets you add new command group to zowe

    Let see all the plugin in zowe right now:
    zowe cli ->
       - default command groups
       - plugins can add new command group

Step 1:
- zowe plugins list - this show plugins 
- zowe - this show groups

Now we will add new command group to interact with our api
Our command group is 
 - zTrial-plugin


 Step 2: build & install plugin
 npm run installPlugin

 Step 3: Check plugins & command group again
 - zowe plugins list - this show plugins 
- zowe - this show groups
- zowe zTrialPlugin - lets chekcout ncommands under this new command group

zowe zTrialPlugin accounts
$  zowe zTrialPlugin accounts get-accounts
Error: connect ECONNREFUSED 10.149.60.156:17000

ssh s0w1
start-cli


zowe zTrialPlugin accounts
[{"_id":"0","name":{"first":"Deidre","last":"Hayes"},"email":"deidre.hayes@undefined.me","phone":"+1 (839) 577-3100","address":"507 Church Avenue, Heil, Wyoming, 1754"},{"_id":"1","name":{"first":"Maldonado","last":"Sellers"},"email":"maldonado.sellers@undefined.biz","phone":"+1 (834)
573-2841","address":"286 Hewes Street, Abiquiu, Maine, 2447"},{"_id":"2","name":{"first":"Elvia","last":"Aguilar"},"email":"elvia.aguilar@undefined.io","phone":"+1 (826) 486-2932","address":"457 Buffalo Avenue, Caberfae, Connecticut, 2648"},{"_id":"3","name":{"first":"Chris","last":"Mullins"},"email":"chris.mullins@undefined.org","phone":"+1 (884) 425-2397","address":"642 Vandalia Avenue, Driftwood, California, 213"},{"_id":"4","name":{"first":"Vargas","last":"Oneal"},"email":"vargas.oneal@undefined.info","phone":"+1 (893) 576-3106","address":"413 Bedford Avenue, Bynum, Federated States Of Micronesia, 1793"}]



open-cli


Local 1
serve-cli-api
- in browser - 
try few endpoints - 
 - http://s0w1:17000/accounts
 - http://s0w1:17000/accounts/1
 - http://s0w1:17000/accounts/1/cars


what plugins are already installed
zowe plugins list
What command groups are there?
zowe

- lets install our plugin

 - install-cli

 - zowe plugins list
  new plugin
  pluginName: @zowe/ztrial-cli 
- zowe
 new command group
 zTrialPlugin   ztrial plugin to access ztrial api for CLI   

 test-cli
 you can explore api with self documenting help
 - zowe zTrialPlugin ---this is to sub-groups
 - zowe zTrialPlugin accounts - this to show nested subgroup

  -  zowe zTrialPlugin accounts get-accounts
  -  zowe zTrialPlugin accounts get-account 1
  -  zowe zTrialPlugin accounts get-cars --accountId all
  - zowe zowe zTrialPlugin accounts get-cars --accountId 3

We can even extend basic api with new logi like hwe can count the cars
  -  zowe zTrialPlugin accounts get-cars --accountId all --counts true; this will fail
  - zowe zTrialPlugin accounts get-cars --help - this to show all the options we have available for this command

uncomment code in src\api\Accounts.ts - extending API
uncomment code in src\cli\accounts\GetCars\GetCars.definition.ts - adding new option in cli
uncomment code in src\cli\accounts\GetCars\GetCars.handler.ts - adding handler for new option

install-cli


zowe zTrialPlugin accounts get-cars --help
zowe zTrialPlugin accounts get-cars --accountId all --counts true








