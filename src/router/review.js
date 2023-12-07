const review = [
  {
    path: "/dataSetsforReview",
    name: "dataSetsforReview",
    component: () => import("@/views/referenceForReviewer"),
  }
];



    export default review;//重点是要在这里导出，不然没效果。
