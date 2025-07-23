export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      auditoria_admin: {
        Row: {
          action: string
          admin_id: string
          created_at: string | null
          entity_id: string
          entity_type: string
          id: string
          new_status: string | null
          notes: string | null
          previous_status: string | null
        }
        Insert: {
          action: string
          admin_id: string
          created_at?: string | null
          entity_id: string
          entity_type: string
          id?: string
          new_status?: string | null
          notes?: string | null
          previous_status?: string | null
        }
        Update: {
          action?: string
          admin_id?: string
          created_at?: string | null
          entity_id?: string
          entity_type?: string
          id?: string
          new_status?: string | null
          notes?: string | null
          previous_status?: string | null
        }
        Relationships: []
      }
      calificaciones: {
        Row: {
          calificado_id: string
          calificador_id: string
          comentario: string | null
          created_at: string
          id: string
          orden_id: string
          producto_id: string | null
          puntuacion: number
          reportada: boolean
          updated_at: string
        }
        Insert: {
          calificado_id: string
          calificador_id: string
          comentario?: string | null
          created_at?: string
          id?: string
          orden_id: string
          producto_id?: string | null
          puntuacion: number
          reportada?: boolean
          updated_at?: string
        }
        Update: {
          calificado_id?: string
          calificador_id?: string
          comentario?: string | null
          created_at?: string
          id?: string
          orden_id?: string
          producto_id?: string | null
          puntuacion?: number
          reportada?: boolean
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "calificaciones_orden_id_fkey"
            columns: ["orden_id"]
            isOneToOne: false
            referencedRelation: "ordenes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calificaciones_producto_id_fkey"
            columns: ["producto_id"]
            isOneToOne: false
            referencedRelation: "productos"
            referencedColumns: ["id"]
          },
        ]
      }
      lotes: {
        Row: {
          created_at: string | null
          descripcion: string | null
          direccion: string | null
          estado: Database["public"]["Enums"]["batch_status"]
          fecha_disponible: string | null
          id: string
          peso_estimado: number
          status: string | null
          tipo_residuo: Database["public"]["Enums"]["roa_type"]
          ubicacion_lat: number
          ubicacion_lng: number
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          descripcion?: string | null
          direccion?: string | null
          estado?: Database["public"]["Enums"]["batch_status"]
          fecha_disponible?: string | null
          id?: string
          peso_estimado: number
          status?: string | null
          tipo_residuo: Database["public"]["Enums"]["roa_type"]
          ubicacion_lat: number
          ubicacion_lng: number
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          descripcion?: string | null
          direccion?: string | null
          estado?: Database["public"]["Enums"]["batch_status"]
          fecha_disponible?: string | null
          id?: string
          peso_estimado?: number
          status?: string | null
          tipo_residuo?: Database["public"]["Enums"]["roa_type"]
          ubicacion_lat?: number
          ubicacion_lng?: number
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      notificaciones: {
        Row: {
          created_at: string
          id: string
          leida: boolean
          mensaje: string
          orden_id: string | null
          tipo: string
          titulo: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          leida?: boolean
          mensaje: string
          orden_id?: string | null
          tipo?: string
          titulo: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          leida?: boolean
          mensaje?: string
          orden_id?: string | null
          tipo?: string
          titulo?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notificaciones_orden_id_fkey"
            columns: ["orden_id"]
            isOneToOne: false
            referencedRelation: "ordenes"
            referencedColumns: ["id"]
          },
        ]
      }
      ordenes: {
        Row: {
          cantidad_solicitada: number
          created_at: string
          estado: Database["public"]["Enums"]["order_status"]
          fecha_propuesta_retiro: string | null
          id: string
          item_id: string
          mensaje_respuesta: string | null
          mensaje_solicitud: string | null
          proveedor_id: string
          solicitante_id: string
          tipo_item: Database["public"]["Enums"]["item_type"]
          updated_at: string
        }
        Insert: {
          cantidad_solicitada?: number
          created_at?: string
          estado?: Database["public"]["Enums"]["order_status"]
          fecha_propuesta_retiro?: string | null
          id?: string
          item_id: string
          mensaje_respuesta?: string | null
          mensaje_solicitud?: string | null
          proveedor_id: string
          solicitante_id: string
          tipo_item: Database["public"]["Enums"]["item_type"]
          updated_at?: string
        }
        Update: {
          cantidad_solicitada?: number
          created_at?: string
          estado?: Database["public"]["Enums"]["order_status"]
          fecha_propuesta_retiro?: string | null
          id?: string
          item_id?: string
          mensaje_respuesta?: string | null
          mensaje_solicitud?: string | null
          proveedor_id?: string
          solicitante_id?: string
          tipo_item?: Database["public"]["Enums"]["item_type"]
          updated_at?: string
        }
        Relationships: []
      }
      productos: {
        Row: {
          created_at: string
          descripcion: string
          disponible: boolean
          id: string
          imagenes: string[]
          nombre: string
          origen_roa: string | null
          status: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          descripcion: string
          disponible?: boolean
          id?: string
          imagenes?: string[]
          nombre: string
          origen_roa?: string | null
          status?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          descripcion?: string
          disponible?: boolean
          id?: string
          imagenes?: string[]
          nombre?: string
          origen_roa?: string | null
          status?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          address: string | null
          avatar_url: string | null
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          is_active: boolean | null
          is_admin: boolean | null
          is_verified: boolean | null
          location_lat: number | null
          location_lng: number | null
          phone: string | null
          updated_at: string | null
          user_type: string | null
        }
        Insert: {
          address?: string | null
          avatar_url?: string | null
          created_at?: string | null
          email: string
          full_name?: string | null
          id: string
          is_active?: boolean | null
          is_admin?: boolean | null
          is_verified?: boolean | null
          location_lat?: number | null
          location_lng?: number | null
          phone?: string | null
          updated_at?: string | null
          user_type?: string | null
        }
        Update: {
          address?: string | null
          avatar_url?: string | null
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          is_active?: boolean | null
          is_admin?: boolean | null
          is_verified?: boolean | null
          location_lat?: number | null
          location_lng?: number | null
          phone?: string | null
          updated_at?: string | null
          user_type?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_average_rating: {
        Args: { user_id: string }
        Returns: number
      }
      get_user_rating_count: {
        Args: { user_id: string }
        Returns: number
      }
      is_current_user_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      batch_status: "disponible" | "reservado" | "recogido" | "cancelado"
      item_type: "lote" | "producto"
      order_status: "pendiente" | "aceptada" | "completada" | "cancelada"
      roa_type:
        | "cascara_fruta"
        | "posos_cafe"
        | "restos_vegetales"
        | "cascara_huevo"
        | "restos_cereales"
        | "otros"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      batch_status: ["disponible", "reservado", "recogido", "cancelado"],
      item_type: ["lote", "producto"],
      order_status: ["pendiente", "aceptada", "completada", "cancelada"],
      roa_type: [
        "cascara_fruta",
        "posos_cafe",
        "restos_vegetales",
        "cascara_huevo",
        "restos_cereales",
        "otros",
      ],
    },
  },
} as const
