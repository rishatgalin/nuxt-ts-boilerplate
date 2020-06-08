import jsonClient from '~/plugins/axios';
import { Abstract } from '~/types';

export function exampleGet() {
  return jsonClient
    .get<Abstract>('/')
}