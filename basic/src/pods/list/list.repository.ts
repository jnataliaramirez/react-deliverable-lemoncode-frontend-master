import { MemberEntity } from './list.vm';
import { getMembers as getMemberCollectionApi } from './list.api';
import { mapMemberCollectionFromApiToVm } from './list.mapper';

export const getMemberCollection = (
  organization: string
): Promise<MemberEntity[]> => {
  return new Promise<MemberEntity[]>((resolve) => {
    getMemberCollectionApi(organization).then((result) => {
      resolve(mapMemberCollectionFromApiToVm(result));
    });
  });
};
