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
  if (isNaN(slotNumber)){//슬롯 번호가 숫자가 아닐 경우
    return;//undefined
  }
  slotNumber = parseInt(slotNumber);//숫자 비교를 위해 숫자로 만들고
  if (slotNumber < 0 || slotNumber > 8){//슬롯 숫자는 0 이상 8 이하이므로 아니면
    return;//undefined
  }
  /** @description 반환될 아이템 아이디
    * @type {Number}
    */
  let id;
  /** @description 원래대로 되돌릴 슬롯 아이디
    * @type {Number}
    */
  let slotId;
  slotId = Player.getSelectedSlotId();//다시 원래 슬롯으로 되돌리기 위해 어떤 슬롯인지 가져옵니다
  Player.setSelectedSlotId(slotNumber);//불러올 슬롯으로 바꾸고
  id = Player.getCarriedItem();//아이템을 불러오고
  Player.setSelectedSlotId(slotId);//다시 되돌리고
  return id;//id 반환
}
/** 특정 슬롯의 아이템 갯수를 가져옵니다.
  * @author Scripter(1350adwx)
  * @param {Number} slotNumber 불러올 슬롯의 번호
  * @type {Number}
  * @returns 특정 슬롯의 아이템 갯수
  */
function getItemCountInSlot(slotNumber){
  if (isNaN(slotNumber)){//슬롯 번호가 숫자가 아닐 경우
    return;//undefined
  }
  slotNumber = parseInt(slotNumber);//숫자 비교를 위해 숫자로 만들고
  if (slotNumber < 0 || slotNumber > 8){//슬롯 숫자는 0 이상 8 이하이므로 아니면
    return;//undefined
  }
  /** @description 반환될 아이템 갯수
    * @type {Number}
    */
  let count;
  /** @description 원래대로 되돌릴 슬롯 아이디
    * @type {Number}
    */
  let slotId;
  slotId = Player.getSelectedSlotId();//다시 원래 슬롯으로 되돌리기 위해 어떤 슬롯인지 가져옵니다
  Player.setSelectedSlotId(slotNumber);//불러올 슬롯으로 바꾸고
  count = Player.getCarriedItemCount();//아이템 갯수를 불러오고
  Player.setSelectedSlotId(slotId);//다시 되돌리고
  return count;//count 반환
}
/** 특정 슬롯의 아이템 데미지를 가져옵니다.
  * @author Scripter(1350adwx)
  * @param {Number} slotNumber 불러올 슬롯의 번호
  * @type {Number}
  * @returns 특정 슬롯의 아이템 데미지
  */
function getItemDataInSlot(slotNumber){
  if (isNaN(slotNumber)){//슬롯 번호가 숫자가 아닐 경우
    return;//undefined
  }
  slotNumber = parseInt(slotNumber);//숫자 비교를 위해 숫자로 만들고
  if (slotNumber < 0 || slotNumber > 8){//슬롯 숫자는 0 이상 8 이하이므로 아니면
    return;//undefined
  }
  /** @description 반환될 아이템 데미지
    * @type {Number}
    */
  let data;
  /** @description 원래대로 되돌릴 슬롯 아이디
    * @type {Number}
    */
  let slotId;
  slotId = Player.getSelectedSlotId();//다시 원래 슬롯으로 되돌리기 위해 어떤 슬롯인지 가져옵니다
  Player.setSelectedSlotId(slotNumber);//불러올 슬롯으로 바꾸고
  data = Player.getCarriedItemDamage();//아이템 데미지를 불러오고
  Player.setSelectedSlotId(slotId);//다시 되돌리고
  return data;//data 반환
}
