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






