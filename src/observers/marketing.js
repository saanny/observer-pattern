export default class Marketing {
  update({ id, userName }) {
    console.log(
      `[${id}]: [marketing] will send an welcome email to [${userName}]`,
    );
  }
}
