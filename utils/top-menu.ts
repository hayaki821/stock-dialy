export const menus = {
  daily: {
    label: '日常業務',
    icon: 'mdi-truck',
    lists: [
      [
        { label: '貨物連続入力', url: '/daily/cargoInput' },
        { label: '貨物一覧', url: '/daily/cargoList' },
        { label: '貨物発送明細書入力', url: '/daily/shippingCargoInput' },
        { label: '貨物発送一覧', url: '/daily/shippingCargoList' },
        { label: '配車入力', url: '/daily/unsetVehicleDispatch' },
        { label: '請求明細書入力', url: '/daily/invoiceStatement' },
        // { label: '未単価売上データ入力', url: '/daily/unsetUnitPrice' },
      ],
      [
        { label: '運転日報入力', url: '/daily/dailyDrivingReport' },
        { label: '荷主先元帳', url: '/daily/ledgerOfShipper' },
        // { label: '点呼記録簿', url: '/daily/attendanceRecord' },
        { label: '勤務一覧', url: '/daily/workingList' },
        { label: '運転者運行表', url: '/daily/drivingScheduleByDriver' },
        // { label: '出荷明細書', url: '/daily/shippingStatement' },
        { label: '中継FAX作成', url: '/daily/makeTransitFax' },
      ],
    ],
  },
  returnCargo: {
    label: '帰り荷業務',
    icon: 'mdi-undo-variant',
    lists: [
      [
        {
          label: '貨物連続入力(帰り荷)',
          url: '/return_cargo/returnCargoInput',
        },
        {
          label: '貨物発送明細入力(帰り荷)',
          url: '/return_cargo/returnShippingCargoInput',
        },
      ],
      [
        {
          label: '貨物一覧(帰り荷)',
          url: '/return_cargo/returnCargoList',
        },
        {
          label: '貨物発送一覧(帰り荷)',
          url: '/return_cargo/returnShippingCargoList',
        },
      ],
    ],
  },
  accounting: {
    label: '経理業務',
    icon: 'mdi-lead-pencil',
    lists: [
      [
        { label: '入金入力', url: '/account/payment' },
        // { label: '経費入力', url: '/account/expense' },
        { label: '入出金伝票入力', url: '/account/accountSlip' },
        { label: '請求一覧', url: '/account/invoiceList' },
      ],
      [
        {
          label: '売掛残高一覧表',
          url: '/account/balanceListOfAccountsReceivable',
        },
        { label: '運行明細表', url: '/account/drivingStatement' },
        { label: '実績報告書', url: '/account/achievementReport' },
        { label: '労働時間一覧表', url: '/account/workingHourList' },
      ],
    ],
  },
  store: {
    label: '倉庫業務',
    icon: 'mdi-garage-variant',
    lists: [
      [
        { label: '入庫伝票入力', url: '/warehouse/inboundSlip' },
        { label: '出庫伝票入力', url: '/warehouse/outboundSlip' },
        // { label: '移動入力', url: '/warehouse/moving' },
        // { label: '値引入力', url: '/warehouse/discount' },
        { label: '出庫一覧', url: '/warehouse/outboundList' },
        { label: '在庫一覧', url: '/warehouse/inventoryList' },
      ],
      [
        { label: '販売伝票入力', url: '/warehouse/salesSlip' },
        { label: '定期契約管理', url: '/warehouse/contract' },
        { label: '請求一覧', url: '/warehouse/invoiceList' },
        // { label: '入金一覧', url: '/warehouse/paidList' },
        { label: '計画入庫登録', url: '/warehouse/planInboundRegistration' },
        { label: '計画出庫登録', url: '/warehouse/planOutboundRegistration' },
        { label: '入出庫実績一覧', url: '/warehouse/InOutboundList' },
      ],
    ],
  },
  master: {
    label: 'マスターメンテ',
    icon: 'mdi-tools',
    lists: [
      [
        { label: '車両マスタ', url: '/master/masterTruck' },
        { label: '業者マスタ', url: '/master/masterTrader' },
        { label: '担当者マスタ', url: '/master/masterPic' },
        { label: '地名マスタ', url: '/master/masterPlace' },
        { label: '地区マスタ', url: '/master/masterArea' },
        { label: '行先マスタ', url: '/master/masterDestinationArea' },
        { label: '倉庫マスタ', url: '/master/masterWarehouse' },
      ],
      [
        { label: '荷主グループマスタ', url: '/master/masterShipperGroup' },
        { label: '荷主先マスタ', url: '/master/masterShipper' },
        { label: '取引先担当者マスタ', url: '/master/masterPicOfClient' },
        { label: '品名マスタ', url: '/master/masterProductName' },
        { label: '荷姿マスタ', url: '/master/masterPackaging' },
        { label: '銀行マスタ', url: '/master/masterBank' },
        { label: '署名マスタ', url: '/master/masterSignature' },
      ],
      [
        { label: '基本単価マスタ', url: '/master/masterBasicUnitPrice' },
        { label: '詳細単価マスタ', url: '/master/masterUnitPrice' },
        { label: '名義人マスタ', url: '/master/masterHolder' },
        { label: '料金表マスタ', url: '/master/masterPriceList' },
        { label: '経費科目マスタ', url: '/master/masterAccountName' },
        { label: '中継単価マスタ', url: '/master/masterTransitUnitPrice' },
        { label: '便名マスタ', url: '/master/masterShuttle' },
      ],
    ],
  },
} as const

export default menus
