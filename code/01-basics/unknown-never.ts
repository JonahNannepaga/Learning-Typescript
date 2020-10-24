/* -------------------------------------------------------------------------- */
/*                                Unknown type                                */
/* -------------------------------------------------------------------------- */

let userInput: unknown;
userInput = 5;
userInput = 'jonah';

/* -------------------------------------------------------------------------- */
/*                                 never type                                 */
/* -------------------------------------------------------------------------- */
//this function never returns anything, never returns anything, hence this can be never
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  //while(true) {}
}

generateError('An error occured', 500);
