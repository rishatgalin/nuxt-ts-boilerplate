import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

class userState {}

@Module({
  name: 'user',
  stateFactory: true,
  namespaced: true
})
export default class User extends VuexModule {
  public stateData: userState = new userState;

  @Mutation
  public updateUserInfo(data: userState) {}
}