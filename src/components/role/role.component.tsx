import React from 'react'
import Role from './role'
import Type from './type'

const RoleComponent = ({role}: {role: Role}) => (<a href={role.path} style={{color: roleTypeToColor(role.type)}}>{role.name}</a>)

const roleTypeToColor = (type: Type) => {
    switch (type) {
        case Type.VILLAGEOIS:
            return 'rgb(8,193,255)'
        case Type.ETRANGER:
            return 'rgb(23,104,255)'
        case Type.SBIRE:
            return 'rgb(248,2,5)'
        case Type.DEMON:
            return 'rgb(197,0,0)'
    }
}

export const ARCHIVISTE = () => <RoleComponent role={Role.ARCHIVISTE} />
export const ASSASSIN = () => <RoleComponent role={Role.ASSASSIN} />
export const AUBERGISTE = () => <RoleComponent role={Role.AUBERGISTE} />
export const AVOCATDUDIABLE = () => <RoleComponent role={Role.AVOCAT_DU_DIABLE} />
export const BARBIER = () => <RoleComponent role={Role.BARBIER} />
export const BARON = () => <RoleComponent role={Role.BARON} />
export const BRUTE = () => <RoleComponent role={Role.BRUTE} />
export const CHASSEURDEPRIMES = () => <RoleComponent role={Role.CHASSEUR_DE_PRIMES} />
export const CHEFDESECTE = () => <RoleComponent role={Role.CHEF_DE_SECTE} />
export const COMMERE = () => <RoleComponent role={Role.COMMERE} />
export const CONSPIRATEUR = () => <RoleComponent role={Role.CONSPIRATEUR} />
export const COURTISANE = () => <RoleComponent role={Role.COURTISANE} />
export const CRIEUR = () => <RoleComponent role={Role.CRIEUR} />
export const CROQUEMORT = () => <RoleComponent role={Role.CROQUE_MORT} />
export const CROQUEUSEDHOMMES = () => <RoleComponent role={Role.CROQUEUSE_D_HOMMES} />
export const CUISTOT = () => <RoleComponent role={Role.CUISTOT} />
export const EMPATHIQUE = () => <RoleComponent role={Role.EMPATHIQUE} />
export const EMPOISONNEUR = () => <RoleComponent role={Role.EMPOISONNEUR} />
export const ENQUETEUR = () => <RoleComponent role={Role.ENQUETEUR} />
export const ESPION = () => <RoleComponent role={Role.ESPION} />
export const EXORCISTE = () => <RoleComponent role={Role.EXORCISTE} />
export const FAUSSAIRE = () => <RoleComponent role={Role.FAUSSAIRE} />
export const FEMMEDECHAMBRE = () => <RoleComponent role={Role.FEMME_DE_CHAMBRE} />
export const FOU = () => <RoleComponent role={Role.FOU} />
export const GARDIEN = () => <RoleComponent role={Role.GARDIEN} />
export const GITANE = () => <RoleComponent role={Role.GITANE} />
export const HERBORISTE = () => <RoleComponent role={Role.HERBORISTE} />
export const IMP = () => <RoleComponent role={Role.IMP} />
export const INVENTEUR = () => <RoleComponent role={Role.INVENTEUR} />
export const LAVANDIERE = () => <RoleComponent role={Role.LAVANDIERE} />
export const LUNATIQUE = () => <RoleComponent role={Role.LUNATIQUE} />
export const MAIRE = () => <RoleComponent role={Role.MAIRE} />
export const MAJORDOME = () => <RoleComponent role={Role.MAJORDOME} />
export const MAMIE = () => <RoleComponent role={Role.MAMIE} />
export const MARIN = () => <RoleComponent role={Role.MARIN} />
export const MENESTREL = () => <RoleComponent role={Role.MENESTREL} />
export const MERCENAIRE = () => <RoleComponent role={Role.MERCENAIRE} />
export const MOINE = () => <RoleComponent role={Role.MOINE} />
export const PACIFISTE = () => <RoleComponent role={Role.PACIFISTE} />
export const PARIEUR = () => <RoleComponent role={Role.PARIEUR} />
export const PARRAIN = () => <RoleComponent role={Role.PARRAIN} />
export const PO = () => <RoleComponent role={Role.PO} />
export const POLITICIEN = () => <RoleComponent role={Role.POLITICIEN} />
export const PUKKA = () => <RoleComponent role={Role.PUKKA} />
export const PREDICATEUR = () => <RoleComponent role={Role.PREDICATEUR} />
export const PROFESSEUR = () => <RoleComponent role={Role.PROFESSEUR} />
export const PTITMONSTRE = () => <RoleComponent role={Role.PTIT_MONSTRE} />
export const PUCELLE = () => <RoleComponent role={Role.PUCELLE} />
export const RECLUS = () => <RoleComponent role={Role.RECLUS} />
export const SHABALOTH = () => <RoleComponent role={Role.SHABALOTH} />
export const SOLDAT = () => <RoleComponent role={Role.SOLDAT} />
export const SORCIERE = () => <RoleComponent role={Role.SORCIERE} />
export const SOULARD = () => <RoleComponent role={Role.SOULARD} />
export const VERTUEUX = () => <RoleComponent role={Role.VERTUEUX} />
export const VOYANTE = () => <RoleComponent role={Role.VOYANTE} />
export const ZOMBUUL = () => <RoleComponent role={Role.ZOMBUUL} />
