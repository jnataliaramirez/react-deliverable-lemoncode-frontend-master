import { MemberEntity } from "@/pods/list/list.vm";

export interface Members {
  members: MemberEntity[];
}

export const firstMembersCreate = (): Members => ({
  members: [],
});
