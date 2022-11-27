const LogIn = {
  async render() {
    return `
    <form>
      <p id="formTitle">LOG IN</p>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" />
      </div>
      <div class="mb-3">
        <label for="inputPassword5" class="form-label">Password</label>
        <input type="password" id="inputPassword5" class="form-control" />
      </div>
      <button type="submit" class="btn btn-success"><input class="btn btn-success" type="submit" value="Log In" /></button>
    </form>
    `;
  },
};

export default LogIn;
