let handler = m => m

handler.before = function (m) {
    let user = global.db.data.users[m.sender]
    let role = (user.level <= 3) ? 'NEWBIE V'
        : ((user.level >= 3) && (user.level <= 6)) ? 'VETERAN IV'
            : ((user.level >= 6) && (user.level <= 9)) ? 'VETERAN III'
                : ((user.level >= 9) && (user.level <= 12)) ? 'VETERAN II'
                    : ((user.level >= 12) && (user.level <= 15)) ? 'VETERAN I'
                        : ((user.level >= 15) && (user.level <= 18)) ? 'MVP V'
                            : ((user.level >= 18) && (user.level <= 21)) ? 'MVP IV'
                                : ((user.level >= 21) && (user.level <= 24)) ? 'MVP III'
                                    : ((user.level >= 24) && (user.level <= 27)) ? 'MVP II'
                                        : ((user.level >= 27) && (user.level <= 30)) ? 'MVP I'
                                            : ((user.level >= 30) && (user.level <= 33)) ? 'VIP V'
                                                : ((user.level >= 33) && (user.level <= 36)) ? 'VIP IV'
                                                    : ((user.level >= 36) && (user.level <= 39)) ? 'VIP III'
                                                        : ((user.level >= 39) && (user.level <= 42)) ? 'VIP II'
                                                            : ((user.level >= 42) && (user.level <= 45)) ? 'VIP I'
                                                                : ((user.level >= 45) && (user.level <= 48)) ? 'VIVA V'
                                                                    : ((user.level >= 48) && (user.level <= 51)) ? 'VIVA IV'
                                                                        : ((user.level >= 51) && (user.level <= 54)) ? 'VIVA III'
                                                                            : ((user.level >= 54) && (user.level <= 57)) ? 'VIVA II'
                                                                                : ((user.level >= 57) && (user.level <= 60)) ? 'VIVA I'
                                                                                    : ((user.level >= 60) && (user.level <= 63)) ? 'PRO V'
                                                                                        : ((user.level >= 63) && (user.level <= 66)) ? 'PRO IV'
                                                                                            : ((user.level >= 66) && (user.level <= 69)) ? 'PRO III'
                                                                                                : ((user.level >= 69) && (user.level <= 71)) ? 'PRO II'
                                                                                                    : ((user.level >= 71) && (user.level <= 74)) ? 'PRO I'
                                                                                                        : ((user.level >= 74) && (user.level <= 77)) ? 'MASTER V'
                                                                                                            : ((user.level >= 77) && (user.level <= 80)) ? 'MASTER IV'
                                                                                                                : ((user.level >= 80) && (user.level <= 83)) ? 'MASTER III'
                                                                                                                    : ((user.level >= 83) && (user.level <= 86)) ? 'MASTER II'
                                                                                                                        : ((user.level >= 86) && (user.level <= 89)) ? 'MASTER I'
                                                                                                                            : ((user.level >= 89) && (user.level <= 91)) ? 'LEGEND V'
                                                                                                                                : ((user.level >= 91) && (user.level <= 94)) ? 'LEGEND IV'
                                                                                                                                    : ((user.level >= 94) && (user.level <= 97)) ? 'LEGEND III'
                                                                                                                                        : ((user.level >= 97) && (user.level <= 100)) ? 'LEGEND II'
                                                                                                                                            : 'ULTRA LEGEND'
    user.role = role
    return true
}

module.exports = handler
