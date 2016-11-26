/** @fileoverview 슬롯에 있는 아이템을 불러옵니다.
  * @author Scripter(1350adwx)
  * @version 0.1
  * @since 2016.11.26
  */

/** 특정 슬롯의 아이템번호를 가져옵니다.
  * @author Scripter(1350adwx)
  * @param {Number} slotNumber 불러올 슬롯의 번호
  * @type {Number}
  * @returns 특정 슬롯의 아이템번호
  */
function getItemIdInSlot(slotNumber){
  if (isNaN(slotNumber)){
    return;
  }
  slotNumber = parseInt(slotNumber);
  if (slotNumber < 0 || slotNumber > 8){
    return;
  }
  let id, slotId;
  slotId = Player.getSelectedSlotId();
  Player.setSelectedSlotId(slotNumber);
  id = Player.getCarriedItem();
  Player.setSelectedSlotId(slotId);
  return id;
}
/** 특정 슬롯의 아이템 갯수를 가져옵니다.
  * @author Scripter(1350adwx)
  * @param {Number} slotNumber 불러올 슬롯의 번호
  * @type {Number}
  * @returns 특정 슬롯의 아이템 갯수
  */
function getItemCountInSlot(slotNumber){
  if (isNaN(slotNumber)){
    return;
  }
  slotNumber = parseInt(slotNumber);
  if (slotNumber < 0 || slotNumber > 8){
    return;
  }
  let count, slotId;
  slotId = Player.getSelectedSlotId();
  Player.setSelectedSlotId(slotNumber);
  count = Player.getCarriedItemCount();
  Player.setSelectedSlotId(slotId);
  return count;
}
/** 특정 슬롯의 아이템 데미지를 가져옵니다.
  * @author Scripter(1350adwx)
  * @param {Number} slotNumber 불러올 슬롯의 번호
  * @type {Number}
  * @returns 특정 슬롯의 아이템 데미지
  */
function getItemDataInSlot(slotNumber){
  if (isNaN(slotNumber)){
    return;
  }
  slotNumber = parseInt(slotNumber);
  if (slotNumber < 0 || slotNumber > 8){
    return;
  }
  let data, slotId;
  slotId = Player.getSelectedSlotId();
  Player.setSelectedSlotId(slotNumber);
  data = Player.getCarriedItemData();
  Player.setSelectedSlotId(slotId);
  return data;
}
