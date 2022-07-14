import React, { useEffect, useState } from "react";

import { Scene, Control } from "@antv/l7";
import { DrillDownLayer } from "@antv/l7-district";
import { Mapbox } from "@antv/l7-maps";
import "../index.css";
import { Spin } from "antd";
import { mockMapList } from "./mock.js";
import moment from "moment";

let drillLayer: DrillDownLayer;
interface MapProps {
  selectTime: any;
  isDay: any;
  timeType: any;
}
const Map: React.FC<MapProps> = (props: any) => {
  const { selectTime, isDay, timeType } = props;
  const [loading, setLoading] = useState(false);

  let areaName = "" as any;
  let provinceData = [] as any;
  let cityDatas = [] as any;

  useEffect(() => {
    const scene = new Scene({
      id: "mapWarning",
      map: new Mapbox({
        center: [116.2825, 39.9],
        pitch: 0,
        style: "blank",
        zoom: 3,
        minZoom: 0,
        maxZoom: 10,
      }),
    });
    scene.on("loaded", () => {
      drillLayer = new DrillDownLayer(scene, {
        provinceData: provinceData,
        cityData: cityDatas,
        joinBy: ["NAME_CHN", "name"],
        viewStart: "Country",
        viewEnd: "Province",
        drillDownEvent: async (props, type) => {
          console.log(props, type);
        },
        fill: {
          color: {
            field: "alarmTotal",
            values: (value: any) => {
              if (value > 0 && value < 10) return "#B8E1FF";
              else if (value > 10 && value <= 100) return "#7DAAFF";
              else if (value > 100 && value <= 500) return "#3D76DD";
              else if (value > 500 && value <= 1000) return "#0047A5";
              else if (value > 1000 && value <= 10000) return "#001D70";
              else if (value > 10000) return "#051d3c";
              else return "#ccc";
            },
          },
        },
        country: {
          fill: {
            color: {
              field: "alarmTotal",
              values: (value: any) => {
                if (value > 0 && value < 10) return "#B8E1FF";
                else if (value > 10 && value <= 100) return "#7DAAFF";
                else if (value > 100 && value <= 500) return "#3D76DD";
                else if (value > 500 && value <= 1000) return "#0047A5";
                else if (value > 1000 && value <= 10000) return "#001D70";
                else if (value > 10000) return "#051d3c";
                else return "#ccc";
              },
            },
          },
        },
        popup: {
          enable: true,
          Html: (props) => {
            if (props.alarmTotal > 0) {
              const startTime = selectTime[0] ? selectTime[0] : props.startTime;
              const endTime = selectTime[1] ? selectTime[1] : props.endTime;
              return `<div style="maxWidth:300">
              <span>时间：${moment(startTime).format("YYYY/MM/DD")}—${moment(
                endTime
              ).format("YYYY/MM/DD")}</span><br/>
                      <span>地域：${props.NAME_CHN}</span><br/>
                      <span>预警总量：${props.alarmTotal}</span><br/>
                      <span>已处理预警量：${props.processedAlarmNum}</span><br/>
                      <span>待处理预警量：${props.pendingAlarmNum}</span><br/>
                      </div>`;
            } else {
              return `<span>暂无数据</span>`;
            }
          },
        },
        legend: {
          position: "topright",
        },
      });
    });
    // 添加图例
    const color = [
      "#ccc",
      "#B8E1FF",
      "#7DAAFF",
      "#3D76DD",
      "#0047A5",
      "#001D70",
      "#051d3c",
    ];
    const legend = new Control({
      position: "topleft",
    });
    legend.onAdd = function () {
      const el = document.createElement("div");
      el.className = "infolegend legend";
      const grades = [
        "0",
        "1-9",
        "10-99",
        "100-499",
        "500-999",
        "1000-10000",
        ">10000",
      ];
      for (let i = 0; i < grades.length; i++) {
        el.innerHTML += `<span style="margin-right: 24px"><i style="background:${color[i]};display: inline-block; width: 10px;height: 10px;"></i>
          ${grades[i]}</span>`;
      }
      return el;
    };
    scene.addControl(legend);
  }, []);

  useEffect(() => {
    if (drillLayer) {
      const draw = async () => {
        setLoading(true);
        provinceData = mockMapList(timeType);
        for (let i = 0; i < provinceData.length; i++) {
          const listChildren = provinceData[i].children;
          if (listChildren) {
            listChildren.map((item: any) => {
              cityDatas.push(item);
            });
          }
        }
        setLoading(false);
        drillLayer.updateData("province", provinceData);
        drillLayer.updateData("city", cityDatas);
      };
      draw();
    }
  }, [selectTime, areaName]);

  return (
    <Spin spinning={loading}>
      <div
        id="mapWarning"
        style={{
          height: "550px",
          justifyContent: "center",
          position: "relative",
        }}
      />
    </Spin>
  );
};

export default Map;
