
export default  class TaskService {
    _apiBase = 'http://localhost:8888/api/v1/';
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
        }
        return await res.json();
      };
    
      getAllTaskWithoutParams = async () => {
        const result = await this.getResource(`/all-tasks/`);
        return result;
      };

      getAllUsers = async () => {
        const result = await this.getResource(`/all-users/`);
        return result;
      }
}

// const ts = new TaskService();
// ts.getAllUsers().then((users) => {
//     console.log(users);
// });