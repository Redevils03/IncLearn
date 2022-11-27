const SignUp = {
  async render() {
    return `
    <form>
      <p id="formTitle">SIGN UP</p>
      <div class="mb-3">
        <label for="exampleInputName" class="form-label">Full Name</label>
        <input type="text" class="form-control" id="exampleInputName" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="inputPassword5" class="form-label">Password</label>
        <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" />
        <div id="passwordHelpBlock" class="form-text">Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</div>
      </div>
      <button type="submit" class="btn btn-primary"><input class="btn btn-primary" type="submit" value="Sign Up" /></button>
    </form>
    `;
  },
};

export default SignUp;
