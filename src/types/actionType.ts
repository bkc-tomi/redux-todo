export type ActionType = {
  type: "ADD_TODO",
  text: string,
} | {
  type: "DELETE_TODO",
  index: number,
}