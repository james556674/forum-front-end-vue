<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>
    <hr />

    <RestaurantTop
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :initial-restaurant="restaurant"
    />
  </div>
</template>


<script>
import NavTabs from "./../components/NavTabs";
import RestaurantTop from "./../components/RestaurantTop";

const dummyData = {
  restaurants: [
    {
      id: 26,
      name: "Eudora Casper",
      tel: "(148) 618-1282 x13780",
      address: "1745 Margret Glens",
      opening_hours: "08:00",
      description: "Ut nihil optio consequatur. Et quidem corrupti cul",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=91.4615016363926",
      viewCounts: 7,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-12-03T06:41:27.000Z",
      CategoryId: 3,
      FavoritedUsers: [
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$s7ShjXk/VR4nVoFtm9PLG.LR6x7wv77vwouGXoKssT7Xfk/rOsQZe",
          isAdmin: true,
          image: "https://i.imgur.com/zFLL9vN.png",
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-12-07T09:31:21.000Z",
          Favorite: {
            UserId: 2,
            RestaurantId: 26,
            createdAt: "2020-04-17T04:35:49.000Z",
            updatedAt: "2020-04-17T04:35:49.000Z",
          },
        },
        {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$TPKFC8BS5/E37CFM3kx8yOPya6L5ifI0S8aFQ7b3jdA.oEzjXwYby",
          isAdmin: true,
          image: null,
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-12-07T09:31:22.000Z",
          Favorite: {
            UserId: 3,
            RestaurantId: 26,
            createdAt: "2020-07-15T19:27:21.000Z",
            updatedAt: "2020-07-15T19:27:21.000Z",
          },
        },
      ],
      isFavorited: false,
      FavoriteCount: 2,
    },
    {
      id: 13,
      name: "Vito Stroman",
      tel: "(583) 814-0267 x51316",
      address: "149 Nolan Bypass",
      opening_hours: "08:00",
      description: "Minima neque eveniet. Ut reiciendis ducimus fugit ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=55.830999586431275",
      viewCounts: 5,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-12-02T07:38:57.000Z",
      CategoryId: 5,
      FavoritedUsers: [
        {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$TPKFC8BS5/E37CFM3kx8yOPya6L5ifI0S8aFQ7b3jdA.oEzjXwYby",
          isAdmin: true,
          image: null,
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-12-07T09:31:22.000Z",
          Favorite: {
            UserId: 3,
            RestaurantId: 13,
            createdAt: "2020-03-30T01:34:36.000Z",
            updatedAt: "2020-03-30T01:34:36.000Z",
          },
        },
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$s7ShjXk/VR4nVoFtm9PLG.LR6x7wv77vwouGXoKssT7Xfk/rOsQZe",
          isAdmin: true,
          image: "https://i.imgur.com/zFLL9vN.png",
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-12-07T09:31:21.000Z",
          Favorite: {
            UserId: 2,
            RestaurantId: 13,
            createdAt: "2020-11-30T05:37:00.000Z",
            updatedAt: "2020-11-30T05:37:00.000Z",
          },
        },
      ],
      isFavorited: false,
      FavoriteCount: 2,
    },
    {
      id: 11,
      name: "Earnestine Metz",
      tel: "(573) 917-8496 x01546",
      address: "364 Rafael Pines",
      opening_hours: "08:00",
      description: "delectus",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=35.25135222681837",
      viewCounts: 0,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
      CategoryId: 3,
      FavoritedUsers: [
        {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$TPKFC8BS5/E37CFM3kx8yOPya6L5ifI0S8aFQ7b3jdA.oEzjXwYby",
          isAdmin: true,
          image: null,
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-12-07T09:31:22.000Z",
          Favorite: {
            UserId: 3,
            RestaurantId: 11,
            createdAt: "2020-07-15T05:40:21.000Z",
            updatedAt: "2020-07-15T05:40:21.000Z",
          },
        },
      ],
      isFavorited: false,
      FavoriteCount: 1,
    },
    {
      id: 10,
      name: "Kip Heathcote",
      tel: "(234) 261-0553 x328",
      address: "3951 Demarco Burg",
      opening_hours: "08:00",
      description: "repudiandae molestiae eius",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=90.3851170471334",
      viewCounts: 3,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-30T06:46:24.000Z",
      CategoryId: 3,
      FavoritedUsers: [
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$s7ShjXk/VR4nVoFtm9PLG.LR6x7wv77vwouGXoKssT7Xfk/rOsQZe",
          isAdmin: true,
          image: "https://i.imgur.com/zFLL9vN.png",
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-12-07T09:31:21.000Z",
          Favorite: {
            UserId: 2,
            RestaurantId: 10,
            createdAt: "2020-11-30T05:37:06.000Z",
            updatedAt: "2020-11-30T05:37:06.000Z",
          },
        },
      ],
      isFavorited: false,
      FavoriteCount: 1,
    },
    {
      id: 9,
      name: "Lindsay Stoltenberg",
      tel: "1-413-683-7333",
      address: "793 Valentine Walks",
      opening_hours: "08:00",
      description: "laudantium",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=9.825477787450376",
      viewCounts: 1,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-30T06:34:52.000Z",
      CategoryId: 5,
      FavoritedUsers: [
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$s7ShjXk/VR4nVoFtm9PLG.LR6x7wv77vwouGXoKssT7Xfk/rOsQZe",
          isAdmin: true,
          image: "https://i.imgur.com/zFLL9vN.png",
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-12-07T09:31:21.000Z",
          Favorite: {
            UserId: 2,
            RestaurantId: 9,
            createdAt: "2020-03-24T08:51:28.000Z",
            updatedAt: "2020-03-24T08:51:28.000Z",
          },
        },
      ],
      isFavorited: false,
      FavoriteCount: 1,
    },
    {
      id: 8,
      name: "Dr. Isabella Mann",
      tel: "423-810-1915 x065",
      address: "619 Gislason Radial",
      opening_hours: "08:00",
      description: "Aut occaecati assumenda voluptas eius est saepe se",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=46.54040641576476",
      viewCounts: 3,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-12-02T07:13:53.000Z",
      CategoryId: 4,
      FavoritedUsers: [
        {
          id: 942,
          name: "happy",
          email: "123@gmail.com",
          password:
            "$2a$10$OZJy/T5fYv.S4SfIeGFIYe8VetSmhtjK07yXAvUzafKUDv1HVe7yq",
          isAdmin: true,
          image: "https://i.imgur.com/NGYrvVa.jpeg",
          createdAt: "2020-12-03T08:45:00.000Z",
          updatedAt: "2020-12-04T20:56:33.000Z",
          Favorite: {
            UserId: 942,
            RestaurantId: 8,
            createdAt: "2020-12-03T08:46:49.000Z",
            updatedAt: "2020-12-03T08:46:49.000Z",
          },
        },
      ],
      isFavorited: false,
      FavoriteCount: 1,
    },
    {
      id: 2632,
      name: "天母麻辣苑",
      tel: "0228713101",
      address: " 111台北市士林區中山北路六段431-1號",
      opening_hours: "16:30",
      description:
        "食材新鮮 服務好～\r\n隱藏小卷鮮甜美味?\r\n朋友家庭聚會必來的地方！",
      image: "https://i.imgur.com/9beDsQY.jpeg",
      viewCounts: 3,
      createdAt: "2020-12-07T08:17:56.000Z",
      updatedAt: "2020-12-07T15:13:30.000Z",
      CategoryId: 2522,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 2622,
      name: "123",
      tel: "02-23412341",
      address: "123",
      opening_hours: "08:00",
      description: "",
      image: null,
      viewCounts: 0,
      createdAt: "2020-12-07T02:34:44.000Z",
      updatedAt: "2020-12-07T02:34:44.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 2612,
      name: "好吃料理",
      tel: "044-687-1298 x361",
      address: "台北市",
      opening_hours: "14:50",
      description: "好吃",
      image: null,
      viewCounts: 1,
      createdAt: "2020-12-03T06:47:19.000Z",
      updatedAt: "2020-12-03T14:31:57.000Z",
      CategoryId: 2522,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Lonnie Hackett",
      tel: "(750) 379-9165",
      address: "964 Marisa Inlet",
      opening_hours: "08:00",
      description: "Qui excepturi quisquam fugiat. Quam sed nemo quo s",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=54.357470974798375",
      viewCounts: 0,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};

export default {
  components: {
    NavTabs,
    RestaurantTop,
  },

  data() {
    return {
      restaurants: [],
    };
  },

  created() {
    this.fetchRestaurants();
  },

  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
  },
};
</script>