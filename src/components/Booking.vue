<template>
  <el-steps :active="activeDiv" finish-status="success">
    <el-step title="Select Space"></el-step>
    <el-step title="Select Date"></el-step>
    <el-step title="Select Room"></el-step>
  </el-steps>

  <div v-bind:style="div1Style" class="Blank">
    <h1>Select Space</h1>
    Ut facilisis ante in dui ac suscipit, turpis voluptatum donec, suspendisse,
    quasi luctus amet urna tempor amet sit.
    <br /><br />
    <div align="center" class="Choose Library">
      <el-radio class="Choose Library" v-model="place" label="1" border>Main Library</el-radio>
      <el-radio class="Choose Library" v-model="place" label="2" border>Library 1</el-radio>
      <el-radio class="Choose Library" v-model="place" label="3" border>Library 2</el-radio>
    </div>
    <div align="right" style="margin-right: 50px" class="Next">
      <el-button type="primary" v-on:click="nextStep">
        下一步<i class="el-icon-right el-icon--right"></i>
      </el-button>
    </div>
  </div>

  <div v-bind:style="div2Style" class="Blank">
    <h1>Select Date</h1>
    Ut facilisis ante in dui ac suscipit, turpis voluptatum donec, suspendisse,
    quasi luctus amet urna tempor amet sit.
    <el-calendar v-model="date"></el-calendar>
    <br />{{ date }}
    <div align="right" style="margin-right: 50px" class="Next">
      <el-button type="primary" v-on:click="nextStep"
        >下一步<i class="el-icon-right el-icon--right"></i
      ></el-button>
    </div>
  </div>

  <div v-bind:style="div3Style" class="Blank">
    <h1>Select Room</h1>
    <el-table
      :data="tableData"
      :cell-style="cellStyle"
      style="width: 100%"
      height="250"
      @cell-click="cellClick"
    >
      <el-table-column fixed prop="time" label="日期"></el-table-column>
      <el-table-column prop="101" label="101"></el-table-column>
      <el-table-column prop="102" label="102"></el-table-column>
      <el-table-column prop="103" label="103"> </el-table-column>
      <el-table-column prop="104" label="104"></el-table-column>
      <el-table-column prop="105" label="105"></el-table-column>
    </el-table>
    <div align="right" style="margin-right: 50px">
      <el-button type="primary" v-on:click="nextStep"
        >下一步<i class="el-icon-right el-icon--right"></i
      ></el-button>
    </div>
  </div>

  <div v-bind:style="div4Style" align="center" style="margin-top: 100px" class="Blank">
    <img src="https://i.loli.net/2021/04/25/dPw3ITCUSeYnKiZ.png" class="Img"/>
  </div>
</template>

<script>
export default {
  name: "Booking",
  components: {},
  data() {
    return {
      date: new Date(),
      place: "1",
      activeDiv: 0,
      div1Style: { display: "" },
      div2Style: { display: "none" },
      div3Style: { display: "none" },
      div4Style: { display: "none" },
      tableData: [
        {
          time: "8:00-9:00",
          101: "✔️",
          102: "✔️",
          103: "✔️",
          104: "✔️",
          105: "✔️",
        },
        {
          time: "9:00-10:00",
          101: "✔️",
          102: "✔️",
          103: "✔️",
          104: "✔️",
          105: "✔️",
        },
        {
          time: "11:00-12:00",
          101: "✔️",
          102: "✔️",
          103: "✔️",
          104: "✔️",
          105: "✔️",
        },
        {
          time: "13:00-14:00",
          101: "✔️",
          102: "✔️",
          103: "✔️",
          104: "✔️",
          105: "✔️",
        },
        {
          time: "15:00-16:00",
          101: "✔️",
          102: "✔️",
          103: "✔️",
          104: "✔️",
          105: "✔️",
        },
        {
          time: "17:00-18:00",
          101: "✔️",
          102: "✔️",
          103: "✔️",
          104: "✔️",
          105: "✔️",
        },
      ],
    };
  },
  methods: {
    nextStep: function () {
      // `this` 在方法里指向当前 Vue 实例
      //   this.res='Hello ' + this.101 + '!';
      this.activeDiv >= 3 ? (this.activeDiv = 3) : this.activeDiv++;
      switch (this.activeDiv) {
        case 0:
          this.div1Style.display = "";
          this.div2Style.display = "none";
          this.div3Style.display = "none";
          this.div4Style.display = "none";
          break;
        case 1:
          this.div1Style.display = "none";
          this.div2Style.display = "";
          this.div3Style.display = "none";
          this.div4Style.display = "none";
          break;
        case 2:
          this.div1Style.display = "none";
          this.div2Style.display = "none";
          this.div3Style.display = "";
          this.div4Style.display = "none";
          break;
        case 3:
          this.div1Style.display = "none";
          this.div2Style.display = "none";
          this.div3Style.display = "none";
          this.div4Style.display = "";
          break;
      }
    },
    cellClick: function (row, column) {
      console.log(row);
      console.log(column);
      console.log(column.property);

    },
    cellStyle: function ({ rowIndex, columnIndex }) {
      if (rowIndex === 1 && columnIndex === 2) {
        //指定坐标
        return "background:pink";
      } else {
        return "";
      }
    },
  },
};
</script>
